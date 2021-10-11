import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from '../api/link';
import { LinkType } from '../models/link.interface';
import useLocalStorage from '../utils/storage';

const NewLinkBox = () => {
  const queryClient = useQueryClient();

  const { storedValue } = useLocalStorage('user');
  const [link, setLink] = useState<LinkType>({ name: 'naver', url: 'https://naver.com', tag_list: 'naver' });

  const mutation = useMutation(
    link => Link.createLink(storedValue.authorization, link), {
      onMutate: async (link: LinkType) => {
        setLink({} as LinkType);
        await queryClient.cancelQueries('links')

        const previousTodos = queryClient.getQueryData<LinkType[]>('links')
        if (previousTodos) {
          queryClient.setQueryData<LinkType[]>('links', previousTodos.concat(link))
        }
        return { previousTodos }
      },
      onSuccess: () => onClose(),
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<LinkType[]>('links', context.previousTodos)
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('links')
      },
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = () => {
    mutation.mutate(link);
  }

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Flex p={6} flex={1} align={'center'} justify={'center'}>
          <Button colorScheme="teal" size="lg" onClick={onOpen}>링크 추가</Button>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>링크 추가</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl id="name" isRequired>
              <FormLabel>이름</FormLabel>
              <Input placeholder="이름" />
            </FormControl>
            <FormControl id="url" isRequired mt={2}>
              <FormLabel>주소</FormLabel>
              <Input placeholder="URL" />
            </FormControl>
            <FormControl id="tag_list" isRequired mt={2}>
              <FormLabel>태그</FormLabel>
              <Input placeholder="Frontend, Backend" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>취소</Button>
            <Button colorScheme="blue" onClick={onSubmit}>저장</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default NewLinkBox;
