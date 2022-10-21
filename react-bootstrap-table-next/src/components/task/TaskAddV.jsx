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