import React from "react";

const student = ["student 1", "student 2","student 3","student 4" ];

function Task10() {
    
    const liststudent = student.map((student) =>
      <li key={student.toString()}  style={{
        display:"grid",
        gap:"20px",
        backgroundColor:"orange",
        color:"white",
        margin:"10px",
        textAlign:"center"
      }}>
        {student}
      </li>
    );
    return (
      <ul>{liststudent}</ul>
    );
  }

export default Task10;