import { Box, Text, Center, Stack, Divider } from "@chakra-ui/react";

export const Home = () => {
    return(
        <Box overflowY='auto' w={['375px', null, '650px', '750px', '1000px', '1250px']}> 

            <Stack>
                <Center>
                    <Text fontWeight='bold' fontSize='xl'>Welcome to my Portfolio</Text>
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
        </Box>
    )
}