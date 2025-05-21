import { Button } from './AddToFavoriteBtn.styled';

export const AddToFavoriteBtn = ({ text, onClick }) => {
  return  <Button
            onClick={onClick}
            aria-label={text === 'Add to favorite drinks' ? 'add to favorites' : 'remove from favorites'}
          >{text}</Button>
};
