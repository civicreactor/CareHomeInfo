import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

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
  templateUrl: './about.html'
})
export class AboutCmp {
}
