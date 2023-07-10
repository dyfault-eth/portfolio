import { Box, Text, Center, Divider, Stack, useColorMode, useToast, IconButton, SimpleGrid, Button, Image } from "@chakra-ui/react";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

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
npm start >> /var/log/botdiscord/web3-bot.log 2>&1
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
                    <Text className="font-2" fontSize='24px'>Self Hosted Server</Text> 
                </Center> 
                <Divider />
            </Stack>

            <Center mt='16px'>
                <Text>Project presentation: </Text> 
            </Center>

            <Text mt='16px' textAlign='center'>
                I run a personal cloud server on a Raspberry Pi 4 with Raspbian as the operating system. 
                The server utilizes an Apache web server for hosting, and it also serves as the hosting platform for my Discord bots. 
                To secure my cloud server, I generate SSL certificates using Certbot. For managing the server, I have installed Webmin, 
                which allows me to configure Apache as a web server and Nginx as a reverse proxy. 
                I made changes to the Apache configuration to run my ownCloud on a local port with Apache, 
                and then I added Nginx as a reverse proxy on ports 80 and 443 for ownCloud and Webmin, respectively, 
                each hosted on separate subdomains.
            </Text>

            <Text mt='16px' textAlign='center'>
                To enhance security, I implemented Fail2ban with different jails. 
                One jail is dedicated to the Webmin web interface, permanently banning IP addresses after three failed login attempts. 
                Similarly, ownCloud has its own jail that also permanently bans after three failed login attempts. 
                Additionally, I have deployed CrowdSec, a security tool, along with its web-based administration console. 
                This setup ensures the reliable operation and secure management of my Raspberry Pi-based server. 
                With these measures in place, I can administer my server effectively and have peace of mind knowing that the necessary security 
                precautions are in place to protect my personal cloud server and ensure the smooth functioning of my Discord bots.
            </Text>

            <Center>
                <SimpleGrid columns={{base: 1, lg: 2}} mt='24px' gap={2}>
                    <Button as={SkipNavLink} id='crowdsec' href='crowdsec' variant='skipnavbutton'>Skip to Crowdsec</Button>
                    <Button as={SkipNavLink} id='fail2ban' href='fail2ban' variant='skipnavbutton'>Skip to Fail2Ban</Button>
                </SimpleGrid>
            </Center>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' / >
            </Center>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Start bash script example :</Text>

                <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>
                    {startBash}
                </SyntaxHighlighter>
                <IconButton onClick = {() => handleCopyClick(startBash)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Start with screen command script example :</Text>

                <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>
                    {startScreenBash}
                </SyntaxHighlighter>
                <IconButton onClick = {() => handleCopyClick(startScreenBash)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Box>

            <SkipNavContent id="crowdsec"/>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' / >
            </Center>

            <Box mt='32px' position='relative'>
                <Text textAlign='center'>Crowdsec web console example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-crowdsec-console.png" alt="rpi crowdsec web console example" title="crowdsec web console"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec web console alerts :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-crowdsec-console-alerts.png" alt="rpi crowdsec web console alerts example" title="crowdsec web console alerts"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec web console alerts :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-crowdsec-cmd-alerts.png" alt="rpi crowdsec cmd alerts example" title="crowdsec cmd alerts"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec web console alerts :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-crowdsec-cmd-decisions.png" alt="rpi crowdsec cmd decision example" title="crowdsec cmd decision"/>
                </Center>
            </Box>

            <SkipNavContent id="fail2ban"/>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' / >
            </Center>

            <Box mt='32px' position='relative'>
                <Text textAlign='center'>Fail2ban config example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-fail2ban-config.png" alt="rpi fail2ban config" title="fail2ban config"/>
                </Center>
            </Box>

            <Box mt='32px' position='relative'>
                <Text textAlign='center'>Fail2ban jail example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/rpi-fail2ban-jail-example.png" alt="rpi fail2ban webmin jail example" title="fail2ban webmin jail"/>
                </Center>
            </Box>

        </Box>

    return (
        <Box>
            {content}

            <ScrollToTopButton />
        </Box>
    )
}