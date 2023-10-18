import react from "react";
export default function TaskList(props) {
  // Indicamos basicamente que const [] va a ser un arreglo vacio,
  // seria como poner const var[]

  // Usamos el useEffect, para que cuando se cargue el componente
  // osea la funcion, en la primera vez que se cargue tasks tome
  // el valor de tareas, asi no da error y se carga.
  //despues recorremos con un  bucle map el arreglo task(es como un for each)
  // y mostramos cada una de sus propiedades, retornandolas para mostrarlas
 
  if (props.tasks.length === 0) {
    return <h1 style={{ color: "4342" }}>Arreglo sin tareas</h1>;
  }
  return ( 
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
          <h1>
            {task.titulo}
            <p>{task.descripccion}</p>
          </h1>
        </div>
      ))}
    </div>
  );
}
