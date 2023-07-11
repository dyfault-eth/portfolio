import { Box, Text, Center, Divider, Stack, Image, IconButton, useColorMode, useToast, SimpleGrid, Button } from "@chakra-ui/react";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";

export const DebianVps = () => {

    const { colorMode } = useColorMode();

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

    const toast = useToast({
        position: 'top',
    });

    const dappNginx = `server {
    listen 80;
    server_name app.dyfault.com;
    return 301 https://$server_name$request_uri;
}
    
server {
    listen      443 ssl;
    server_name  app.dyfault.com;
    ssl_certificate /etc/letsencrypt/live/dyfault.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dyfault.com/privkey.pem;
    
    access_log  /var/log/nginx/app.dyfault.com/access.log  main;
    
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    add_header Referrer-Policy "no-referrer";
    add_header X-Frame-Options "SAMEORIGIN";
    
    location / {
        root   /var/www/dapp/;
        index  index.html index.htm;
    
        proxy_intercept_errors on;
        error_page 400 500 404 /;
    
        proxy_pass    http://localhost:3000;
        proxy_set_header Host $proxy_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    }
    
    error_page  404              /index.html;
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
}`

    const content = 
        <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>

            <Stack>
                <Center>
                    <Text className="font-2" fontSize='24px'> VPS Server</Text> 
                </Center> 
                <Divider />
            </Stack>

            <Center mt='16px'>
                <Text>Project presentation: </Text> 
            </Center>

            <Text mt='16px' textAlign='center'>
                This server is a VPS that I rented. It is the first server where I have used Nginx as a reverse proxy. 
                On this server, I host two websites: my web application web3 and this portfolio, along with a dedicated backend for this portfolio. 
                Both of these sites are run by the JavaScript web server PM2. For my web3 application, 
                I have JavaScript scripts that are regularly executed to retrieve data through API requests. For the wildcard SSL certificate, I use Certbot.
            </Text>

            <Text mt='16px' textAlign='center'>
                In terms of security, Fail2ban was installed and configured by default to protect SSH connections and firewall connections. 
                Additionally, I have installed the IPS Crowdsec to safeguard against abnormal behaviors 
                such as web vulnerability scans or attempts to exploit CVE vulnerabilities.
            </Text>

            <Center>
                <SimpleGrid columns={{base: 1, lg: 2}} mt='24px' gap={2}>
                    <Button as={SkipNavLink} id='crowdsec-console' href='crowdsec-console' variant='skipnavbutton'>Skip to Crowdsec Console</Button>
                    <Button as={SkipNavLink} id='crowdsec-cli' href='crowdsec-cli' variant='skipnavbutton'>Skip to Crowdsec CLI</Button>
                </SimpleGrid>
            </Center>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' / >
            </Center>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>pm2 web server status :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-pm2-webserver.png" alt="VPS pm2 web server" title="pm2 web server"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Nginx config example :</Text>

                <SyntaxHighlighter language="" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>
                    {dappNginx}
                </SyntaxHighlighter>
                <IconButton onClick = {() => handleCopyClick(dappNginx)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Box>

            <SkipNavContent id="crowdsec-console"/>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' / >
            </Center>

            <Box mt='32px' position='relative'>
                <Text textAlign='center'>Crowdsec console example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-crowdsec-console.png" alt="VPS Crowdsec console" title="VPS Crowdsec console"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec console stats example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-crowdsec-console-stats.png" alt="VPS Crowdsec console stats" title="VPS Crowdsec console stats"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec console alerts example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-crowdsec-console-alerts.png" alt="VPS Crowdsec console alerts" title="VPS Crowdsec console alerts"/>
                </Center>
            </Box>

            <SkipNavContent id="crowdsec-cli"/>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' / >
            </Center>

            <Box mt='32px' position='relative'>
                <Text textAlign='center'>Crowdsec cli alerts example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-crowdsec-cmd-alerts.png" alt="VPS Crowdsec cli alerts" title="VPS Crowdsec cli alerts"/>
                </Center>
            </Box>

            <Box mt='16px' position='relative'>
                <Text textAlign='center'>Crowdsec cli decision example :</Text>
                
                <Center mt='8px'>
                    <Image src="./images/server/vps-crowdsec-cmd-decision.png" alt="VPS Crowdsec cli decision" title="VPS Crowdsec cli decision"/>
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