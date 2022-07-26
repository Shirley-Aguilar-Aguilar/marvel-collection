import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserToLogin} from "../interfaces/user";


export class UserService {
  constructor(private http: HttpClient) { }
  token = sessionStorage.getItem('token');

    httpOptions = () => (
    { headers: new HttpHeaders (
        {
          'Content-Type': 'application/json',
          'access-token': `${this.token}`,
        })
    });

  public login = (url:string, data:any) => this.http.post(`${environment.API_URI}/${url}`,data, this.httpOptions());
}
