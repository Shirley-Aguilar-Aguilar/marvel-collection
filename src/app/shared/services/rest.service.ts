import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  public host:string = environment.urlApi;
  private credential:string = "?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5";


  // obtener usuario por id
  // character
  //comics
  public getById(id:number, route:string){
    return this.http.get<any>(`${this.host}${route}${id}${this.credential}`)
  }


  // obtener producto
  public getAll(route:string){
    return this.http.get<any>(`${this.host}${route}${this.credential}`)
  }

}
