import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoordFromAddress {
  constructor(private http: Http) { }
  googleApi = 'http://maps.google.com/maps/api/geocode/json?address=';
  search(term: string): any {
    return this.http
    //'Amphitheatre+Parkway,+Mountain+View,+CA'
      .get(this.googleApi+term)
      .toPromise()
      .then(response =>response.json().data);
      //.catch(this.handleError)
    }
}
