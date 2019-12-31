import { Component, ViewChild, OnInit, Input, ElementRef } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType, isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // @ViewChild('template', {static:true}) template: DialogComponent;

  @Input('title') title: string;
  @Input('content') content: string;
  @Input('component') component: string;

  @ViewChild('template', {static:true}) template: DialogComponent;
   // Create element reference for dialog target element.
   @ViewChild('container', {static: false, read: ElementRef }) container: ElementRef;
   // The Dialog shows within the target element.
   public targetElement: HTMLElement;
   public proxy: any = this;

   //To get all element of the dialog component after component get initialized.
   ngOnInit() {
     this.initilaizeTarget();
   }

   // Initialize the Dialog component target element.
   public initilaizeTarget: EmitType<object> = () => {
     this.targetElement = this.container.nativeElement.parentElement;
   }
   public height: string = '250px';
   public dialogOpen: EmitType<object> = () => {
       (document.getElementById('sendButton') as any).keypress = (e: any) => {
           if (e.keyCode === 13) { this.updateTextValue(); }
       };
       (document.getElementById('inVal')as HTMLElement).onkeydown = (e: any) => {
           if (e.keyCode === 13) { this.updateTextValue(); }
       };
       document.getElementById('sendButton').onclick = (): void => {
           this.updateTextValue();
       };
   }

   public updateTextValue: EmitType<object> = () => {
       let enteredVal: HTMLInputElement = document.getElementById('inVal') as HTMLInputElement;
       let dialogTextElement: HTMLElement = document.getElementsByClassName('dialogText')[0] as HTMLElement;
       let dialogTextWrap : HTMLElement = document.getElementsByClassName('dialogContent')[0] as HTMLElement;
       // if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
       //     detach(document.getElementsByClassName('contentText')[0]);
       // }
       if (enteredVal.value !== '') {
           dialogTextElement.innerHTML = enteredVal.value;
       }
       enteredVal.value = '';
   }

   // Sample level code to handle the button click action
   public onOpenDialog = function(event: any): void {
     // Call the show method to open the Dialog
     this.template.show();
   }

}
