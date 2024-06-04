import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/reducer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetUserEffect } from './store/effects/getUser.effect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.getUserReducer),
    EffectsModule.forFeature([GetUserEffect])
  ],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
