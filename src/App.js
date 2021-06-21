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
  console.log('current title: ', currentTitle.name);

  return (
    <div className="main-bg">
      <Header
        titles = {titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle = {currentTitle.name}
      ></Header>
      <main>
        <Contact />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
