import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: '',
      description: '',
    },
    { name: '', description: '' },
    { name: '', description: '' },
    { name: '', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        }
        {!portfolioSelected?(          
           <>
            <About></About>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
      </main>
    </div>
  );
}

export default App;

