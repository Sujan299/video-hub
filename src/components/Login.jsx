import { Container, VStack, Heading, Input, Button, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Login() {
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
                    <Heading>Welcome Back</Heading>
                    <Input placeholder={'Email'} type="email" required focusBorderColor={'purple.500'} />
                    <Input type="password" required focusBorderColor={'purple.500'} />
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgotpassword'}>Forget Password</Link>
                    </Button>
                    <Button colorScheme={'purple'} type={'submit'}>Log In</Button>
                    <Text textAlign={
                        "right"
                    }>New user?
                        <Button variant={'link'} colorSceme={'purple'}>
                            <Link to={'/signup'}>Signup</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}
export default Login;