import { Component } from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { ViewController, NavController, NavParams, Modal, Events } from 'ionic-angular';

/*
  Generated class for the AddPersonPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-person/add-person.html',
})
export class AddPersonPage {


  form: FormGroup;
  Name: FormControl;
  Phone: FormControl;


  constructor(public view: ViewController, navParams: NavParams, formBuilder: FormBuilder) {

    // this.form = formBuilder.group({
    //     'Name': ['xx', Validators.required],
    //     'Phone': ['xx', Validators.required]
    // });

    this.form = new FormGroup({
    });


    this.Name = new FormControl("", Validators.required);
    this.Phone = new FormControl("", Validators.required);

    this.form.addControl("Name", this.Name);
    this.form.addControl("Phone", this.Phone);

    console.log(this.form);


  }

  

  submit() {
    if (this.form.valid) {
      let person = {
        name: this.Name.value,
        phone: this.Phone.value
      }
      this.view.dismiss(person);
    }
  }

  cancel(): void {
    this.view.dismiss();
  }

}
