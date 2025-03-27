import{r,n as p,G as E,j as n,D as H,a as F,b as M,E as z}from"./index-8d8c1de9.js";import{g as B,a as N}from"./operationsFilters-49fdd87c.js";import{P as A}from"./PageTitle-b3e0e29c.js";import{a as U}from"./operationsDrinks-4c0c5b8f.js";import{N as G,D as K,P as V,o as W}from"./Paginator-2f7ecfe7.js";import{S as b}from"./react-select.esm-c2b50820.js";import"./DrinkCard-dac62872.js";const Z=t=>t.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" "),q=(t="")=>({label:Z(t),value:t}),S=(t=[])=>t.length===0?[]:t.map(a=>q(a)),J=t=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"}));p.div`
  
`;const Q=p.form`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }
  
`,X=p.label`

`,Y=p.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,ee=p.input`
  font-family: inherit;
  font-size: 14px;
  line-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${t=>t.theme.filterDrinksBorderColor};
  color: ${t=>t.theme.mainTextColor};
  transition: border-color var(--transition), background-color var(--transition);

  &::placeholder{
    color: ${t=>t.theme.mainTextColor};
  }

  &:hover, &:focus{
    border-color:  ${t=>t.theme.filterDrinksBorderColorHover};
  };

  @media (min-width: 768px) {
    font-size: 17px;
    width: 264px;
  }
`,te=p.span`
    position: absolute;
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    outline: none;
`,oe=p(J)`
    width: 20px;
    height: 20px;
    stroke: ${t=>t.theme.mainTextColor};

    &:hover, &:focus{
      stroke-width: 1.8;
    };
`,j=(t,c,a,o)=>({control:(e,l)=>({...e,padding:"10px 16px 10px 22px",fontFamily:"inherit",fontSize:"17px",lineHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${o.navBackgroundColorHover}`,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:e=>({...e,padding:"0",color:`${o.footerTextColor}`}),input:e=>({...e,padding:"0",margin:"0",color:`${o.footerTextColor}`,cursor:"text"}),singleValue:(e,l)=>({...e,color:`${o.selectInputColor}`}),placeholder:e=>({...e,color:`${o.footerTextColor}`}),indicatorSeparator:e=>({display:"none"}),menu:e=>({...e,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",lineHeight:"1.56",backgroundColor:`${o.selectMenuBackground}`,border:"none",borderRadius:"20px",transition:"all 600ms ease-in-out","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:e=>({...e,padding:"0",maxHeight:`${t}`,minHeight:`${c}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(e,{data:l,isDisabled:i,isFocused:g,isSelected:d})=>({...e,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:a===""?`${o.selectOptionColor}`:d?`${o.selectOptionColor_focused}`:`${o.selectOptionColor}`,cursor:i?"not-allowed":"pointer",transition:"color var(--transition)",":hover":{...e[":hover"],color:`${o.selectOptionColor_focused}`},":active":{...e[":active"],borderRadius:"200px"}}),dropdownIndicator:(e,l)=>({...e,transform:l.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${o.selectDropdownIndicatorColor}`,cursor:"pointer",":hover":{...e[":hover"],color:`${o.selectdropdownIndicatorColorHover}`}}),clearIndicator:e=>({...e,display:"none"})}),re=({categoryList:t,ingredientList:c,onChangeFilter:a})=>{const{theme:o}=r.useContext(E),e=o==="dark"?{...H}:{...F},[l,i]=r.useState(""),[g,d]=r.useState(""),k=s=>{a("keyword",s.target.value.trim())},h=(s,u)=>{s?a("category",s.value):a("category","")},y=(s,u)=>{s?a("ingredient",s.value):a("ingredient","")};return n.jsxs(Q,{children:[n.jsx(X,{children:n.jsxs(Y,{children:[n.jsx(ee,{type:"text",placeholder:"Enter the text",id:"inputKeyword",onChange:k}),n.jsx(te,{children:n.jsx(oe,{})})]})}),n.jsx(b,{isClearable:!0,placeholder:"All categories",options:S(t),onChange:h,styles:j("300px","297px",l,e),name:"categories"}),n.jsx(b,{isClearable:!0,placeholder:"Ingredients",options:S(c),defaultValue:"Ingredients",onChange:y,styles:j("280px","276px",g,e),name:"ingredients"})]})},ne=({categoryList:t,ingredientList:c})=>{r.useContext(E);const[a,o]=r.useState(""),[e,l]=r.useState(""),[i,g]=r.useState(""),[d,k]=r.useState([]),[h,y]=r.useState(0),[s,u]=r.useState(1),[m]=r.useState(window.innerWidth>=1280?9:10),[v,C]=r.useState(!1),[L,I]=r.useState(null);r.useEffect(()=>{(async(x="",T="",_="",R=1,O=10)=>{try{C(!0);const{drinks:w,totalResults:P}=await U(x,T,_,R,O);y(P),k(w)}catch(w){if(w.code!=="ERR_CANCELED")throw I(w),Error("Oops! Something went wrong! Try reloading the page!")}finally{C(!1)}})(a,e,i,s,m)},[a,e,i,s,m]);const $=(f,x="")=>{switch(f){case"keyword":o(x),u(1);break;case"category":l(x),u(1);break;case"ingredient":g(x),u(1);break}},D=({selected:f})=>{W(h,f,m,u)};return n.jsxs(n.Fragment,{children:[n.jsx(re,{categoryList:t,ingredientList:c,onChangeFilter:$}),v?n.jsx(M,{}):L?n.jsx(z,{}):d.length===0?n.jsx(G,{text:"Not found!"}):n.jsx(K,{location:"drinks",drinkItems:d}),n.jsx(V,{pageCount:Math.ceil(h/m),handlePageClick:D})]})},ge=()=>{const[t,c]=r.useState([]),[a,o]=r.useState([]);return r.useEffect(()=>{(async()=>{try{const i=await B();c(i)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const g=(await N()).map(d=>d.title);o(g)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})()},[]),n.jsxs(n.Fragment,{children:[n.jsx(A,{title:"Drinks"}),n.jsx(ne,{categoryList:t,ingredientList:a})]})};export{ge as default};
