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
  
  genId(publications: Publication[]): number {
    return publications.length > 0 ? Math.max(...publications.map(hero => hero.id)) + 1 : 11;
  }

}
