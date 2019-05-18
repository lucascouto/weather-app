import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  currentWeatherCity: any;
  forecastWeatherCity: any;
  cityName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getCurrentWeather();
    this.getForecastWeather();
    this.getCityName();
  }

  getCityName(): void {
    this.cityName = this.weatherService.getCityName();
  }

  getCurrentWeather(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.weatherService.getCurrentWeather(id).subscribe(data => {
      this.currentWeatherCity = data;
    });
  }

  getForecastWeather(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.weatherService.getForecastWeather(id).subscribe(data => {
      this.forecastWeatherCity = data['list'];
    });
  }

}
