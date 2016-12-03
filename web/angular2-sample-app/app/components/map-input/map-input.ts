import {Component, Input} from 'angular2/core';
import {PostcodeService} from '../../services/postcode';



declare let L: any;
@Component({
  selector: 'map-input',
  templateUrl: './components/map-input/map-input.html',
  styleUrls: ['./components/map-input/map-input.css']
})

export class MapInputCmp {
  constructor(public postcodeService: PostcodeService) {}
  @Input() mymap;

  setView(postcode : string) {
    var coordinates;
    postcode = postcode.toUpperCase();
    this.postcodeService.get(postcode)
      .subscribe(
        data => coordinates = data,
        error => console.error('Error:', error),
        () => this.mymap.setView(coordinates, 13)
      );
  }
}
