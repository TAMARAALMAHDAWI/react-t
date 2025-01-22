const Task7Click = () => {
    alert('Task7 button clicked!');
  };
  return (
    <div className="App"><hr />
     <Task1 name="Amro"  /><hr />
    <Task2  label="Click Me"  /><hr />
    <Task3  PN="labtob" price="$999" description="---" /><hr /> 
    <Task4  username="amro" email="amro@orange.com" age="27" /><hr />
    <Task5  avatar={<img src= {image} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>}
     name="amro" email="amro@orange.com" /> <hr />
     <Task6  hLink="Home" aLink="About" ctLink="Contant"/> <hr />
     <Task7 label="Click Me" onClick={Task7Click} /> <hr />
    


    </div>
  );


export default Task7;