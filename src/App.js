import React from 'react';
import './App.css';

import {Helmet} from 'react-helmet';

import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/index';
import Projects from './Pages/projects';

import template from './Pages/Projects/template';
import FullSwingGolfSimulator from './Pages/Projects/FullSwingGolfSimulator';
import FullSwingLaunchMonitor from './Pages/Projects/FullSwingLaunchMonitor';
import PokerGoHoldEm from './Pages/Projects/PokerGoHoldEm';
import OsirisNewDawn from './Pages/Projects/OsirisNewDawn';
import Maelstrom from './Pages/Projects/Maelstrom';
import TPMS from './Pages/Projects/TPMS';
import FPPCH from './Pages/Projects/FPPCH';
import BumperBalls from './Pages/Projects/BumperBalls';
import CowboyShooter from './Pages/Projects/CowboyShooter';

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
            <Route exact path='/' exact component={Home} />
            <Route path='/portfolio' exact component={Projects} />
            <Route path='/portfolio/template' exact component={template} />
            <Route path='/portfolio/FullSwingGolfSimulator' exact component={FullSwingGolfSimulator} />
            <Route path='/portfolio/FullSwingLaunchMonitor' exact component={FullSwingLaunchMonitor} />
            <Route path='/portfolio/PokerGoHoldEm' exact component={PokerGoHoldEm} />
            <Route path='/portfolio/OsirisNewDawn' exact component={OsirisNewDawn} />
            <Route path='/portfolio/Maelstrom' exact component={Maelstrom} />
            <Route path='/portfolio/TPMS' exact component={TPMS} />
            <Route path='/portfolio/FPPCH' exact component={FPPCH} />
            <Route path='/portfolio/BumperBalls' exact component={BumperBalls} />
            <Route path='/portfolio/CowboyShooter' exact component={CowboyShooter} />

            <Route path='/contact' exact component={Contact} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
