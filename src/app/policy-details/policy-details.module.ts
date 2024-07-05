import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PolicyDetailsComponent } from "./policy-details.component";
import { FormsModule } from "@angular/forms";
import { HeaderBlueLineModule } from "../header-blue-line/header-blue-line.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PolicyInfoModule } from "../policy-info/policy-info.module";
import { ClientPoliciesReducer } from "../client-policies/store/reducers";

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
    // StoreModule.forFeature("ClientPolicies", ClientPoliciesReducer),
    // EffectsModule.forFeature(ClientPoliciesEffect)
  ],
  declarations: [PolicyDetailsComponent]
})
export class PolicyDetailsModule { }