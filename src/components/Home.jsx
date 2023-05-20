import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
// D:\Web developement\two\node_modules\react-responsive-carousel\lib\styles\carousel.min.css
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
}


function Home() {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m={'auto'}
                >
                    Services
                </Heading>
                <Stack
                    h='full'
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img1} h={['40', '400']}
                        filter={'hue-rotate(-130deg)'} />
                    <Text
                    letterSpacing={"widest"}
                    lineHeight={'190%'}
                    p={['4','16']}
                    textAlign={'center'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores rem, qui doloribus iusto vero cupiditate doloremque quisquam recusandae molestias ex architecto itaque repellat quia? Ratione harum consequuntur totam perferendis.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
export default Home;

function MyCarousel() {
    return <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w='full' h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is cool
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is for Gaming
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is Enjoy
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is Relax
            </Heading>
        </Box>
    </Carousel>;
}
