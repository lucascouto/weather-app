import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityName: string;

  constructor(private http: HttpClient) { }

  setCityName(cityName: string): void {
    this.cityName = cityName;
  }

  getCityName(): string {
    return this.cityName;
  }

  getCities(city: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', city);
    params = params.append('appid', '76d1b43ba3695cfae59aa9f7dc9b4877');
    params = params.append('units', 'metric');
    return this.http.get('http://api.openweathermap.org/data/2.5/find', {params});
  }

  getCurrentWeather(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('appid', '76d1b43ba3695cfae59aa9f7dc9b4877');
    params = params.append('units', 'metric');
    return this.http.get('http://api.openweathermap.org/data/2.5/weather', {params});
  }

  getForecastWeather(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('appid', '76d1b43ba3695cfae59aa9f7dc9b4877');
    params = params.append('units', 'metric');
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast', {params});
  }
}
