import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { MatDialog } from '@angular/material';
import { EmailLoginComponent } from '../email-login/email-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private auth: AuthService, 
    private dialog: MatDialog) {
   }

  googleLogin() {
    this.auth.googleLogin();
  }

  emailLogin() {
    this.dialog.open(EmailLoginComponent);
  }
}
