import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadform',
  templateUrl: './cadform.component.html',
  styleUrls: ['./cadform.component.css']
})


export class CadformComponent implements OnInit { 
  
  postData = {
    nome: "caio",
    email: 'exemplo01@gmail.com',
    senha: 'senha'
  };

  url = 'http://localhost:3000/users/cad';
  
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then(data =>{
      console.log(data);
    });
  }

  ngOnInit() { }

}

