import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  showIcons: boolean = false;  

  constructor(private router : Router, private authService: AuthenticationService ){
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    })
  }

  ngOnInit() {    
    this.showIcons = true
  }

  togglePasswordVisibility(){    
    this.showIcons = !this.showIcons;
  }

  onSubmit() {
    if (this.form.valid) {
      // Call getSessionId first
      this.authService.getSessionId().subscribe(sessionIdResponse => {
        const sessionId = sessionIdResponse.sessionId;

        // Check if sessionId is not null or empty
        if (sessionId) {
          const username = this.form.get('userid')?.value;
          const password = this.form.get('password')?.value;
          const rememberMe = this.form.get('rememberMe')?.value;

          const clientType = 'P'; // Adjust as needed
          const isFirstLogin = true; // Adjust as needed

          const credentials = {
            i__UserName: username,
            i__Password: password,
            i__ClientType: clientType,
            i__IsFirstLogin: isFirstLogin.toString(),
            sessionId: sessionId // Add sessionId to the credentials
          };

          // Call authenticate method with updated credentials
          this.authService.checkCredentials(credentials).subscribe(authResponse => {
            // Handle successful authentication response
            alert('Authentication successful: ' + authResponse);
            if (rememberMe) {
              sessionStorage.setItem('Username', username);
            }
            // Redirect or handle as needed
          }, error => {
            // Handle authentication error
            alert('Authentication error: ' + error);
          });

        } else {
          alert('Session ID is null');
        }
      }, error => {
        // Handle getSessionId error
        alert('Error fetching session ID: ' + error);
      });

    } else {
      this.form.markAllAsTouched();
    }
  }
}
