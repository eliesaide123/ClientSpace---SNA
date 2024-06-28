import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { LogoutReducer, reducerKey } from "./store/reducers/logout.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LogoutEffects } from "./store/effects/logout.effects";
import { HeaderBlueLineComponent } from "./header-blue-line.component";

@NgModule({
imports: [
    StoreModule.forFeature(reducerKey, LogoutReducer),
    EffectsModule.forFeature([LogoutEffects])
],
declarations: [HeaderBlueLineComponent],
exports : [HeaderBlueLineComponent],
providers: []
})

export class HeaderBlueLineModule{}