import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoversComponent } from "./covers.component"

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [CoversComponent],
    exports: [CoversComponent]
  })
  export class CoversModule {}