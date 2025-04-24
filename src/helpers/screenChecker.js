export const screenChecker = () => {
  const { innerWidth: width, innerHeight: height } = window;
  
  return { width, height, };
};