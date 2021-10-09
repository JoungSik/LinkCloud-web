import { Button, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <h1>Hello Home</h1>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  )
};

export default Home;
