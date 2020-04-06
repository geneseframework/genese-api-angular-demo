import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneseRequestService } from '../../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../../genese/genese-api/datatypes/book.datatype';
import { BookPut } from '../../../../../genese/genese-api/datatypes/book-put.datatype';

@Component({
    selector: 'app-part-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


    public mode = 'creation';
    public book: Book = {};


    constructor(@Inject(MAT_DIALOG_DATA) data: { book: Book, mode: string },
                private dialogRef: MatDialogRef<ModalComponent>,
                private geneseService: GeneseRequestService) {
    }



    /**
     * Component initialization
     */
    ngOnInit() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.prepend(overlay);
        this.getBook();
    }


    /**
     * Get book
     */
    getBook(id = '') {
        this.geneseService.getBooksByBookId(id).subscribe((book) => {
            // TODO : Implement for updates
            // console.log('%c book', 'font-weight: bold; color: blue;', book);
        });
    }


    /**
     * Modal validation
     */
    validModal() {
        if (this.mode === 'creation') {
            this.geneseService.postBooks(this.book)
                .subscribe((book: Book) => {
                    console.log('%c Genese post() book response : ', 'font-weight: bold; color: green;', book);
                    this.removeOverlay();
                    this.dialogRef.close(book);
                }, err => console.error(err));
        } else {
            this.geneseService.putBooksByBookId({
                    title: this.book.title,
                    description: this.book.description
                })
                .subscribe(() => {
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
