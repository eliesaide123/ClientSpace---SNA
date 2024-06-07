import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ClientPoliciesEffect } from './store/effects/client-policies.effect';
import { SharedModule } from '../shared/shared.module';
import { ClientPoliciesComponent } from './client-policies.component';
import { StoreModule } from '@ngrx/store';
import * as fromClientPolicies from './store/reducers/client-credentials.reducer';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PolciesManagementReducers } from './store/reducers';



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
    StoreModule.forFeature(fromClientPolicies.reducerFeatureKey, PolciesManagementReducers),
    EffectsModule.forFeature([ClientPoliciesEffect])
  ],
  declarations: [ClientPoliciesComponent]
  
  
})
export class ClientPoliciesModule { }
