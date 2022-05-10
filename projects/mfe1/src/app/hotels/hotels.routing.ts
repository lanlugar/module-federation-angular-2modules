import { Routes } from '@angular/router';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

export const HOTELS_ROUTES: Routes = [
    {
      path: 'hotels-search',
      component: HotelSearchComponent,
      pathMatch: 'full'
    }
];
