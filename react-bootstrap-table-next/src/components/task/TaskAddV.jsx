import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SeccionTask } from "./components/SeccionTask";
import { NewTask } from "./components/NewTask";
import { Alert } from "react-bootstrap";
import { ModalForm } from "./components/Modal";
function App() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  
  const filterTask = (complete) => {
    if(search){
      const searchTask = tasks.filter(item => item.task.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return searchTask.filter(item => item.complete === complete)
    }
    return tasks.filter(item => item.complete === complete)
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center p-2"> Lista de tareas</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input placeholder="Buscar tareas" onChange={event => setSearch(event.target.value)} className="form-control" />