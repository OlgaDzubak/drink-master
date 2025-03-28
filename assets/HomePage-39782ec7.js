import{n as e,L as d,j as o,r as s,B as m}from"./index-f3961108.js";import{P as x}from"./PageTitle-b11cc390.js";import{g as p}from"./operationsDrinks-98e9909d.js";import{D as h}from"./DrinkCard-11fc4066.js";const g=e.section`
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
`,b=e.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`,f=e.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,w=e.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: 0;
  margin-bottom: 16px;
  color: ${i=>i.theme.mainTextColor};
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
`,k=e.p`
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 32px;
  color: ${i=>i.theme.mainTextColor};
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
`,u=e(d)`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  padding: 18px 44px;
  margin-bottom: 47px;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${i=>i.theme.backGroundBtnColor};
  color: ${i=>i.theme.mainBackground};
  border: 2px solid ${i=>i.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover, &:focus {
    border: 2px solid ${i=>i.theme.borderBtnColorHover};
    background-color: ${i=>i.theme.backGroundBtnColorHover};
    color: ${i=>i.theme.mainBackground};
  }

  &:active{
    border: 2px solid ${i=>i.theme.backGroundBtnColorActive};
    background-color: ${i=>i.theme.backGroundBtnColorActive};
    color: ${i=>i.theme.btnColorActive};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 44px;
    margin-bottom: 0px;
  }

`,y=e.img`
  @media screen and (max-width: 767.8px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,j=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 60px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,B=e.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
  color: ${i=>i.theme.mainTextColor};
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
`,C=e.ul`
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
`,$=e(d)`
  padding: 18px 44px;  
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${i=>i.theme.backGroundBtnColor};
  color: ${i=>i.theme.mainBackground};
  border: 2px solid ${i=>i.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover,
  &:focus {
    border: 2px solid ${i=>i.theme.borderBtnColorHover};
    background-color: ${i=>i.theme.backGroundBtnColorHover};
    color: ${i=>i.theme.mainBackground};
  }
`,D="/drink-master/assets/coctailPhoto1-c449d4e8.jpg",z=()=>o.jsx(g,{children:o.jsxs(b,{children:[o.jsxs(f,{children:[o.jsxs(w,{children:["Craft Your Perfect",o.jsx("br",{})," Drink with Drink Master"]}),o.jsx(k,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),o.jsx(u,{to:"/add",children:"Add drink"})]}),o.jsx(y,{src:D,alt:"main-coctail"})]})}),H=()=>{const[i,c]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const n=window.innerWidth>=1280?3:window.innerWidth>=768?2:1,t=await p(n),a=Object.entries(t);c([...a])}catch(n){console.error("Error fetching drinks:",n)}})()},[]),o.jsxs(j,{children:[o.jsx(v,{children:i.map(([r,n])=>o.jsxs("li",{children:[o.jsx(B,{children:r}),o.jsx(C,{children:n.map(({_id:t,drink:a,drinkThumb:l})=>o.jsx(h,{location:"home",_id:t,drink:a,drinkThumb:l},t))})]},r))}),o.jsx($,{to:"/drinks",children:"Other Drinks"})]})},P=()=>o.jsxs(o.Fragment,{children:[o.jsx(x,{title:"Home page",hidden:!0}),o.jsx(z,{}),o.jsx(H,{}),o.jsx(m,{})]});export{P as default};
