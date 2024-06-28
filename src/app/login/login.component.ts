import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { catchError, take, tap } from 'rxjs/operators';
import { login } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { UserCredentials } from '../shared/models/UserCredentials';
import { BaseComponent } from '../shared/BaseComponent';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {

  form: FormGroup;
  showIcons: boolean = false;
  sessionId: string = "";

  constructor(private router: Router, private authService: AuthenticationService, private store: Store, private storageService : StorageService) {
    super();
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    })
  }

  ngOnInit() {
    this.showIcons = true;

    this.storageService.deleteAllDatabases();

    this.subscriptions.push(this.authService.getSessionId()
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
      ))      
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

        const clientType = 'P';
        const isFirstLogin = false;

        const credentials: UserCredentials = {
          username: username,
          password: password,
          clientType: clientType,
          isFirstLogin: isFirstLogin,
          sessionID: this.sessionId
        };

        this.store.dispatch(login({ credentials }));

      } else {
        alert('Session ID is null');
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}
