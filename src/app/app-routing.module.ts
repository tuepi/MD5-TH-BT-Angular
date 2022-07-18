import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {PetComponent} from "./pet/pet.component";
import {TimelinesComponent} from "./timelines/timelines.component";

const routes: Routes = [
  {
    path : '',
    component : CalculatorComponent
  },
  {
    path : 'pet',
    component : PetComponent
  },
  {
    path: 'timelines',
    component: TimelinesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
