import { Button, Drawer, 
    DrawerHeader, DrawerBody, 
    DrawerOverlay, DrawerContent, 
    DrawerCloseButton, Center, 
    useDisclosure, useColorModeValue, 
    Divider, Box, AbsoluteCenter } from '@chakra-ui/react'
import { useRef } from 'react';
import { NavButton } from './NavButton';

export const ProjectsMenu = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const drawerBgColor = useColorModeValue('white', '#13181f');

    return (
        <>
            <Button variant='navbutton' ref={btnRef} onClick={onOpen}>Projects</Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>

                <DrawerContent bg={drawerBgColor}>
                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    
                    <DrawerBody>
                        <Center fontSize='20px' fontWeight='bold'>JavaScript</Center>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter>Node</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="js-discord-bot">Discord Bot</NavButton>
                        </Center>

                        <Center>
                            <NavButton variant="projectnavbutton" to="js-scripts">Scripts</NavButton>
                        </Center>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter>React</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="js-web3-app">Web3 App</NavButton>
                        </Center>


                        <Divider mt="16px" />
                        <Center mt="18px" fontSize='20px' fontWeight='bold'>Linux Server</Center>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter>Debian</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="debian-self-hosted-server">Self Hosted Server</NavButton>
                        </Center>

                        <Center>
                            <NavButton variant="projectnavbutton" to="debian-vps">VPS</NavButton>
                        </Center>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}