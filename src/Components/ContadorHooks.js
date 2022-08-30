import React, { useState } from "react";
export default function ContadorHooks() {
  //console.log(useState());
  //usf
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <>
      <h2>Hooks- useState</h2>
      <nav>
        <button onClick={sumar} type="">
          -
        </button>
        <button onClick={restar} type="">
          +
        </button>
      </nav>
      <h3>{contador}</h3>
    </>
  );
}
