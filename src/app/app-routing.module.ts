import { WeatherListComponent } from './weather-list/weather-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  {path: 'search', component: WeatherListComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'details/:id', component: WeatherDetailComponent},
  {path: 'search/:cityName', component: WeatherListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
