import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent{
  email: string;
  password: string;
  formError: string;
  loginError: {name: string, message: string} = {name: "", message: ""};
  hasAccount: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    private dialogRef: MatDialog) {
      this.email = "test";
    }

  register() {
    this.formError = "";
    this.loginError = {name: "", message: ""};

    if (this.validateForm(this.email, this.password)) {
      this.authService.registerWithEmail(this.email, this.password)
      .catch(error => this.loginError = error )
    }
  }

  login() {
    this.formError = "";
    this.loginError = {name: "", message: ""};

    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
      .catch(error => this.loginError = error)
    }

    if ((!this.loginError.message) && (!this.formError)) 
      this.dialogRef.closeAll();
  }

  validateForm(email: string, password: string) {
    const EMAIL_REGEXP =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9_]+\.)+[a-zA-Z]{2,}))$/gi;
    if (!EMAIL_REGEXP.test(email)){
      this.formError = "Please input a valid email address.";      
      return false;
    }

    this.formError = "";
    return true;
  }

  switch() {
    this.hasAccount = !this.hasAccount;
    this.formError = "";
    this.loginError = {name: "", message: ""};
  }
}
