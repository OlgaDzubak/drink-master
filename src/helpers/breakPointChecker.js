import { screenChecker } from "./screenChecker";    

export const breakPointChecker = () => {
      
  const { width } = screenChecker();
  
  if (width >= 1280) {
    return 1280;
  } else if (width >= 768) {
    return 768;
  } else {
    return 375;
  }
}

