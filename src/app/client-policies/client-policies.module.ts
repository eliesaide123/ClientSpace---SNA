import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ClientPoliciesComponent } from './client-policies.component';
import { StoreModule } from '@ngrx/store';
import * as fromClientPolicies from './store/reducers/load-client-credentials-indexedDB.reducer';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PolciesManagementReducers } from './store/reducers';
import { ClientPoliciesEffects } from './store/effects';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientPoliciesComponent
      },
    ]),      
    StoreModule.forFeature("clientCredentials", PolciesManagementReducers),
    EffectsModule.forFeature(ClientPoliciesEffects)
  ],
  declarations: [ClientPoliciesComponent]
  
  
})
export class ClientPoliciesModule { }
