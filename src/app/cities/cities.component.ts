import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CITIES } from '../mock-cities';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city: City = {
  name: 'budapest'
  }
  cities: City[];
  constructor(private cityService: CityService) { }
  ngOnInit() {
    this.getCities();
  }
  getCities(): void {
    this.cities = this.cityService.getCities();
  }
}
