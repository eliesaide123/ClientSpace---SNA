import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clientInfoSelector } from '../client-info/store/selectors/get-client-info.selector';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dropdown-client-info',
  templateUrl: './dropdown-client-info.component.html',
  styleUrl: './dropdown-client-info.component.css'
})
export class DropdownClientInfoComponent implements OnInit {

  title: string;
  show: boolean;
  dropdownOptions: any[] = []

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    const fullUrl = this.router.url;
    if (fullUrl == "/client-policies") {
      this.title = "My Polcies"
      this.show = false;
    } else if (fullUrl == "/GrtPolicies") {
      this.title = "Certificates"
      this.show = true
    }

    this.store.select(clientInfoSelector).pipe(
      filter(info => !!info)
    ).subscribe((info: any) => {
      if (info && info.getClientInfo && info.getClientInfo.person) {
        this.dropdownOptions = info.getClientInfo.codes
      }
    })
  }
}
