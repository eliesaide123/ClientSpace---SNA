import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PolicyDetailsComponent } from "./policy-details.component";
import { FormsModule } from "@angular/forms";
import { HeaderBlueLineModule } from "../header-blue-line/header-blue-line.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
//import { reducerFeatureKey } from "./store/reducers/addDB-toIndexedDB.reducer.reducer";
// import { AddCheckRoleManagementReducer } from "./store/reducers";
// import { PolicyDetailsEffects } from "./store/effects";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HeaderBlueLineModule,
    RouterModule.forChild([
      {
        path: '',
        component: PolicyDetailsComponent
      },
    ]),
    //StoreModule.forFeature(reducerFeatureKey, AddCheckRoleManagementReducer),
    //EffectsModule.forFeature(PolicyDetailsEffects)
  ],
  declarations: [PolicyDetailsComponent]
})
export class PolicyDetailsModule { }