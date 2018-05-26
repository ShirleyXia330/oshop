import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        console.log("returnUrl:",returnUrl);
        if (returnUrl!='') {
          router.navigateByUrl(returnUrl);
          localStorage.setItem('returnUrl', '');
        }
      }
    });
    // auth.appUser$.subscribe(user => {
    //   console.log("user: ",user);
    // })
  }
}