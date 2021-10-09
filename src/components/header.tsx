import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as={'header'} position={'sticky'} top={0}>
      <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }}
            bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')}
            borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton onClick={onToggle} variant={'ghost'} aria-label={'Toggle Navigation'}
                      icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                      } />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text fontFamily={'heading'}
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                color={useColorModeValue('gray.800', 'white')}>
            Link Cloud
          </Text>

          {/*<Flex display={{ base: 'none', md: 'flex' }} ml={10}>*/}
          {/*  <DesktopNav />*/}
          {/*</Flex>*/}
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'/login'}>
            로그인
          </Button>
          <Button as={'a'} fontSize={'sm'} fontWeight={600} color={'white'} href={'/register'}
                  bg={'green.400'} _hover={{ bg: 'green.300' }}>
            회원가입
          </Button>
        </Stack>
      </Flex>

      {/*<Collapse in={isOpen} animateOpacity>*/}
      {/*  <MobileNav />*/}
      {/*</Collapse>*/}
    </Box>
  )
};

export default Header;
