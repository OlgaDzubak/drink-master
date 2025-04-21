const INTERECTIVE_SELECTORS = ['a', 'button', 'input', 'textarea', '[tabindex]'];

export const disableTab = () => {
  const modalW = document.querySelector('.modal');
  let elements = document.querySelectorAll(INTERECTIVE_SELECTORS.toString());
  
  for (let i = 0; i < elements.length; i++) {
     if (!modalW.contains(elements[i])) {
         if (elements[i].getAttribute('tabindex') !== '-1') {
               elements[i].setAttribute('tabindex', '-1');
         }
     }
 }
}

export const enableTab = () => {
  let elements = document.querySelectorAll(INTERECTIVE_SELECTORS.toString());
  
  for (let i = 0; i < elements.length; i++) {
         if (elements[i].getAttribute('tabindex') === '-1') {
               elements[i].setAttribute('tabindex', '0');
         }
  }
}