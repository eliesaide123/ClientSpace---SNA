import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clientCredentialsSelector } from './store/selectors/client-credentials.selector';
import { UserCredentials } from '../shared/models/UserCredentials';
import { checkRoleRequest } from './store/actions/check-roles.actions';
import { BaseComponent } from '../shared/BaseComponent';
import { loadClientCredentialsFromIndexedDB } from './store/actions/load-client-credentials-indexedDB.action';
import { checkRoleSelector } from './store/selectors/check-role.selectors';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css'
})
export class ClientPoliciesComponent extends BaseComponent implements OnInit {  
  myCredentials: UserCredentials;
  role: string;
  username: string;

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.store.dispatch(loadClientCredentialsFromIndexedDB());    
    this.subscriptions.push(
      this.store.select(clientCredentialsSelector)       
        .subscribe((cred: any) => {          
          if (cred) {
            this.myCredentials = {
              username: cred.credentials.username,
              password: cred.credentials.password,
              userID: cred.credentials.userID,
              clientType: cred.credentials.clientType,
              isAuthenticated: cred.credentials.isAuthenticated,
              isFirstLogin: cred.credentials.isFirstLogin,
              sessionID: cred.credentials.sessionID
            };            

            this.store.dispatch(checkRoleRequest({ myCredentials: this.myCredentials }));
          }
        })
    );

    this.subscriptions.push(this.store.select(checkRoleSelector).subscribe((item: any) => {      
      if(item){        
        this.role = item.success.role;
        this.username = item.success.userName;
      }
    }))
  }
}
