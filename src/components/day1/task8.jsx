import React, { Component } from 'react';

class Task8 extends Component {
  render() {
    const { isSuccess } = this.props;
    return (
      <div>
        {isSuccess ? <h1>Success!</h1> : <h1>Error!</h1>}
      </div>
    );
  }
}

export default Task8;
