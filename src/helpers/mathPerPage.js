export const mathPerPage = (breakPoint) => {
  switch (breakPoint) {
    case 1280: return 3;
    case 768: return 2;
    case 375: return 1;
    default: return 1;  
  }
}