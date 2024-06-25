import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ClientPoliciesEffect } from "./store/effects/client-policies.effect";
import { StoreModule } from "@ngrx/store";
import { ClientPoliciesReducer } from "./store/reducers/client-policies.reducer";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [        
      StoreModule.forFeature("ClientPolicies", ClientPoliciesReducer),
      EffectsModule.forFeature(ClientPoliciesEffect)
    ],
    
  })
  export class ClientPoliciesModule { }