import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../login/service/authentication.service';
import { loadClientCredentialsFromIndexedDB } from './store/actions/client-credentials.action';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css'
})
export class ClientPoliciesComponent implements OnInit {
  roleId: string
  myCredentials: any;

  constructor(private store: Store, private loginService: AuthenticationService) { }

  ngOnInit() {
    this.store.dispatch(loadClientCredentialsFromIndexedDB())

    // this.store.select(clientCredentialsSelector).pipe(
    //   take(1),
    //   tap(credentials => {
    //     if (credentials) {
    //       this.myCredentials = credentials;          
    //     }
    //   })
    // ).subscribe(() => this.store.dispatch(loadClientCredentialsFromIndexedDBSuccess({ clientCredentials: this.myCredentials })));
  }
}
