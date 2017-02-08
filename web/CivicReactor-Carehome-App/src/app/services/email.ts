import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {
    constructor(private http: Http) { }

    send(data) {
        console.log('Sending email');
        return this.http.post("https://formspree.io/civicreactor@gmail.com", data)
            .map(response => response.json());
    }
}
