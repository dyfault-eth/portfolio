import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Text, Center, useColorMode } from '@chakra-ui/react';
import { NavButton } from './components/menu/NavButton';
import { DevProjectsMenu } from './components/menu/DevProjectsMenu';
import { SrvProjectsMenu } from './components/menu/SrvProjectsMenu';
import { ToggleColorMode } from './components/menu/ToggleColorMode';
import { Home } from './page/Home';
import { JsDiscordBot } from './page/projects/js/JsDiscordBot';
import { JsScript } from './page/projects/js/JsScript';
import { JsWeb3Bot } from './page/projects/js/JsWeb3Bot';
import { Web3App } from './page/projects/js/Web3App';
import { PyScripts } from './page/projects/py/PyScripts';
import { DebianSelfHosted } from './page/projects/debian/DebianSelfHosted';
import { DebianVps } from './page/projects/debian/DebianVps';
import { Contact } from './page/Contact';
import { NotFound } from './page/NotFound';

function App() {

  const {colorMode} = useColorMode()

  return (
    <Box>
      <Flex bg={colorMode === "dark" ? "#13181f" : "gray.100"} py={4} px={8} justify="space-between" align="center" position={'fixed'} left={0} right={0} zIndex={2}>
        <Text fontSize="xl" fontWeight="bold">Alexis</Text>
        <Text fontSize="xl">Mon Portfolio</Text>
      </Flex>

      <Flex>
          <Flex bg={colorMode === "dark" ? "#13181f" : "gray.100"} direction="column" py={16} px={4} overflowY="auto" spacing="0" position={'fixed'} minH={'full'} zIndex='1'>
            <NavButton variant="navbutton" to="/">Home</NavButton>
            <DevProjectsMenu />
            <SrvProjectsMenu />
            <NavButton variant="navbutton" to="/contact">Contact</NavButton>
            <Box mt='auto'>
              <ToggleColorMode variant='themebutton'/>
            </Box>
      </Flex>

        <Center py={75} width='100%'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/js-discord-bot" element={<JsDiscordBot />} />
            <Route path="/js-web3-bot" element={<JsWeb3Bot />} />
            <Route path="/js-scripts" element={<JsScript />} />
            <Route path="/js-web3-app" element={<Web3App />} />
            <Route path="/py-scripts" element={<PyScripts />} />
            <Route path="/debian-self-hosted-server" element={<DebianSelfHosted />} />
            <Route path="/debian-vps" element={<DebianVps />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Center>

      </Flex>
    </Box>
  );
}

export default App;
