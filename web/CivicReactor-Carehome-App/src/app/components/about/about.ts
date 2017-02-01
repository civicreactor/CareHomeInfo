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
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    },
    {
      name: "Dean",
      role: "Front-end developer",
      img: "",
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    },
    {
      name: "Carlos",
      role: "Front-end developer",
      img: "assets/imgs/carlos_avatar.jpg",
      description: "sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds sad sada sds "
    }
  ];
}
