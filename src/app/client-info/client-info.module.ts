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
import { DropdownClientInfoComponent } from '../dropdown-client-info/dropdown-client-info.component';
import { ClientPoliciesComponent } from '../client-policies/client-policies.component';
import { HeaderBlueLineComponent } from '../header-blue-line/header-blue-line.component';



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
  declarations: [ClientInfoComponent, DropdownClientInfoComponent, ClientPoliciesComponent, HeaderBlueLineComponent]
  
  
})
export class ClientInfoModule { }
