import {ChangeDetectionStrategy, Component, input} from '@angular/core';

import {Country} from '../../../domain/model/country.entity';


@Component({
  selector: 'app-country-item',
  imports: [],
  templateUrl: './country-item.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './country-item.css'
})
export class CountryItem {


  country = input<Country>();

}
