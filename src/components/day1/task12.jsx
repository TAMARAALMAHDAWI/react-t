import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Task12() {
  const even = numbers.filter((num) => num % 2 === 0);
  const odd = numbers.filter((num) => num % 2 !== 0);

  return (
    <div>
      <h2>Even and Odd Numbers</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Even Numbers</h3>
          <ul>
            {even.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Odd Numbers</h3>
          <ul>
            {odd.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Task12;