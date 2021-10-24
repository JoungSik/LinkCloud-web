import { useEffect, useState } from 'react';
import { Container, Progress, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Link } from '../api/link';
import { LinkType } from '../models/link.interface';
import LinkBox from '../components/link';
import NewLinkBox from '../components/new_link';
import useLocalStorage from '../utils/storage';

const Home = () => {
  const { storedValue } = useLocalStorage('user');
  const { status, data } = useQuery('links', () => Link.links(storedValue.authorization));

  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    if (data) {
      setLinks(data as LinkType[]);
    }
  }, [data]);

  if (status === 'loading') {
    return (
      <Container maxW="container.xl">
        <Progress size="xs" isIndeterminate colorScheme={'whiteAlpha'} />
      </Container>
    )
  }

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} spacing={10} minChildWidth={120} mt={5}>
        <NewLinkBox />
        {
          links.map(link => <LinkBox key={link.id} link={link} />)
        }
      </SimpleGrid>
    </Container>
  )
};

export default Home;
