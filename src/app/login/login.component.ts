import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { catchError, take, tap } from 'rxjs/operators';
import { login } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { PouchdbService } from '../PouchDB/pouchdb.service';
import { UserCredentials } from '../shared/models/UserCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showIcons: boolean = false;
  sessionId: string = "";

  constructor(private router: Router, private authService: AuthenticationService, private store: Store, private pouchdbService: PouchdbService) {
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    })
  }

  ngOnInit() {
    this.showIcons = true;
    
    this.pouchdbService.deleteAllDocuments()
    
    this.authService.getSessionId()
      .pipe(        
        tap(sessionIdResponse => {          
          this.sessionId = sessionIdResponse.sessionId;          
        }        
      ),
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
      if (this.sessionId) {
        const username = this.form.get('userid')?.value;
        const password = this.form.get('password')?.value;
        const rememberMe = this.form.get('rememberMe')?.value;

        const clientType = 'P'; // Adjust as needed
        const isFirstLogin = false; // Adjust as needed

        const credentials : UserCredentials = {
          username: username,
          password: password,
          clientType: clientType,
          isFirstLogin: isFirstLogin,
          sessionID: this.sessionId
        };

        this.authService.loginUser(credentials)
          .pipe(
            take(1),
            tap(async AuthResponse => {    
              debugger;          
              this.store.dispatch(login({ AuthResponse }))
              alert('Authentication successful: ' + AuthResponse.user.isAuthenticated);
              if (rememberMe) {
                await this.pouchdbService.addItem({
                  _id: 'SNA_DB',
                  user: username
                }).then(() => {
                  alert('User saved in PouchDB');
                }).catch(err => {
                  console.error('Failed to save user in PouchDB', err);
                });
              }
              if (AuthResponse.user.isAuthenticated) {
                if (AuthResponse.user.isFirstLogin) {
                  // this should route us to profile component
                  this.router.navigateByUrl('/profile')  
                } else {
                  this.router.navigateByUrl('/client-policies')               
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
