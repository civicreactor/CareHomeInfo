import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class CarehomesService {
  constructor(private http: Http) { }

  get() {
    console.log('Serving markers.json');
    return this.http.get(environment.MARKERS)
      .map(response => response.json());
  }
}
