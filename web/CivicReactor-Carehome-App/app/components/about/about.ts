import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'about',
  styles: [
    `
      ul li a {
        color:blue;
        cursor:pointer;
      }
    `
  ],
  templateUrl: './components/about/about.html',
  directives: [NgFor]
})
export class AboutCmp {
}
