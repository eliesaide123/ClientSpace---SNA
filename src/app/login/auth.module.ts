import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { AuthEffect } from './store/effects/auth.effect';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule, 
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
    ]),   
    StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffect])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ]
  
})
export class AuthModule { }
