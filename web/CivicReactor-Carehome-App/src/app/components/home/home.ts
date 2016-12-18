import {Component} from '@angular/core';
import {MapCmp} from '../map/map';
import {MapInputCmp} from '../map-input/map-input';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeCmp {
  mymap;
  onMap(mymap) {
    this.mymap = mymap;
  }
}
