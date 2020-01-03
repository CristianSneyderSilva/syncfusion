import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'card-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @ViewChild('template', { static: true }) template: DialogComponent;

  @ViewChild('container', { static: false, read: ElementRef }) container: ElementRef;

  //Se recibe el tipo de modal para abrir
  @Input('type') type: string;

  constructor() { }

  ngOnInit() {
  }

  // Funcion para abrir la modal
  public onOpenDialog = function (event: any): void {
    this.template.show();
  }
  //Cerrar modal
  public onCloseClick: EmitType<object> = () => {
    this.template.hide();
  }
  //Click fuera del modal
  public onOverlayClick: EmitType<object> = () => {
    this.template.hide();
  }
}
