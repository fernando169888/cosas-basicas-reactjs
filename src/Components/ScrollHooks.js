import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el scroll");
    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", detectarScroll);
  });

  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);
  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY} px </p>
    </>
  );
}
