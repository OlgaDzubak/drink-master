import {useState, useEffect} from 'react';

const screenChecker = () => {
  const { innerWidth: width, innerHeight: height } = window;
  
  return { width, height, };
};

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