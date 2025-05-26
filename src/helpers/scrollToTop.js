import { animateScroll } from 'react-scroll';

export const scrollToTop = () => {

  const options = {
    duration: 1500,
    smooth: true,
  };
  animateScroll.scrollToTop(options);
}