import React from 'react';


function MultipleStyles() {
  
  const containerStyle = {
    backgroundColor: 'lightgray', 
    padding: '20px',              
    borderRadius: '10px',          
    textAlign: 'center',      
  };

  const headingStyle = {
    color: 'green',               
    fontSize: '30px',              
  };

  const paragraphStyle = {
    color: 'blue',                 
    fontSize: '18px',             
    fontStyle: 'italic',           
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to React!</h1>  {}
      <p style={paragraphStyle}>This is a simple example of multiple inline styles in React.</p>  {}
    </div>
  );
}

export default MultipleStyles;
