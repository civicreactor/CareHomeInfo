import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostcodeService {
  constructor(private http: Http) { }

  get(postcode:string) {
    console.log('Serving coordinates for',postcode);
    return this.http.get('assets/outer.json')
      .map(response => response.json()[postcode]);
  }
}
