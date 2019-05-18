import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCitiesUrl();
    this.getCityName();
  }

  getCityName(): void {
    this.city = this.weatherService.getCityName();
  }

  getCities(): void {
    this.weatherService.getCities(this.city).subscribe(data => {
      console.log(data);
      this.cities = data['list'];
    });
    this.weatherService.setCityName(this.city);
  }

  getCitiesUrl(): void {
    const cityName = this.route.snapshot.paramMap.get('cityName');
    this.weatherService.getCities(cityName).subscribe(data => {
      console.log(data);
      this.cities = data['list'];
    });
    this.weatherService.setCityName(cityName);
  }
}
