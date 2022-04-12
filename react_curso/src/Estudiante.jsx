import React, { Component } from "react";
import "./Estudiante.css";
import logo from "./logo.svg";
import Curso from "./Cursos";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="estudiante-header">
          <img src={logo} className="estudiante-logo" alt="logo" />

          <p>Estudiante:</p>
          <p className="estilo">
            {this.props.est1.nombre + " " + this.props.est1.apellido}
          </p>

          <p></p>
          <Curso />

          <p></p>
          <p>Estudiante:</p>
          <p className="estilo">
            {this.props.est2.nombre + " " + this.props.est2.apellido}
          </p>

          <p></p>
          <Curso />
        </header>
      </div>
    );
  }
}
