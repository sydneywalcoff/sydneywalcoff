import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";

function App() {
  const [titles] = useState([
    { name: 'Portfolio' },
    { name: 'About Me' },
    { name: 'Resume' },
    { name: 'Contact Me' }
  ]);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  console.log('current title: ', currentTitle.name);

  return (
    <div class="container">
      <Header
        titles = {titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle = {currentTitle.name}
      ></Header>
      <main>
      {/* portfolio >> project */}
      {/* about */}
      {/* conditional contact form */}
      </main>
      {/* footer */}
    </div>
  );
}

export default App;
