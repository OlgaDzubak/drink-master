import{k as V,l as j,m as Q,o as Z,p as ee,n as i,r as l,j as t,u as te,q as ie,G as oe,s as N,F as ne,t as re,v as ae,g as se,h as le,w as de,M as ce,x as pe}from"./index-f21cf446.js";import{P as he}from"./PageTitle-967899fe.js";import{T as xe}from"./Hourglass-7360ebb1.js";import{s as me,a as ge}from"./ownSelector-f04e3140.js";import{S as F}from"./react-select.esm-7fad8335.js";import{g as ue,b as be,a as fe}from"./operationsFilters-fb1fccd7.js";import{S as we}from"./SectionTitle-b349a6aa.js";import{b as ke}from"./operationsDrinks-65d86988.js";import"./Titles.styled-67f945d4.js";const ve=V().shape({drink:j().required("This field is required!").min(2,"This field must be 2-30 symbols long").max(30,"This field must be 2-30 symbols long"),description:j().required("This field is required!").min(25,"This field must be 25-234 symbols long").max(234,"This field must be 25-234 symbols long"),ingredients:Q().of(V().shape({title:j().required("This field is required!"),measure:j().required("This field is required!")})),instructions:j().required("This field is required!").min(25,"This field must be 25-2000 symbols long").max(2e3,"This field must be 25-2000 symbols long"),category:j().required("This field is required!"),glass:j().required("This field is required!"),alcoholic:j().required("Select the type of drink"),drinkThumb:Z().required("Drink photo is required!").test("is-valid-type","Wrong file format! Only jpg, jpeg, png files are allowed",e=>ee(e&&e.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",e=>e&&e.size<=102400)}),je=i.section`
`;i.div`
`;const $e=i.button`
  margin-top: 20px;
  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.28;
  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  color: ${e=>e.theme.mainBackground};
  background-color: ${e=>e.theme.backGroundBtnColor};
  border: 2px solid ${e=>e.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);

  &:hover, &:focus{
    border-color: ${e=>e.theme.borderBtnColorHover};
    background-color: ${e=>e.theme.mainTextColor};
  }
`,x=i.div`
  height: 14px;
  font-size: 12px;
  color: #da1414;
  line-height: 1.166;
  margin-top: 2px;
`,Ce=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),ye=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    width: 833px;
  }
`,Te=i.div`
`,Le=i.div`
  position: relative;
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  color: ${e=>e.theme.mainBackground};
  background-color: ${e=>e.theme.imageBackground};
  transition: background-color var(--transition), color var(--transition);
  cursor: pointer;

  .add-div {
    color: ${e=>e.theme.addImgSvgColor};
    transition: background-color var(--transition), color var(--transition);
  }

  &:hover {
   .add-div {
      background-color: ${e=>e.theme.addImgBackgroundHover};
      color: ${e=>e.theme.addImgSvgColorHover};
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    width: 320px;
    height: 320px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,Se=i.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`,De=i.input`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    pointer-events: none;
`,Ie=i.div`

`,ze=i.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${e=>e.theme.addImgBackground};
`,Fe=i(Ce)`
  width: 28px;
  height: 28px;
  stroke: currentColor;
`,Pe=i.p`
  text-align: center;
  color: ${e=>e.theme.authButtonColor};
`,Ve=i.img`
  width: 100%;
  object-fit: contain;
`,Ne=i.div`
  width: 100%;
  padding-top: 18px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`,D=i.div`
  position: relative;
  width: 100%;
`,Be=i.label`
  position: absolute;
  top: ${e=>e.$isFocused||e.$hasValue?"-7px":"10px"};
  left: 0px;
  font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"14px"};
  pointer-events: none;
  color: ${e=>e.$hasValue||e.$isFocused?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  transform: translateY(-8px);
  transition: top var(--transition), color var(--transition);;

  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"16px"};
  }
`,Ee=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"-7px":"10px"};
  left: 0px;
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
  pointer-events: none;
  color: ${e=>e.$hasValueDescription||e.$isFocusedDescription?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  transform: translateY(-8px);
  transition: top var(--transition), color var(--transition);

  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"16px"};
  }
`,B=i.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  line-height: 1.21;
  outline: none;
  border: 1px solid transparent;
  border-bottom: 1px solid  ${e=>e.theme.seeMoreBtnTextColor};
  background-color: transparent;
  color: ${e=>e.theme.mainTextColor};
  transition: border-color var(--transition), color var(--transition);

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus{
        -webkit-text-fill-color: ${e=>e.theme.mainTextColor};
        -webkit-text-stroke-color: ${e=>e.theme.mainTextColor};
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        caret-color: ${e=>e.theme.mainTextColor};
        transition: background-color 3000s ease-in-out 0s, color 3000s ease-in-out 0s;
  }
`,E=i.div`
  position: relative;
  width: 100%;
  padding: 5px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  color:${e=>e.theme.mainTextColor};
  border-bottom: 1px solid ${e=>e.theme.seeMoreBtnTextColor};
  background-color: transparent;
  transition: border-color var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,M=i.p`
  left: 10px;
  transform-origin: left;
  transform: translateY(${e=>e.selectedCategory?"-10px":"10px"});
  pointer-events: none;
  color: ${e=>e.selectedCategory?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  font-size: ${e=>e.selectedCategory?"12px":"14px"};
  transition: transform var(--transition), font-size var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: ${e=>e.selectedCategory?"12px":"16px"};
  }
`,A=(e,o,n,d,p)=>({control:(r,m)=>({...r,fontSize:"17px",lineHeight:"1.56",letterSpacing:"-0.04em",minHeight:"auto",backgroundColor:"transparent",border:"none",boxShadow:"none","&:hover":{cursor:"pointer"}}),option:r=>({...r,padding:"8px",color:`${p.selectOptionColor}`,backgroundColor:`${p.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${p.selectOptionColor_focused}`}}),input:r=>({...r,padding:0,margin:0,border:"none",color:`${p.mainTextColor}`}),menu:r=>({...r,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${p.selectMenuBackground}`}),menuList:r=>({...r,maxHeight:`${o}`,minHeight:`${n}`,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${p.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:r=>({...r,display:"none"}),singleValue:(r,m)=>({...r,textAlign:"right",color:`${p.mainTextColor}`}),valueContainer:r=>({...r,padding:"0"}),dropdownIndicator:(r,m)=>({...r,transform:m.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${m.isFocused?p.mainTextColor:p.inputLabelColorNoValue}`,paddingTop:"0",paddingBottom:"0","&:hover":{color:`${p.mainTextColor}`}}),clearIndicator:r=>({...r,display:"none"})}),Me=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,H=i.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.56;
  color: ${e=>e.checked?e.theme.mainTextColor:e.theme.inputLabelColorNoValue};
  transition: color var(--transition);

  &.checked {
    color: ${e=>e.theme.mainTextColor};
  }
`,R=i.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`,q=i.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${e=>e.checked?e.theme.mainTextColor:e.theme.inputLabelColorNoValue};
  border-radius: 50%;
  box-sizing: border-box;
  transition: border-color var(--transition);

  input[type="radio"]:checked + & {
    border-color: ${e=>e.theme.mainTextColor};
  }

  input[type="radio"]:checked + &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: ${e=>e.theme.mainTextColor};
    transform: translate(-50%, -50%);
  }
`,Ae=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p,setFieldValue:r,themeColors:m})=>{const[$,h]=l.useState([]),[b,c]=l.useState([]),[k,C]=l.useState([]),[w,I]=l.useState([]),[g,s]=l.useState(null),[f,u]=l.useState(!1),[y,T]=l.useState(!1),[O,P]=l.useState(!1),[G,U]=l.useState(!1);l.useEffect(()=>{async function a(){try{const z=(await ue()).map(S=>({value:S,label:S}));h(z)}catch(L){console.error("Ошибка при загрузке категорий:",L)}}async function v(){try{const z=(await be()).map(S=>({value:S,label:S}));C(z)}catch(L){console.error("Ошибка при загрузке категорий:",L)}}a(),v()},[]);const _=a=>{const v=a.target.files[0]||null;r("drinkThumb",v),s(v?URL.createObjectURL(v):null)},Y=a=>{const{value:v}=a.target;T(v.trim().length>1)},K=a=>{const{value:v}=a.target;U(v.trim().length>1)},J=a=>{c(a||[]),r("category",(a==null?void 0:a.value)||"")},X=a=>{I(a||[]),r("glass",(a==null?void 0:a.value)||"")};return t.jsxs(ye,{className:"description-fields",children:[t.jsxs(Te,{children:[t.jsxs(Le,{children:[t.jsxs(Se,{htmlFor:"drinkThumb",children:[t.jsx(De,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:a=>_(a)}),t.jsxs(Ie,{children:[t.jsx(ze,{className:"add-div",children:t.jsx(Fe,{})}),t.jsx(Pe,{children:"Add image"})]})]}),g&&t.jsx(Ve,{src:g,alt:"Selected"})]}),n.drinkThumb&&o.drinkThumb?t.jsx(x,{children:o.drinkThumb}):null]}),t.jsxs(Ne,{children:[t.jsxs(D,{className:"name",children:[t.jsx(Be,{htmlFor:"drink",$isFocused:f,$hasValue:y,children:"Enter item title"}),t.jsx(B,{type:"text",id:"drink",name:"drink",minLength:2,maxLength:30,onChange:a=>{Y(a),d(a)},onBlur:a=>{u(!1),p(a)},onFocus:()=>u(!0),value:e.drink}),n.drink&&o.drink?t.jsx(x,{children:o.drink}):t.jsx(x,{})]}),t.jsxs(D,{className:"description",children:[t.jsx(Ee,{htmlFor:"description",$isFocusedDescription:O,$hasValueDescription:G,children:"Enter about recipe"}),t.jsx(B,{type:"text",rows:1,minLength:25,maxLength:234,id:"description",name:"description",onChange:a=>{K(a),d(a)},onBlur:a=>{P(!1),p(a)},onFocus:()=>P(!0),value:e.description}),n.description&&o.description?t.jsx(x,{children:o.description}):t.jsx(x,{})]}),t.jsxs(D,{className:"drink-categories",children:[t.jsxs(E,{children:[t.jsx(M,{selectedCategory:b.label,children:"Category"}),t.jsx(F,{isClearable:!0,name:"drink-categories",options:$,value:b,onChange:a=>J(a),styles:A("199px","405px","205px",b,m),placeholder:""})]}),n.category&&o.category?t.jsx(x,{children:o.category}):t.jsx(x,{})]}),t.jsxs(D,{className:"drink-glasses",children:[t.jsxs(E,{children:[t.jsx(M,{selectedCategory:w.label,children:"Glass"}),t.jsx(F,{isClearable:!0,name:"drink-glasses",options:k,value:w,onChange:a=>X(a),styles:A("199px","305px","205px",w,m),placeholder:""})]}),n.glass&&o.glass?t.jsx(x,{children:o.glass}):t.jsx(x,{})]}),t.jsxs(Me,{className:"alcoholic",children:[t.jsxs(H,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[t.jsx(R,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:d}),t.jsx(q,{}),"Alcoholic"]}),t.jsxs(H,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[t.jsx(R,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:d}),t.jsx(q,{}),"Non-alcoholic"]}),n.alcoholic&&o.alcoholic?t.jsx(x,{children:o.alcoholic}):null]})]})]})},He=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Re=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),qe=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));i.p`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  color: #da1414;
`;const We=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;

  @media (min-width: 1280px) {
    width: 540px;
  }
`,Oe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`,Ge=i.h3`
  font-size: 28px;
  color: ${e=>e.theme.mainTextColor};
`,Ue=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${e=>e.theme.filterDrinksBorderColorHover};
`,_e=i(Re)`
  stroke: currentColor;
`,W=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  color: ${e=>e.theme.filterDrinksBorderColor};
  transition: color var(--transition);

  &:hover {
    color: ${e=>e.theme.mainTextColor};
  }
`,Ye=i(He)`
  stroke: currentColor;
`,Ke=i.ul`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.9px){
    width: 100%;
  }
`,Je=i.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Xe=i.div`
  display: flex;
`,Qe=i.div`
  margin-right: 14px;

  @media screen and (max-width: 767.9px){
    margin-right: 8px;
  }
`,Ze=i.label`
  padding: 0;
  margin: 0;
  transition: color var(--transition), border-color var(--transition);
`,et=(e,o)=>({container:n=>({...n,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(n,d)=>({...n,padding:"14px 24px",backgroundColor:"transparent",borderRadius:"200px",border:d.isFocused?`1px solid ${o.mainTextColor}`:`1px solid ${o.inputLabelColorNoValue}`,boxShadow:"none",transition:"border-color 400ms cubic-bezier(0.4, 0, 0.2, 1), color 400ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{borderColor:`${o.mainTextColor}`}}),placeholder:(n,d)=>({...n,margin:0,color:`${o.inputLabelColorNoValue}`,transition:"color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),option:n=>({...n,padding:"8px",color:`${o.selectOptionColor}`,backgroundColor:`${o.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${o.selectOptionColor_focused}`}}),input:(n,d)=>({...n,padding:0,margin:0,border:"none",color:d.isFocused?`${o.mainTextColor}`:`${o.inputLabelColorNoValue}`}),menu:n=>({...n,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${o.selectMenuBackground}`,transition:"background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),menuList:n=>({...n,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:n=>({...n,display:"none"}),singleValue:(n,d)=>({...n,textAlign:"left",color:`${o.mainTextColor}`}),valueContainer:n=>({...n,padding:"0",lineHeight:"1.56",fontSize:"17px",color:`${o.mainTextColor}`}),dropdownIndicator:(n,d)=>({...n,padding:0,transform:d.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${d.isFocused?o.mainTextColor:o.inputLabelColorNoValue}`,"&:hover":{color:`${o.mainTextColor}`}}),clearIndicator:n=>({...n,display:"none"})}),tt=i.div`
  margin-right: 40px;

  @media screen and (max-width: 767.9px ){
    margin-right: 8px;
  }
`;i.label`
`;const it=i.input`
  width: 100px;
  padding: 14px 24px;
  font-size: 17px;
  line-height: 1.56;
  outline: none;
  color: ${e=>e.theme.mainTextColor};
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid ${e=>e.theme.inputLabelColorNoValue};
  transition: color var(--transition), border-color var(--transition);

  &:hover, &:focus{
    border-color: ${e=>e.theme.mainTextColor};
  }

  @media (min-width: 768px) {
    min-width: 150px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus{
        -webkit-text-fill-color: ${e=>e.theme.mainTextColor};
        -webkit-text-stroke-color: ${e=>e.theme.mainTextColor};
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        caret-color: ${e=>e.theme.mainTextColor};
        transition: background-color 3000s ease-in-out 0s, color 3000s ease-in-out 0s;
  }
`,ot=i.div`
`,nt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px 18px 0px;
`,rt=i.button`
  width: 20px;
  height: 20px;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  color: ${e=>e.theme.inputLabelColorNoValue};
  transition: color var(--transition), border-color var(--transition);
  &:hover{
    color: ${e=>e.theme.mainTextColor};
  }
`,at=i(qe)`
  stroke: currentColor;
`,st=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p,setFieldValue:r,themeColors:m})=>{const[$,h]=l.useState([]),[b,c]=l.useState([]);l.useEffect(()=>{async function g(){try{const f=(await fe()).map(u=>({label:u.title,value:u._id}));h(f)}catch(s){console.error("Ошибка при загрузке ингридиента:",s)}}g()},[]);const k=(g,s)=>{let f="",u="";g&&(f=g.value,u=g.label),r(`ingredients[${s}].title`,u),r(`ingredients[${s}]._id`,f),c(y=>{const T=[...y];return T[s]=g,T})},C=()=>{const g={name:""};r("ingredients",[...e.ingredients,g]),c(s=>[...s,null])},w=g=>{const s=[...e.ingredients];s.length===1?(r("ingredients",[{title:"",measure:""}]),c(f=>[])):(s.splice(g,1),r("ingredients",s),c(f=>{const u=[...f];return u.splice(g,1),u}))},I=e.ingredients.length===1;return t.jsxs(We,{className:"ingredients-fields",children:[t.jsxs(Oe,{children:[t.jsx(Ge,{children:"Ingredients"}),t.jsxs(Ue,{children:[t.jsx(W,{type:"button",onClick:()=>w(e.ingredients.length-1),disabled:I,children:t.jsx(_e,{})}),t.jsx("div",{children:e.ingredients.length}),t.jsx(W,{type:"button",onClick:C,children:t.jsx(Ye,{})})]})]}),t.jsx(Ke,{children:e.ingredients.map((g,s)=>{var f,u,y;return t.jsxs(Je,{children:[t.jsxs(Xe,{children:[t.jsxs(Qe,{children:[t.jsx(Ze,{children:t.jsx(F,{isClearable:!0,name:`ingredients[${s}].title`,placeholder:"Ingredient",value:b[s]||null,options:$,onChange:T=>k(T,s),onBlur:p,styles:et(b[s],m)})}),n.ingredients&&o.ingredients&&n.ingredients[s]&&((f=o.ingredients[s])!=null&&f.title)?t.jsx(x,{children:((u=o.ingredients[s])==null?void 0:u.title)||""}):t.jsx(x,{})]}),t.jsxs(tt,{children:[t.jsx(it,{type:"text",name:`ingredients[${s}].measure`,placeholder:"1 cl",maxLength:15,value:g.measure||"",onChange:d,onBlur:p}),n.ingredients&&o.ingredients&&n.ingredients[s]&&((y=o.ingredients[s])!=null&&y.measure)?t.jsxs(x,{children:[o.ingredients[s].measure," "]}):t.jsx(x,{})]})]}),t.jsxs(ot,{children:[t.jsx(nt,{children:t.jsx(rt,{type:"button",onClick:()=>w(s),children:t.jsx(at,{})})}),t.jsx(x,{})]})]},s)})})]})},lt=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${e=>e.theme.mainTextColor};
`,dt=i.div`
  position: relative;
  width: 100%;
`,ct=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedPreparation||e.$hasValuePreparation?"-20px":"10px"};
  left: ${e=>e.$isFocusedPreparation||e.$hasValuePreparation?"5px":"18px"};
  font-size: 14px;
  transform-origin: left;
  transition: transform 25ms, color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValuePreparation||e.$isFocusedPreparation?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  transition: top var(--transition), left var(--transition), color var(--transition), font-size var(--transition);

  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocusedPreparation||e.$hasValuePreparation?"12px":"16px"};
  }
`,pt=i.textarea`
  width: 100%;
  height: 184px;
  padding: 14px;
  resize: none;
  font-size: 17px;
  font-family: inherit;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 14px;
  outline: none;
  border: 1px solid ${e=>e.theme.inputLabelColorNoValue};
  color: ${e=>e.theme.mainTextColor};
  background-color: transparent;
  transition: color var(--transition), border-color var(--transition);

  &:hover{
    border-color: ${e=>e.theme.mainTextColor};
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`,ht=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p})=>{const[r,m]=l.useState(!1),[$,h]=l.useState(!1),b=c=>{const{value:k}=c.target;h(k.trim().length>0)};return t.jsxs(t.Fragment,{children:[t.jsx(lt,{children:"Recipe Preparation"}),t.jsxs(dt,{children:[t.jsx(ct,{htmlFor:"instructions",$isFocusedPreparation:r,$hasValuePreparation:$,children:"Enter the recipe"}),t.jsx(pt,{id:"instructions",name:"instructions",rows:"6",onChange:c=>{b(c),d(c)},onBlur:c=>{m(!1),p(c)},onFocus:()=>m(!0),value:e.instructions,placeholder:" "}),n.instructions&&o.instructions?t.jsx(x,{children:o.instructions}):t.jsx(x,{})]})]})},xt=()=>{const e=te(),o=ie(),{theme:n}=l.useContext(oe),d=n==="dark"?{...se}:{...le},p=N(me),r=N(ge);l.useEffect(()=>{r&&e("/my")},[r]);const m=async(h,{resetForm:b})=>{const c=new FormData;c.append("drink",h.drink),c.append("category",h.category),c.append("shortDescription",h.description),c.append("description",h.description),c.append("alcoholic",h.alcoholic),c.append("instructions",h.instructions),c.append("glass",h.glass),c.append("drinkThumb",h.drinkThumb),c.append("ingredients",JSON.stringify(h.ingredients)),o(de(c))},$={drink:"",description:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",drinkThumb:""};return t.jsxs(je,{children:[t.jsx(we,{title:"Add drink form",hidden:!0}),t.jsx(ne,{initialValues:$,validationSchema:ve,onSubmit:m,children:({values:h,errors:b,touched:c,handleChange:k,handleBlur:C,setFieldValue:w})=>t.jsxs(re,{children:[t.jsx(Ae,{values:h,errors:b,touched:c,handleChange:k,handleBlur:C,setFieldValue:w,themeColors:d}),t.jsx(st,{values:h,errors:b,touched:c,handleChange:k,handleBlur:C,setFieldValue:w,themeColors:d}),t.jsx(ht,{values:h,errors:b,touched:c,handleChange:k,handleBlur:C,setFieldValue:w}),t.jsx($e,{type:"submit",children:"Add"})]})}),p&&t.jsx(ae,{children:t.jsx(xe,{color:"#f3f3f3",width:"60"})})]})},mt=i.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`,gt=i.h4`
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);

    @media screen and (min-width: 768px){
    font-size: 24px;
  }
`,ut=()=>t.jsxs(mt,{children:[t.jsx(gt,{children:"Follow Us"}),t.jsx(ce,{})]}),bt=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-bottom: 140px;
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 0;
  }
`,ft=i.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px){
    font-size: 24px;
  }
`,wt=i.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 312px;
  }
`,kt=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`,vt=i.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,jt=i.p`
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,$t=i.p`
  height: 63px;
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
  color:  ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,Ct=()=>{const[e,o]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const d=await ke();o(d)}catch(d){console.error("Error fetching drinks:",d)}})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(ft,{children:"Popular Drink"}),t.jsxs(bt,{children:[" ",e.slice(0,4).map(({drinkThumb:n,drink:d,description:p,_id:r},m)=>t.jsx(pe,{to:`/drink/${r}`,children:t.jsxs(wt,{children:[t.jsx(kt,{src:n,alt:d}),t.jsxs(vt,{children:[t.jsx(jt,{children:d}),t.jsx($t,{children:p})]})]})},m))]})]})};i.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  margin-bottom: 40px;
  color: ${e=>e.theme.mainTextColor};

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;const yt=i.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
  }
`,Tt=i.aside`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,Lt=()=>t.jsxs(yt,{children:[t.jsx(xt,{}),t.jsxs(Tt,{children:[t.jsx(ut,{}),t.jsx(Ct,{})]})]}),Et=()=>t.jsxs(t.Fragment,{children:[t.jsx(he,{title:"Add drink"}),t.jsx(Lt,{})]});export{Et as default};
