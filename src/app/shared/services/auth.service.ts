import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; //import evertything
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user$ = afAuth.authState; //This pipe will automatically unsubscribe from the Observable.
  }

  googleLogin() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        return firebase.auth().signInWithPopup(provider).then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;
        });
        // return firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      })
      .catch(error => console.log(error));
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  registerWithEmail(email: string, password: string) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
 
  loginWithEmail(email: string, password: string) {  
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);
        return Observable.of(null);
      });
  }
}
