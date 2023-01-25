import React, { useState } from "react";

const Input = (props) => {

  const [newTask, setNewTask] = useState("");
  const [newTaskPerson, setNewTaskPerson] = useState("");


  const addTaskHandler = () => {
    const newTaskToAdd = {
      [newTaskPerson]: newTask,
    }
  }

  return (
    <form onSubmit={addTaskHandler}>
      <input onChange={(event) => setNewTask(event.target.value)}/>
      <label htmlFor="engineers">Choose a person to assign the task.</label>
      <select id="engineers">
        <option onChange={() => setNewTaskPerson("SerkanS")} value="Serkan SAĞLAM">SERKAN SAĞLAM</option>
        <option onChange={() => setNewTaskPerson("SerkanA")} value="Serkan AKALIN">SERKAN AKALIN</option>
        <option onChange={() => setNewTaskPerson("FatihS")} value="FATİH SARAYDAR">FATİH SARAYDAR</option>
      </select>
      <button type="submit" onClick={e => e.preventDefault()}>Enter Task!</button>
    </form>
  );
};

export default Input;
