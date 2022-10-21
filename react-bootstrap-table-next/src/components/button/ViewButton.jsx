import React from "react";
import { Button } from "react-bootstrap";
export const ViewButton = () => {
  return (
    <Button className={"btn btn-primary"} onClick={() => alert("hola ricardo")}>
      Ricardo
    </Button>
  );
};
