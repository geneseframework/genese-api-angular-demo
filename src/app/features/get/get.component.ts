import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-get',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {


    constructor(private readonly geneseService: GeneseRequestService) {}


    /**
     * Initializes component and calls the getOne method
     */
    ngOnInit(): void {
        this.getOne('1');
    }


    /**
     * Gets one book for a given id
     * @param id
     */
    getOne(id: string): void {
        this.geneseService.getBooksByBookId(id).subscribe((book: Book) => {
            console.log('%c get() response ', 'font-weight: bold; color: green;', book);
        });
    }
}
