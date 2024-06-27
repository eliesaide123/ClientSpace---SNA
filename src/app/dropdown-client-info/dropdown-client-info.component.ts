import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clientInfoSelector } from '../client-info/store/selectors/get-client-info.selector';
import { filter } from 'rxjs';
import { ClientPoliciesSelector } from '../client-policies/store/selectors/client-policies.reducer';
import { BaseComponent } from '../shared/BaseComponent';

@Component({
  selector: 'app-dropdown-client-info',
  templateUrl: './dropdown-client-info.component.html',
  styleUrl: './dropdown-client-info.component.css'
})
export class DropdownClientInfoComponent extends BaseComponent implements OnInit {

  title: string;
  show: boolean;
  dropdownOptions: any[] = [];

  searchText: string = '';
  filteredPolicies: any[] = [];
  allPolicies: any[] = [];

  @Output() policiesFiltered = new EventEmitter<any[]>();

  constructor(private router: Router, private store: Store) { 
    super()
  }

  ngOnInit() {
    this.loadAllPolicies();
    const fullUrl = this.router.url;
    if (fullUrl == "/client-policies") {
      this.title = "My Policies"
      this.show = false;
    } else if (fullUrl == "/GrtPolicies") {
      this.title = "Certificates"
      this.show = true
    }

    this.subscriptions.push(this.store.select(clientInfoSelector).pipe(
      filter(info => !!info)
    ).subscribe((info: any) => {
      if (info && info.getClientInfo && info.getClientInfo.person) {
        this.dropdownOptions = info.getClientInfo.codes
      }
    }))
  }

  loadAllPolicies(): void {
    this.subscriptions.push(this.store.select(ClientPoliciesSelector).pipe(
      filter(policies => !!policies)
    ).subscribe((data: any) => {
      this.allPolicies = data;
      this.filteredPolicies = data;
      this.policiesFiltered.emit(this.filteredPolicies);
    }));
  }

  filterPolicies(){
    this.subscriptions.push(this.store.select(ClientPoliciesSelector).pipe(
      filter(policies => !!policies)
    ).subscribe((data : any) => {
      this.allPolicies = data
    }))    
    if (this.searchText) {
      this.filteredPolicies = this.allPolicies.filter(policy =>
        policy.policyNo.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredPolicies = this.allPolicies; // reset to all policies if search text is empty
    }

    this.policiesFiltered.emit(this.filteredPolicies)
  }
}
