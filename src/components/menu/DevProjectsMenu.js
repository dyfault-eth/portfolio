import { Button, Drawer, 
    DrawerHeader, DrawerBody, 
    DrawerOverlay, DrawerContent, 
    DrawerCloseButton, Center, 
    useDisclosure, useColorModeValue, 
    Divider, Box, AbsoluteCenter } from '@chakra-ui/react'
import { useRef } from 'react';
import { NavButton } from './NavButton';

export const DevProjectsMenu = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const drawerBgColor = useColorModeValue('white', '#13181f');

    return (
        <>
            <Button variant='navbutton' ref={btnRef} onClick={onOpen}>Dev Projects</Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>

                <DrawerContent bg={drawerBgColor}>
                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    
                    <DrawerBody>
                        <Center fontSize='20px' fontWeight='bold'>Development Projects</Center>

                        <Box mt="24px" position="relative">
                            <Divider />
                            <AbsoluteCenter mt="-3px" fontSize="18px" fontWeight="bold">Javascript</AbsoluteCenter>
                        </Box>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter fontSize="16px" fontWeight="bold">Node</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/js-discord-bot">Discord Bot</NavButton>
                        </Center>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/js-web3-bot">Web3 Bot</NavButton>
                        </Center>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter fontSize="16px" fontWeight="bold">React</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/js-web3-app">Web3 App</NavButton>
                        </Center>


                        <Box mt="36px" position="relative">
                            <Divider />
                            <AbsoluteCenter mt="-3px" fontSize="18px" fontWeight="bold">Python</AbsoluteCenter>
                        </Box>

                        <Center mt="32px">
                            <NavButton variant="projectnavbutton" to="/py-scripts">Scripts</NavButton>
                        </Center>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/py-discord-bot">Discord Bot</NavButton>
                        </Center>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}