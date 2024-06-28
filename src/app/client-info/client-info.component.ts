import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clientCredentialsSelector } from './store/selectors/client-credentials.selector';
import { UserCredentials } from '../shared/models/UserCredentials';
import { checkRoleRequest } from './store/actions/check-roles.action';
import { BaseComponent } from '../shared/BaseComponent';
import { loadClientCredentialsFromIndexedDB } from './store/actions/load-client-credentials-indexedDB.action';
import { checkRoleSelector } from './store/selectors/check-role.selector';
import { getClientInfoRequest } from './store/actions/get-client-info.action';
import { GetPortfolio } from '../shared/models/GetPortfolio';
import { environment } from '../../environments/environment.prod';
import { take, switchMap, filter } from 'rxjs/operators';
import { clientInfoSelector } from './store/selectors/get-client-info.selector';
import { DataSyncService } from '../shared/services/dataSync.service';
import { StorageService } from '../shared/services/storage.service';
import { LoaderService } from '../shared/loader-spinner/service/loader.service';
import {logout} from './store/actions/logout.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent extends BaseComponent implements OnInit {
  myCredentials: UserCredentials;
  extendedCredentials: GetPortfolio;
  role: string;
  username: string;
  pin: string;
  day: number;
  month: number;
  year: number;
  dateOfBirth: string;
  maritalStatus: string;
  address: string;
  filteredPolicies: any[] = [];

  constructor(private store: Store, private dataSyncService: DataSyncService, private loaderService: LoaderService,private router: Router) {
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
        this.pin = item.success.pin
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

        this.subscriptions.push(
          this.store.select(clientInfoSelector).subscribe((info: any) => {
            if (info && info.getClientInfo && info.getClientInfo.person) {
              this.day = info.getClientInfo.person.doB_Day;
              this.month = info.getClientInfo.person.doB_Month;
              this.year = info.getClientInfo.person.doB_Year;
              this.dateOfBirth = `${this.day}/${this.month}/${this.year}`;
              this.maritalStatus = info.getClientInfo.person.marital;
              this.address = this.formatAddress(info.getClientInfo.person.address);

              // Notify the shared service that client info is loaded
              this.dataSyncService.setClientInfoLoaded(true);
            }
          }))
      })
    );
  }

  formatAddress(address: string): string {
    return `<i>${address.replace(/rn/g, '<br>')}</i>`;
  }

  updatePolicies(policies: any[]) {
    this.filteredPolicies = policies;
  }

}
