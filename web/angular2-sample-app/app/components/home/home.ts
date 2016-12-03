import {Component} from 'angular2/core';
import {MapCmp} from '../map/map';
import {MapInputCmp} from '../map-input/map-input';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [ MapCmp, MapInputCmp]
})
export class HomeCmp {
  mymap;
  onMap(mymap) {
    this.mymap = mymap;
  }
}
