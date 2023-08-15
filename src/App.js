import React from "react";
import './index.scss';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import About from "./components/About/About";

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
    </>
  );
}

export default App;
