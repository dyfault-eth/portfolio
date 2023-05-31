import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Text, Center, useColorMode } from '@chakra-ui/react';
import { NavButton } from './components/NavButton';
import { ProjectsMenu } from './components/ProjectsMenu';
import { ToggleColorMode } from './components/ToggleColorMode';
import { Home } from './page/Home';
import { JsDiscordBot } from './page/projects/js/JsDiscordBot';
import { JsScript } from './page/projects/js/JsScript';
import { Web3App } from './page/projects/js/Web3App';
import { DebianSelfHosted } from './page/projects/debian/DebianSelfHosted';
import { DebianVps } from './page/projects/debian/DebianVps';
import { Contact } from './page/Contact';

function App() {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box>
      <Flex bg={colorMode === "dark" ? "#13181f" : "gray.100"} py={4} px={8} justify="space-between" align="center" position={'fixed'} left={0} right={0} zIndex={2}>
        <Text fontSize="xl" fontWeight="bold">Alexis</Text>
        <Text fontSize="xl">Mon Portfolio</Text>
      </Flex>

      <Flex>
          <Flex bg={colorMode === "dark" ? "#13181f" : "gray.100"} direction="column" py={16} px={4} overflowY="auto" spacing="0" position={'fixed'} minH={'full'} zIndex='1'>
            <NavButton variant="navbutton" to="/">Home</NavButton>
            <ProjectsMenu />
            <NavButton variant="navbutton" to="/contact">Contact</NavButton>
            <Box mt='auto'>
              <ToggleColorMode variant='themebutton'/>
            </Box>
      </Flex>

        <Center py={75} px={150}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/js-discord-bot" element={<JsDiscordBot />} />
            <Route path="/js-scripts" element={<JsScript />} />
            <Route path="/js-web3-app" element={<Web3App />} />
            <Route path="/debian-self-hosted-server" element={<DebianSelfHosted />} />
            <Route path="/debian-vps" element={<DebianVps />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Center>

      </Flex>
    </Box>
  );
}

export default App;
