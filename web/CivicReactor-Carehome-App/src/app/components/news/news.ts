import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news';

@Component({
  selector: 'news',
  templateUrl: './news.html',
  styleUrls: ['./news.scss']
})

export class NewsCmp implements OnInit {
  constructor(public newsService: NewsService) {}
  news;
  allNews;
  activeButton = 'all';

  ngOnInit() {
    this.getNews();  
  }
  getNews() {
    this.newsService.get()
      .subscribe(
        news => this.allNews = news,
        error => console.error('Error: ', error),
        () => this.news = this.allNews
      );
  }
  getFilteredNews(type) {
    if (type === "all") this.news = this.allNews;
    else {
      this.news = this.allNews.filter(function (n) {
        return n.type == type;
      })
    }
  }
  clicked(type) {
    this.getFilteredNews(type);
    this.activeButton = type;
  }
  isActive(type) {
    return this.activeButton === type;
  }   
}

