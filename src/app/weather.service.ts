import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {




  constructor(private http: HttpClient) { }

  getCities(city: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', city);
    params = params.append('appid', '76d1b43ba3695cfae59aa9f7dc9b4877');
    params = params.append('units', 'metric');
    return this.http.get('http://api.openweathermap.org/data/2.5/find', {params});
  }
}
