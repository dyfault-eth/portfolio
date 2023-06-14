import { Box, Center, useColorMode, useToast, Stack, Button, Divider, Text, IconButton, SimpleGrid } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { ScrollToTopButton } from '../../../components/button/ScrollToTopButton'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

export const PyScripts = () => {

    const [readmeContent, setReadmeContent] = useState('');
    const { colorMode } = useColorMode();
    const toast = useToast({
        position: 'top',
    });

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dyfault-eth/py-monitoring/main/README.md')
          .then(response => response.text())
          .then(text => setReadmeContent(text))
          .catch(error => console.error(error));
    }, []);

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

    const code = `import os
    import subprocess
    from email.message import EmailMessage
    import ssl
    import smtplib
    from dotenv import load_dotenv
    
    
    load_dotenv()
    
    
    class Colors:
        RED = '\\033[91m'
        GREEN = '\\033[92m'
        RESET = '\\033[0m'
    
    
    user = os.getenv('USER')
    recipients = os.getenv("recipients")
    password = os.getenv('password')
    
    ip_1 = os.getenv('IP1')
    ip_2 = os.getenv('IP2')
    server_1 = os.getenv('NAME1')
    server_2 = os.getenv('NAME2')
    server_3 = os.getenv('NAME3')
    
    
    def send_email(subject, body):
        sender = user
    
        # create message
        msg = EmailMessage()
        msg['From'] = sender
        msg['To'] = recipients
        msg['Subject'] = subject
        msg.set_content(body)
        context = ssl.create_default_context()
    
        # Send email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(user, password)
            smtp.sendmail(user, recipients, msg.as_string())
    
    
    def check_server(server_name, ip_address):
        # Check ping
        print("\\n----------PING----------")
        ping_cmd = ['ping', '-c', '1', ip_address]
        ping_result = subprocess.run(ping_cmd, capture_output=True, text=True)
        if ping_result.returncode != 0:
            error_message = f"Le serveur {server_name} est inaccessible. Ping Failed.\\n\\n"
            error_message += f"Résultat du ping :\\n{ping_result}"
            send_email('Serveur inaccessible', error_message)
            print(Colors.RED, ping_result, Colors.RESET)
        else:
            print(Colors.GREEN, ping_result, Colors.RESET)
    
        # Check DNS
        print("\\n----------DNS----------")
        dns_cmd = ['nslookup', server_name]
        dns_result = subprocess.run(dns_cmd, capture_output=True, text=True)
        if dns_result.returncode != 0:
            error_message = f"Le serveur {server_name} rencontre un problème de résolution DNS. nslookup failed.\\n\\n"
            error_message += f"Résultat de nslookup :\\n{dns_result}"
            send_email('Problème DNS', error_message)
            print(Colors.RED, dns_result, Colors.RESET)
        else:
            print(Colors.GREEN, dns_result, Colors.RESET)
    
        # Check HTTPS connection
        print("\\n----------HTTPS----------")
        curl_cmd = ['curl', '-I', f'https://{server_name}:443']
        curl_result = subprocess.run(curl_cmd, capture_output=True, text=True)
        print(curl_result)
        if curl_result.returncode != 0:
            error_message = f"La connexion HTTPS au serveur {server_name} a échoué. curl failed.\\n\\n"
            error_message += f"Résultat de curl :\\n{curl_result}"
            send_email('Connexion HTTPS échouée', error_message)
            print(Colors.RED, curl_result, Colors.RESET)
            print(test)
        else:
            print(Colors.GREEN, curl_result, Colors.RESET)
    
    
    check_server(server_1, ip_1)
    check_server(server_2, ip_2)
    check_server(server_3, ip_2)`

    const content =
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>

        <Stack>
            <Center>
                <Text fontWeight='bold' fontSize='xl'>Python Scripts</Text>
            </Center>
            <Divider />
        </Stack>

        <Stack>
            <Center mt='12px' display="flex" alignItems='center'>
                You can check the project on{" "}
                
                <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/py-monitoring" target="_blank" rel="noreferrer">my github</Button>
            </Center>
            <Center>
                <Divider w='450px' />
            </Center>
        </Stack>

        <Center>
            <SimpleGrid mt='24px'>
                <Button as={SkipNavLink} id='code' href='code' variant='skipnavbutton'>Skip to code</Button>
            </SimpleGrid>
        </Center>
        

        <Stack mt='16px'>
            <Box className='markdown-body' bg={colorMode === 'dark' ? '#1a202c' : 'rgb(255, 255, 255)'} color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}>
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </Box>
        </Stack>

        <SkipNavContent id='code' />

        <Divider mt='32px' />

        <Box position='relative'>
            <Center mt='24px'>
                Example of crypto-prices Bash script :
            </Center>

            <SyntaxHighlighter language="python" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                {code}
            </SyntaxHighlighter>
            <IconButton onClick={() => handleCopyClick(code)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
        </Box>
    </Box>

    return(
        <Center>
            {content}

            <ScrollToTopButton />
        </Center>
    )
}