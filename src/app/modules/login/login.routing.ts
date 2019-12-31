import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

// components
import { MainComponent } from './components/main/main.component';
import { LoginInComponent } from './components/login-in/login-in.component';

const loginRoutes: Routes = [
  {
    path: 'login', component: MainComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: LoginInComponent, }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),

  ],
  exports: [
    RouterModule
  ]
})

export class loginRoutingModule { }