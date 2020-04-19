import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public data: any[] = [];

    constructor(
        private readonly dialog: MatDialog,
        private readonly geneseService: GeneseRequestService,
    ) {}


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
     * Opens creation modal
     */
    openModal(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '600px',
            height: '60%',
            hasBackdrop: false,
            panelClass: 'detail-part-modal',
            data: {mode: 'post'}
        });

        dialogRef.afterClosed().subscribe(
            () => {
                this.getData();
            },
            err => console.error(err)
        );
    }

}
