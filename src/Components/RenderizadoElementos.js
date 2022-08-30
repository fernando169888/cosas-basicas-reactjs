import React, { Component } from "react";
import data from "../Helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.Web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otono", "Invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.Id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
