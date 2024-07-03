import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PolicyInfoComponent } from "./policy-info.component";

@NgModule({
    imports: [
      CommonModule,
      SharedModule
    //   StoreModule.forFeature("PolicyDetails", addCheckRoleFromIndexedDBReducer),
    //   EffectsModule.forFeature(PolicyDetailsEffects)
    ],
    declarations: [PolicyInfoComponent],
    exports: [PolicyInfoComponent]
  })
export class PolicyInfoModule{

}