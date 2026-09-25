import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CountryList} from './countries/presentation/components/country-list/country-list';


@Component({
  selector: 'app-root',
  imports: [
    CountryList
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {

}
