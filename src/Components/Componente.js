import React from "react";

//componentes basados en clase

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }


//componente funcional
// function Componente(props){
//     return <h2>{props.msg}</h2>;
// }

//componente funcional expresado
const Componente = (props) => <h2>{props.msg}</h2> ;

export default Componente;