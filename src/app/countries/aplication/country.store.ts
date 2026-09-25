import {computed, inject, Service, signal} from '@angular/core';

import {Country} from '../domain/model/country.entity';
import {CountryApiService}  from '../infrastructure/services/country-api.services';


@Service()
export class CountriesStore {


  private countriesSignal = signal<Country[]>([]);


  private countryApi = inject(CountryApiService);



  readonly countries = computed(() =>
    this.countriesSignal()
  );



  loadCountries() {

    if (this.countriesSignal().length === 0) {

      this.countryApi
        .getCountries()
        .subscribe(countries => {

          this.countriesSignal.set(countries);

        });

    }

  }


}
