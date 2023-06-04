import { Box, Center, Text, Button, useColorMode, Divider, Image, IconButton } from "@chakra-ui/react";
import { TabsFunction } from "../../../components/page-content/TabsFunction";
import { BitcoinBotWeeklyChart, BitcoinBotMonthlyChart, FearAndGreedDaily, FearAndGreedWeekly } from "../../../components/page-content/codepart/CodePartOfBot";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";

export const JsDiscordBot = () => {

    const { colorMode } = useColorMode();

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text);
    };
    
    // bitcoin discord bot content
    const bitcoinBotContent = 
    <Box w='1250px'>
        <Center mt='12px' display="flex" alignItems='center'>
            You can check the project on{" "}
            
            <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/bitcoin-discord-bot" target="_blank" rel="noreferrer">my github</Button>
        </Center>
        <Center>
            <Divider w='450px' />
        </Center>
        

        <Box mt='12px'>
            <Text textAlign="center">Project presentation :</Text>
            <br />
            <Text textAlign="left">
                This Discord bot sends a daily graph of Bitcoin's price over the past 7 days to a preconfigured channel by making an API request to fetch the price data. 
                On the 30th day of every month, it sends a graph illustrating Bitcoin's price evolution throughout the month. Each night at 1:05 AM, it delivers 
                the updated Fear and Greed Index value. Additionally, at the end of each week, it generates a bar chart summarizing the week's information.
            </Text>

            <Text mt='24px'> Example of weekly chart made every day :</Text>
            <Image mt='16px' w='600px' src='./images/chart_30-4-2023_10-30-0.png' />

            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text> 
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotWeeklyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotWeeklyChart)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>


            <Text mt='24px'>Example of monthly chart :</Text>
            <Image mt='16px' w='600px' src='./images/chart_30-5-2023_11-0-0.png' />

            <Box position='relative'>
                <Text mt="16px">Code example of the chart : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {BitcoinBotMonthlyChart}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(BitcoinBotMonthlyChart)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>

            <Text mt='24px'>Example of Fear and Greed Index every days :</Text>
            <Image mt='16px' w='500px' src='./images/fear-and-greed-discord-bot.png' />

            <Box position='relative'>
            <Text mt="16px">Code example of the Fear and Greed Index daily : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedDaily}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedDaily)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>

            <Text mt='24px'>Example of Fear and Greed Index every week :</Text>
            <Image mt='16px' w='600px' src='./images/chart_28-5-2023_1-10-0.png' />

            <Box position='relative'>
                <Text mt="16px">Code example of the Fear and Greed Index weekly : </Text>
                <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                    {FearAndGreedWeekly}
                </SyntaxHighlighter>
                <IconButton onClick={() => handleCopyClick(FearAndGreedWeekly)} position="absolute" top="40px" right="8px" size="sm" icon={<MdContentCopy />} />
            </Box>

        </Box>

    </Box>
    
    // web3 discord bot content
    const web3BotContent = <Box>Web3</Box>

    // stables discord bot
    const stablesBotContent = <Box>Stables</Box>

    const tabs = [
        { label: "Bitcoin Bot", content: bitcoinBotContent },
        { label: "Web3 Bot", content: web3BotContent },
        { label: "Stables Bot", content: stablesBotContent}
    ];

    return (
        <Center>
            <TabsFunction tabs={tabs} />
        </Center>
    );
};