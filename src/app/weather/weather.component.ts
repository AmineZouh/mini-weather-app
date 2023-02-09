import { WeatherService } from './../weather.service';
import { Weather } from './../weather';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

    weather:Weather|undefined

    constructor(private weatherService:WeatherService){}

    ngOnInit(){

    }

    search(city: string) {

        this.weatherService.getWeather(city).subscribe(weather     => this.weather = weather);

    }

}
