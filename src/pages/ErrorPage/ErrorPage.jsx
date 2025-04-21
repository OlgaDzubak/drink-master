import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Title, ContainerError } from './ErrorPage.styled';
import { GlassPictureDiv } from '../../components/Home/Home.styled';

const ErrorPage = () => {
  
  const { theme } = useContext(GlobalContext);

  return  <ContainerError>
            <Title>4</Title>
            <GlassPictureDiv themeName={theme}/>
            <Title>4</Title>
          </ContainerError>
};

export default ErrorPage;
