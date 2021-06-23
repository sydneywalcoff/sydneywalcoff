import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [titles] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact Me' }
  ]);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  
  const currentPage = currentTitle => {
    console.log(currentTitle.name)
    if(currentTitle.name === 'Portfolio') {
      return <Portfolio />
    } else if(currentTitle.name === 'About Me') {
      return <About />
    } else if(currentTitle.name === 'Contact Me') {
      return <Contact />
    } else {
      // return <Resume />
    }
  }

  return (
    <div className="main-bg">
      <Header
        titles = {titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle = {currentTitle.name}
      ></Header>
      <main>
        {currentPage(currentTitle)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
