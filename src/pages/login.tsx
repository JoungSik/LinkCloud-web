import React, { useEffect } from 'react';
import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { User } from '../api';
import { UserType } from '../models/user.interface';

const Login = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    userinfo => User.login({ email: userinfo.email, password: userinfo.password }), {
      onMutate: async (user: UserType) => {
        const previousTodos = queryClient.getQueryData<UserType>('user');
        return { previousTodos };
      },
      onSuccess: (response, variables, context) => {
        queryClient.setQueryData<UserType>('user', {
          ...response.data,
          authorization: response.headers.authorization
        });
      },
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<UserType>('user', context.previousTodos);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('user')
      },
    });

  useEffect(() => {
    mutation.mutate({ email: 'tjstlr2010@gmail.com', password: 'qwer1234' });
  }, []);

  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>로그인</Heading>
          <FormControl id="email">
            <FormLabel>이메일</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>비밀번호</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'} disabled={mutation.isLoading}>로그인</Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
};

export default Login;
