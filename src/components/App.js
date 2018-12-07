import React, { Component } from 'react';

import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca} from "../helper";

class App extends Component {

   cotizarSeguro = (datos) => {
      // console.log(datos);
      //El nombre en const debe ser exactamente igual que el nombre en el objeto enviado
      const {marca, anio, plan} = datos;
      //Agregar la base del seguro
      let resultado = 2000;
      //Agregar el porcentaje anual y obtener diferencia de años
      const diferencia = obtenerDiferenciaAnio(anio);
      resultado -= ((diferencia*3)*resultado)/100;

      //Agregar diferencias regionales
      resultado = calcularMarca(marca) * resultado;

      console.log(resultado);
   } 

  render() {
    return (
      <div className="bit-container">
        <Header 
          titulo = "Cotizador de Seguros de Auto"
        />

        <div className="bit-col-100 bg-grey flex justify-center">
          <Formulario 
            cotizarSeguro = {this.cotizarSeguro}
          />
        </div>
      </div>
    );
  }
}

export default App;
