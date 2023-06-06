import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
