// COn el Evento OnChange podemos ver lo que el usuario va tipeando
// por lo que podemos capturar tambien lo que escribe-
/* Añado un evento al formulario, y el e.preventDefault sirve
para que cuando mande el formulario no se borre la palabra 
*/
import { useState } from "react";
export default function TasKForm({CreateTask}) {
  const [titulo, setiarTitulo] = useState("");
  return (
    <form onSubmit={function(e){
      e.preventDefault();


CreateTask(titulo)
}}>
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

