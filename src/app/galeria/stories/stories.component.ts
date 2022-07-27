import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  arrayStories:any=[];
  credential:string='?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5';
  constructor(
    private RestService:RestService,
  ) { }

  ngOnInit(): void {
    this.getAll('stories')
  }

 public getAll(route:string){
    this.RestService.getAll(route)
    .subscribe({
     next: data => {
     console.log("data get all");
      console.log(data.data.results);
      this.arrayStories=data.data.results;
     },
     error: error => {
      console.log(error);
     }
    })
  }

}
