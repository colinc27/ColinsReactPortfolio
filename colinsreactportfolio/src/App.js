import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';

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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

