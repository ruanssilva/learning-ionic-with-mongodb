import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Person } from '../../providers/person/person';

import { AddPersonPage } from '../add-person/add-person';

/*
  Generated class for the PersonPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/person/person.html',
})
export class PersonPage {

  people: Array<any>;
  people_copy: Array<any>;
  search: String;

  showSearchBar: boolean = false;


  constructor(private navCtrl: NavController, private personService: Person, private modalController: ModalController) {

    this.load();

  }

  load() {
    this.personService.get().then((data) => {
      console.log(data);
      this.people = this.people_copy = data;
    });
  }

  teste(event) {

    let filter = event.target.value;

    this.people = this.people_copy;
    if (filter != null) {
      this.people = this.people.filter(f => {
        return f.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;

      });
    }
  }

  add() {


    let modal = this.modalController.create(AddPersonPage);
    modal.onDidDismiss(person => {
      if (person) {
        this.personService.create(person).then((data) => {
          this.people = this.people_copy = <any>data;
        });
      }
    });

    modal.present();

  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  delete(person) {
    this.personService.delete(person).then((data) => {
      this.people = <any>data;
    });
  }

}
