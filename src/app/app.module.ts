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
import { MainPolicyDetailsModule } from './main-policy-details/main-policy-details.module';
import { PolicyInfoComponent } from './policy-info/policy-info.component';
import { PolicyInfoModule } from './policy-info/policy-info.module';
import { PolicyDetailsInfoComponent } from './policy-details-info/policy-details-info.component';
import { PolicyDetailsInfoModule } from './policy-details-info/policy-details-info.module';
import { PolicyMotorDetailsComponent } from './policy-motor-details/policy-motor-details.component';
import { PolicyMotorDetailsModule } from './policy-motor-details/policy-motor-details.module';
import { RiskDetailsComponent } from './risk-details/risk-details.component';
import { CoversComponent } from './covers/covers.component';
import { ClaimsComponent } from './claims/claims.component';
import { SpecialClausesComponent } from './special-clauses/special-clauses.component';
import { SpecialClausesModule } from './special-clauses/special-clauses.module';
import { RiskDetailsModule } from './risk-details/risk-details.module';
import { CoversModule } from './covers/covers.module';
import { ClaimsModule } from './claims/claims.module';

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
    MainPolicyDetailsModule,
    PolicyInfoModule,
    PolicyDetailsInfoModule,
    PolicyMotorDetailsModule,
    //SpecialClausesModule,
    RiskDetailsModule,
    //CoversModule,
    //ClaimsModule,
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
