import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //{ path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  // below path for using lazy loading module
 // {path: 'rooms', loadChildren:() => import('./rooms/rooms.module').then(rm=> rm.RoomsModule), canActivate: [LoginGuard]},
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
 // { path: 'login', component: LoginComponent},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
 // canActivate: [LoginGuard] 
},
  { path: '**', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
