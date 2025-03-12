import { Title, ContainerError, Image } from './ErrorPage.styled';
import image from '../../assets/images/NotFoundImg/error_blue_iced_tea_1.png';

const ErrorPage = () => {

  return  <ContainerError>
            <Title>Error 404. Page not found</Title>
            <Image src={image} alt="404"></Image>
          </ContainerError>
};

export default ErrorPage;
