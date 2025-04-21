import { TitleH2 } from './Titles.styled';

const SectionTitle = ({ title, hidden, marginBottom }) => {

  return <TitleH2 hidden={hidden} marginBottom={marginBottom}>{title}</TitleH2>
  
};

export default SectionTitle;
