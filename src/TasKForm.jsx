// COn el Evento OnChange podemos ver lo que el usuario va tipeando
// por lo que podemos capturar tambien lo que escribe-

import { useState } from "react";
export default function TasKForm() {
  const [titulo, setiarTitulo] = useState("");
  return (
    <form>
      <input
        placeholder="Escribi tu tarea"
        onChange={function (e) {
          setiarTitulo(e.target.value);
        }}
      ></input>
      <button>Guardar</button>
    </form>
  );
}
