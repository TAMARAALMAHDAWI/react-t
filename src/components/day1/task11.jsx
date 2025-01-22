import React from "react";

const numbers = [1, 2, 3, 4, 5];

function Task11() {
  return (
    <div>
      <h3>Doubled Numbers</h3>
      <ul>
        {numbers.map((number) => (
          <li key={number}>
            <mark>Doubled</mark> number {number} is {number * 2}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task11;
