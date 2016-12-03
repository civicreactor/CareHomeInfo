import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PopupService {
  constructor(private http: Http) { }

  get(id : string) {
    console.log('Serving carehome with id', id);
    return this.http.get('static/popupData.json')
      .map(response => response.json()[id]);
  }
}
