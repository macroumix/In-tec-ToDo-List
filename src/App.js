import React, { useState } from "react";

import "./styles.css";
import CivilWorks from "./Components/CivilWorks";
import NavBar from "./Components/NavBar";
import FatihS from "./Components/FatihS";
import SerkanA from "./Components/SerkanA";
import SerkanS from "./Components/SerkanS";
import Input from "./Components/Input";

 const DUMMY_TASKS = [
  {
    name: "SerkanS",
    task: "Deneme ASD 123",
  },
  {
    name: "SerkanS",
    task: "Deneme ASD 234",
  },
  {
    name: "SerkanA",
    task: "Deneme QWE 123",
  },
  {
    name: "SerkanA",
    task: "Deneme QWE 234",
  },
  {
    name: "FatihS",
    task: "Deneme ZXC 123",
  },
  {
    name: "FatihS",
    task: "Deneme ZXC 234",
  },
 ]


function App() {
  const [isVisible, setIsVisible] = useState(0)

  const saveNewTask = (enteredTask) => {
    DUMMY_TASKS.push(enteredTask)
  }

  
  const removeTaskHandler = (toDo) => {

    console.log("todo is ", toDo);

    const toErase = DUMMY_TASKS.map(element => element.task).indexOf(toDo)
    console.log(DUMMY_TASKS[0])

    console.log("to erase is ",DUMMY_TASKS.filter(element => element.task === toDo) ,toErase);

    DUMMY_TASKS.splice(toErase,1);

    console.log("final dummtasks are ", DUMMY_TASKS);
  }
 
  return (
    <>
      <NavBar isVisible={isVisible} setIsVisible={setIsVisible}/>
      <div id="main-div">
      <Input onUpdate={saveNewTask} tasks={DUMMY_TASKS} />
      {isVisible === 0 ? <CivilWorks /> : ""}
      {isVisible === 1 ? <SerkanS tasks={DUMMY_TASKS} removeTask={removeTaskHandler}/> : ""}
      {isVisible === 2 ? <SerkanA tasks={DUMMY_TASKS} removeTask={removeTaskHandler}/> : ""}
      {isVisible === 3 ? <FatihS tasks={DUMMY_TASKS} removeTask={removeTaskHandler}/> : ""}
      </div>
    </>
  );
}

export default App;