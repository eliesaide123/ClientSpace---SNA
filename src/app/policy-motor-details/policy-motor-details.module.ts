import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PolicyMotorDetailsComponent } from "./policy-motor-details.component";
import { RiskDetailsModule } from "../risk-details/risk-details.module";

@NgModule({
    imports: [
      CommonModule,
      RiskDetailsModule
    ],
    declarations: [PolicyMotorDetailsComponent],
    exports: [PolicyMotorDetailsComponent]
  })
  export class PolicyMotorDetailsModule {}