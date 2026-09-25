import {inject, Injectable, Service} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {Country} from '../../domain/model/country.entity';
import {CountryAssembler} from '../assemblers/country.assembler';
import {CountryResource} from '../resources/country.resource';

@Injectable({
  providedIn: 'root',
})

export class CountryApiService {
  private http = inject(HttpClient);
  private CountryAssembler = inject(CountryAssembler);
  private baseUrl =  'https://api.sampleapis.com/countries/countries';


  getCountries(): Observable<Country[]> {


    return this.http.get<CountryResource[]>(this.baseUrl).pipe(

    map(response => this.CountryAssembler.toEntitiesFromResource(response)
    )

);

  }
}
