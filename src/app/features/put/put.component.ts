import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../enums/response-status';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPut } from '../../../../genese/genese-api/datatypes/book-put.datatype';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-post',
    templateUrl: './put.component.html',
    styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {


    public bookPut: BookPut = {title: 'The capital', description: 'Karl Marx economic theory'};
    public data: any[] = [];


    constructor(
        private dialog: MatDialog,
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }



    /**
     * Open modal
     */
    openModal(id: string): void {
        this.geneseService.getBooksByBookId(id).subscribe((book: Book) => {
            this.dialog.open(ModalComponent, {
                    width: '600px',
                    height: '60%',
                    hasBackdrop: false,
                    panelClass: 'detail-part-modal',
                    data: {book, mode: 'put'}
                })
                .afterClosed().subscribe(
                () => {
                    this.getData();
                },
                err => console.error(err)
            );
        });
    }


    put(id: string): void {
        console.log('%c Genese put id', 'font-weight: bold; color: fuchsia;', id);
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
