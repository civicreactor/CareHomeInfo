import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: Http) { }

  get() {
    console.log('Serving news.json');
    return this.http.get(environment.NEWS)
      .map(response => response.json());
  }
}
