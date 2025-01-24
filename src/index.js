

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/day3/home";
// import About from "./components/day3/about";
// import Contact from "./components/day3/contact";
// import Error from "./components/day3/error";
// import Navbar from "./components/day3/navbar";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar /> 
//         <Home />
//       </>
//     ),
//   },
//   { path: "/about", element: <><Navbar /><About /></> }, // Navbar في صفحات أخرى أيضًا
//   { path: "/contact", element: <><Navbar /><Contact /></> },
//   { path: "*", element: <Error /> }, 
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);



import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/day3/home";
import About from "./components/day3/about";
import Contact from "./components/day3/contact";
import Error from "./components/day3/error";
import Navbar from "./components/day3/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> 
        <Home />
      </>
    ),
  },
  { path: "/about", element: <><Navbar /><About /></> }, 
  { path: "/contact", element: <><Navbar /><Contact /></> },
  { path: "*", element: <Error /> }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);