import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingpageComponent } from './listingpage.component';

const routes: Routes = [
  {
    path: '',
    component: ListingpageComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingpageRoutingModule { }
