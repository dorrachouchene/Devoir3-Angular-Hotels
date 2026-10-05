import { Routes } from '@angular/router';
import { Hotel } from './hotel/hotel';
import { AddHotel } from './add-hotel/add-hotel';
import { UpdateHotel } from './update-hotel/update-hotel';
export const routes: Routes = [
     { path: 'hotel', component: Hotel } ,
     { path: 'add-hotel', component: AddHotel },
     { path: '', redirectTo: 'hotel', pathMatch: 'full' },
     { path: 'updateHotel/:id', component: UpdateHotel }
];
