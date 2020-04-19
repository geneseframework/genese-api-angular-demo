import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../../enums/response-status';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

    public data: any[] = [];


    constructor(private readonly geneseService: GeneseRequestService) {}


    /**
     * Initializes the component
     */
    ngOnInit(): void {
        this.getData();
    }


    /**
     * Gets all the books
     */
    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                this.data = response;
            });
    }


    /**
     * Deletes a book with a given id
     * @param id
     */
    delete(id: string): void {
        this.geneseService.deleteBooksByBookId(id).subscribe((response: ResponseStatus) => {
            console.log('%c delete id ', 'font-weight: bold; color: orange;', id);
            console.log('%c Genese delete response ', 'font-weight: bold; color: orange;', response);
            this.getData();
        });
    }
}
