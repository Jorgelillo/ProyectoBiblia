import { ServiceOneService } from './../../services/service-one.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/model01/model-one';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.less']
})
export class ComponentOneComponent implements OnInit {

  countryList: Array<Country>;

  constructor(private serviceOneService: ServiceOneService) { }

  ngOnInit() {
    this.countryList = this.serviceOneService.getCountries();
  }

}
