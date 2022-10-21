import React, { useState } from "react";
import { ModalForm } from "./Modal";
import { NewTask } from "./NewTask";
export const SeccionTask = ({ task, setTasks, tasks }) => {
    const [visible, setVisible] = useState(false);
    const checkTask = (check) => {
      const findTask = tasks.find((item) => item.id === task.id);
      findTask.complete = check;
      const filterTask = tasks.filter((item) => item.id !== task.id);
      filterTask.push(findTask);
      setTasks(filterTask);
    };
    const deleteTask = () => {
      const filterTask = tasks.filter((item) => item.id !== task.id);
      setTasks(filterTask);
    };
  