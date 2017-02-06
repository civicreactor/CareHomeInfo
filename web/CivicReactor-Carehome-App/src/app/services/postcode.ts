import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostcodeService {
  constructor(private http: Http) { }

  get(postcode:string) {
    console.log('Serving coordinates for',postcode);
    return this.http.get('https://maps.google.com/maps/api/geocode/json?address='+postcode+',UK')
      .map(response => response.json().results[0].geometry.location);
  }
}
