import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      if (!user) return;
      
      userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');
      if(!returnUrl) return;

      router.navigateByUrl(returnUrl);
      localStorage.removeItem('returnUrl');
    });
    // auth.appUser$.subscribe(user => {
    //   console.log("user: ",user);
    // })
  }
}