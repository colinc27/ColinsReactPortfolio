import React from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Social from './components/Footer'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Contact' element={<ContactForm/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Resume' element={<Resume/>}/>
      </Routes>
      <Social></Social>
    </Router>
  );
}



export default App;

