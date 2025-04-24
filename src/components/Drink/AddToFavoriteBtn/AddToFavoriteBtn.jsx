import { Button } from './AddToFavoriteBtn.styled';

export const AddToFavoriteBtn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};
