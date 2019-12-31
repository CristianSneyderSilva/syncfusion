import { cargarJSON } from '../app/functions/utilidades';

const environmentConfig = cargarJSON('assets/environment-config.json');

export const environment = {
  production: true,
  urlBaseColFuturo: environmentConfig.urlBaseServicio,
    //|| 'ip del servicio',
  // urlBaseColFuturo: 'http://cobogap02:212/Servicios',
  urlBaseServicio: 'http://localhost:52654',
  DTLenguajeES: 'assets/DT-language-ES.json',
  esAutorizacionesActivadas: environmentConfig.esAutorizacionesActivadas
    || false
};
