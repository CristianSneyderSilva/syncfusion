/**
 * @author Cristian Silva 
 * @description Componente superior, navBar
 */

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavbarComponent implements OnInit {

  @Input() sidebarTreeviewInstance: SidebarComponent;

  @ViewChild('treeviewInstance', { static: false })
  @Input() treeviewInstance: TreeViewComponent;

  public onCreated(args: any) {
    this.sidebarTreeviewInstance.element.style.visibility = '';
  }
  public onClose(args: any) {
    this.treeviewInstance.collapseAll();
  }
  openClick() {
    if (this.sidebarTreeviewInstance.isOpen) {
      this.sidebarTreeviewInstance.hide();
    }
    else {
      this.sidebarTreeviewInstance.show();
    }
  }
  constructor(
    private auth: AuthorizationService,
    private router: Router

  ) { }
  ngOnInit(): void {
    console.log("SIDEBAR" + this.sidebarTreeviewInstance)

  }
  cerrarSesion() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
  mostrarUOcultarSidebar() {
    const sidebar = document.querySelector('#sidebar-content') as HTMLElement;
    sidebar.classList.toggle('active');
  }
}
