import React, { Component } from 'react';

import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from "../helper";
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {

  state = {
    resultado : '',
    datos: {}
  }

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

    //Agregar valor del plan
    let incrementoPlan = obtenerPlan(plan);

    //Costo total con formato
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    // console.log(resultado);

    //Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      anio: anio
    };

    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
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

        <div className="bit-col-100 bg-grey flex justify-center">
          <Resumen
            datos = {this.state.datos}
            resultado = {this.state.resultado}
          />
        </div>

        <div className="bit-col-100 bg-grey flex justify-center">
          <Resultado
            resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
