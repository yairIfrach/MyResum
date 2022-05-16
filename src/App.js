import React from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Footer from './components/footer/footer';
import Lang from './components/language-comp/lang';

function App() {
  return (
    <div className="App">
      <Header className="header-app" />
      <div className="top-container">
        <About />
        <Skills />
      </div>
      <div className="top-container">
        <Experience />
        <Lang />
      </div>
      <Education />
      <Footer />
    </div>
  );
}

export default App;
