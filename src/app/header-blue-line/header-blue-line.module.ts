import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { LogoutReducer, reducerKey } from "./store/reducers/logout.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LogoutEffects } from "./store/effects/logout.effects";

@NgModule({
imports: [
    StoreModule.forFeature(reducerKey, LogoutReducer),
    EffectsModule.forFeature([LogoutEffects])
],
declarations: [],
providers: []
})

export class HeaderBlueLineModule{}