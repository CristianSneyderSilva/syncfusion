/**
 * @author Cristian Silva 
 * @description Funciones Generales 
 */

import * as _ from 'lodash';
import Swal, { SweetAlertType } from 'sweetalert2';

export function cargarArchivoTextoAjaxSync(
  rutaArchivo: string,
  mimeType: string
) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', rutaArchivo, false);

  if (!_.isNil(mimeType)) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();

  if (xmlhttp.status === 200) {
    return xmlhttp.responseText;
  } else {
    return null;
  }
}

export function cargarJSON(rutaArchivo: string) {
  const json = cargarArchivoTextoAjaxSync(rutaArchivo, 'application/json');
  return JSON.parse(json);
}

export function message(type:SweetAlertType, message:string){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
    });
    Toast.fire({
    type: type,
    title: message,
    });
}
