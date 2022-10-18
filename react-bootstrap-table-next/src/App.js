import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";

function App() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setDatos(res.data);
    });
  };
 
  const columnas = [
    {
      dataField: "email",
      text: "Email",
      sort:"true"
    },
    {
      dataField: "name",
      text: "Nombre",
      sort:"true"
    },
    {
      dataField: "body",
      text: "Relleno",
    },
    {
      dataField: "postId",
      text: "postId",
    }
  ];
  return (
    <div className="App">
      <BootstrapTable keyField="id" data={datos} columns={columnas} striped hover condensed/>
    </div>
  );
}

export default App;
