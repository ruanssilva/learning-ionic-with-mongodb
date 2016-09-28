import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repository } from '../../models/repository'
import { GithubUsers } from '../../providers/github-users/github-users'



/*
  Generated class for the UserRepositoriesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-repositories/user-repositories.html',
  providers: [ GithubUsers ]
})
export class UserRepositoriesPage {

  login: string;
  repositories: Repository[];

  constructor(private navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');

    githubUsers.searchRepositories(this.login).then(repositories => this.repositories = repositories);


  }

}
