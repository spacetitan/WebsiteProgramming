import React from 'react';
import { useLayoutEffect } from 'react'

import {Helmet} from 'react-helmet';
import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/index';

import Projects from './Pages/projects.js';
import FullSwingGolfSimulator from './Pages/Projects/FullSwingGolfSimulator';
import FullSwingLaunchMonitor from './Pages/Projects/FullSwingLaunchMonitor';
import SCEGameshow from './Pages/Projects/SCEGameshow';
import PokerGoHoldEm from './Pages/Projects/PokerGoHoldEm';
import OsirisNewDawn from './Pages/Projects/OsirisNewDawn';
import Maelstrom from './Pages/Projects/Maelstrom';
import TPMS from './Pages/Projects/TPMS';
import FPPCH from './Pages/Projects/FPPCH';
import BumperBalls from './Pages/Projects/BumperBalls';
import CowboyShooter from './Pages/Projects/CowboyShooter';

import Contact from './Pages/contact';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <Helmet>

      <title>{ "Benjamin Navarro" }</title>

        <style className='style'>
          {
            'body { background-color : #EDF2F4; color: #0C1521; }'
          }
        </style>
      </Helmet>


      <Router basename='/'>
        <NavBar />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/portfolio' element={<Projects/>} />
            <Route path='/portfolio/SCEGameshow' exact element={<SCEGameshow/>} />
            <Route path='/portfolio/FullSwingGolfSimulator' exact element={<FullSwingGolfSimulator/>} />
            <Route path='/portfolio/FullSwingLaunchMonitor' exact element={<FullSwingLaunchMonitor/>} />
            <Route path='/portfolio/PokerGoHoldEm' exact element={<PokerGoHoldEm/>} />
            <Route path='/portfolio/OsirisNewDawn' exact element={<OsirisNewDawn/>} />
            <Route path='/portfolio/Maelstrom' exact element={<Maelstrom/>} />
            {/* <Route path='/portfolio/TPMS' exact element={<TPMS/>} />
            <Route path='/portfolio/FPPCH' exact element={<FPPCH/>} />
            <Route path='/portfolio/BumperBalls' exact element={<BumperBalls/>} />
            <Route path='/portfolio/CowboyShooter' exact element={<CowboyShooter/>} /> */}

            {/* <Route path='/contact' element={<Contact/>} /> */}
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
