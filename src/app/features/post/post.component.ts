import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPost } from '../../../../genese/genese-api/datatypes/book-post.datatype';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { BOOKS } from '../mocks/book.mock';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public bookPost: BookPost = {title: 'Les inégalités', description: 'Description des inégalités', year: '1998'};
    public data: any[] = [];

    constructor(
        private dialog: MatDialog,
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }



    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }



    /**
     * Open modal
     */
    openModal(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '600px',
            height: '60%',
            hasBackdrop: false,
            panelClass: 'detail-part-modal'
        });

        dialogRef.afterClosed().subscribe(
            result => {
                console.log('%c Genese post() afterClosed result ', 'font-weight: bold; color: fuchsia;', result);
                if (result) {
                    this.geneseService.postBooks(this.bookPost).subscribe((response: any) => {
                        console.log('%c Genese post() response ', 'font-weight: bold; color: fuchsia;', response);
                    });
                }
                this.getData();
            },
            err => console.error(err)
        );
    }

}
