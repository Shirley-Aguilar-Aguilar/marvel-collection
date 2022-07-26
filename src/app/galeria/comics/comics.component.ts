import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  credential:string='?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5';
  arrayComics:any=[];

  constructor(
    private RestService:RestService
  ) { }

  ngOnInit(): void {
    this.getAll("comics");

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
      this.arrayComics=data.data.results;
      console.log(JSON.stringify(data));
    },
    error: error => {
      console.log(error);
    }
   }
   )
}

}
