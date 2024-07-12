import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { addClientRoleToIndexedDB } from './store/actions/addDB-toIndexedDB.action';

@Component({
  selector: 'app-policy-details',
  templateUrl: './main-policy-details.component.html',
  styleUrl: './main-policy-details.component.css'
})
export class PolicyDetailsComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit() {
    
      // this.store.select(addClientRoleToIndexedDB())
  }

}
