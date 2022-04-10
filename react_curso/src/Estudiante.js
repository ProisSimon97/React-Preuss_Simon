import React, { Component } from "react";
import "./Estudiante.css";
import logo from "./logo.svg";

export default class Estudiante extends Component {
  render() {
    let est1 = {
      nombre: "Simon",
      apellido: "Preuss",
    };

    let est2 = {
      nombre: "Ana",
      apellido: "Perez",
    };

    let est3 = {
      nombre: "Juan",
      apellido: "Pacino",
    };

    return (
      <div className="App">
        <header className="estudiante-header">
          <img src={logo} className="estudiante-logo" alt="logo" />
          <div>
            <p className="estilo">{est1.nombre + " " + est1.apellido}</p>
            <p className="estilo">{est2.nombre + " " + est2.apellido}</p>
            <p className="estilo">{est3.nombre + " " + est3.apellido}</p>
          </div>
        </header>
      </div>
    );
  }
}
