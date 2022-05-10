import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { RouterModule } from '@angular/router';
import { HOTELS_ROUTES } from './hotels.routing';



@NgModule({
  declarations: [
    HotelSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HOTELS_ROUTES)
  ]
})
export class HotelsModule { }
