import { Button, Drawer, 
    DrawerHeader, DrawerBody, 
    DrawerOverlay, DrawerContent, 
    DrawerCloseButton, Center, 
    useDisclosure, useColorMode, 
    useColorModeValue, Divider, Box, AbsoluteCenter } from '@chakra-ui/react'
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

                        <Box position='relative' padding='8' style={{ textAlign: 'center' }}>
                            <Divider mt="3px" />
                            <AbsoluteCenter>Node</AbsoluteCenter>
                        </Box>

                        <Center mt='12px'>
                            <NavButton variant="projectnavbutton" to="discord-bot">Discord Bot</NavButton>
                        </Center>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}