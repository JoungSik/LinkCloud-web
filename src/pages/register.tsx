import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react';

const Register = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>회원가입</Heading>
          <FormControl id="email">
            <FormLabel>이메일</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="name">
            <FormLabel>이름</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>비밀번호</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>회원가입</Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
};

export default Register;
