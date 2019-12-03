import { Country } from './../../models/country';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { CountryService } from './../../services/country.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formG: FormGroup;
  user: User = new User();
  countryList: Country[];

  constructor(
    private formB: FormBuilder,
    private userService: UserService,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCountries();
  }

  buildForm() {
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      pws: [null, Validators.required],
      country: null
    });
  }

  saveUser() {
    this.user.name = this.formG.get('name').value;
    this.user.lastName = this.formG.get('lastName').value;
    this.user.username = this.formG.get('username').value;
    this.user.pws = this.formG.get('pws').value;
    this.user.countryId = this.formG.get('country').value;

    this.userService.save(this.user).subscribe(
      data => {
        console.log('Se guardo el usuario', data);
      },
      error => {
        console.log('error guardando el usuario', error);
      }
    );
  }

  getCountries() {
    this.countryService.getAll().subscribe(
      data => {
        this.countryList = data;
      },
      error => {
        console.log('error get countries', error);
      }
    );
  }

}
