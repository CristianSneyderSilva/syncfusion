/**
 * @author Cristian Silva 
 * @description Componente principal, pagina de inicio
 */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
//import { fundido } from '../../animation/animation';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { EmitType } from '@syncfusion/ej2-base';
import { Login } from 'src/app/models/login';

declare var require: any;
require('bootstrap');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  animations: [/*fundido*/]
})
export class HomeComponent implements OnInit,AfterViewInit  {


  @ViewChild('ejDialog', {static:true})

  @Input() ejDialog: DialogComponent;

  @ViewChild('container', { static: true }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;


  public id;

  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    const isLogeado = true; //JSON.parse(localStorage.getItem('IsIdentity'));
    if (!isLogeado) {
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewInit(): void {
    //this.id = this.child.message;
    console.log("DATA"+this.ejDialog);
  }

  /*Modal */
  // Initialize the Dialog component's target element.
  initilaizeTarget: EmitType<object> = () => {
    this.targetElement = document.body;
  }

  public visible: Boolean = false;
  public closeOnEscape: boolean = true;
  //Animation options
  public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };

  public showCloseIcon: boolean = true;
  // Hide the Dialog when click the footer button.
  public hideDialog: EmitType<object> = () => {
    this.ejDialog.hide();
  }
  // Enables the footer buttons
  public buttons: Object = [
    {
      'click': this.hideDialog.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'Yes',
        //Enables the primary button
        isPrimary: true
      }
    },
    {
      'click': this.hideDialog.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'No',
      }
    }
  ];

  openDialog(e) {
    this.ejDialog.show();
  }

  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog.hide();
  }
}
