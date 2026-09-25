import {Country} from '../../domain/model/country.entity';
import {CountryResource} from '../resources/country.resource';


export class CountryAssembler {

  toEntitiesFromResource(resources: CountryResource[]): Country[] {


    return resources.map(resource => {

      let country = new Country();

      country.id = resource.id;

      country.name = resource.name;

      country.region = resource.region;

      country.capital = resource.capital;

      country.population = resource.population;

      country.abbreviation = resource.abbreviation;

      country.flag = resource.media.flag;

      country.emblem = resource.media.emblem;


      return country;
    });

  }
}
