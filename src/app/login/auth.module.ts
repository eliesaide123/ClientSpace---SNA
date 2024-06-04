import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { AuthEffect } from './store/effects/auth.effect';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,    
    StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffect])
  ]
})
export class AuthModule { }
