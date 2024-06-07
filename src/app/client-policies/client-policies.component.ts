import { Component, OnInit } from '@angular/core';
import { StorageService } from '../PouchDB/storage.service';

import { login } from '../login/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { authSelector } from '../login/store/selectors/auth.selector';
import { ClientPoliciesService } from './service/client-policies.service';
import { getClientPolicies } from '../shared/models/GetClientPolicies';
import { UserCredentials } from '../shared/models/UserCredentials';
import { environment } from '../../environments/environments';
import { AuthenticationService } from '../login/service/authentication.service';
import { tap } from 'rxjs';
import { loadClientCredentials } from './store/actions/client-policies.action';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styleUrl: './client-policies.component.css'
})
export class ClientPoliciesComponent implements OnInit {
  roleId: string
  myCredentials: getClientPolicies
  constructor(private store: Store, private clientPoliciesService: ClientPoliciesService, private loginService: AuthenticationService) { }


  ngOnInit() {

    this.store.dispatch(loadClientCredentials())

    //this.store.select(authSelector).subscribe(authResponse => {

      //it was calling first the getportfolio and then the checkroles, which is wrong

      // this.loginService.checkRoles(authResponse?.credentials).pipe(
      //   tap(getRole => {
      //     this.roleId = getRole.roleID
      //   })
      

      //checkroles first for authentication
      // this.loginService.checkRoles(authResponse?.credentials).subscribe(getRole => {        
      //   debugger  
      //   this.roleId = getRole.success.roleID
      // })

      // if (authResponse?.credentials) {
      //   this.myCredentials = {
      //     credentials: {
      //       sessionID: authResponse?.credentials.sessionID
      //     },
      //     roleId: this.roleId,
      //     gridSize: environment.GRID_PAGE_SIZE,
      //     startIndex: 0,
      //     direction: "N"
      //   }
      // }
      // if(this.roleId){
      //   this.clientPoliciesService.getPorfolio(this.myCredentials).subscribe(response => {
      //     debugger
      //   });
      // }
    //})
  }
}
