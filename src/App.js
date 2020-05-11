import React, { useState } from 'react';
import './App.scss';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Element } from 'react-scroll'
import Header from './components/Header';
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { SideDrawer } from './components/SideDrawer';
import Backdrop from './components/Backdrop';
// import Blog from './components/Blog';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [crossPressed, setCrossPressed] = useState(false);
  const [currentURLPath, setCurrentURLPath] = useState('')

  const drawerToggleHandler = () => {
    setDrawerOpen(prev => !prev)
    setCrossPressed(true)
  }

  const crossButtonHandler = () => {
    setCrossPressed(true)
    setDrawerOpen(prev => !prev)
  }

  const backdropClickHandler = () => {
    setDrawerOpen(false)
    setCrossPressed(true)
  }

  const handleActiveLink = path => {
    setCurrentURLPath(path)
  }

  let backdrop
  if (drawerOpen && crossPressed) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    // <BrowserRouter>
    <div style={{ height: "100%" }}>
      <Header drawerToggleHandler={drawerToggleHandler} currentURLPath={currentURLPath} />
      <SideDrawer showDrawer={drawerOpen} closeDrawer={crossButtonHandler} />
      {backdrop}
      {/* <Switch>
          <Route path="/" exact render={() => <Home handleActiveLink={handleActiveLink} />} />
          <Route path="/skills" render={() => <Skills handleActiveLink={handleActiveLink} />} />
          <Route path="/projects" render={() => <Projects handleActiveLink={handleActiveLink} />} />
          <Route path="/blog" render={() => <Blog handleActiveLink={handleActiveLink} />} />
          <Route path="/contact" render={() => <Contact handleActiveLink={handleActiveLink} />} />
        </Switch> */}
      <Element id="Home">
        <Home handleActiveLink={handleActiveLink} />
      </Element>
      <Element id="Skills">
        <Skills handleActiveLink={handleActiveLink} />
      </Element>
      <Element id="Projects">
        <Projects handleActiveLink={handleActiveLink} />
      </Element>
      {/* <Blog handleActiveLink={handleActiveLink} /> */}
      <Element id="Contact">
        <Contact handleActiveLink={handleActiveLink} />
      </Element>
    </div>
    // </BrowserRouter>
  );
}

export default App;
