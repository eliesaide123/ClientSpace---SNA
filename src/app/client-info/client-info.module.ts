import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ClientInfoComponent } from './client-info.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolciesManagementReducers } from './store/reducers';
import { ClientPoliciesEffects } from './store/effects';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientInfoComponent
      },
    ]),      
    StoreModule.forFeature("clientCredentials", PolciesManagementReducers),
    EffectsModule.forFeature(ClientPoliciesEffects)
  ],
  declarations: [ClientInfoComponent]
  
  
})
export class ClientInfoModule { }
