import { Box, Text, Center, Divider, Stack } from "@chakra-ui/react";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { NavButton } from "../../../components/menu/NavButton";

export const DebianSelfHosted = () => {

    const content = 
        <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>

            <Stack>
                <Center>
                    <Text fontWeight='bold' fontSize='xl'>Self Hosted Server</Text> 
                </Center> 
                <Divider />
            </Stack>

            <Center mt='16px'>
                <Text>Project presentation: </Text> 
            </Center>

            <Text mt='16px' textAlign='left'>
                This server is a Raspberry Pi 4 running Raspbian. I utilize it to host a personal cloud server that employs an Apache web server. 
                Additionally, my Raspberry Pi serves as the hosting platform for all my Discord bots. 
                To generate the SSL certificate for my cloud server, I use Certbot. For running my Discord bots, 
                I utilize bash scripts that launch them using the 'screen' command, and in case of errors, automatically restart them.
            </Text>

            <Center mt='16px'>
                <NavButton variant='skipnavbutton' to='/js-discord-bot'>Discord Bot presentation</NavButton>
            </Center>
        </Box>

    return (
        <Box>
            {content}

            <ScrollToTopButton />
        </Box>
    )
}