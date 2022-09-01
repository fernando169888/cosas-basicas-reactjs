import { useRef } from "react";

export default function Referencias() {
  let refMenu = useRef(),
    refMenuBtn = useRef();
  console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>

      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}
