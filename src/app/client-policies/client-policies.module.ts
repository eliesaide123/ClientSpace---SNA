import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ClientPoliciesEffect } from './store/effects/effect';
import { SharedModule } from '../shared/shared.module';
import { ClientPoliciesComponent } from './client-policies.component';
import { StoreModule } from '@ngrx/store';
import * as fromClientPolicies from './store/reducers/client-policies.reducer';
import { AuthModule } from '../login/auth.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



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
    StoreModule.forFeature(fromClientPolicies.reducerFeatureKey, fromClientPolicies.ClientPoliciesReducer),
    EffectsModule.forFeature([ClientPoliciesEffect])
  ],
  declarations: [ClientPoliciesComponent]
  
  
})
export class ClientPoliciesModule { }
