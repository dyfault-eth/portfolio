import { Box, Center, Text, Stack, Divider, Button, Image, Flex, Kbd } from "@chakra-ui/react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { ScrollToTopButton } from "../../../components/button/ScrollToTopButton";

export const PyDiscordBot = () => {

    const content = 
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
        <Stack>
            <Center>
                <Text fontWeight='bold' fontSize='xl'> Python Discord Bot </Text>
            </Center> 
            <Divider />
        </Stack>

        <Stack>
            <Center mt='12px' display="flex" alignItems='center'>
                You can check the code of this project

            <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/python-discord-bot" target="_blank" rel="noreferrer">here</Button> 
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
                This project is a Discord bot with multiple commands that make API requests to various platforms such as Coingecko, Opensea, 
                and the Fear and Greed Index. Among the different Discord bots featured on this site, this is the first one I created. 
                The bot's different commands are used to retrieve the prices of different cryptocurrencies, 
                fetch the floor price of an NFT collection and the number of daily sales, 
                or obtain indicators such as the total market cap of the crypto market or the Fear and Greed Index. Additionally, underneath each response from the bot, 
                there is a button to rerun the same command, eliminating the need to retype it each time.
            </Text>
        </Stack>

        <Center mt='16px'>
            <Button as={SkipNavLink} id='commands' href='commands' variant='skipnavbutton'>Skip to commands example</Button>
        </Center>

        <Center mt='16px'>
            <Divider w='550px' />
        </Center>

        <Stack mt='16px'>
            <Flex justify='center' alignItems='center'>
                <Text ml='4px'>Here you can see commands list : </Text>
            </Flex>

            <Center>
                <Image w='1000px' src='images/python-discord-bot/command-list-1.png' />
            </Center>

            <Center>
                <Image w='1000px' src='images/python-discord-bot/command-list-2.png' />
            </Center>
        </Stack>

        <SkipNavContent id='commands' />

        <Center mt='16px'>
            <Divider w='550px' />
        </Center>

        <Stack mt='16px'>
            <Flex justify='center' alignItems='center'>
                    <Kbd>/crypto</Kbd> <Text ml='4px'>command example : </Text>
            </Flex>

            <Center>
                <Image w='450px' src='images/python-discord-bot/crypto-command.png' />
            </Center>

            <Flex justify='center' alignItems='center' mt='16px'>
                    <Text mr='4px'>And</Text><Kbd>/crypto</Kbd> <Text ml='4px'>command result example : </Text>
            </Flex>

            <Center>
                <Image w='400px' src='images/python-discord-bot/crypto-command-result.png' />
            </Center>
        </Stack>

        <Center mt='16px'>
            <Divider w='550px' />
        </Center>

        <Stack mt='16px'>
            <Flex justify='center' alignItems='center'>
                    <Kbd>/marketcap</Kbd> <Text ml='4px'>command example : </Text>
            </Flex>

            <Center>
                <Image w='300px' src='images/python-discord-bot/marketcap-command.png' />
            </Center>

            <Flex justify='center' alignItems='center' mt='16px'>
                    <Text mr='4px'>And</Text><Kbd>/marketcap</Kbd> <Text ml='4px'>command result example : </Text>
            </Flex>

            <Center>
                <Image w='450px' src='images/python-discord-bot/marketcap-command-result.png' />
            </Center>
        </Stack>

        <Center mt='16px'>
            <Divider w='550px' />
        </Center>

        <Stack mt='16px'>
            <Flex justify='center' alignItems='center'>
                    <Kbd>/asfloor</Kbd> <Text ml='4px'>command example : </Text>
            </Flex>

            <Center>
                <Image w='300px' src='images/python-discord-bot/asfloor-command.png' />
            </Center>

            <Flex justify='center' alignItems='center' mt='16px'>
                    <Text mr='4px'>And</Text><Kbd>/asfloor</Kbd> <Text ml='4px'>command result example : </Text>
            </Flex>

            <Center>
                <Image w='550px' src='images/python-discord-bot/asfloor-command-result.png' />
            </Center>
        </Stack>

    </Box>

    return (
        <Box>
            {content}

            <ScrollToTopButton />
        </Box>
    )
}