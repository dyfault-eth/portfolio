import { Box, Text, Center, Divider, Stack } from "@chakra-ui/react";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { NavButton } from "../../../components/menu/NavButton";

export const DebianVps = () => {

    const content = 
        <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>

            <Stack>
                <Center>
                    <Text fontWeight='bold' fontSize='xl'> VPS Server</Text> 
                </Center> 
                <Divider />
            </Stack>

            <Center mt='16px'>
                <Text>Project presentation: </Text> 
            </Center>

            <Text mt='16px' textAlign='center'>
                This server is a VPS that I rent. Initially, I chose it to host my web3 application and this portfolio. 
                This has allowed me to learn how to set up a reverse proxy to host multiple websites with a single server. 
                To run my two sites, I use pm2, and it's my first time using nginx as a web server. Finally, the wildcard SSL certificate was generated using certbot.
            </Text>

            <Center mt='16px'>
                <NavButton variant='skipnavbutton' to='/js-web3-app'>Web3 App presentation</NavButton>
            </Center>
        </Box>

    return (
        <Box>
            {content}

            <ScrollToTopButton />
        </Box>
    )
}