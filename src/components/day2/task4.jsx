import React from 'react'

 function Task4(props) {
  return (
    <div >
        <h3> user INFO</h3>
        <ul>
          <li>
         {props.username}
          </li>
          <li>
            {props.email}
          </li>
          <li>
            {props.age}
          </li>
          </ul>
    </div>
  )
}

export default Task4