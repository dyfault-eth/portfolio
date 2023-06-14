import { Box, Text, Center, Divider, Stack, useColorMode, useToast, IconButton } from "@chakra-ui/react";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { NavButton } from "../../../components/menu/NavButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";

export const DebianSelfHosted = () => {

    const { colorMode } = useColorMode();
    const toast = useToast({
        position: 'top',
    });

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Success",
            description: "copied to clipboard",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const startBash = `# /bin/sh
while true
do
echo Starting Bot
npm start
echo Restarting Bot in 5 Seconds...
sleep 5
done`

    const startScreenBash = `# /bin/sh

cd /var/www/botdiscord/web3-bot
screen -dmS web3-bot ./start.sh`

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

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' / >
            </Center>

            <Stack mt='16px'>
                <Text textAlign='center'>Start bash script example :</Text>

                <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>
                    {startBash}
                </SyntaxHighlighter>
                <IconButton onClick = {() => handleCopyClick(startBash)} position="absolute" top="63px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Stack>

            <Stack mt='16px'>
                <Text textAlign='center'>Start with screen command script example :</Text>

                <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>
                    {startScreenBash}
                </SyntaxHighlighter>
                <IconButton onClick = {() => handleCopyClick(startScreenBash)} position="absolute" top="63px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Stack>
        </Box>

    return (
        <Box>
            {content}

            <ScrollToTopButton />
        </Box>
    )
}