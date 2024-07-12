import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownClientInfoComponent } from "./dropdown-client-info.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DropdownClientInfoComponent],
  imports: [
    CommonModule,
    FormsModule
],
  exports: [DropdownClientInfoComponent]
})
export class DropdownClientInfoModule { }
