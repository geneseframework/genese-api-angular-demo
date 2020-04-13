import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-get-all',
    templateUrl: './get-all.component.html',
    styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

    public data: any[] = [];


    constructor(
        private geneseService: GeneseRequestService,
    ) {}


    /**
     * Initializes component and calls the getOne method
     */
    ngOnInit(): void {
        this.getData();
    }


    /**
     * Gets all books for a given id
     */
    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                console.log('%c getAll() response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }
}
