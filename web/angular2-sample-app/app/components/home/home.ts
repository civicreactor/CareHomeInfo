import {Component} from 'angular2/core';
import {MapCmp} from '../map/map';
@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [ MapCmp ]
})
export class HomeCmp {}
