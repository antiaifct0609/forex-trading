// IMPORTACIONES

import { mes1 } from './assets/datos/EURCAD-4-2018-MES-01.js';
import { mes2 } from './assets/datos/EURCAD-4-2018-MES-02.js';
import { mes3 } from './assets/datos/EURCAD-4-2018-MES-03.js';
import { mes4 } from './assets/datos/EURCAD-4-2018-MES-04.js';
import { mes5 } from './assets/datos/EURCAD-4-2018-MES-05.js';
import { mes6 } from './assets/datos/EURCAD-4-2018-MES-06.js';
import { mes7 } from './assets/datos/EURCAD-4-2018-MES-07.js';
import { mes8 } from './assets/datos/EURCAD-4-2018-MES-08.js';
import { mes9 } from './assets/datos/EURCAD-4-2018-MES-09.js';
import { mes10 } from './assets/datos/EURCAD-4-2018-MES-10.js';
import { mes11 } from './assets/datos/EURCAD-4-2018-MES-11.js';
import { mes12 } from './assets/datos/EURCAD-4-2018-MES-12.js';
import { valoresAnuales } from '../../js/valoresMes.js';
import { valoresDiariosAnual } from '../../js/valoresDia.js';
import { mostrarGrafica } from '../../js/grafica.js'


// FUNCIONES

// borra el div de la grafica para mostrar el nuevo valor
function borrarGrafica() {
  grafica.innerHTML = '';
}

// crea el titulo de la grafica segun el parametro que se le pase
function addTitulo(m) {
  let titulo = document.createElement('h3');
  titulo.innerText = `Gráfica ${titulosGrafica[m]} 2018`;
  titulo.classList.add('text-center');
  titulo.classList.add('font-weight-bolder');
  console.log(titulo);
  return titulo;
}

// genera el codigo del evento del boton que se le pasa
function eventoBoton(posicionBoton) {
  botones[posicionBoton].addEventListener('click', () => {
    borrarGrafica();
    grafica.append(addTitulo(posicionBoton));
    let datos = valoresDias[posicionBoton];
    console.log(datos);
    grafica.append(mostrarGrafica(datos));
  });
}


// VARIABLES

// datos de todo el año
let anual = [mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10, mes11, mes12];

// titulos grafica
let titulosGrafica = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Anual'];

// array con todos los valores por mes
let valorAnual = valoresAnuales(anual);
console.log('POR MES:\n', valorAnual);

// array con todos los valores por dia
let valoresDias = valoresDiariosAnual(anual);
console.log('POR DIAS:\n', valoresDias);

let botones = document.querySelectorAll('button');
//console.log(botones);

let grafica = document.querySelector('#divGrafica');
// console.log(grafica);

// EVENTOS

// botones meses
eventoBoton(0);
eventoBoton(1);
eventoBoton(2);
eventoBoton(3);
eventoBoton(4);
eventoBoton(5);
eventoBoton(6);
eventoBoton(7);
eventoBoton(8);
eventoBoton(9);
eventoBoton(10);
eventoBoton(11);

// boton Anual
botones[12].addEventListener('click', () => {
  borrarGrafica();
  grafica.append(addTitulo(12));
  console.log(valorAnual);
  grafica.append(mostrarGrafica(valorAnual));
});

// boton Otras Monedas});