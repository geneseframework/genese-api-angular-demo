import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneseRequestService } from '../../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../../genese/genese-api/datatypes/book.datatype';
import { BookPut } from '../../../../../genese/genese-api/datatypes/book-put.datatype';
import { BookPostResponse } from '../../../../../genese/genese-api/datatypes/book-post-response.datatype';

@Component({
    selector: 'app-part-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


    public book: Book = {};
    public mode = 'post';


    constructor(@Inject(MAT_DIALOG_DATA) data: { book: Book, mode: string },
                private dialogRef: MatDialogRef<ModalComponent>,
                private geneseService: GeneseRequestService) {
        this.book = data?.book ?? {};
        this.mode = data?.mode;
    }



    /**
     * Component initialization
     */
    ngOnInit() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.prepend(overlay);
    }



    /**
     * Modal validation
     */
    validModal() {
        if (this.mode === 'post') {
            this.geneseService.postBooks(this.book)
                .subscribe((bookPostResponse: BookPostResponse) => {
                    console.log('%c Genese post() bookPostResponse response : ', 'font-weight: bold; color: green;', bookPostResponse);
                    this.removeOverlay();
                    this.dialogRef.close(bookPostResponse);
                }, err => console.error(err));
        } else {
            this.geneseService.putBooksByBookId({
                    title: this.book.title,
                    description: this.book.description
                }, this.book.id.toString())
                .subscribe(() => {
                    console.log('%c Genese put() book response : ', 'font-weight: bold; color: lime;', 'ok');
                    this.removeOverlay();
                    this.dialogRef.close(true);
                }, err => console.error(err));
        }
    }



    /**
     * Close modal without saving
     */
    closeModal() {
        this.removeOverlay();
        this.dialogRef.close();
    }



    /**
     * Remove overlay
     */
    removeOverlay(): void {
        document.body.firstChild.remove();
    }
}
