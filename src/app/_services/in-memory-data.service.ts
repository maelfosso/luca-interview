import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';
import { Publication } from '../_models/publication';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const publications = [];
    for (let i=0; i < 3; i++) {
      publications.push({
        id: i + 10,
        title: faker.lorem.sentence(),
        publication: faker.lorem.paragraphs()
      })
    }
    
    return { publications };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the publications array is empty,
  // the method below returns the initial number (11).
  // if the publications array is not empty, the method below returns the highest
  // hero id + 1.
  genId(publications: Publication[]): number {
    return publications.length > 0 ? Math.max(...publications.map(hero => hero.id)) + 1 : 11;
  }

}
