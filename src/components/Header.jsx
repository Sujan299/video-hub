import { BiMenuAltLeft } from 'react-icons/bi';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,

} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
function Header() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>

            <Button
                pos={'fixed'}
                top={'4'}
                left={'4'}
                onClick={onOpen}
                zIndex={'overlay'}
            >
                <BiMenuAltLeft />
            </Button>
            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
                <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>
                            VIDEO HUB
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack alignItems={'flex-start'}>
                                <Button
                                onClick={onClose}
                                variant={'ghost'}
                                >
                                    <Link to={'/'}>Home</Link>
                                </Button>
                                <Button
                                onClick={onClose}
                                variant={'ghost'}
                                >
                                    <Link to={'/videos'}>Videos</Link>
                                </Button>
                                <Button
                                onClick={onClose}
                                variant={'ghost'}
                                >
                                    <Link to={'/videos?category=free'}>Free videos</Link>
                                </Button>
                                <Button
                                onClick={onClose}
                                variant={'ghost'}
                                >
                                    <Link to={'/upload'}>Upload Video</Link>
                                </Button>
                            </VStack>
                            <HStack 
                            pos={'absolute'}
                            bottom={'10'}
                            w={'full'}
                            left={'0'}
                            justifyContent={'space-evenly'}
                            >
                                <Button
                                onClick={onClose}
                                variant={'ghost'}
                                >
                                    <Link to={'/login'}>Login</Link>
                                </Button>
                                <Button
                                onClick={onClose}
                                variant={'outline'}>
                                    <Link to={'/signup'}>Sign Up</Link>
                                </Button>
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
            </Drawer>
        </>
    )
}
export default Header;