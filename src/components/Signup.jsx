import { Container, VStack, Heading, Input, Button, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <Container maxW={'container.xl'}
            h={'100vh'

            }
            p={'16'}>
            <form>
                <VStack
                    alignItems={'stretch'}
                    spacing={'8'}
                    w={['full','96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading
                    alignSelf={'center'}
                    boxSize={'32'}
                    
                    >VIDEO HUB</Heading>
                    <Input placeholder={'Name'} type="text" required focusBorderColor={'purple.500'} />

                    <Input placeholder={'Email'} type="email" required focusBorderColor={'purple.500'} />
                    <Button colorScheme={'purple'} type={'submit'}>Signup</Button>
                    <Text textAlign={
                        "right"
                    }>Already Signup?
                        <Button variant={'link'} colorSceme={'purple'}>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}
export default Signup;