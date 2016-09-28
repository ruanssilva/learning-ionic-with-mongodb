import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { Tabs1Page } from './pages/tabs-1/tabs-1';
import { PersonPage } from './pages/person/person';

import { Person } from './providers/person/person';
import { UsersPage } from './pages/users/users';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  rootPage: any = UsersPage;
  pages: Array<{ title: string, componente: any }>;


  constructor(private platform: Platform) {

    this.pages = [
      { title: 'Person', componente: PersonPage },
      { title: 'Users', componente: UsersPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [Person]);
