// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();



import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/day3/home";
import About from "./components/day3/about";
import Contact from "./components/day3/contact";
import Error from "./components/day3/error";
import Navbar from "./components/day3/navbar"

const router = createBrowserRouter([
  {
    path: "/",
    element: (  <Home />
    ),
  },
  { path: "/about", element: <><Navbar /><About /></> }, 
  { path: "/contact", element: <><Navbar /><Contact /></> },
  { path: "*", element: <Error /> }, 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


