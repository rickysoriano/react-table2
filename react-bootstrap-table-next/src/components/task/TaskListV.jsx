import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";
function TaskListV() {
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
      sort: "true",
    },
    {
      dataField: "name",
      text: "Nombre",
      sort: "true",
      filter: textFilter()
    },
    {
      dataField: "body",
      text: "Relleno",
    },
    {
      dataField: "postId",
      text: "postId",
    },
  ];
  return (
    <div className="App">
      <BootstrapTable
        keyField="id"
        data={datos}
        columns={columnas}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({mode:"click"})}
        filter={filterFactory()}
      />
    </div>
  );
}

export default TaskListV;