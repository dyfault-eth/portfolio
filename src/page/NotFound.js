import { Heading, Text, VStack } from '@chakra-ui/react'

export const NotFound = () => {
    return(
        <VStack spacin={4}>
            <Heading>404 Not Found</Heading>
            <Text>The page you are looking for doesn't exist or an error occured.</Text>
        </VStack>
    )
}