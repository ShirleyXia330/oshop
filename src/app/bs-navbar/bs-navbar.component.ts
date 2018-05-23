import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  constructor(public auth: AuthService) { //why it should not be private???
    // afAuth.authState.subscribe(user => { this.user = user });
  }

  logout() {
    this.auth.logoout();
  }

}
