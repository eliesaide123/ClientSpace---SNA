import { NgModule } from "@angular/core";
import { PolicyInfoComponent } from "./policy-info.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PolciesInfoManagementReducers } from "./store/reducers";
import { ClientPolicyEffects } from "./store/effects";


@NgModule({
  imports: [
    StoreModule.forFeature("PolicyInfo", PolciesInfoManagementReducers),
    EffectsModule.forFeature(ClientPolicyEffects)
  ],
  declarations: [PolicyInfoComponent],
  exports: [PolicyInfoComponent]
})
export class PolicyInfoModule {

}