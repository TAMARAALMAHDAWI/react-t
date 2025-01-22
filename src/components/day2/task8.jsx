import React,{useState} from "react";

 function Task8(){
 const[state, setState] = useState(0);
const  increment=()=> setState(state+4)
 const  descrement=()=> setState(state-4)
 return( 
     <div>
         <h1>Counter</h1>
         <h1>{state}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={descrement}>Decrement</button>
     </div>
 )
 }
 export default Task8;