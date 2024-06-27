import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientInfoComponent } from './client-info/client-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'preload', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'client-policies', component: ClientPoliciesComponent },
   { path: 'client-policies', loadChildren: () => import('./client-info/client-info.module').then(m => m.ClientInfoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
