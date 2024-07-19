import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, of, switchMap, take, tap } from 'rxjs';
import { BaseComponent } from '../shared/BaseComponent';
import { getPolcomFromClientPolicies } from '../policy-info/store/selectors/getPolcomFromClientPolicies.selector';

@Component({
  selector: 'app-policy-details-info',
  templateUrl: './policy-details-info.component.html',
  styleUrl: './policy-details-info.component.css'
})
export class PolicyDetailsInfoComponent extends BaseComponent implements OnInit {

  policyNo: string = ''

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.store.select(getPolcomFromClientPolicies).pipe(
        filter(element => element !== null), // Ensure element is not null
        
      ).subscribe((element) => {
        console.log('POLCOM: ', element);
        if(element){

          this.policyNo = element.ClientPolicies.ClientPolicies.polcom[0].policyNo
        }
      })
    );
  }
}

//getPolcomFromClientPolicies