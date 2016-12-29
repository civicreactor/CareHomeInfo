import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutCmp {
  bdev = 'Back End Developer'
  fdev = 'Front End Developer'
  scrum = 'Scrum Master'
  lead = 'Leader of the Pack'
  d = 'Dean'
  c = 'Carlos'
  a = 'Anna'
  an = 'Antonio'
  co = 'Colin'
  o = 'Olivia'
}
