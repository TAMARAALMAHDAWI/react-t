import React from 'react';

const Task7 = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, user!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
    </div>
  );
};

export default Task7;
