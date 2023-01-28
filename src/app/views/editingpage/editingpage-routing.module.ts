import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingpageComponent } from './editingpage.component';


const routes: Routes = [
  {
    path: '',
    component: EditingpageComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditingpageRoutingModule { }
