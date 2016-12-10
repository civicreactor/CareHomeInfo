import {Component} from 'angular2/core';
import {NewList} from '../../services/new_list';
import {New} from '../../models/news';
import {NgFor} from 'angular2/common';
let $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');

@Component({
  selector: 'news',
  templateUrl: './components/news/news.html',
  styleUrls: ['./components/news/news.css'],
  directives: [NgFor]
})
export class NewsCmp {
  constructor(public newList: NewList) {}
  showNews(type) {
    if (type === 'all') {
      $('#news-list ul').css('display', 'inherit');
    } else {
      type = '.' + type;
      $('#news-list ul').css('display', 'none');
      $(type).css('display', 'inherit');
    }
  }
  getNews(type) {
    if (type === 'all') {
      return this.newList.news;
    }
  }
}
