import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingpageRoutingModule } from './listingpage-routing.module';
import { ListingpageComponent } from './listingpage.component';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CarouselModule, CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
  
    ListingpageComponent
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
    ListingpageRoutingModule,
    MaterialModule
  ]
})
export class ListingpageModule { }
