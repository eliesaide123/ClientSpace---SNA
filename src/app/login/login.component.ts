import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { catchError, tap } from 'rxjs';
import { login } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showIcons: boolean = false;
  sessionId: string = "";

  constructor(private router: Router, private authService: AuthenticationService, private store: Store) {
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    })
  }

  ngOnInit() {
    this.showIcons = true;
    this.authService.getSessionId()
      .pipe(
        tap(sessionIdResponse => {
          debugger
          this.sessionId = sessionIdResponse.sessionId;
        }),
        catchError(err => {
          console.error("Failed to get session ID: " + err);
          return err;
        })
      )
      .subscribe(
        () => alert("Session ID: " + this.sessionId)
      )
  }

  togglePasswordVisibility() {
    this.showIcons = !this.showIcons;
  }

  onSubmit() {
    if (this.form.valid) {
      // Check if sessionId is not null or empty
      if (this.sessionId) {
        const username = this.form.get('userid')?.value;
        const password = this.form.get('password')?.value;
        const rememberMe = this.form.get('rememberMe')?.value;

        const clientType = 'P'; // Adjust as needed
        const isFirstLogin = false; // Adjust as needed

        const credentials = {
          i__UserName: username,
          i__Password: password,
          i__ClientType: clientType,
          i__IsFirstLogin: isFirstLogin.toString(),
          sessionId: this.sessionId
        };

        this.authService.checkCredentials(credentials)
          .pipe(
            tap(AuthResponse => {
              debugger
              this.store.dispatch(login({ AuthResponse }))
              alert('Authentication successful: ' + AuthResponse.user.isAuthenticated);
              if (rememberMe) {
                sessionStorage.setItem('Username', username);
              }
              if (AuthResponse.user.isAuthenticated) {
                if (AuthResponse.user.isFirstLogin) {
                  // this should route us to profile component
                  alert("Go To Profile")
                } else {
                  this.router.navigateByUrl('/profile')
                }
              }
            }),
            catchError(err => {
              console.error("Failed to login: " + err)
              return err;
            })
          )
          .subscribe(
            () => alert("Login Success")
          )
      } else {
        alert('Session ID is null');
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}

