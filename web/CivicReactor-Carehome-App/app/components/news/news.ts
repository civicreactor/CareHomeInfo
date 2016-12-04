import {Component} from 'angular2/core';
import {NewList} from '../../services/new_list';
import {New} from '../../models/news';
import {NgFor} from 'angular2/common';


@Component({
  selector: 'news',
  templateUrl: './components/news/news.html',
  styleUrls: ['./components/news/news.css'],
  directives: [NgFor]
})
export class NewsCmp {
  constructor(public newList: NewList) {}
  getNews() {
    return this.newList.get();
  }
}
