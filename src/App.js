import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { NavButton } from './components/NavButton';
import { Home } from './page/Home';
import { Project } from './page/Project';
import { Contact } from './page/Contact';

function App() {
  return (
    <Box>

      <Box>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/project">Project</NavButton>
        <NavButton to="/contact">Contact</NavButton>
      </Box>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/project' element={ <Project/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>

    </Box>
  );
}

export default App;
