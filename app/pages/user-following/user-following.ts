import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from '../../models/user';

/*
  Generated class for the UserFollowingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-following/user-following.html',
  providers: [GithubUsers]
})
export class UserFollowingPage {

  login: string;
  users: User[];

  constructor(private navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    
    githubUsers.searchFollowing(this.login).then(users => this.users = users);

  }

}
