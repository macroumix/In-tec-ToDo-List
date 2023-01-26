import React, { useState } from "react";

const Input = (props) => {

  const options = [
    {value:"", text:"--Choose who to Assign--"},
    {value:"SerkanS", text:"Serkan SAĞLAM"},
    {value:"SerkanA", text:"Serkan AKALIN"},
    {value:"FatihS", text:"Fatih SARAYDAR"},
  ]

  const [newTask, setNewTask] = useState("");
  const [newTaskPerson, setNewTaskPerson] = useState(options[0].value);


  const addTaskHandler = (event) => {
    event.preventDefault();

    const newTaskToAdd = {
      name: newTaskPerson,
      task: newTask
    }
    console.log("new task to add is ", newTaskToAdd)

    props.onUpdate(newTaskToAdd);
    setNewTask("");
    setNewTaskPerson("");

    console.log(props.tasks);
  }

  console.log("new task is ", newTask);
  console.log("newTaskPerson is ", newTaskPerson);

  return (
    <form onSubmit={addTaskHandler}>
      <input onChange={(event) => setNewTask(event.target.value)} value={newTask}/>
      <label htmlFor="engineers">Choose a person to assign the task.</label>
      <select onChange={(event) => setNewTaskPerson(event.target.value)} id="engineers" value={newTaskPerson}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button type="submit">Enter Task!</button>
    </form>
  );
};

export default Input;
