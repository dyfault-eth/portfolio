import { Box, Text, Center, Stack, Divider, SimpleGrid, Image } from "@chakra-ui/react";

export const Home = () => {
    return(
        <Box overflowY='auto' w={['375px', null, '650px', '750px', '1000px', '1250px']}> 

            <Stack>
                <Center>
                    <Text className="font-2" fontSize='32px'>Welcome to my Portfolio</Text>
                </Center>
                <Divider />
            </Stack>

            <Stack mt='16px'>

                <Text textAlign='center'>My Presentation : </Text>

                <Text textAlign='center' mt='8px'>
                Allow me to introduce myself, my name is Alexis and I'm 22 years old. 
                I completed a 2-year training program in computer science specialized in systems and networks at a training center in France, and I graduated in June 2022.
                <br/><br/>
                Afterward, I resumed programming, which I had previously set aside, and I intensified my activities starting from November 2022. 
                On this website that I personally developed using JavaScript with React.js, 
                I showcase my various personal programming projects as well as the two personal servers that I own and administer. 
                The goal of this website is to continue evolving over time, and it will be regularly updated with new developments or project creations.
                <br/><br/>
                I am passionate about blockchain, cryptocurrency, and economics. 
                I also have a strong interest in computer science, security, and privacy. In the near future, 
                I plan to acquire skills in smart contract development using the Solidity programming language.
                <br/><br/>
                If you need anything, please don't hesitate to contact me through the contact page.
                </Text>
            </Stack>

            <Stack>
                <Center>
                    <SimpleGrid mt='50px' columns='7' gap={6}>
                        <Image w='90px' src="./images/logo/javascript.jpg" alt="logo javascript" title="javascript" />
                        <Image w='100px' src="./images/logo/react-logo.png" alt="logo react.js" title="react.js" />
                        <Image w='100px' src="./images/logo/node-js.png" alt="logo node.js" title="node.js" />
                        <Image w='100px' src="./images/logo/python.png" alt="logo python" title="python" />
                        <Image w='100px' src="./images/logo/linux.png" alt="logo linux" title="linux" />
                        <Image w='100px' src="./images/logo/debian.png" alt="logo debian" title="debian" />
                        <Image w='100px' src="./images/logo/nginx.png" alt="logo nginx" title="nginx webserver" />
                    </SimpleGrid>
                </Center>

                <Center>
                    <SimpleGrid mt='16px' columns='3' gap={6}>
                        <Image w='100px' src="./images/logo/bitcoin.png" alt="logo bitcoin" title="bitcoin" />
                        <Image w='100px' src="./images/logo/ethereum.png" alt="logo ethereum" title="ethereum" />
                        <Image w='100px' borderRadius='50%' src="./images/logo/matic.png" alt="logo matic" title="matic" />
                    </SimpleGrid>
                </Center>
            </Stack>
        </Box>
    )
}