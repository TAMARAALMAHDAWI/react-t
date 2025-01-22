
import React from "react";

const student = ["student 1", "student 2", "student 3", "student 4"];
function Task9(props) {

    const liststudent = student.map((student) =>
      <li key={student.toString()}>
        {student}
      </li>
    );
    return (
      <ul>{liststudent}</ul>
    );
  }
  export default Task9