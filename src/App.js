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
    SerkanS:"Hofor Drainage Study",
  },
  {
    SerkanS:"Resko Topographic Study",
  },
  {
    SerkanA:"Italy - BD - PVCase / Geotechnic / Hydraulic Study"
  },
  {
    FatihS:"Botein Geotechnical Study"
  },
]


function App() {
  const [isVisible, setIsVisible] = useState(0)
  const [newTask, setNewTask] = useState({})

  const saveNewTask = (enteredTask) => {
    setNewTask(DUMMY_TASKS.push(enteredTask))
  }
  console.log("new task is ", newTask);



  return (
    <>
      <NavBar isVisible={isVisible} setIsVisible={setIsVisible}/>
      <div id="main-div">
      <CivilWorks />
      {isVisible === 0 ? <Input onUpdate={saveNewTask} tasks={DUMMY_TASKS}/> : ""}
      {isVisible === 1 ? <SerkanS tasks={DUMMY_TASKS}/> : ""}
      {isVisible === 2 ? <SerkanA tasks={DUMMY_TASKS} /> : ""}
      {isVisible === 3 ? <FatihS tasks={DUMMY_TASKS} /> : ""}
      </div>
    </>
  );
}

export default App;