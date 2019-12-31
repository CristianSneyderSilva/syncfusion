import { Component, OnInit } from '@angular/core';
import { CheckBoxSelectionService } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'multi-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  providers: [CheckBoxSelectionService]
})
export class MultiSelectComponent implements OnInit {

  public mode: string;
  public selectAllText: string
  constructor() {
  }
  //set the data to dataSource property
  public sportsData: Object[] =  [
      { id: 'Game1', sports: 'Badminton' },
      { id: 'Game2', sports: 'Basketball' },
      { id: 'Game3', sports: 'Cricket' },
      { id: 'Game4', sports: 'Football' },
      { id: 'Game5', sports: 'Golf' }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'sports', value: 'id' };
  // set placeholder to MultiSelect input element
  public placeholder: string = 'Seleccione una convocatoria';
  ngOnInit(): void {
      // set the type of mode for checkbox to visualized the checkbox added in li element.
      this.mode = 'CheckBox';
      // set the select all text to MultiSelect checkbox label.
      this.selectAllText= 'Select All';
  }

}
