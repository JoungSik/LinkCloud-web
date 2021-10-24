import { useEffect, useState } from 'react';
import { Container, Grid, Progress } from '@chakra-ui/react';
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
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
        <NewLinkBox />
        {
          links.map(link => <LinkBox key={link.id} link={link} />)
        }
      </Grid>
    </Container>
  )
};

export default Home;
