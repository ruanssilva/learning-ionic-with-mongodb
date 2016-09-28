import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { PersonPage } from '../person/person';

/*
  Generated class for the Tabs1Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tabs-1/tabs-1.html',
})
export class Tabs1Page {

  public tab1Root1: any;
  public tab2Root1: any;
  public tab3Root1: any;

  constructor(private navCtrl: NavController) {
     this.tab1Root1 = PersonPage;
    this.tab2Root1 = PersonPage;
    // this.tab3Root1 = ContactPage;
  }

}
