import { css } from '@emotion/react';

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
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --whitefourty-color: rgba(243, 243, 243, 0.4);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);;
    --blue-color: #161F37;
    --bluefifty-color: rgba(22, 31, 55, 0.5);
    --hovergreen-color: rgba(64, 112, 205, 0.5);
    --welcomepagetext-color: #FAFAFA;    
    --buttoncancel-color: #434D67;
    --red-color: #DA1414;
    --green-color: #3CBC81;
    
    
    --transition: 300ms ease-in; 
  }

  body {
    min-width: 375px;
    margin : 0;
    font-family: 'Manrope', sans-serif;
    word-wrap: break-word;
    line-height: 1.2;
    overflow-y: scroll;
    overflow-x: hidden;
    color: var(--white-color);
    background-color: var(--mainbackground-color);
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
        -webkit-text-fill-color: var(--white-color);
        -webkit-text-stroke-color: var(--white-color);
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        caret-color: var(--white-color);
        transition: background-color 3000s ease-in-out 0s, color 3000s ease-in-out 0s;
    }  
  }
}
`;

export default GlobalStyles;
