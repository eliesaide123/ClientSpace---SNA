import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClaimsComponent } from "./claims.component"

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [ClaimsComponent],
    exports: [ClaimsComponent]
  })
  export class ClaimsModule {}