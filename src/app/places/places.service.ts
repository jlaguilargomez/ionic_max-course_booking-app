import { Injectable } from '@angular/core';
import { Place } from './place.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      // tslint:disable-next-line: max-line-length
      'https://thenypost.files.wordpress.com/2019/04/17-grove-street-old-wooden-house-west-village-nyc-for-sale.jpg?quality=90&strip=all&w=618&h=410&crop=1',
      149.99
    ),
    new Place(
      'p2',
      'L Amour Toujours',
      'A romantic place in Paris',
      // tslint:disable-next-line: max-line-length
      'https://lanternandscroll.com/wp-content/uploads/2016/04/Paris-home.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      // tslint:disable-next-line: max-line-length
      'https://r-ak.bstatic.com/images/hotel/max1280x900/940/94032700.jpg',
      49.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
