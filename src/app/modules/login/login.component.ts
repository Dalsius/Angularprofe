import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from './../../models/user';

import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isLogin = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  setUser() {
    console.log('user', this.user);
  }

  getUser() {
    this.userService.getAll().subscribe(
      data => {
        console.log('los datos son: ', data);

        if (data.find(f => f.name === this.user.name && f.pws === this.user.pws)) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }

        console.log('isLogin: ', this.isLogin);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onSubmit() {
    this.authenticationService.login(this.user.username, this.user.pws)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            localStorage.setItem('userName', data.name + ' ' + data.lastName);
          }

          this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
        },
        error => {
          console.log('error', error);
        }
      );
  }
}
