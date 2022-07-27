import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '', component: HeaderNavComponent,
    children: [
      { path: 'characters', component: CharactersComponent},
      { path: 'comics', component: ComicsComponent},
      { path: 'series', component: SeriesComponent},
      { path: 'stories', component: StoriesComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
