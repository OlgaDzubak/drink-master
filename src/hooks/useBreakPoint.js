import {useState, useEffect} from 'react';
import { breakPointChecker } from '../helpers/breakPointChecker';

export const useBreakPoint = () => {

  const [breakPoint, setBreakPoint] = useState();

  useEffect(() => {

    function handleChangeBreakPoint() {

      let bp;
      const width = window.innerWidth;
      
      if (width >= 1280) {
        bp = 1280;
      } else if (width >= 768) {
        bp = 768;
      } else {
        bp = 375;
      }
      setBreakPoint(bp);
    }    
   handleChangeBreakPoint();
    
    window.addEventListener('resize', handleChangeBreakPoint);

    return () => window.removeEventListener('resize', handleChangeBreakPoint);
  }, []);

  return breakPoint;
};