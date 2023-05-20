import {Box, Stack,Heading, Button, HStack,VStack,Input,Text} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () =>{
    return <Box
    bgColor={'blackAlpha.900'}
    minH={'40'}
    p='16'
    color={'white'}
    >
        <Stack
        direction={['column', 'row']}
        
        >
            <VStack
            w={'full'}>
                <Heading 
                textAlign={['center','left']}
                
                
                size='md' textTransform={'uppercase'}>
                    Subscribe to get updates
                </Heading>
                <HStack
            borderBottom={'2px solid white'}
            
            >
                <Input placeholder={'Enter Email here...'}
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor={'none'}
                />
                <Button
                p={'0'}
                variant={'ghost'}
                borderRadius={'0 4 4 0'}
                >
                    <AiOutlineSend
                    size={'20'}
                    
                    />
                </Button>
            </HStack>
            </VStack>
            <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none','1px solid white']}
            >
                <Heading textTransform={'uppercase'}
                textAlign={'center'}>
                    Video Hub
                </Heading>
                <Text>All rights recieved</Text>
            </VStack>
            <VStack
            w={'full'}
            >
                <Heading textTransform={'uppercase'}
                textAlign={'center'}
                size='md'>
                    Social Media
                </Heading>
                <Button variant={'link'}
                colorScheme={'whiteAlpha'}>
                    <a href={'www.youtube.com'}>Youtube</a>
                </Button>
            </VStack>

        </Stack>
    </Box>
}
export default Footer;