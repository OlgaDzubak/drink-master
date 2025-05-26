import { animateScroll } from 'react-scroll';

export const scrollToBottom = () => {

  const options = {
    duration: 1500,
    smooth: true,
  };
  animateScroll.scrollToBottom(options);
}