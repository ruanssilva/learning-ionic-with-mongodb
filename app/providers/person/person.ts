import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Person provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Person {

  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  get() {
    if (this.data)
      return Promise.resolve(this.data);
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/person')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  create(person) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve) => {
      this.http.post('http://localhost:8080/api/person', JSON.stringify(person), { headers: headers })
        .map((res) => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  delete(person) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return new Promise((resolve) => {
      this.http.delete('http://localhost:8080/api/person/' + person._id)
        .map((res) => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}

