import { Box, Center, Text, Button, useColorMode, Divider, Image, IconButton, Kbd, Flex, Stack, useToast } from "@chakra-ui/react";
import { TabsFunction } from "../../../components/page-content/TabsFunction";
import { BitcoinBotWeeklyChart, BitcoinBotMonthlyChart, FearAndGreedDaily, FearAndGreedWeekly, stablesBot } from "../../../components/page-content/codepart/CodePartOfBot";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";

export const JsDiscordBot = () => {

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
            <Text textAlign="left" py={2}>
                This Discord bot sends a daily graph of Bitcoin's price over the past 7 days to a preconfigured channel by making an API request to fetch the price data. 
                On the 30th day of every month, it sends a graph illustrating Bitcoin's price evolution throughout the month. Each night at 1:05 AM, it delivers 
                the updated Fear and Greed Index value. Additionally, at the end of each week, it generates a bar chart summarizing the week's information.
                I've created a second bot for the token FLAG similar to this one without Fear and Greed features.
            </Text>
        </Stack>

        <Stack>
            <Text mt='24px'> Example of weekly chart made every day :</Text>
            <Center>
                <Image mt='16px' w='600px' src='./images/bitcoin-discord-bot/chart_30-4-2023_10-30-0.png' />
            </Center>

            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text> 
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotWeeklyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotWeeklyChart)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <Stack>
            <Text mt='24px'>Example of monthly chart :</Text>
            <Center>
                <Image mt='16px' w='600px' src='./images/bitcoin-discord-bot/chart_30-5-2023_11-0-0.png' />
            </Center>
            
            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotMonthlyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotMonthlyChart)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <Stack>
            <Text mt='24px'>Example of Fear and Greed Index every days :</Text>
            <Center>
                <Image mt='16px' w='500px' src='./images/bitcoin-discord-bot/fear-and-greed-discord-bot.png' />
            </Center>

            <Box position='relative'>
            <Text mt="16px">Code example of the Fear and Greed Index daily : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedDaily}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedDaily)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

        <Stack>
            <Text mt='24px'>Example of Fear and Greed Index every week :</Text>
            <Center>
                <Image mt='16px' w='600px' src='./images/bitcoin-discord-bot/chart_28-5-2023_1-10-0.png' />
            </Center>

            <Box position='relative'>
                <Text mt="16px">Code example of the Fear and Greed Index weekly : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedWeekly}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedWeekly)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>
        </Stack>

    </Box>
    
    // web3 discord bot content
    const web3BotContent = 
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
        
        <Stack mt='24px'>
            <Text textAlign="center">Project presentation :</Text>
            <Text textAlign='left' py={2}>
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

        <Box mt='16px'>
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

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' />

        <Box mt='24px'>
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

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' />

        <Box mt='24px'>
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

        <Divider w={['350px', null, '650px', '750px', '850px', '950px']} mt='24px' />

        <Box mt='24px'>
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

            <Text>Project presentation :</Text>
            <br/>
            <Text textAlign='left'>
                This Discord bot is a project that retrieves the latest listing and sales information from an NFT collection called Stables on the Rarible website 
                using API requests, and sends it to a predefined Discord channel. It provides information about the latest listings and sales of the Stables collection.
            </Text>

        </Stack>

        <Stack mt='16px'>
            <Text>Example : </Text>
            <Center>
                <Image w='550px' src='./images/stables-discord-bot/stables-bot-on-server.png'></Image>
            </Center>

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
            
        </Center>
    );
};