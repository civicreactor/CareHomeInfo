import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PopupService {
  constructor(private http: Http) { }

  get(id : string) {
    console.log('Serving carehome with id', id);
    if (environment.production) {
      return this.http.get(environment.POPUPS + id)
      .map(response => response.json());
    } else {
      return this.http.get(environment.POPUPS)
      .map(response => response.json()[id]);
    }
  }
}
