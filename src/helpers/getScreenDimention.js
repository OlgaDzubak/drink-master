export const getScreenDimantion = () => {
  const { innerWidth: width, innerHeight: height } = window;
  
  return { width, height, };
};
