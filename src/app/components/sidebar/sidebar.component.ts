/**
 * @author Cristian Silva 
 * @description Componente Lateral, Opcional (Aplica para filtros o menu)
 */

import { Component, ViewChild, Input } from '@angular/core';
import { SidebarComponent,TreeViewComponent } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'side-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [],
})
export class SidebarComponents {

  @ViewChild('sidebarTreeviewInstance', { static: false }) element
  @Input() sidebarTreeviewInstance: SidebarComponent;

  constructor() { }

  ngOnInit() {
  }

  public width: string = '200px';
  public enableDock: boolean = true;
  public dockSize: string = "44px";
  public mediaQuery: string = ('(min-width: 100%)');
  public target: string = '.main-content';

  public data: Object[] = [
    {
      nodeId: '01', nodeText: 'Ejecución', iconCss: 'fa fa-play-circle-o',
    },
    {
      nodeId: '02', nodeText: 'Extracción', iconCss: 'fa fa-download',
    },
    {
      nodeId: '03', nodeText: 'Cierre Contable', iconCss: 'fa fa-balance-scale',
      nodeChild: [
        { nodeId: '03-01', nodeText: 'Prorrateos', iconCss: 'icon-circle-blank icon' },
        { nodeId: '03-02', nodeText: 'Rendimientos', iconCss: 'icon-circle-thin icon' },
        { nodeId: '03-03', nodeText: 'Saldos', iconCss: 'icon-circle-thin icon' },
      ]
    },
    {
      nodeId: '04', nodeText: 'Plantillas', iconCss: 'fa fa-folder',
    },
    {
      nodeId: '06', nodeText: 'Reporte', iconCss: 'fa fa-file-pdf-o'
    },
  ];
  public field: Object = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss' };

  public onCreated(args: any) {
    this.sidebarTreeviewInstance.element.style.visibility = '';
  }
}
