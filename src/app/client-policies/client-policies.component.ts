import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserCredentials } from '../shared/models/UserCredentials';
import { checkRoleSelector, clientCredentialsSelector } from '../client-info/store/selectors';
import { exhaustMap, filter, switchMap, take } from 'rxjs';
import { BaseComponent } from '../shared/BaseComponent';
import { GetPortfolio } from '../shared/models/GetPortfolio';
import { ClientPoliciesRequest } from './store/actions/client-policies.action';
import { ClientPoliciesSelector } from './store/selectors/client-policies.reducer';
import { DataSyncService } from '../shared/services/dataSync.service';


@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css',
})
export class ClientPoliciesComponent extends BaseComponent implements OnInit {
  
  @Input() policies: any[] = []

  myCredentials: UserCredentials;
  extendedCredentials: GetPortfolio;

  headers: string[] = ['Policy No', 'Contract Type', 'Inception', 'Expiry', 'Status', 'C/Y', 'Premium', 'Frequency'];
  data: any[] = [];
  
  constructor(private store: Store, private dataSyncService: DataSyncService) {
    super()
  }
  
  ngOnInit() {
    this.loadAllPolicies();
    // Wait until client info is loaded
    this.subscriptions.push(
      this.dataSyncService.clientInfoLoaded$.pipe(
        filter(isLoaded => isLoaded),
        take(1),
        switchMap(() => this.store.select(clientCredentialsSelector).pipe(
          filter(cred => !!cred),
          take(1),
          exhaustMap((cred: any) => {
            console.log('Client Credentials:', cred);
            this.myCredentials = {
              sessionID: cred.credentials.sessionID
            };
            return this.store.select(checkRoleSelector).pipe(
              filter(item => !!item),
              take(1)
            );
          })
        ))
      ).subscribe((item: any) => {
        console.log('Role:', item);
        this.extendedCredentials = {
          credentials: this.myCredentials,
          roleId: item.success.roleID,
          gridSize: 8,
          direction: 'N',
          startIndex: 0
        };

        this.store.dispatch(ClientPoliciesRequest({ clientPolicies: this.extendedCredentials }));

        this.subscriptions.push(this.store.select(ClientPoliciesSelector).subscribe((clientPolicies) => {
          if (clientPolicies) {
            this.data = clientPolicies.map((item) => {
              debugger
              return {
                policyNo: item.policyNo,
                contractType: item.holderName,
                inception: item.inception,
                expiry: item.expiry,
                status: item.status_Code,
                cY: item.cur_Code,
                premium: item.total_Premium,
                frequency: item.pay_Frq
              };
            });
          }
        }));
        
      })
    );
  }

  loadAllPolicies(): void {
    this.subscriptions.push(this.store.select(ClientPoliciesSelector).pipe(
      filter(policies => !!policies)
    ).subscribe((data: any) => {
      this.policies = data;
    }));
  }
}
