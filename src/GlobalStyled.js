import { css } from '@emotion/react';
import Notiflix from "notiflix";

const GlobalStyles = css`
*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
    src: url('../src/assets/fonts/Manrope-Regular.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
   src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  :root {
    --mainbackground-color: #0A0A11;
    --white-color: #F3F3F3;
    --whiteeighty-color: rgba(243, 243, 243, 0.8);
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --whitefourty-color: rgba(243, 243, 243, 0.4);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);
    --modal-backdrop:  rgba(243, 243, 243, 0);
    --blue-color: #161f37;
    --bluefifty-color: rgba(22, 31, 55, 0.5);
    --hovergreen-color:#4070cd;
    --welcomepagetext-color: #FAFAFA;
    --buttoncancel-color: #434D67;
    --red-color: #DA1414;
    --green-color: #3CBC81;
    --transition: 400ms ease-in; 
    --transition2000: 2000ms ease-in; 
  }

  html{
    min-width: 375px;
  }

  body {
    margin : 0;
    font-family: 'Manrope', sans-serif;
    word-wrap: break-word;
    line-height: 1.2;
    //overflow: auto;
    overflow-y: scroll;
    color: var(--white-color);
    background-color: var(--mainbackground-color);
}

  div#root {
    position: relative;
    overflow-x: hidden;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
}

button {
  cursor: pointer;
  font-family: inherit;
}

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
        -webkit-text-fill-color: inherit;
        -webkit-text-stroke-color: inherit;
        -webkit-border-before;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
         caret-color: inherit;
         transition: background-color 3000s ease-in-out 0s, color 3000s ease-in-out 0s;
  }
`;

Notiflix.Notify.init({
  position: 'right-top',
  distance: '70px',
  timeout: 3000,
  borderRadius: '5px',
  fontFamily: 'Manrope, sans-serif',
  fontSize: "15px",
  success: {
    background: '#BCE6D2',
    textColor: '#161F37',
  },
  failure: {
    background: 'rgb(238, 85, 121)',
    textColor: '#F3F3F3',
  }
});

export default GlobalStyles;
