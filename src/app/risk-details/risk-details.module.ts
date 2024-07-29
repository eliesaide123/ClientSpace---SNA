import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RiskDetailsComponent } from "./risk-details.component"

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [RiskDetailsComponent],
    exports: [RiskDetailsComponent]
  })
  export class RiskDetailsModule {}