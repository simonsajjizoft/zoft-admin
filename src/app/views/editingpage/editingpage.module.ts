import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditingpageComponent } from './editingpage.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CarouselModule, CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { WidgetsModule } from '../widgets/widgets.module';
import { MaterialModule } from '../../material/material.module';
import { EditingpageRoutingModule } from './editingpage-routing.module';


@NgModule({
  declarations: [
    EditingpageComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
    FormsModule,
    CKEditorModule,
    EditingpageRoutingModule,
    MaterialModule
  ]
})
export class EditingpageModule { }
