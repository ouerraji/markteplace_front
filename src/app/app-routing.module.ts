import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { UserindexComponent } from './userindex/userindex.component';
import { AdminindexComponent } from './adminindex/adminindex.component';

const routes: Routes = [
  { path: 'registre', component: RegistreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserindexComponent },
  { path: 'admin', component: AdminindexComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
