import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClientInfoComponent } from "../client-info/client-info.component";
import { DropdownClientInfoComponent } from "../dropdown-client-info/dropdown-client-info.component";
import { ClientPoliciesComponent } from "../client-policies/client-policies.component";
import { HeaderBlueLineComponent } from "../header-blue-line/header-blue-line.component";
import { MainClientPoliciesComponent } from "./main-client-policies.component";
import { FormsModule } from "@angular/forms";
import { HeaderBlueLineModule } from "../header-blue-line/header-blue-line.module";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,    
      FormsModule,
      HeaderBlueLineModule,
      RouterModule.forChild([
        {
          path: '',
          component: MainClientPoliciesComponent
        },
      ]),      
    ],
    declarations: [MainClientPoliciesComponent, ClientInfoComponent, DropdownClientInfoComponent, ClientPoliciesComponent]
    
    
  })
  export class MainClientPoliciesModule { }