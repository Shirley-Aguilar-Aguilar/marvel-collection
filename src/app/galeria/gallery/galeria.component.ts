import { Component, OnInit } from '@angular/core';
import { RestService } from '../../shared/services/rest.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    // this.getCharacterById(1011334,"comics/");
    this.getAll("characters");
   // this.getAll("comics");
/*     this.getAll("events");
    this.getAll("series");
    this.getAll("stories"); */
  }

  public getCharacterById(id:number, route:string){
     this.RestService.getById(id, route)
     .subscribe({
      next: data => {
        console.log(data);
        console.log(JSON.stringify(data));

      },
      error: error => {
        console.log(error);
      }
     }
     )
  }

  public getAll(route:string){
    this.RestService.getAll(route)
    .subscribe({
     next: data => {
      console.log("data get all");
       console.log(data.data.results);
       console.log(JSON.stringify(data));
     },
     error: error => {
       console.log(error);
     }
    }
    )
 }


}
