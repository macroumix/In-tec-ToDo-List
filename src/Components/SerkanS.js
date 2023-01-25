import React from 'react'
import "./SerkanS.css"


const SerkanS = (props) => {

  return (
    <div className="civil">{props.tasks.map((element) => {
      return (element.SerkanS ? <li>{element.SerkanS}</li> : ""
      ) 
    })}</div>
    
  )
}

export default SerkanS;