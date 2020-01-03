import { Component, OnInit } from '@angular/core';
import { CheckBoxSelectionService } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'multi-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [CheckBoxSelectionService]
})
export class MultiSelectComponent implements OnInit {

  public mode: string;
  public selectAllText: string
  constructor() {
  }
  //Asignar data
  public sportsData: Object[] =  [
      { id: '1', sports: 'Convocatoria 646' },
      { id: '2', sports: 'Convocatoria 647' },
      { id: '3', sports: 'Convocatoria 749' }
  ];
  // Asignamos el texto a la columna del id 
  public fields: Object = { text: 'sports', value: 'id' };
  // Placeholder
  public placeholder: string = 'Seleccione una convocatoria';
  ngOnInit(): void {
      // Se selecciona el tipo del multiselect 
      this.mode = 'CheckBox';
      // Titulo para seleccionar todos
      this.selectAllText= 'Seleccionar todos';
  }

}
