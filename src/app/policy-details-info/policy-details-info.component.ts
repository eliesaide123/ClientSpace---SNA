import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, take, tap } from 'rxjs';
import { BaseComponent } from '../shared/BaseComponent';
import { getPolcomFromClientPoliciesSelector } from '../policy-info/store/selectors/getPolcomFromClientPolicies.selector';
import { sharedPolicyNo$ } from '../shared/sharedState/sharedState';

@Component({
  selector: 'app-policy-details-info',
  templateUrl: './policy-details-info.component.html',
  styleUrl: './policy-details-info.component.css'
})
export class PolicyDetailsInfoComponent extends BaseComponent implements OnInit {

  policyNoArr: string[] = [];
  InputPolicyNo: string = "";
  matchingPolicy: any = null;
  holderName: string;
  carName: string;
  plateNumber: string;

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.subscriptions.push(
      combineLatest([
        sharedPolicyNo$,
        this.store.select(getPolcomFromClientPoliciesSelector).pipe(
          filter(isLoaded => isLoaded),
          take(1)
        )
      ]).subscribe(([policyNo, element]) => {
        this.InputPolicyNo = policyNo;
        
        this.policyNoArr = element; 
        
        this.matchingPolicy = this.policyNoArr.find((item:any) => item?.policyNo == this.InputPolicyNo);

        if (this.matchingPolicy) {
          this.holderName = this.matchingPolicy.holderName.split("(")[1]
          this.carName =  this.holderName.split("PL#")[0].trim()
          this.plateNumber =  this.holderName.split("PL#")[1].trim().split(")")[0]
        }
      })
    );
  }  
}