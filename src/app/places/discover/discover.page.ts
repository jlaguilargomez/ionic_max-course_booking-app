import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.module';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  constructor(private _placesService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this._placesService.places;
  }

  onSelectPlace(index: number) {
    const selectedPlace = this.loadedPlaces[index + 1];
    this.loadedPlaces.splice(index + 1, 1);
    this.loadedPlaces.unshift(selectedPlace);
  }
}
