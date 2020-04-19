import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { Genese, GeneseService, GetAllResponse } from 'genese-angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { homeEnv } from '../../features/homeEnv';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements AfterViewInit, OnChanges, OnInit {


    @Input() data: any[] = [];
    @Input() actionButtons: string[] = [];
    @Output() delete: EventEmitter<string> = new EventEmitter<any>();
    @Output() update: EventEmitter<string> = new EventEmitter<any>();

    public booksGenese: Genese<Book>;
    public dataSource = new MatTableDataSource<Book>();
    public displayedColumns: string[] = [];
    public emptyList = true;
    public pageIndex = 0;
    public pageSize = 5;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


    constructor(private readonly geneseService: GeneseService) {
        this.booksGenese = geneseService.getGeneseInstance(Book);
    }



    /**
     * Component initialization
     */
    // TODO : add paginator
    ngOnInit(): void {
        // this.paginator.pageIndex = this.pageIndex;
        // this.paginator.pageSize = this.pageSize;
        this.getAll();
    }


    /**
     * Updates data when parent component changed
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            this.getAll();
        }
    }


    /**
     * Updates pagination after view init
     */
    // TODO : add paginator
    ngAfterViewInit(): void {
        // this.paginator.page
        //     .pipe(
        //         tap(() => this.getAllWithPagination())
        //     )
        //     .subscribe();
    }


    /**
     * Emits the delete event
     * @param id
     */
    deleteElement(id: string): void {
        this.delete.emit(id);
    }


    /**
     * Emits the update event
     * @param id
     */
    updateElement(id: string): void {
        this.update.emit(id);
    }


    /**
     * Gets all books
     */
    getAll(): void {
        this.displayedColumns = ['id', 'author', 'title', 'description', 'actions'];
        if (Array.isArray(this.data)) {
            this.displayMatTableDataSource({results: this.data, totalResults: this.data.length});
        }
    }


    /**
     * Gets all books with pagination
     */
    getAllWithPagination(): void {
        this.displayedColumns = ['id', 'author', 'title', 'description', 'actions'];
        this.booksGenese
            .getAllWithPagination(
                homeEnv.path,
                {
                    pageIndex: this.paginator.pageIndex,
                    pageSize: this.paginator.pageSize
                })
            .subscribe((response: {results: Book[], totalResults: number}) => {
                console.log('%c getAllWithPagination response ', 'font-weight: bold; color: orange;', response);
                this.displayMatTableDataSource(response);
            });
    }


    /**
     * Displays data list in a MatTable with pagination
     * @param data
     */
    // TODO : add paginator
    displayMatTableDataSource(data: GetAllResponse<Book>) {
        this.dataSource = data && Array.isArray(data.results) ? new MatTableDataSource(data.results) : new MatTableDataSource([]);
        // this.paginator.length = data && data.totalResults ? data.totalResults : 0;
        // this.emptyList = this.paginator.length === 0;
    }


    buttonDisplayed(action = ''): boolean {
        return this.actionButtons?.includes(action);
    }

}
