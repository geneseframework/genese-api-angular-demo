import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from './services/book.service';
import { GetAllResponse } from '../generic/services/generic-data.service';
import { Book } from './models/book.model';
import { CreateBookDTO } from './dto/create-book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('custom path')
@Controller('custom-path')
export class BookCustomController {
    constructor(private booksService: BookService) { }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId, @Query() params) {
        const book = await this.booksService.getOne(bookId, params);
        return book;
    }

    @Get()
    async getBooks(@Query() params): Promise<GetAllResponse<Book> | Book[]> {
        let books = [];
        if (params && params.pSize) {
            books = await this.booksService.getAllWithPagination(params);
        } else {
            books = await this.booksService.getAll(params);
        }
        return books;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete(':bookId')
    async deleteBook(@Param('bookId') bookId) {
        const books = await this.booksService.deleteBook(bookId);
        return books;
    }
}
