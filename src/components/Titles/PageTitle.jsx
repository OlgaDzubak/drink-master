import { Title } from './Titles.styled';

const PageTitle = ({id="", title="", hidden=false, marginBottom="10px" }) => {

  return <Title id={id} hidden={hidden} marginBottom={marginBottom}>{title}</Title>
  
};

export default PageTitle;
