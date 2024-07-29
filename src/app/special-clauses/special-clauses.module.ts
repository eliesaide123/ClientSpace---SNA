import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SpecialClausesComponent } from "./special-clauses.component"

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [SpecialClausesComponent],
    exports: [SpecialClausesComponent]
  })
  export class SpecialClausesModule {}