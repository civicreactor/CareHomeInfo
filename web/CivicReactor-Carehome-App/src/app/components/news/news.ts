import {Component, OnInit, ViewChild} from '@angular/core';
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
  
  @ViewChild('all') all;
  @ViewChild('audio') audio;
  @ViewChild('video') video;
  @ViewChild('text') text;
  @ViewChild('blog') blog;

  ngOnInit() {
    this.getNews();
    this.all.nativeElement.classList.add("highLighted");    
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
  active(type) {
    this.all.nativeElement.classList.remove("highLighted");
    this.audio.nativeElement.classList.remove("highLighted");
    this.video.nativeElement.classList.remove("highLighted");
    this.text.nativeElement.classList.remove("highLighted");
    this.blog.nativeElement.classList.remove("highLighted");
    eval("this." + type + ".nativeElement.classList.add('highLighted')");
  }
    
}

