import React from 'react'
import "./SerkanS.css"


const SerkanS = (props) => {

  return (
    <div className="civil">{props.tasks.map((element) => {
      return (element.name === "SerkanS" ? <li key={element.task}>{element.task}<p onClick={() => props.removeTask(element.task)} className="remove-task">❌</p></li> : ""
      ) 
    })}</div>
    
  )
}

export default SerkanS;