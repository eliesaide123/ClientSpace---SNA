import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PolicyDetailsComponent } from "./policy-details.component";
import { FormsModule } from "@angular/forms";
import { HeaderBlueLineModule } from "../header-blue-line/header-blue-line.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PolicyDetailsEffects } from "./store/effects";
import { addCheckRoleFromIndexedDBReducer } from "./store/reducers/getDB-FromIndexedDB.reducer";
import { PolicyInfoModule } from "../policy-info/policy-info.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HeaderBlueLineModule,
    PolicyInfoModule,
    RouterModule.forChild([
      {
        path: '',
        component: PolicyDetailsComponent
      },
    ]),
    StoreModule.forFeature("PolicyDetails", addCheckRoleFromIndexedDBReducer),
    EffectsModule.forFeature(PolicyDetailsEffects)
  ],
  declarations: [PolicyDetailsComponent]
})
export class PolicyDetailsModule { }