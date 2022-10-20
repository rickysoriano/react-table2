import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Card bg={"light"} border="secondary" style={{ width: "19rem" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>USUARIO:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar nombre de usuario"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CONTRASEÑA:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn btn-secondary d-grid col-6 mx-auto">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Login;
