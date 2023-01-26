import React from 'react'

const FatihS = (props) => {
  return (
    <div className="civil">{props.tasks.map((element) => {
      return (element.name === "FatihS" ? <li key={element.task}>{element.task}<p onClick={() => props.removeTask(element.task)} className="remove-task">❌</p></li> : ""
      ) 
    })}</div>
    
  )
}

export default FatihS