import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { DrawerBody, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import { NavButton } from './NavButton';
import { DevProjectsMenu } from './DevProjectsMenu';
import { SrvProjectsMenu } from './SrvProjectsMenu';
import { ToggleColorMode } from './ToggleColorMode';

export function MenuPhone() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const drawerBgColor = useColorModeValue('white', '#13181f');

    return (
        <>
            <IconButton ml='0px' ref={btnRef} onClick={onOpen}>
                {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            </IconButton>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>

                <DrawerContent bg={drawerBgColor}>

                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack>
                            <NavButton variant="projectnavbutton" to="/">Home</NavButton>
                            <DevProjectsMenu />
                            <SrvProjectsMenu />
                            <NavButton variant="projectnavbutton" to="/contact">Contact</NavButton>
                            <ToggleColorMode variant="projectthemebutton"/>
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}