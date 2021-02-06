import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novolivro',
  templateUrl: './novolivro.component.html',
  styleUrls: ['./novolivro.component.css']
})
export class NovolivroComponent implements OnInit {
  
  postData = {
    titulo: "Cartas na rua",
    autor: 'Bukowski',
    ano: '1988',
    categ: 'romance'
  };

  url = 'http://localhost:3000/livros';
  
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then(data =>{
      console.log(data);
    });
  }

  ngOnInit() { }

}