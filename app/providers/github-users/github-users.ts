import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';
import { Repository } from '../../models/repository';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {

  githubUsers: any = null;

  constructor(private http: Http) { }

  load() {
    if (this.githubUsers) {
      // already loaded users
      return Promise.resolve(this.githubUsers);
    }

    // don't have the users yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.http.get('https://api.github.com/users')
        .map(res => <Array<User>>(res.json()))
        .subscribe(users => {
          // we've got back the raw users, now generate the core schedule users
          // and save the users for later reference
          this.githubUsers = users;
          resolve(this.githubUsers);
        });
    });
  }

  loadDetails(login: string) {
    // get the data from the api and return it as a promise
    return new Promise<User>(resolve => {
      // Change the url to match https://api.github.com/users/{username}
      this.http.get(`https://api.github.com/users/${login}`)
        .map(res => <User>(res.json()))
        .subscribe(user => {
          resolve(user);
        });
    });
  }

  searchFollowers(login: string) {
    // get the data from the api and return it as a promise
    return new Promise<Array<User>>(resolve => {
      // Change the url to match https://api.github.com/search/users?q={searchParam}
      this.http.get(`https://api.github.com/users/${ login }/followers`)
        // Cast the result into an array of users. 
        // The returned json result has an items
        // property which contains the users
        .map(res => <Array<User>>(res.json()))
        .subscribe(users => {
          resolve(users);
        });
    });
  }

  searchFollowing(login: string) {
    // get the data from the api and return it as a promise
    return new Promise<Array<User>>(resolve => {
      // Change the url to match https://api.github.com/search/users?q={searchParam}
      this.http.get(`https://api.github.com/users/${ login }/following`)
        // Cast the result into an array of users. 
        // The returned json result has an items
        // property which contains the users
        .map(res => <Array<User>>(res.json()))
        .subscribe(users => {
          resolve(users);
        });
    });
  }

  searchUsers(searchParam: string) {
    // get the data from the api and return it as a promise
    return new Promise<Array<User>>(resolve => {
      // Change the url to match https://api.github.com/search/users?q={searchParam}
      this.http.get(`https://api.github.com/search/users?q=${searchParam}`)
        // Cast the result into an array of users. 
        // The returned json result has an items
        // property which contains the users
        .map(res => <Array<User>>(res.json().items))
        .subscribe(users => {
          resolve(users);
        });
    });
  }

  searchRepositories(login: string) {
    // get the data from the api and return it as a promise
    return new Promise<Array<Repository>>(resolve => {
      // Change the url to match https://api.github.com/search/users?q={searchParam}
      this.http.get(`https://api.github.com/users/${ login }/repos`)
        // Cast the result into an array of users. 
        // The returned json result has an items
        // property which contains the users
        .map(res => <Array<Repository>>(res.json()))
        .subscribe(repositories => {
          resolve(repositories);
        });
    });
  }

}

