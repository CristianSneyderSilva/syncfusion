/**
 * @author Cristian Silva
 * @description Componente principal, pagina de inicio
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment'
import { FormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
//import { fundido } from '../../animation/animation';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

declare var require: any;
require('bootstrap');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  animations: [/*fundido*/]
})
export class HomeComponent implements OnInit {
  @ViewChild('ejDialog',{ static:true }) ejDialog: DialogComponent;
  // The Dialog shows within the target element.
  @ViewChild('container', { static:true }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;

  public urlBase: string;
  constructor(
    private router: Router) { }

  ngOnInit() {
    const isLogeado = true; //JSON.parse(localStorage.getItem('IsIdentity'));

    if (!isLogeado) {
      this.router.navigate(['/login']);

    }

    this.initilaizeTarget();

  }

    // Initialize the Dialog component target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container.nativeElement.parentElement;
    }
    // Sample level code to handle the button click action
    public onOpenDialog = function(event: any): void {
        // Call the show method to open the Dialog
        this.ejDialog.show();
    };
    // Sample level code to hide the Dialog when click the Dialog overlay
    public onOverlayClick: EmitType<object> = () => {
        this.ejDialog.hide();
    }


}
