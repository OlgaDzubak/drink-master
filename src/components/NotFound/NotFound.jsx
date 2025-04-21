import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Wrap, Text } from './NotFound.styled';
import { GlassPictureDiv } from '../Home/Home.styled';

const NotFound = ({ text }) => {
  
  const { theme } = useContext(GlobalContext);

  return (
    <Wrap>
      <GlassPictureDiv themeName={theme}/>
      <Text> {text}</Text>
    </Wrap>
  );
};

export default NotFound;
