import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clientCredentialsSelector } from './store/selectors/client-credentials.selector';
import { UserCredentials } from '../shared/models/UserCredentials';
import { checkRoleRequest } from './store/actions/check-roles.actions';
import { BaseComponent } from '../shared/BaseComponent';
import { loadClientCredentialsFromIndexedDB } from './store/actions/load-client-credentials-indexedDB.action';
import { checkRoleSelector } from './store/selectors/check-role.selectors';
import { getClientInfoRequest } from './store/actions/get-client-info.actions';
import { getClientInfo } from '../shared/models/GetClientInfo';
import { environment } from '../../environments/environment.prod';
import { take, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent extends BaseComponent implements OnInit {
  myCredentials: UserCredentials;
  extendedCredentials: getClientInfo;
  role: string;
  username: string;

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    // Dispatch action to load client credentials
    this.store.dispatch(loadClientCredentialsFromIndexedDB());

    // Subscribe to client credentials
    this.subscriptions.push(
      this.store.select(clientCredentialsSelector).pipe(
        filter(cred => !!cred),
        take(1),
        switchMap((cred: any) => {
          this.myCredentials = {
            username: cred.credentials.username,
            password: cred.credentials.password,
            userID: cred.credentials.userID,
            clientType: cred.credentials.clientType,
            isAuthenticated: cred.credentials.isAuthenticated,
            isFirstLogin: cred.credentials.isFirstLogin,
            sessionID: cred.credentials.sessionID
          };

          // Dispatch check role request
          this.store.dispatch(checkRoleRequest({ myCredentials: this.myCredentials }));

          // Subscribe to check role result
          return this.store.select(checkRoleSelector).pipe(
            filter(item => !!item),
            take(1)
          );
        })
      ).subscribe((item: any) => {
        this.role = item.success.role;
        this.username = item.success.userName;

        // Prepare the extended credentials object
        this.extendedCredentials = {
          credentials: this.myCredentials,
          roleId: this.role,
          gridSize: environment.GRID_PAGE_SIZE,
          startIndex: 0,
          direction: 'N'
        };

        // Dispatch get client info request
        this.store.dispatch(getClientInfoRequest({ getClientInfo: this.extendedCredentials }));
      })
    );
  }
}
