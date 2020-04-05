import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../../enums/response-status';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPut } from '../../../../genese/genese-api/datatypes/book-put.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './put.component.html',
    styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {


    public bookPut: BookPut = {title: 'The capital', description: 'Karl Marx economic theory'};
    public data: any[] = [];


    constructor(
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }


    put(id: string): void {
        this.geneseService.putBooksByBookId(this.bookPut).subscribe((response: ResponseStatus) => {
            console.log('%c Genese put response ', 'font-weight: bold; color: fuchsia;', response);
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
