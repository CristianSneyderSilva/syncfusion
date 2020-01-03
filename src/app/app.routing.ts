import { LoginModule } from './modules/login/login.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// complementos
import {HomeComponent} from './components/home/home.component';
import { LoginInComponent } from './modules/login/components/login-in/login-in.component';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'localhost:4200', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginInComponent},
  { path: 'home', component: HomeComponent },  
  { path: 'date', component: DatePickerComponent},
  { path: 'select', component: MultiSelectComponent},
  { path: '**', component: HomeComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
