import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
   
   }
   getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders ()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeadervalue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams() 
      .set('option',cityName)
      .set('units','metrics')
      .set('mode','json')
    })

  }
}
