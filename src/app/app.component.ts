import { Component, OnInit, OnChanges, DoCheck, enableProdMode } from '@angular/core';
import { environment } from './../environments/environment';


import { AuthorizationService } from './services/authorization.service';

import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';




// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  
  public mostrarMenus: boolean;
  public isDentity: boolean;




  constructor(
    // tslint:disable-next-line: variable-name
    private _servicioLogin: AuthorizationService) {

  }

  ngOnInit() {
    this.mostrarUocultarMenus();
  }

  noHayAtras() {
    window.history.forward();
  }


  ngDoCheck() {
    this.mostrarUocultarMenus();
  }

  ngOnChanges() { }

  mostrarUocultarMenus() {
    if (this._servicioLogin.isLoggedIn()) {
      this.mostrarMenus = true;
    } else {
      this.mostrarMenus = false;
    }
  }
}
