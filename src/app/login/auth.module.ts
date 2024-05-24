import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [LoginComponent, FooterComponent, HeaderComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([])
  ]
})
export class AuthModule { }
