import React, {Component} from 'react';

class Resultado extends Component{
  render(){

    const resultado = this.props.resultado;

    if (!resultado) {
      return (
        <p className="btn red">Aquí se mostrará el total</p>
      );
    }

    return (
      <p className="btn red">$ {resultado}</p>
    );
  }
}

export default Resultado;