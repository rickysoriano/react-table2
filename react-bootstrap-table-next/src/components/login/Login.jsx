import React, { useState} from "react";
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
     