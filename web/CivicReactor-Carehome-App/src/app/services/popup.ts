import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PopupService {
  constructor(private http: Http) { }

  get(id : string) {
    console.log('Serving carehome with id', id);
    return this.http.get('assets/popupData.json')
      .map(response => response.json()[id]);
  }
}
