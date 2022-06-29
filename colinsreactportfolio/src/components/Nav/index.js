import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    portfolioSelected,
    resumeSelected,
    currentCategory,
    setContactSelected,
    setResumeSelected,
    setPortfolioSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={function(event){setContactSelected(false);
            setPortfolioSelected(false); setResumeSelected(false); console.log(setContactSelected,setPortfolioSelected)}}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={function(event){setPortfolioSelected(false); setResumeSelected(false); setContactSelected(true)}}>Contact</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={function(event){setPortfolioSelected(true); setResumeSelected(false); setContactSelected(false)}}>Portfolio</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={function(event){setPortfolioSelected(false); setResumeSelected(true); setContactSelected(false)}}>Resume</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === (!contactSelected && 'navActive' )||( !portfolioSelected && 'navActive') ||( !resumeSelected && 'navActive')
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
             </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
