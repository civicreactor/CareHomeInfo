import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewsService {
  constructor(private http: Http) { }

  get() {
    console.log('Serving news.json');
    return this.http.get('assets/news.json')
      .map(response => response.json());
  }
}
