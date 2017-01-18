import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news';

@Component({
  selector: 'news',
  templateUrl: './news.html',
  styleUrls: ['./news.scss']
})
export class NewsCmp implements OnInit {
  constructor(public newsService: NewsService) {}
  news = [];

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.newsService.get()
      .subscribe(
        news => this.news = news,
        error => console.error('Error: ', error),
        () => console.log(this.news)
      );
  }
  getFilteredNews(type) {
    this.newsService.get()
    .subscribe(
      news => this.news = news.filter(function (n) {
      return n.type == type;
    }),
    error => console.error('Error: ', error),
    () => console.log(this.news)
    );
  }
}

