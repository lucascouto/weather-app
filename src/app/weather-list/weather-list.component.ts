import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherCity } from '../weather-city';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  cities: any;
  city: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getCities(): void {
    this.weatherService.getCities(this.city).subscribe(data => {
      console.log(data);
      this.cities = data['list'];

    });
  }

}
