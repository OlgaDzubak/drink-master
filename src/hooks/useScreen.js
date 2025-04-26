import {useState, useEffect} from 'react';
import { screenChecker } from '../helpers/screenChecker';

export const useScreen = () => {
  const [screenSize, setScreenSize] = useState(screenChecker());

  useEffect(() => {
    function handleResize() {
      setScreenSize(screenChecker());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};