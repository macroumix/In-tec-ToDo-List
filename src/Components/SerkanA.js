import React from 'react'

const SerkanA = (props) => {
  return (
    <div className="civil">{props.tasks.map((element) => {
      return (element.SerkanA ? <li>{element.SerkanA}</li> : ""
      )
    })}</div>
    
  )
}

export default SerkanA