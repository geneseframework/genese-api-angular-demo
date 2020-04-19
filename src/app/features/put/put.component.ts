import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-post',
    templateUrl: './put.component.html',
    styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {


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
}
