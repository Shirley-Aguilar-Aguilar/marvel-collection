import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { RestService } from '../shared/services/rest.service';
import { UserService } from '../shared/services/user.service';


@NgModule({
  declarations: [
    ComicsComponent,
    CharactersComponent,
    SeriesComponent,
    StoriesComponent
  ],
  imports: [
    GalleryRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [RestService, UserService]
})
export class GalleryModule { }
