import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }
  @Get()
  async listing() {
    return this.bookService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
