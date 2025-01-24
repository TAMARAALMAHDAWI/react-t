// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/home page/Navbar';
// // import HeroSection from './components/home page/HeroSection';
// // import AboutUs from './components/home page/AboutUs';
// // import Services from './components/home page/Services';
// // import Activity from './components/home page/Activity';
// // import Teams from './components/home page/Teams';
// // import Contact from './components/home page/Contact';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/hero-section" component={HeroSection} />
// //         <Route path="/about-us" component={AboutUs} />
// //         <Route path="/services" component={Services} />
// //         <Route path="/activity" component={Activity} />
// //         <Route path="/teams" component={Teams} />
// //         <Route path="/contact" component={Contact} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/home page/Navbar';
// import HeroSection from './components/home page/HeroSection';
// import AboutUs from './components/home page/AboutUs';
// import Services from './components/home page/Services';
// import Activity from './components/home page/Activity';
// import Teams from './components/home page/Teams';
// import Contact from './components/home page/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {}
//         <Route path="/hero-section" element={<HeroSection />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/activity" element={<Activity />} />
//         <Route path="/teams" element={<Teams />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';

import Home from './components/day3/home';
import About from './components/day3/about';
import Contact from './components/day3/contact';
import Error from './components/day3/error';

function App() {
  return (
  <div>
<Router>
<nav>
  <ul>
    <li>
<Link to="/">Home</Link> 
</li>

<li>
<Link to="/b">About</Link> 
</li> 
 
 
<li>
<Link to="/c">Contact</Link> 
</li> 

<li>
<Link to="/d">Error</Link>
</li>
  </ul>
</nav>



<Routes>
<Route path='/a' element = {<Home/>}></Route>
<Route path = "/b" element = {<About/>}></Route>
<Route path='/c' element = {<Contact/>}></Route>
<Route path='/d' element = {<Error/>}></Route>
</Routes>
</Router>

  </div>

  );
}

export default App