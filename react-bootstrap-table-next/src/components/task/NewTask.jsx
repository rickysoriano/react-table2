import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const NewTask = ({ setOpen, setTasks, tasks, title }) => {
    const [Task, setTask] = useState("");
    const AccionTask = () => {
      if (title) {
        const findTask = tasks.find((item) => item.task === title);
        findTask.task = Task;
        const filterTask = tasks.filter((item) => item.task !== Task);
        filterTask.push(findTask);
        setTasks(filterTask);
        setOpen(false);
        return;