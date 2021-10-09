import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as={'footer'}
         bg={useColorModeValue('gray.50', 'gray.900')}
         color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }}
                 spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
        <Text>© 2020 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  )
};

export default Footer;
