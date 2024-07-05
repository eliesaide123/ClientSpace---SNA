import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CheckPolicyInfoRequest } from './store/actions/policy-info.action';
import { CheckPolicyDetailsRequest } from './store/actions/policy-details.action';

@Component({
  selector: 'app-policy-info',
  templateUrl: './policy-info.component.html',
  styleUrl: './policy-info.component.css'
})
export class PolicyInfoComponent implements OnInit {

  constructor(private store : Store) {}

  ngOnInit() {
      this.store.dispatch(CheckPolicyInfoRequest())
      this.store.dispatch(CheckPolicyDetailsRequest())
  }

}
