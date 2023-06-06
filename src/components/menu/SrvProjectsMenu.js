import { Button, Drawer, 
    DrawerHeader, DrawerBody, 
    DrawerOverlay, DrawerContent, 
    DrawerCloseButton, Center, 
    useDisclosure, useColorModeValue, 
    Divider, Box, AbsoluteCenter } from '@chakra-ui/react'
import { useRef } from 'react';
import { NavButton } from './NavButton';

export const SrvProjectsMenu = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const drawerBgColor = useColorModeValue('white', '#13181f');

    return (
        <>
            <Button variant='navbutton' ref={btnRef} onClick={onOpen}>Srv Projects</Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>

                <DrawerContent bg={drawerBgColor}>
                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    
                    <DrawerBody>
                        <Center fontSize='20px' fontWeight='bold'>Server / Network Projects</Center>

                        <Box mt="24px" position="relative">
                            <Divider />
                            <AbsoluteCenter mt="-3px" fontSize="18px" fontWeight="bold">Linux</AbsoluteCenter>
                        </Box>

                        <Box position='relative' padding='8'>
                            <Divider mt="3px" />
                            <AbsoluteCenter fontSize="16px" fontWeight="bold">Debian</AbsoluteCenter>
                        </Box>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/debian-vps">VPS</NavButton>
                        </Center>

                        <Center>
                            <NavButton variant="projectnavbutton" to="/debian-self-hosted-server">Self Hosted Server</NavButton>
                        </Center>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}