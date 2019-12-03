import { RegisterComponent } from './modules/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { StudentListComponent } from './modules/student-list/student-list.component';
import { CalculadoraComponent } from './modules/calculadora/calculadora.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'estudiante',
    component: StudentListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
