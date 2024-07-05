import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PolicyDetailsEffects } from "./store/effects";
import { PoliciesDetailsManagementReducers } from "./store/reducers";

@NgModule({
    imports: [        
      StoreModule.forFeature("ClientPolicies", PoliciesDetailsManagementReducers),
      EffectsModule.forFeature(PolicyDetailsEffects)
    ],
    
  })
  export class ClientPoliciesModule { }