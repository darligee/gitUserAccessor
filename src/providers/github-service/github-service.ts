import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  baseUrl: String;

  constructor(public http: Http) {
    this.baseUrl = 'https://api.github.com/users/;'
  }

  getProfile(username){
    return this.http.get(this.baseUrl + username)
      .map(res => res.json());
  }
  
  getRepos(username){
    return this.http.get(this.baseUrl + username + '/repos')
      .map(res => res.json());
  }
}
