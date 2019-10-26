import { COUNTRIES } from './../data/countries-data';
import { Injectable } from '@angular/core';
import { Country } from '../models/model01/model-one';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor() { }

  getCountries(): Array<Country> {
    return COUNTRIES;
  }
}
