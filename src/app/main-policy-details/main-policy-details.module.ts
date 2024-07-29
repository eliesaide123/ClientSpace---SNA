import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PolicyDetailsComponent } from "./main-policy-details.component";
import { FormsModule } from "@angular/forms";
import { HeaderBlueLineModule } from "../header-blue-line/header-blue-line.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PolicyInfoModule } from "../policy-info/policy-info.module";
import { ClientPoliciesReducer } from "../client-policies/store/reducers";
import { DropdownClientInfoModule } from "../dropdown-client-info/dropdown-client-info.module";
import { PolicyDetailsInfoModule } from "../policy-details-info/policy-details-info.module";
import { PolicyMotorDetailsModule } from "../policy-motor-details/policy-motor-details.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HeaderBlueLineModule,
    DropdownClientInfoModule,
    PolicyDetailsInfoModule,
    PolicyInfoModule,
    PolicyMotorDetailsModule,
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
export class MainPolicyDetailsModule { }