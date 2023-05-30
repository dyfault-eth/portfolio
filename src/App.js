import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import { NavButton } from './components/NavButton';
import { ToggleColorMode } from './components/ToggleColorMode';
import { Home } from './page/Home';
import { Project } from './page/Project';
import { Contact } from './page/Contact';

function App() {
  return (
    <Box>
      <Flex bg="gray.100" py={4} px={8} justify="space-between" align="center" position={'fixed'} left={0} right={0} zIndex={2}>
        <Text fontSize="xl" fontWeight="bold">Alexis</Text>
        <Text fontSize="xl">Mon Portfolio</Text>
      </Flex>

      <Flex>
          <Flex direction="column" py={16} px={4} bg="gray.100" overflowY="auto" spacing="0" position={'fixed'} minH={'full'} zIndex='1'>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/project">Project</NavButton>
            <NavButton to="/contact">Contact</NavButton>
            <ToggleColorMode/>
          </Flex>

        <Center py={75} px={150}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Center>

      </Flex>
    </Box>
  );
}

export default App;
