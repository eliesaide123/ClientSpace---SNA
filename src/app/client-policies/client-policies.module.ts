import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PolicyDetailsEffects } from "./store/effects";
import { PolciesDetailsManagementReducers } from "./store/reducers";

@NgModule({
    imports: [        
      StoreModule.forFeature("Client-Policies" ,PolciesDetailsManagementReducers),
      EffectsModule.forFeature(PolicyDetailsEffects)
    ],
    
  })
  export class ClientPoliciesModule { }