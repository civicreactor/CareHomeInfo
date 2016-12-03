import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarehomesService {
  constructor(private http: Http) { }

  get() {
    console.log('Serving markers.json');
    return this.http.get('static/markers.json')
      .map(response => response.json());
  }
}
