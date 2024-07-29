import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { PolicyMotorDetailsComponent } from './policy-motor-details/policy-motor-details.component';
import { RiskDetailsComponent } from './risk-details/risk-details.component';
import { CoversComponent } from './covers/covers.component';
import { ClaimsComponent } from './claims/claims.component';
import { SpecialClausesComponent } from './special-clauses/special-clauses.component';

const routes: Routes = [
  { path: '', redirectTo: 'preload', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'client-policies', component: ClientPoliciesComponent },

  // { path: 'policy-details', component: PolicyMotorDetailsComponent, children: [
  //   { path: 'risk-details', component: RiskDetailsComponent },
  //   { path: 'covers', component: CoversComponent },
  //   { path: 'claims', component: ClaimsComponent },
  //   { path: 'special-clauses', component: SpecialClausesComponent },
  //   { path: '', redirectTo: 'risk-details', pathMatch: 'full' }  // default route
  // ]},

   { path: 'client-policies', loadChildren: () => import('./main-client-policies/main-client-policies.module').then(m => m.MainClientPoliciesModule) },
   { path: 'policy-details', loadChildren: () => import('./main-policy-details/main-policy-details.module').then(m => m.MainPolicyDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
