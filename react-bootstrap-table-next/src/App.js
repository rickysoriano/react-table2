import {useState, useEffect} from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";

function App() {
  const [datos,setDatos] = useState([])
  useEffect(() =>{
    getData();
  },[])
  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      setDatos(res.data);
    })
  }
  const columnas =[
    {
      dataField:"email",
      text:"Email"
    },
    {
      dataField:"name",
      text:"Nombre"
    },
    {
      dataField:"body",
      text:"Relleno"
    },
  ]
  return (
    <div className="App">
     <BootstrapTable keyField="id" data={datos} columns={columnas}/>
    </div>
  );
}

export default App;
