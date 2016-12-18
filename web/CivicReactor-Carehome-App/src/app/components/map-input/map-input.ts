import {Component, Input} from '@angular/core';
import {PostcodeService} from '../../services/postcode';



declare let L: any;
@Component({
  selector: 'map-input',
  templateUrl: './map-input.html',
  styleUrls: ['./map-input.scss']
})

export class MapInputCmp {
  constructor(public postcodeService: PostcodeService) {}
  @Input() mymap;

  setView(postcode : string) {
    var coordinates;
    this.postcodeService.get(postcode)
      .subscribe(
        data => coordinates = data,
        error => console.error('Error:', error),
        () => this.mymap.setView(coordinates, 13)
      );
  }
}
