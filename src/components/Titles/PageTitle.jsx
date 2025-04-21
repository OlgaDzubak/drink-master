import { Title } from './Titles.styled';

const PageTitle = ({ title, hidden, marginBottom }) => {

  return <Title hidden={hidden} marginBottom={marginBottom}>{title}</Title>
  
};

export default PageTitle;
