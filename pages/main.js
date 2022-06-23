import { useState } from 'react'
import Head from 'next/head'
import { Box, Flex, Text, Button, ButtonGroup } from "@chakra-ui/react"

function About() {
    const [isActive, setActive] = useState(0);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Flex align="center" justify="center" bg='hsl(216, 12%, 8%)' w='375px' h='100vh' color='white' fontFamily='Overpass'>
                <Flex gap='10px' p='20px' align="start" justify="center" w='80%' bg='hsl(213, 19%, 18%)' h='50%' borderRadius='10' direction='column'>
                    <Flex align="center" justify="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px' >
                        <img src="icon-star.svg" alt='star' />
                    </Flex>
                    <Flex>
                        <Text fontSize={24} fontWeight='700'>
                            How did we do?
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={15} fontWeight='400'>
                            Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!
                        </Text>
                    </Flex>
                    <Flex align="center" justify="space-between" w='100%'>
                        <Button display="flex" alignItems="center" justifyContent="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px'>
                            1
                        </Button>
                        <Button display="flex" alignItems="center" justifyContent="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px'>
                            2
                        </Button>
                        <Button display="flex" alignItems="center" justifyContent="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px'>
                            3
                        </Button>
                        <Button display="flex" alignItems="center" justifyContent="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px'>
                            4
                        </Button>
                        <Button display="flex" alignItems="center" justifyContent="center" borderRadius='50%' bg='hsl(216, 12%, 54%)' w='40px' h='40px'>
                            5
                        </Button>
                    </Flex>
                    <Flex align='center' justify='center' w='100%'>
                        <Button w='100%' borderRadius='30px' bgColor='hsl(25, 97%, 53%)'>
                            SUBMIT
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default About