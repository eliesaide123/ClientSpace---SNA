import { Component, OnInit } from '@angular/core';
import { PouchdbService } from '../PouchDB/pouchdb.service';
import { AuthResponse } from '../shared/models/AuthResponse';
import { login } from '../login/store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css'
})
export class ClientPoliciesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    alert("hello")
  }

}
