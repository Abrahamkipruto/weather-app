import { Component,OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){

  }
  CityName: string='london';
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.CityName);
    this.CityName='';
  }
  OnSubmit(){
    this.getWeatherData(this.CityName);
    this.CityName='';

  }
private getWeatherData(CityName: string){
  this.weatherService.getWeatherData(CityName)
 .subscribe({
  next:(response)=>{
    this.weatherData=response;
    console.log(response);
  }
 });
}
  
}
