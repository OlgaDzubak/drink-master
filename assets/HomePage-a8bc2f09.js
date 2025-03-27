import{n as o,L as d,j as i,r as s,B as m}from"./index-a5a2844a.js";import{P as x}from"./PageTitle-02aaf15d.js";import{g as p}from"./operationsDrinks-3a9d7698.js";import{D as h}from"./DrinkCard-54492cf4.js";const g=o.section`
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
`,b=o.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`,f=o.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,w=o.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: 0;
  margin-bottom: 16px;
  color: ${e=>e.theme.mainTextColor};
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
`,k=o.p`
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 32px;
  color: ${e=>e.theme.mainTextColor};
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
`,u=o(d)`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  padding: 18px 44px;
  margin-bottom: 47px;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${e=>e.theme.backGroundBtnColor};
  color: ${e=>e.theme.mainBackground};
  border: 2px solid ${e=>e.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover, &:focus {
    border: 2px solid ${e=>e.theme.borderBtnColorHover};
    background-color: ${e=>e.theme.backGroundBtnColorHover};
    color: ${e=>e.theme.mainBackground};
  }

  &:active{
    border: 2px solid ${e=>e.theme.backGroundBtnColorActive};
    background-color: ${e=>e.theme.backGroundBtnColorActive};
    color: ${e=>e.theme.btnColorActive};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 44px;
    margin-bottom: 0px;
  }

`,y=o.img`
  @media screen and (max-width: 767.8px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,j=o.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 60px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,B=o.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
  color: ${e=>e.theme.mainTextColor};
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
`,C=o.ul`
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
`,$=o(d)`
  padding: 18px 44px;  
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${e=>e.theme.backGroundBtnColor};
  color: ${e=>e.theme.mainBackground};
  border: 2px solid ${e=>e.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover,
  &:focus {
    border: 2px solid ${e=>e.theme.borderBtnColorHover};
    background-color: ${e=>e.theme.backGroundBtnColorHover};
    color: ${e=>e.theme.mainBackground};
  }
`,D="/drinkMaster-Team-1/assets/coctailPhoto-1d38e785.png",z=()=>i.jsx(g,{children:i.jsxs(b,{children:[i.jsxs(f,{children:[i.jsxs(w,{children:["Craft Your Perfect",i.jsx("br",{})," Drink with Drink Master"]}),i.jsx(k,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),i.jsx(u,{to:"/add",children:"Add drink"})]}),i.jsx(y,{src:D,alt:"main-coctail"})]})}),H=()=>{const[e,c]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const n=window.innerWidth>=1280?3:window.innerWidth>=768?2:1,t=await p(n),a=Object.entries(t);c([...a])}catch(n){console.error("Error fetching drinks:",n)}})()},[]),i.jsxs(j,{children:[i.jsx(v,{children:e.map(([r,n])=>i.jsxs("li",{children:[i.jsx(B,{children:r}),i.jsx(C,{children:n.map(({_id:t,drink:a,drinkThumb:l})=>i.jsx(h,{location:"home",_id:t,drink:a,drinkThumb:l},t))})]},r))}),i.jsx($,{to:"/drinks",children:"Other Drinks"})]})},P=()=>i.jsxs(i.Fragment,{children:[i.jsx(x,{title:"Home page",hidden:!0}),i.jsx(z,{}),i.jsx(H,{}),i.jsx(m,{})]});export{P as default};
