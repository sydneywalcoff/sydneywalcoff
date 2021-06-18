import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';

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
    <div className="container main-bg">
      <Header
        titles = {titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle = {currentTitle.name}
      ></Header>
      <main>
      {/* portfolio >> project */}
      
      {/* conditional contact form */}
      <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
