import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
