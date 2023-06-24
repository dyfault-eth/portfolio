import { Box, Center, Stack, Text, Divider, useColorMode, IconButton, useToast, Button, SimpleGrid } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { cryptoPriceBash, cryptoPriceJS, btcHistBash, btcHistJS, fearHistBash, fearHistJS, cryptoPriceFront } from "../../../components/page-content/codepart/CodePartOfWeb3App";
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";

export const Web3App = () => {

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

    const content = 
        <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>

            <Stack>
                <Center>
                    <Text fontWeight='bold' fontSize='xl'> Web3 App </Text> 
                </Center> 
                <Divider />
            </Stack>

            <Stack>
                <Center mt='12px' display="flex" alignItems='center'>
                    You can check the project

                <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://app.dyfault.com" target="_blank" rel="noreferrer">here</Button> 
                </Center>

                <Center>
                    <Divider w='300px' />
                </Center>
            </Stack>

            <Stack mt='16px'>
                <Center>
                    <Text> Project presentation: </Text> 
                </Center>

                <Text textAlign='center'>
                    This is my first web project.I created it with the aim of learning React.js and gaining the ability to build a website.
                    The purpose of this project is to create a community web application
                    for one or multiple projects in cryptocurrency,
                    which means that this site directly interacts with the Polygon blockchain.In this project, I also use Redux Toolkit,
                    which I have learned to use, as well as Chakra UI and other libraries related to Web3,
                    particularly WalletConnect with Web3Modal to connect any type of wallet.This project is intended to evolve over time. 
                </Text>
            </Stack>

            <Stack>
                <Text textAlign='center' mt='16px'>
                    Due to Coingecko 's increasing limitations on free API requests for cryptocurrency prices and graphs, 
                    I have implemented three Node.js scripts that make API calls at specific intervals.
                    These scripts retrieve the data and write the responses to JSON files located at the root of my website.
                    In the frontend, I have a
                    function called within my Redux implementation that retrieves the data from these JSON files.
                    This approach allows me to work around the API limitations and ensure consistent access to the cryptocurrency data
                    for the homepage. 
                </Text>

                <Center>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} mt='24px' gap={ 2 } >
                    <Button as={SkipNavLink} id='btchist' href='btchist' variant='skipnavbutton'>Skip to Bitcoin History code</Button>

                    <Button as={SkipNavLink} id='fearhist' href='fearhist' variant='skipnavbutton'>Skip to Fear History code</Button> </SimpleGrid> 
                </Center>



            <Box position='relative'>
                <Center mt='24px' >
                    Example of crypto - prices Bash script:
                </Center>

            <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px'}}>{cryptoPriceBash}</SyntaxHighlighter> 
            <IconButton onClick = {() => handleCopyClick(cryptoPriceBash)} position="absolute" top="63px" right="8px" size="sm" icon={<MdContentCopy />}/> 
            </Box>

            <Box position='relative'>
                <Center mt='24px'>
                    Example of crypto - prices Node.js script:
                </Center>

                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{ fontSize: '14px'}}>{cryptoPriceJS}</SyntaxHighlighter> 
                <IconButton onClick = {() => handleCopyClick(cryptoPriceJS) } position="absolute" top="63px" right="8px" size="sm" icon={< MdContentCopy />}/> 
            </Box>

            <Box position='relative'>
                <Center mt='24px'>
                    Example of the fetchPrice frontend function :
                </Center>

                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{ fontSize: '14px' } }>
                    {cryptoPriceFront}
                </SyntaxHighlighter> 
                <IconButton onClick = {() => handleCopyClick(cryptoPriceFront)} position="absolute" top="63px" right="8px" size="sm" icon={< MdContentCopy />}/> 
            </Box>

            <SkipNavContent id = 'btchist'/>

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' / >
            </Center>

            <Box position='relative' >
                <Center mt='24px' >
                    Example of Bitcoin history Bash script:
                </Center>

                <SyntaxHighlighter language="bash" style={ colorMode === 'dark' ? atomDark : solarizedlight } customStyle={{ fontSize: '14px' }}>{ btcHistBash }</SyntaxHighlighter> 
                <IconButton onClick = {() => handleCopyClick(btcHistBash) } position = "absolute" top = "63px" right = "8px" size = "sm" icon = {< MdContentCopy />}/> 
            </Box>

            <Box position='relative'>
                <Center mt='24px' >
                    Example of Bitcoin history Node.js script:
                </Center>

                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle = {{ fontSize: '14px' }}>{btcHistJS}</SyntaxHighlighter> 
                <IconButton onClick = {() => handleCopyClick(btcHistJS) } position = "absolute" top = "63px" right = "8px" size = "sm" icon = {<MdContentCopy />}/> 
            </Box>

            <SkipNavContent id='fearhist' />

            <Center>
                <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt = '24px' / >
            </Center>

            <Box position = 'relative'>
                <Center mt = '24px'>
                    Example of Fear and Greed history Bash script:
                </Center>

                <SyntaxHighlighter language="bash" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}> 
                    {fearHistBash} 
                </SyntaxHighlighter> 
                <IconButton onClick={() => handleCopyClick(fearHistBash)} position="absolute" top="63px" right="8px" size="sm" icon={<MdContentCopy />} /> 
            </Box>

                <Box position = 'relative' >
                    <Center mt = '24px'>
                        Example of Fear and Greed history Node.js script:
                    </Center>

                    <SyntaxHighlighter language = "javascript" style = {colorMode === 'dark' ? atomDark : solarizedlight} customStyle = {{fontSize: '14px'}}> 
                        {fearHistJS} 
                    </SyntaxHighlighter> 
                    <IconButton onClick={() => handleCopyClick(fearHistJS)} position="absolute" top="63px" right="8px" size="sm" icon={<MdContentCopy />} /> 
                </Box>
            </Stack>
        </Box>

    return( 
        <Center> 
            {content}
            <ScrollToTopButton />
        </Center>
    )
    
}