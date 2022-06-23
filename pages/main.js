import { Box, Flex, Text } from "@chakra-ui/react"

function About() {
    return (
        <Flex align="center" justify="center" bg='hsl(216, 12%, 8%)' w='375px' h='100vh' color='white'>
            <Flex p='20px' align="start" justify="center" w='80%' bg='hsl(213, 19%, 18%)' h='50%' borderRadius='10' direction='column'>
                <Flex align="center" justify="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='30px' h='30px' >
                    <img src="icon-star.svg" alt='star' />
                </Flex>
                <Flex>
                    <Text fontSize={24} fontWeight='bold'>
                        How did we do?
                    </Text>
                </Flex>
                <Flex>
                    <Text>
                        Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!
                    </Text>
                </Flex>
                <Flex>1 2 3 4 5</Flex>
                <Flex>SUBMIT</Flex>
            </Flex>
        </Flex>
    )
}

export default About