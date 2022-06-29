import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [categories] = useState([
  //   {
  //     name: '',
  //     description: '',
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);
  // const [portfolioSelected, setPortfolioSelected] = useState(false)
  // const [resumeSelected, setResumeSelected] = useState(false)

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Contact' element={<ContactForm/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Resume' element={<Resume/>}/>
      </Routes>
    </Router>
  );
}



export default App;

