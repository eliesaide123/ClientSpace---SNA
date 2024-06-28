import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LogoutEffects } from "./store/effects/logout.effects";
import { metaReducers } from "./store/reducers/clear-state.reducer"

@NgModule({
imports: [
    StoreModule.forFeature('Logout', {} ,{metaReducers}),
    EffectsModule.forFeature([LogoutEffects])
],
declarations: [],
providers: []
})

export class HeaderBlueLineModule{}