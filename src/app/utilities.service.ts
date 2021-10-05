import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  // id generator.
  idGenerator() {
    var i, randomNumber;
    var id = '';
    for (i = 0; i < 19; i++) {
      randomNumber = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        id += '-';
      }
      id += (
        i === 12 ? 4 : i === 16 ? (randomNumber & 3) | 8 : randomNumber
      ).toString(16);
    }
    return id;
  }
}
