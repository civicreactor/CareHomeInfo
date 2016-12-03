import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostcodeService {
  constructor(private http: Http) { }

  get(postcode:string) {
    console.log('Serving coordinates for',postcode);
    return this.http.get('static/outer.json')
      .map(response => response.json()[postcode]);
  }
}
