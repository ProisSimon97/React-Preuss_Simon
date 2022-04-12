import React, { Component } from "react";

export default class Curso extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      cursos: [{

        nombre: "Curso Inicial",
        horas: "10hs"
      }
      ],
    };
  }

  handleClick() {

    let curNuevo = {
      nombre: Math.random().toString(36).slice(-5),
      horas: Math.random().toString(36).slice(-3),
    }; 

    const {cursos} = this.state;
    cursos.push(curNuevo);

    this.setState({cursos: cursos});
  }

  render() {

    const {cursos} = this.state;
    return (
      <div>
        <table border="1" className="table">
          <caption>Cursos:</caption>

          <thead>
          <tr>
            <th>Curso</th>
            <th>Horas Semanales</th>
          </tr></thead>

          <tbody>          
            {cursos.map((r) => {
            return (
              <tr  key = {r.nombre}>
                <td>{r.nombre}</td>
                <td>{r.horas}</td> 
              </tr>
            );
          })}</tbody>

        </table>

        <button onClick={this.handleClick} name="button">
          Inscribirme
        </button>
        <p></p>
      </div>
    );
  }
}
