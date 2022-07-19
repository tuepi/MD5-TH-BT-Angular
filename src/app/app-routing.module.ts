import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {PetComponent} from "./pet/pet.component";
import {TimelinesComponent} from "./timelines/timelines.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";

const routes: Routes = [
  // {
  //   path : '',
  //   component : CalculatorComponent
  // },
  {
    path : 'pet',
    component : PetComponent
  },
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductUpdateComponent
  },
  // {
  //   path: 'product/delete/:id',
  //   component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
