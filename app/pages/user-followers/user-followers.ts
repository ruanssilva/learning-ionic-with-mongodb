import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from '../../models/user';

/*
  Generated class for the UserFollowersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-followers/user-followers.html',
  providers: [GithubUsers]
})
export class UserFollowersPage {

  login: string;
  users: User[];

  constructor(private navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    
    githubUsers.searchFollowers(this.login).then(users => this.users = users);

  }

}
