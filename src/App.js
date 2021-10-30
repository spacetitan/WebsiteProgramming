import React from 'react';
import './App.css';

import {Helmet} from 'react-helmet';

import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/index';
import Projects from './Pages/projects';
import Contact from './Pages/contact';

function App() {
  return (
    <>
      <Helmet>
        <style className='style'>
          {
            'body { background-color : #EDF2F4; color: #0C1521; }'
          }
          </style>
      </Helmet>


      <Router>
        <NavBar />
          <Switch>
            <Route PATH='/' exact component={Home} />
            <Route PATH='/projects' exact component={Projects} />
            <Route PATH='/contact' exact component={Contact} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
