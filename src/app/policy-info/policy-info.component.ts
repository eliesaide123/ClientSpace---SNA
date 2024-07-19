import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CheckPolicyInfoRequest } from './store/actions/policy-info.action';
import { CheckPolicyDetailsRequest } from './store/actions/policy-details.action';
import { filter, take, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { DataSyncService } from '../shared/services/dataSync.service';
import { ClientPoliciesSelector } from './store/selectors/policy-details.selector';
import { BaseComponent } from '../shared/BaseComponent';
import { sharedPolicyNoSubject } from '../shared/sharedState/sharedState';

@Component({
  selector: 'app-policy-info',
  templateUrl: './policy-info.component.html',
  styleUrls: ['./policy-info.component.css']
})
export class PolicyInfoComponent extends BaseComponent implements OnInit {

  
  policyNo: string = "";  
  holderName: string = "";
  agtCode: string = "";
  policyStatus: string = "";
  inceptionDate: string = "";
  expiryDate: string = "";
  currency: string = "";
  payment: string = "";

  constructor(private store: Store, private dataSyncService: DataSyncService) {
    super()
   }

  async ngOnInit() {
    this.store.dispatch(CheckPolicyDetailsRequest());
    this.store.dispatch(CheckPolicyInfoRequest());

    this.subscriptions.push(this.store.select(ClientPoliciesSelector).pipe(
      filter(item => item && item.polcom && item.polcom.length > 0), // Ensure item is valid
      distinctUntilChanged(), // Ensure only distinct values are passed through
      take(1) // Take only the first valid item
    ).subscribe((item) => {    
      var polcom = item.polcom[0];
      this.policyNo = polcom.policyNo + " - " + polcom.productName;
      sharedPolicyNoSubject.next(polcom.policyNo);      
      this.holderName = polcom.holderName;
      this.agtCode = polcom.agt_code;
      this.policyStatus = polcom.status_Code;
      this.inceptionDate = polcom.inception;
      this.expiryDate = polcom.expiry;
      this.currency = polcom.cur_Code;
      this.payment = polcom.pay_Mode + " / " + polcom.pay_Frq;
    }));
  }
}
