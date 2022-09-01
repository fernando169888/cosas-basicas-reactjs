import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./Components/Componente";
import Propiedades from "./Components/propiedades";
import Estado from "./Components/estado";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { EventosES6 } from "./Components/Eventos";
import { EventosES7, MasSobreEventos } from "./Components/Eventos";
import ComunicacionComponentes from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";
import ScrollHooks from "./Components/ScrollHooks";
import RelojHooks from "./Components/RelojHooks";
import AjaxHooks from "./Components/AjaxHooks";
function App() {
  return (
    <div className="App">
      <section>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <p>Hola hice un cambio en mi documento desde mi laptop uwu</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <section>
            <Componente msg="Hola soy un componente expresado  desde una prop" />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de texto"
              numero={19}
              booleano={false}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "Fernando", correo: "ferni121099@hotmail.com" }}
              funcion={(num) => num * num}
              componenteReact={
                <Componente msg="Soy un componente pasado como Prop" />
              }
            ></Propiedades>
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
          </section>
        </header>
      </section>
    </div>
  );
}

export default App;
