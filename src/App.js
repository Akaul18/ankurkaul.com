import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { SideDrawer } from './components/SideDrawer';
import Backdrop from './components/Backdrop';

// export const DrawerButtonContext = React.createContext()
function App() {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [crossPressed, setCrossPressed] = useState(false)

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

  let backdrop
  if (drawerOpen && crossPressed) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    // <DrawerButtonContext.Provider value={drawerToggleHandler}>
    <BrowserRouter>
      <div style={{ height: "100%" }}>
        <Header drawerToggleHandler={drawerToggleHandler} />
        <SideDrawer showDrawer={drawerOpen} closeDrawer={crossButtonHandler} />
        {backdrop}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
    // </DrawerButtonContext.Provider>
  );
}

export default App;
