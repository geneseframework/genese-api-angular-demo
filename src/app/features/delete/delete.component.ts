import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../enums/response-status';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

    public data: any[] = [];


    constructor(
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }



    delete(id: string): void {
        console.log('%c delete id ', 'font-weight: bold; color: red;', id);
        this.geneseService.deleteBooksByBookId(id).subscribe((response: ResponseStatus) => {
            console.log('%c Genese delete response ', 'font-weight: bold; color: red;', response);
            this.getData();
        });
    }



    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }
}
