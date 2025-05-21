import{r as o,n as p,G as I,j as n,h as N,i as U,L as G,E as K}from"./index-870d3d1e.js";import{g as V,a as W}from"./operationsFilters-eca849ea.js";import{P as Z}from"./PageTitle-cff7c039.js";import{a as q}from"./operationsDrinks-3fa553eb.js";import{N as J,D as Q,P as X,o as Y}from"./Paginator-7d2b784b.js";import{S as j}from"./react-select.esm-58a5c2cf.js";import"./coctailPlaceholder-0df15ea9.js";import"./DrinkCard-ccb1b4b5.js";const ee=t=>t.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" "),te=(t="")=>({label:ee(t),value:t}),v=(t=[])=>t.length===0?[]:t.map(a=>te(a)),oe=t=>o.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"}));p.div`

`;const re=p.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;
  z-index: 300;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }

`,ne=p.label`

`,ae=p.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,ie=p.input`
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
`,se=p.span`
    position: absolute;
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    outline: none;
`,ce=p(oe)`
    width: 20px;
    height: 20px;
    stroke: ${t=>t.theme.mainTextColor};

    &:hover, &:focus{
      stroke-width: 1.8;
    };
`,L=(t,c,a,r)=>({control:(e,s)=>({...e,padding:"10px 16px 10px 22px",fontFamily:"inherit",fontSize:"17px",lineHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${r.navBackgroundColorHover}`,"@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:e=>({...e,padding:"0",color:`${r.footerTextColor}`}),input:e=>({...e,padding:"0",margin:"0",color:`${r.footerTextColor}`,cursor:"text"}),singleValue:(e,s)=>({...e,color:`${r.selectInputColor}`}),placeholder:e=>({...e,color:`${r.footerTextColor}`}),indicatorSeparator:e=>({display:"none"}),menu:e=>({...e,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",lineHeight:"1.56",backgroundColor:`${r.selectMenuBackground}`,border:"none",borderRadius:"20px",transition:"all 600ms ease-in-out","@media only screen and (min-width: 768px)":{...e["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:e=>({...e,padding:"0",maxHeight:`${t}`,minHeight:`${c}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${r.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(e,{data:s,isDisabled:i,isFocused:g,isSelected:u})=>({...e,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:a===""?`${r.selectOptionColor}`:u?`${r.selectOptionColor_focused}`:`${r.selectOptionColor}`,cursor:i?"not-allowed":"pointer",transition:"color var(--transition)",":hover":{...e[":hover"],color:`${r.selectOptionColor_focused}`},":active":{...e[":active"],borderRadius:"200px"}}),dropdownIndicator:(e,s)=>({...e,transform:s.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${r.selectDropdownIndicatorColor}`,cursor:"pointer",":hover":{...e[":hover"],color:`${r.selectdropdownIndicatorColorHover}`}}),clearIndicator:e=>({...e,display:"none"})}),le=({categoryList:t,ingredientList:c,onChangeFilter:a})=>{const{theme:r}=o.useContext(I),e=r==="dark"?{...N}:{...U},[s,i]=o.useState(""),[g,u]=o.useState(""),m=l=>{a("keyword",l.target.value.trim())},f=(l,w)=>{l?a("category",l.value):a("category","")},k=(l,w)=>{l?a("ingredient",l.value):a("ingredient","")};return n.jsxs(re,{children:[n.jsx(ne,{children:n.jsxs(ae,{children:[n.jsx(ie,{type:"text",placeholder:"Enter the text",id:"inputKeyword",onChange:m,"aria-label":"filter keyword"}),n.jsx(se,{children:n.jsx(ce,{})})]})}),n.jsx(j,{isClearable:!0,placeholder:"All categories",options:v(t),onChange:f,styles:L("300px","297px",s,e),name:"categories","aria-label":"drink category"}),n.jsx(j,{isClearable:!0,placeholder:"Ingredients",options:v(c),defaultValue:"Ingredients",onChange:k,styles:L("280px","276px",g,e),name:"ingredients","aria-label":"drink ingredient"})]})},de=p.div`

`,pe=({categoryList:t,ingredientList:c})=>{const{screenBreakPoint:a}=o.useContext(I),[r,e]=o.useState(""),[s,i]=o.useState(""),[g,u]=o.useState(""),[m,f]=o.useState([]),[k,l]=o.useState(0),[w,y]=o.useState(1),[b,$]=o.useState(10),[D,C]=o.useState(!1),[P,T]=o.useState(null),[_,S]=o.useState(!1);o.useEffect(()=>{$((x=>x===1280?9:10)(a))},[a]),o.useEffect(()=>{const d=new AbortController;return C(!0),S(!1),f([]),(async(H="",z="",B="",F=1,M)=>{var E;try{const{drinks:h,totalResults:A}=await q(H,z,B,F,M,d);h.length===0&&S(!0),l(A),f(h)}catch(h){if(!((E=d.signal)!=null&&E.aborted)&&h.code!=="ERR_CANCELED")throw T(h),Error("Oops! Something went wrong! Try reloading the page!")}finally{C(!1)}})(r,s,g,w,b),()=>d.abort()},[r,s,g,w,b]);const R=(d,x="")=>{switch(d){case"keyword":e(x),y(1);break;case"category":i(x),y(1);break;case"ingredient":u(x),y(1);break}},O=({selected:d})=>{Y(k,d,b,y)};return n.jsxs(de,{children:[n.jsx(le,{categoryList:t,ingredientList:c,onChangeFilter:R}),D&&n.jsx(G,{}),P&&n.jsx(K,{}),_&&n.jsx(J,{text:"Not found!"}),m.length>0&&n.jsx(Q,{location:"drinks",drinkItems:m}),n.jsx(X,{pageCount:Math.ceil(k/b),handlePageClick:O})]})},ye=()=>{const[t,c]=o.useState([]),[a,r]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const i=await V();c(i)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const g=(await W()).map(u=>u.title);r(g)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})()},[]),n.jsxs(n.Fragment,{children:[n.jsx(Z,{title:"Drinks"}),n.jsx(pe,{categoryList:t,ingredientList:a})]})};export{ye as default};
