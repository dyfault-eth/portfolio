import './App.css';
import React, {useRef, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Flex, Text, Center, useColorMode, VStack, Skeleton } from '@chakra-ui/react';
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
import { MenuPhone } from './components/menu/MenuPhone';
import { PyDiscordBot } from './page/projects/py/PyDiscordBot';

function App() {

  const {colorMode} = useColorMode()
  const menuRef = useRef(null);
  const [menuW, setMenuW] = useState('')
  const [widthLoad, setWidthLoad] = useState(false)

  const getMenuWidth = () => {
    if (menuRef.current) {
       setMenuW(menuRef.current.offsetWidth);
    } else {
      setMenuW('')
    }
  };

useEffect(() => {
  getMenuWidth()
  setWidthLoad(true)
})

  return (
    <Box>
      <Flex w='100%' maxW='100%' bg={colorMode === "dark" ? "#13181f" : "gray.100"} py={4} px={8} justify="space-between" align="center" position={'fixed'} left={0} right={0} zIndex={2}>
        <Box bg={colorMode === "dark" ? "#13181f" : "gray.100"} display={{base: 'block', lg: 'none'}}>
          <MenuPhone />
        </Box>
        <Text fontSize="xl" fontWeight="bold">Alexis</Text>
        <Text fontSize="xl">My Portfolio</Text>
      </Flex>

      <Flex>
          <VStack bg={colorMode === "dark" ? "#13181f" : "gray.100"} 
                  py={16} px={4} 
                  overflowY="auto" 
                  spacing="0" 
                  position={'fixed'} 
                  minH={'full'} zIndex='1'
                  display={{ base: 'none', lg: 'flex' }}
                  alignItems='center' ref={menuRef}
          >
            <NavButton variant="navbutton" to="/">Home</NavButton>
            <DevProjectsMenu />
            <SrvProjectsMenu />
            <NavButton variant="navbutton" to="/contact">Contact</NavButton>
            <ToggleColorMode variant='themebutton'/>
          </VStack>

            <Center py={75} ml={`${menuW}px`} w={`calc(100% - ${menuW}px)`}>
              <Skeleton isLoaded={widthLoad} fadeDuration={2}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/js-discord-bot" element={<JsDiscordBot />} />
                  <Route path="/js-web3-bot" element={<JsWeb3Bot />} />
                  <Route path="/js-web3-app" element={<Web3App />} />
                  <Route path="/py-scripts" element={<PyScripts />} />
                  <Route path="/py-discord-bot" element={<PyDiscordBot />} />
                  <Route path="/debian-self-hosted-server" element={<DebianSelfHosted />} />
                  <Route path="/debian-vps" element={<DebianVps />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </Skeleton>
            </Center>

      </Flex>
    </Box>
  );
}

export default App;
