import { Box, Center, Text, Button, useColorMode, Divider, Image, IconButton, Kbd, Flex, Stack, useToast, SimpleGrid } from "@chakra-ui/react";
import { TabsFunction } from "../../../components/page-content/TabsFunction";
import { BitcoinBotWeeklyChart, BitcoinBotMonthlyChart, FearAndGreedDaily, FearAndGreedWeekly, stablesBot } from "../../../components/page-content/codepart/CodePartOfBot";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';


export const JsDiscordBot = () => {

    const { colorMode } = useColorMode();
    const toast = useToast({
        position: 'top',
    });
    const [readmeContent, setReadmeContent] = useState('');

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

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dyfault-eth/stables-discord-bot/main/README.md')
          .then(response => response.text())
          .then(text => setReadmeContent(text))
          .catch(error => console.error(error));
    }, []);
    
    // bitcoin discord bot content
    const bitcoinBotContent = 
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
        <Stack>
            <Center mt='12px' display="flex" alignItems='center'>
                You can check the project on{" "}
                
                <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/bitcoin-discord-bot" target="_blank" rel="noreferrer">my github</Button>
            </Center>
            <Center>
                <Divider w='450px' />
            </Center>
        </Stack>

        <Stack mt='12px'>
            <Text textAlign="center">Project presentation :</Text>
            <Text textAlign="center" py={2}>
                This Discord bot sends a daily graph of Bitcoin's price over the past 7 days to a preconfigured channel by making an API request to fetch the price data. 
                On the 30th day of every month, it sends a graph illustrating Bitcoin's price evolution throughout the month. Each night at 1:05 AM, it delivers 
                the updated Fear and Greed Index value. Additionally, at the end of each week, it generates a bar chart summarizing the week's information.
                I've created a second bot for the token FLAG similar to this one without Fear and Greed features.
            </Text>
        </Stack>

        <Center>
            <SimpleGrid columns={{base: 1, lg: 3}} mt='24px' gap={2}>
                <Button as={SkipNavLink} id='btcmonthly' href='btcmonthly' variant='skipnavbutton'>Skip to Monthly Chart</Button>
                <Button as={SkipNavLink} id='feardaily' href='feardaily' variant='skipnavbutton'>Skip to Fear and Greed daily</Button>
                <Button as={SkipNavLink} id='fearchart' href='fearchart' variant='skipnavbutton'>Skip to Fear and Greed chart</Button>
            </SimpleGrid>
        </Center>

        <Stack>
            <Text mt='24px'> Example of weekly chart made every day :</Text>
            <Center>
                <Image w='600px' src='./images/bitcoin-discord-bot/chart_30-4-2023_10-30-0.png' />
            </Center>

            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text> 
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotWeeklyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotWeeklyChart)} position="absolute" top="55px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <SkipNavContent id='btcmonthly' />

        <Center>
            <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />
        </Center>

        <Stack>
            <Text mt='26px'>Example of monthly chart :</Text>
            <Center>
                <Image w='600px' src='./images/bitcoin-discord-bot/chart_30-5-2023_11-0-0.png' />
            </Center>
            
            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotMonthlyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotMonthlyChart)} position="absolute" top="55px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <SkipNavContent id='feardaily' />

        <Center>
            <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />
        </Center>

        <Stack>
            <Text mt='26px'>Example of Fear and Greed Index every days :</Text>
            <Center>
                <Image w='500px' src='./images/bitcoin-discord-bot/fear-and-greed-discord-bot.png' />
            </Center>

            <Box position='relative'>
            <Text mt="16px">Code example of the Fear and Greed Index daily : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedDaily}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedDaily)} position="absolute" top="55px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <SkipNavContent id='fearchart' />

        <Center>
            <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />
        </Center>

        <Stack>
            <Text mt='24px'>Example of Fear and Greed Index every week :</Text>
            <Center>
                <Image w='600px' src='./images/bitcoin-discord-bot/chart_28-5-2023_1-10-0.png' />
            </Center>

            <Box position='relative'>
                <Text mt="16px">Code example of the Fear and Greed Index weekly : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedWeekly}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedWeekly)} position="absolute" top="55px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

    </Box>
    
    // web3 discord bot content
    const web3BotContent = 
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
        
        <Stack mt='24px'>
            <Text textAlign="center">Project presentation :</Text>
            <Text textAlign='center' py={2}>
                This Discord bot is a project that interacts with the blockchain using the web3.js library. It has multiple commands. 
                The first one is /flag, which takes an argument representing your crypto wallet on the Polygon blockchain. 
                It retrieves your balance of the FLAG cryptocurrency from the For Loot And Glory project, 
                as well as your staking royalty balance with the number of days remaining until your funds are unlocked and your pending FLAG rewards. 
                And provides information about your LP (Liquidity Provider) tokens (FLAG/MATIC or FLAG/ETH), including details about each token within your LP tokens. 
                It also shows any pending rewards. Additionally, there is the Vault command, which is similar to LP Mining but includes compound interest. 
                The /flag command saves your wallet address, total FLAG balance, and $ balance to a JSON file. <br/><br/>
                Another command is /graph, which requires your wallet address and the type of graph (bar or line). 
                This command filters the JSON files using your wallet address, retrieves the saved data, and creates a graph showing your $ total on the Flag dApp over time, 
                as well as the number of FLAG tokens. <br/><br/>
                There is another command related to the FLAG project, which is /flagrewards. It allows you to retrieve the total number of FLAG tokens you have claimed since the beginning of the project.
                <br/><br/> Lastly, there is the /matic command, which retrieves the Matic tokens you own on the Polygon blockchain in different forms, such as Matic, WMatic, StMatic, and AaveMatic.
            
                <br/><br/>
                PS : Every command send you the result in dm
            </Text>
        </Stack>

        <Center>
            <SimpleGrid columns={{base: 1, lg: 3}} mt='24px' gap={2}>
                <Button as={SkipNavLink} id='graph-command' href='graph-command' variant='skipnavbutton'>Skip to /graph</Button>
                <Button as={SkipNavLink} id='flagrewards-command' href='flagrewards-command' variant='skipnavbutton'>Skip to /flagrewards</Button>
                <Button as={SkipNavLink} id='matic-command' href='matic-command' variant='skipnavbutton'>Skip to /matic</Button>
            </SimpleGrid>
        </Center>

        <Box mt='32px'>
            <Flex justify='center' alignItems='center'>
                <Kbd>/flag</Kbd> <Text ml='4px'>command on server : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-flag-command.png' mt='8px' />
            <Image src='./images/web3-discord-bot/web3-flag-command-result-on-server.png' mt='8px' />

            <Flex justify='center' alignItems='center' mt='16px'>
                <Kbd>/flag</Kbd> <Text ml='4px'>command in dm : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-flag-command-result-dm.png' w='750px' mt='8px' />
        </Box>

        <SkipNavContent id='graph-command' />

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />

        <Box mt='26px'>
            <Flex justify='center' alignItems='center'>
                <Kbd>/graph</Kbd> <Text ml='4px'>command on server : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-graph-command.png' mt='8px'/>
            <Image src='./images/web3-discord-bot/web3-graph-command-result-on-server.png' mt='8px'/>

            <Flex justify='center' alignItems='center' mt='24px'>
                <Kbd>/graph</Kbd> <Text ml='4px'>command in dm : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-graph-command-result-dm.png' w='750px' mt='8px'/>
        </Box>

        <SkipNavContent id='flagrewards-command' />

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />

        <Box mt='26px'>
            <Flex justify='center' alignItems='center'>
                <Kbd>/flagrewards</Kbd> <Text ml='4px'>command on server : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-flagrewards-command.png' mt='8px'/>
            <Image src='./images/web3-discord-bot/web3-flagrewards-command-result-on-server.png' mt='8px'/>

            <Flex justify='center' alignItems='center' mt='24px'>
                <Kbd>/flagrewards</Kbd> <Text ml='4px'>command in dm : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-flagrewards-command-result-dm.png' mt='8px'/>
        </Box>

        <SkipNavContent id='matic-command' />

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='32px' />

        <Box mt='26px'>
            <Flex justify='center' alignItems='center'>
                <Kbd>/matic</Kbd> <Text ml='4px'>command on server : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-matic-command.png' mt='8px'/>
            <Image src='./images/web3-discord-bot/web3-matic-command-result-on-server.png' mt='8px'/>

            <Flex justify='center' alignItems='center' mt='24px'>
                <Kbd>/matic</Kbd> <Text ml='4px'>command in dm : </Text>
            </Flex>
            <Image src='./images/web3-discord-bot/web3-matic-command-result-dm.png' mt='8px'/>
        </Box>
        
    </Box>

    // stables discord bot
    const stablesBotContent = 
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
        <Stack mt='12px'>

            <Center mt='12px' display="flex" alignItems='center'>
                You can check the project on{" "}
                
                <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/stables-discord-bot" target="_blank" rel="noreferrer">my github</Button>
            </Center>

            <Center>
                <Divider w='450px' />
            </Center>

            <Text mt='24px'>Project presentation :</Text>
            <Text textAlign='center' py={2}>
                This Discord bot is a project that retrieves the latest listing and sales information from an NFT collection called Stables on the Rarible website 
                using API requests, and sends it to a predefined Discord channel. It provides information about the latest listings and sales of the Stables collection.
            </Text>
        </Stack>

        <Center>
            <SimpleGrid columns={{base: 1, lg: 2}} mt='24px' gap={2}>
                <Button as={SkipNavLink} id='result-example' href='result-example' variant='skipnavbutton'>Skip to result on server</Button>
                <Button as={SkipNavLink} id='code' href='code' variant='skipnavbutton'>Skip to code</Button>
            </SimpleGrid>
        </Center>

        <Stack mt='16px'>
            <Box textAlign='left' className='markdown-body' bg={colorMode === 'dark' ? '#1a202c' : 'rgb(255, 255, 255)'} color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}>
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </Box>
        </Stack>

        <SkipNavContent id='result-example' />

        <Stack mt='16px'>
            <Text>Example : </Text>
            <Center>
                <Image w='550px' src='./images/stables-discord-bot/stables-bot-on-server.png'></Image>
            </Center>

            <SkipNavContent id='code' />

            <Box position='relative'>
            <Text mt="16px">Code example of the stables discord bot : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '13px'}}>
                    {stablesBot}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(stablesBot)} position="absolute" top="55px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>
    </Box>

    const tabs = [
        { label: "Bitcoin Discord Bot", content: bitcoinBotContent },
        { label: "Web3 Discord Bot", content: web3BotContent },
        { label: "Stables Discord Bot", content: stablesBotContent}
    ];

    return (
        <Center>

            <TabsFunction tabs={tabs} />

            <ScrollToTopButton />
            
        </Center>
    );
};