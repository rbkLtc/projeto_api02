import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tabelal',
  templateUrl: './tabelal.component.html',
  styleUrls: ['./tabelal.component.css']
})
export class TabelalComponent implements OnInit {

  livros: any;
  constructor(private bookService: BookService) {   }
  
  ngOnInit() {
    this.bookService.getBooks().subscribe(
    (data) =>{this.livros = data
    console.log(data)});
    }
}