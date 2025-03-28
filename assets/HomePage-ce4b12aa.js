import{n as i,L as d,j as e,r as s,B as m}from"./index-008af0ae.js";import{P as x}from"./PageTitle-a6f22ab9.js";import{g as p}from"./operationsDrinks-4a272210.js";import{D as h}from"./DrinkCard-55938629.js";const g=i.section`
  display: flex;

  @media screen and (max-width: 767px) {
    margin-bottom: 110px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 160px;
  }
`,b=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`,f=i.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,w=i.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: 0;
  margin-bottom: 16px;
  color: ${o=>o.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
    font-size: 64px;
    line-height: 1.06;
    margin-bottom: 28px;
  }
`,k=i.p`
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 32px;
  color: ${o=>o.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    margin-bottom: 40px;
  }
`,u=i(d)`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  padding: 18px 44px;
  margin-bottom: 47px;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${o=>o.theme.backGroundBtnColor};
  color: ${o=>o.theme.mainBackground};
  border: 2px solid ${o=>o.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover, &:focus {
    border: 2px solid ${o=>o.theme.borderBtnColorHover};
    background-color: ${o=>o.theme.backGroundBtnColorHover};
    color: ${o=>o.theme.mainBackground};
  }

  &:active{
    border: 2px solid ${o=>o.theme.backGroundBtnColorActive};
    background-color: ${o=>o.theme.backGroundBtnColorActive};
    color: ${o=>o.theme.btnColorActive};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 44px;
    margin-bottom: 0px;
  }

`,y=i.img`
  @media screen and (max-width: 767.8px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,j=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 60px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,B=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
  color: ${o=>o.theme.mainTextColor};
  transition: color var(--transition);

  @media (max-width: 320px) {
    font-size: 26px;
  }

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`,C=i.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 767px) {
    li:nth-of-type(2) {
      display: none;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    flex-basis: calc(100% - 20px / 2);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    flex-basis: calc(100% - 40px / 3);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: block;
    }
  }
`,$=i(d)`
  padding: 18px 44px;  
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${o=>o.theme.backGroundBtnColor};
  color: ${o=>o.theme.mainBackground};
  border: 2px solid ${o=>o.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover,
  &:focus {
    border: 2px solid ${o=>o.theme.borderBtnColorHover};
    background-color: ${o=>o.theme.backGroundBtnColorHover};
    color: ${o=>o.theme.mainBackground};
  }
`,D="/drink-master-frontend/assets/coctailPhoto-1d38e785.png",z=()=>e.jsx(g,{children:e.jsxs(b,{children:[e.jsxs(f,{children:[e.jsxs(w,{children:["Craft Your Perfect",e.jsx("br",{})," Drink with Drink Master"]}),e.jsx(k,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),e.jsx(u,{to:"/add",children:"Add drink"})]}),e.jsx(y,{src:D,alt:"main-coctail"})]})}),H=()=>{const[o,c]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const n=window.innerWidth>=1280?3:window.innerWidth>=768?2:1,t=await p(n),a=Object.entries(t);c([...a])}catch(n){console.error("Error fetching drinks:",n)}})()},[]),e.jsxs(j,{children:[e.jsx(v,{children:o.map(([r,n])=>e.jsxs("li",{children:[e.jsx(B,{children:r}),e.jsx(C,{children:n.map(({_id:t,drink:a,drinkThumb:l})=>e.jsx(h,{location:"home",_id:t,drink:a,drinkThumb:l},t))})]},r))}),e.jsx($,{to:"/drinks",children:"Other Drinks"})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Home page",hidden:!0}),e.jsx(z,{}),e.jsx(H,{}),e.jsx(m,{})]});export{P as default};
