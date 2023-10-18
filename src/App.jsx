import TasKList from "./TaskList";
import TasKForm from "./TasKForm";
import { tareas } from "./tasks";
import {useState,useEffect}from "react"
function App() {
  const [tasks, setTasks] = useState([]);


function CreateTask(tituloTask){
  /* 
  Lo que hago es agregar un cuarto elemento a mi nuevo arreglo
  los 3 puntos quieren decir que copie los primeros tres elementos de
  mi arreglo task
  */
setTasks([...tasks,{
tituloTask: tituloTask,
id:tasks.length,
descripccion: "Tarea nueva"

}]);

}

  useEffect(function () {
    setTasks(tareas);
  }, []);
  return (
    <div>
      <TasKForm CreateTask={CreateTask}></TasKForm>
      <TasKList tasks={tareas}></TasKList>
      <h1>dffgfgfg</h1>
    </div>
  );


}

export default App;
 