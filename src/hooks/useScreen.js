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

export const useBreakPoint = () => {
  const [breakPoint, setbreakPoint] = useState(375);

  useEffect(() => {

    function handleChangeBreakPoint() {
      if (screenChecker().width >= 1440 && useBreakPoint !== 1440) {
        setbreakPoint(1440);
      }else if (screenChecker().width >= 768 && screenChecker().width < 1440 && useBreakPoint !== 768) {
        setbreakPoint(768);
      } else if (screenChecker().width < 768 && useBreakPoint !== 375) {
        setbreakPoint(375);
      }      
    }

    window.addEventListener('resize', handleChangeBreakPoint);
    return () => window.removeEventListener('resize', handleChangeBreakPoint);
  }, []);

  return breakPoint;
};