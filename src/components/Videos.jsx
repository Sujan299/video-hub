import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import video1 from '../assets/lecture1.mp4';
import video2 from '../assets/lecture2.mp4';
import video3 from '../assets/lecture3.mp4';
const videosArr = [
    video1,
    video2,
    video3,
];

function Videos() {
    const [videoSrc, setVideoSrc] = useState(videosArr[0]);
    return (
        <Stack direction={['column', 'row']} h={'100vh'}>
            <VStack
                w={'full'}
            >
                <video
                    controls
                    controlList="nodownload"
                    src={videoSrc}
                    autoPlay
                    style={
                        {
                            width: '100%',
                            height: '50%'
                        }
                    }></video>
                <VStack
                    alignItems={'flex-start'}
                    p={'8'}
                    w={'full'}
                    overflowY={'auto'}
                >
                    <Heading>Sample Video</Heading>
                    <Text>This is a sample video for testing and demo</Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']}
                alignItems={'stretch'}
                p='8'
                overflow={'auto'}

            >
                {
                   videosArr.map(
                    function (item,index){
                        return  <Button
                        onClick={
                            function(){
                                setVideoSrc(item);
                            }
                        }
                        
                        variant={'ghost'} colorScheme={'purple'}>
                        Lecture {index + 1}
                    </Button>
                    }
                   )
                }
            </VStack>

        </Stack>
    )
}
export default Videos;