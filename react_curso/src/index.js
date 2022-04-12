import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Estudiante from "./Estudiante";
import reportWebVitals from "./reportWebVitals";

let est1 = {
  nombre: "Simon",
  apellido: "Preuss",
};

let est2 = {
  nombre: "Ana",
  apellido: "Pacino",
};

let est3 = {
  nombre: "Juan",
  apellido: "Casas",
};

ReactDOM.render(
  <React.StrictMode>
    <Estudiante est1={est1} est2={est2} est3={est3} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
