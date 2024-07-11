import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { HeaderBlueLineModule } from '../header-blue-line/header-blue-line.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HeaderBlueLineModule,
        RouterModule.forChild([
            {
                path: '',
                component: RegisterComponent
            },
        ]),
        // StoreModule.forFeature(fromAuth.reducerFeatureKey, fromAuth.getUserReducer),
        // EffectsModule.forFeature([GetUserEffect])
    ],
    declarations: [RegisterComponent],
})
export class RegisterModule { }
