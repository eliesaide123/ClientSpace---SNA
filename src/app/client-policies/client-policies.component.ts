import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserCredentials } from '../shared/models/UserCredentials';
import { clientCredentialsSelector } from '../client-info/store/selectors';
import { exhaustMap, filter, of, switchMap, take, tap } from 'rxjs';
import { BaseComponent } from '../shared/BaseComponent';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css'
})
export class ClientPoliciesComponent extends BaseComponent implements OnInit {
  
  myCredentials: UserCredentials;
  headers: string[] = ['', '', 'Policy No', 'Contact Type', 'Inception', 'Expiry', 'Status', 'C/Y', 'Premium', 'Frequency'];
  data: any[] = [
    { policyNo: 'P123', contactType: 'Type A', inception: '2021-01-01', expiry: '2022-01-01', status: 'Active', cY: 'C', premium: 100, frequency: 'Annual' },
    { policyNo: 'P124', contactType: 'Type B', inception: '2021-02-01', expiry: '2022-02-01', status: 'Expired', cY: 'Y', premium: 200, frequency: 'Monthly' },
    // Add more data as needed
  ];

  constructor(private store: Store) {
    super()
  }

  ngOnInit() {
    this.subscriptions.push(this.store.select(clientCredentialsSelector).pipe(
      filter(cred => !!cred),
      take(1),
      switchMap((cred: any) => {
        debugger
        this.myCredentials = {
          username: cred.credentials.username,
          password: cred.credentials.password,
          userID: cred.credentials.userID,
          clientType: cred.credentials.clientType,
          isAuthenticated: cred.credentials.isAuthenticated,
          isFirstLogin: cred.credentials.isFirstLogin,
          sessionID: cred.credentials.sessionID
        };        

        

        return of(this.myCredentials);
      })
    ).subscribe(() => console.log("hello")));
  }

}
