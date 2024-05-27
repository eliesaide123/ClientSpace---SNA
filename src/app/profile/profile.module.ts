import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/reducer.reducer';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.getUserReducer),
  ],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
