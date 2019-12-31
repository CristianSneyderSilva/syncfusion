import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { MainComponent } from './components/main/main.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { AppComponent } from '../../app.component';

// routing
import { loginRoutingModule } from './login.routing';

// import { LoginGuard } from '../../guards/login.guard';
import { AuthorizationService } from '../../services/authorization.service';


@NgModule({
  declarations: [
    LoginInComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class LoginModule { }
