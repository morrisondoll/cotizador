import React, {Component} from 'react';

class Formulario extends Component {
  //Refs son para leer los valores de los campos de un formulario
  marcaRef = React.createRef();
  anioRef = React.createRef();
  planBasicoRef = React.createRef();
  planComRef = React.createRef();

  
  cotizarSeguro = (e) => {

    e.preventDefault(); //Previene la acción por default

    //leer el plan con operadores ternarios
    const plan = this.planBasicoRef.current.checked ? "basico" : "completo";
    
    //Obtener los datos
    // console.log(this.marcaRef.current.value);
    // console.log(this.anioRef.current.value);
    // console.log(this.planBasicoRef.current.value);
    // console.log(this.planComRef.current.value);

    //Crear el objeto
    const infoAuto = {
      marca: this.marcaRef.current.value,
      anio: this.anioRef.current.value,
      plan: plan,
    }

    // console.log(infoAuto);

    //Enviarlo al componente principal
    this.props.cotizarSeguro(infoAuto);

    //Reiniciar el formulario
    e.currentTarget.reset();
    console.log("Enviado!!");
  }

  render(){
    return(
      <form className="modal-content" onSubmit={this.cotizarSeguro}>
        <div className="header">
          <h3>Elije los datos de tu auto</h3>
        </div>
        <div className="body">
          <label>Marca: </label>
          <select name="marca" className="form-element" ref={this.marcaRef}>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
          <label>Año: </label>
          <select name="anio" className="form-element" ref={this.anioRef}>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
          </select>
          <label>Plan: </label>
          <div>
            <input type="radio" name="plan" value="basico" ref={this.planBasicoRef} />Básico
          </div>
          <div>
            <input type="radio" name="plan" value="completo" ref={this.planComRef}/>Completo
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn red block">Cotizar</button>
        </div>
      </form>
    );
  }
}

export default Formulario;