import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import(`./modules/home/home.module`).then((home) => home.HomeModule) },
  { path: '**', component: PnfComponent }
];
export const route = [
  LoginComponent,
  PnfComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
