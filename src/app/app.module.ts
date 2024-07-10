import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './login/auth.module';
import { ClientInfoModule } from './client-info/client-info.module';
import { ClientPoliciesModule } from './client-policies/client-policies.module';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MainClientPoliciesModule } from './main-client-policies/main-client-policies.module';
import { HeaderBlueLineModule } from './header-blue-line/header-blue-line.module';
import { PolicyDetailsModule } from './policy-details/policy-details.module';
import { PolicyInfoComponent } from './policy-info/policy-info.component';
import { PolicyInfoModule } from './policy-info/policy-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,  
    AuthModule,
    ClientInfoModule,
    MainClientPoliciesModule,
    ClientPoliciesModule,       
    PolicyDetailsModule,
    PolicyInfoModule,
    DatePipe,
    DecimalPipe,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
