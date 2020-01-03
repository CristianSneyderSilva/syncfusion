/**
 * @author Cristian Silva 
 * @description Inicio de sesion, funciones realizadas para Conito (AWS)
 */

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

//#region modelos
import { Login } from '../../../../models/login';
import { Usuario } from 'src/app/models/usuario';
//#endregion modelos

//#region servicios
import { AuthorizationService } from '../../../../services/authorization.service';
//#endregion servicios

//#region servicios externos
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
//#endregion servicios externos

//#region bibliotecas
import Swal, { SweetAlertType } from 'sweetalert2';
import { finalize } from 'rxjs/operators';
import { message } from 'src/app/functions/utilidades';
//#endregion bibliotecas


@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss'],
  providers: []
})



export class LoginInComponent implements OnInit {
  public objlogin: Login;
  public _usuario: Usuario;

  emailVerificationMessage: boolean = false;

  public usuario: string;
  public pwd: string;

  public type: SweetAlertType


  constructor(
    private _loginService: AuthorizationService,
    private toastr: ToastrService,
    private _router: Router,
    private SpinnerService: Ng4LoadingSpinnerService,
  ) {
    this.pwd = '';
    this.usuario = '';

  }

  ngOnInit() {
    localStorage.setItem('IsIdentity', 'false');
    localStorage.clear();
    this.isLoggin();
  }

  isLoggin(){
    if(localStorage.getItem("IsIdentity")){
      this._router.navigate(["/home"]);
    }else{
      localStorage.clear();
    }
  }

  iniciarSesion() {
    if (this.pwd === '' || this.usuario === '') {
      this.type = 'warning';
      message(this.type,'Por favor diligencie todos los datos!');
    } else {
      const email = this.usuario;
      const password = this.pwd;
      
      this._loginService.signIn(email, password).subscribe((data) => { 
        this.SpinnerService.show();
        this._usuario = data.accessToken.payload;
        localStorage.setItem('datosBasicos',JSON.stringify(this._usuario));
        this._router.navigate(['/home']);
        return true;
      }, (err)=> {
        this.type = 'error';
        message(this.type,'Usuario y/o contraseña incorrectos');
        this.emailVerificationMessage = true;
      });   
      
      /*
      this.SpinnerService.show();
      */
    }
  }
}
