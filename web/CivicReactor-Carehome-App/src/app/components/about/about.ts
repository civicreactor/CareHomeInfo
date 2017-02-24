import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutCmp {
  defaultPicture = "http://wearesmile.com/assets/themes/s5/img/logo.png";
  team = [
    {
      name: "Olivia",
      role: "Front-end developer",
      img: "assets/imgs/olivia_avatar.jpg",
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    },
    {
      name: "Colin",
      role: "Front-end developer",
      img: "assets/imgs/colin_avatar.jpg",
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    },
    {
      name: "Anna",
      role: "Front-end developer",
      img: "",
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    },
    {
      name: "Antonio",
      role: "Front-end developer",
      img: "",
      description: "Tech team, build and Junior developer."
    },
    {
      name: "Dean",
      role: "Full Stack Ruby Developer",
      img: "",
      description: "Hobby technologist and Ruby on Rails developer.  Keen to learn new languages and work on big projects in collaboration with others."
    },
    {
      name: "Carlos",
      role: "Full-stack developer",
      img: "assets/imgs/carlos_avatar.jpg",
      description: "JavaScript and Java developer during the day. Enjoy learning new things: Angular2, task runners, functional programming, algorithms and... days are short!"
    }
  ];
}
