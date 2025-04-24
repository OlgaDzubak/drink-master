import {useState, useEffect} from 'react';
import { screenChecker } from '../helpers/screenChecker';

export const useBreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState(375);

  useEffect(() => {

    function handleChangeBreakPoint() {
      
      const screenWidth = screenChecker().width;
      
      if (screenWidth >= 1280 && breakPoint !== 1280) { setBreakPoint(1280);
      }else if (screenWidth >= 768 && screenWidth < 1280 && breakPoint !== 768) { setBreakPoint(768);
      } else if (screenWidth < 768 && breakPoint !== 375) { setBreakPoint(375); }      
    }
    handleChangeBreakPoint();
    
    window.addEventListener('resize', handleChangeBreakPoint);

    return () => window.removeEventListener('resize', handleChangeBreakPoint);
  }, []);

  return breakPoint;
};