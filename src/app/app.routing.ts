import { LoginModule } from './modules/login/login.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// complementos
import {HomeComponent} from './components/home/home.component';
import { LoginInComponent } from './modules/login/components/login-in/login-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'localhost:4200', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
