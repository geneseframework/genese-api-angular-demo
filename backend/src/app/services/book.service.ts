import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from '../mocks/book.mock';
import { Book } from '../models/book.model';
import { GenericDataService } from '../../generic/services/generic-data.service';
import { BookPut } from '../../../../genese/genese-api/datatypes/book-put.datatype';

@Injectable()
export class BookService extends GenericDataService<Book> {
    books = BOOKS;


    /**
     * Create a new book
     * @param book
     */
    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }


    /**
     * Delete a book
     * @param bookID
     */
    deleteBook(bookID): Promise<any> {
        const id = Number(bookID);
        return new Promise(resolve => {
            const index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }
            this.books.splice(index, 1);
            resolve(this.books);
        });
    }


    /**
     * Update a book
     * @param bookID
     * @param bookPut
     */
    updateBook(bookID: string, bookPut: BookPut): Promise<any> {
        if (!bookID || !bookPut) {
            throw new HttpException('BookId or body does not exist!', 404);
        }
        const id = Number(bookID);
        return new Promise(resolve => {
            const index = this.books.findIndex(book => book.id === id);
            if (!index) {
                throw new HttpException('Book does not exist!', 404);
            }
            const updatedBook = bookPut as Book;
            updatedBook.id = this.books[index].id;
            this.books[index] = updatedBook;
            resolve(updatedBook);
        });
    }



    getNewId(): number {
        const newId = Math.max(...this.books.map(e => e.id)) + 1;
        console.log('newId', newId);
        return newId;
    }
}

