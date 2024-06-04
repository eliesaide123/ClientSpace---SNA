import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientPoliciesComponent } from './client-policies/client-policies.component';

const routes: Routes = [
  { path: '', redirectTo: 'preload', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('../app/login/auth.module').then(m => m.AuthModule) },
  // { path: 'register', component: RegisterComponent },
  // { path: 'client-policies', component: ClientPoliciesComponent },
   { path: 'client-policies', loadChildren: () => import('../app/client-policies/client-policies.module').then(m => m.ClientPoliciesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
