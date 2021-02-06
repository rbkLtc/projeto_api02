import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  public getBooks () {
    return this.http.get(`${this.SERVER_URL}/livros`);
  }
}