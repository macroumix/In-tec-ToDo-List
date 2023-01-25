import React from 'react'

const FatihS = (props) => {
  return (
    <div className="civil">{props.tasks.map((element) => {
      return (element.FatihS ? <li>{element.FatihS}</li> : ""
      )
    })}</div>
    
  )
}

export default FatihS