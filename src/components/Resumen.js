import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends Component{

  mostrarResumen = () => {
    const { marca, anio, plan } = this.props.datos;

    if(!marca || !anio || !plan){
      return null;
    }

    return (
      <ul className="list-group red text-center">
        <h3 className="item active">Resumen de cotización</h3>
        <h4 className="item blue-grey">Marca: {primeraMayuscula(marca)}</h4>
        <h4 className="item blue-grey">Plan: {primeraMayuscula(plan)}</h4>
        <h4 className="item blue-grey">Año del Auto: {anio}</h4>
      </ul>
    );
  }

  render(){
    return (
      <div className="bit-col-50">
        {this.mostrarResumen()}
      </div>
    )
  }
}

export default Resumen;