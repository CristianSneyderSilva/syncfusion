/**
 * @author Cristian Silva 
 * @description Componente DatePicker, selecciona rango de fechas
 */
import { Component, OnInit } from '@angular/core';
import { CalendarView } from '@syncfusion/ej2-angular-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
declare var require: any;

const numberingSystems = require('../../../utils/numbers.json')
const gregorian = require('../../../utils/ca-gregorian.json')
const numbers = require('../../../utils/numberingSystems.json')
const detimeZoneNames = require('../../../utils/timeZoneNames.json')


loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);

@Component({
  selector: 'date-date-picker',
  templateUrl: 'date-picker.component.html'
})
export class DatePickerComponent implements OnInit {

  public start: CalendarView = 'Year';
  public depth: CalendarView = 'Year';
  public format: string = 'MMM yyyy';

  constructor() { }

  ngOnInit(): void {
    L10n.load({
      'es-CO': {
        'daterangepicker': {
          placeholder: 'Seleccionar rango de fecha',
          startLabel: 'Fecha Inicio',
          selectedDays: 'Dias Seleccionados',
          endLabel: 'Fecha Fin',  
          applyText: 'Aplicar',
          cancelText: 'Cancelar',
          days: 'días',
        }
      }
    });
  }

}
