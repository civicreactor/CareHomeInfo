import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news';

let $ = require('jquery/dist/jquery.min.js');

@Component({
  selector: 'news',
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})
export class NewsCmp implements OnInit {
  constructor(public newsService: NewsService) {}
  news;

  ngOnInit() {
    this.getNews()
  }

  showNews(type) {
    if (type === 'all') {
      $('#news-list ul').css('display', 'inherit');
    } else {
      type = '.' + type;
      $('#news-list ul').css('display', 'none');
      $(type).css('display', 'inherit');
    }
  }
  getNews() {
    this.newsService.get()
      .subscribe(
        news => this.news = news,
        error => console.error('Error:', error),
        () => console.log(this.news)
      );
  }
}
