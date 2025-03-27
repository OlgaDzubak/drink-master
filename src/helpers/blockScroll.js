//активація/дезактивація скрола
const objScroll = {
  
  scrollPosition: 0,

  disabledScroll() {
      objScroll.scrollPosition = window.scrollY;
      document.body.style.cssText = ` top: -${objScroll.scrollPosition}px;
                                      position: fixed;
                                      width: 100%;
      `;
  },

  enabledScroll() {
      document.body.removeAttribute('style');
      window.scroll({top: objScroll.scrollPosition});
  },
}

export default objScroll;