import Task1 from './components/day2/task1';

import Task2 from './components/day2/task2';
import Task3 from './components/day2/task3';
import Task4 from './components/day2/task4';
import Task5 from './components/day2/task5';
import image from './components/day2/imag.png';
import Task6 from './components/day2/task6';
import Task7 from './components/day2/task7';
import Task8 from './components/day2/task8';


function App() {
  const Task7Click = () => {
    alert('Task7 button clicked!');
  };
  return (
    <div className="App"><hr />
     <Task1 name="tamara"  /><hr />
    <Task2  label="Click Me"  /><hr />
    <Task3  PN="labtob" price="$999" description="---" /><hr /> 
    <Task4  username="amro" email="amro@orange.com" age="27" /><hr />
    <Task5  avatar={<img src= {image} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>}
     name="amro" email="amro@orange.com" /> <hr />
     <Task6  hLink="Home" aLink="About" ctLink="Contant"/> <hr />
     <Task7 label="Click Me" onClick={Task7Click} /> <hr />
     <Task8 label="Click Me" onClick={Task8Click} /> <hr />

    

    </div>
  );
}

export default App;
