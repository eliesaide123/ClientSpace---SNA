import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { HeaderBlueLineComponent } from "./header-blue-line.component";
import { CheckRoleEffect } from "./store/effects/getRole.effect";
import { StoreModule } from "@ngrx/store";
import { PolciesManagementReducers } from "../client-info/store/reducers";
//import { checkRoleReducer } from "./store/reducers/getRole.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature("clientCredentials", PolciesManagementReducers),
        EffectsModule.forFeature([CheckRoleEffect])
    ],
    declarations: [HeaderBlueLineComponent],
    exports: [HeaderBlueLineComponent],
    providers: []
})

export class HeaderBlueLineModule { }