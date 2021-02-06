import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})


export class LoginboxComponent implements OnInit { 
  
  postData = {
    email: 'exemplo@gmail.com',
    senha: 'senha'
  };

  url = 'http://localhost:3000/users/login';
  
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then(data =>{
      console.log(data);
    });
  }

  ngOnInit() { }

}

