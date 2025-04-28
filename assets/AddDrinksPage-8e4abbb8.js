import{k as B,l as C,m as oe,o as ne,p as re,n as i,r as a,j as t,u as se,q as ae,G as le,s as E,F as ce,t as de,v as pe,h as he,i as xe,w as me,M as ue,x as ge}from"./index-f85fcec8.js";import{P as be}from"./PageTitle-4642dd8b.js";import{T as fe}from"./Hourglass-b296c427.js";import{s as we,a as ke}from"./ownSelector-f04e3140.js";import{S as P}from"./react-select.esm-766d1fe8.js";import{g as ve,b as $e,a as je}from"./operationsFilters-06bd22b5.js";import{S as Ce}from"./SectionTitle-4df9e8b8.js";import{b as ye}from"./operationsDrinks-f1664129.js";import"./Titles.styled-47df780c.js";const Te=B().shape({drink:C().required("This field is required!").min(2,"This field must be 2-30 symbols long").max(35,"This field must be 2-35 symbols long"),description:C().required("This field is required!").min(25,"This field must be 25-234 symbols long").max(234,"This field must be 25-234 symbols long"),ingredients:oe().of(B().shape({title:C().required("This field is required!"),measure:C().required("This field is required!")})),instructions:C().required("This field is required!").min(25,"This field must be 25-2000 symbols long").max(2e3,"This field must be 25-2000 symbols long"),category:C().required("This field is required!"),glass:C().required("This field is required!"),alcoholic:C().required("Select the type of drink"),drinkThumb:ne().required("Drink photo is required!").test("is-valid-type","Wrong file format! Only jpg, jpeg, png files are allowed",e=>re(e&&e.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",e=>e&&e.size<=102400)}),Se=i.section`
`;i.div`
`;const Le=i.button`
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
`,De=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),Ie=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    width: 833px;
  }
`,Fe=i.div`
`,ze=i.div`
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
    background-color: ${e=>e.theme.imageBackgroundHover};
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
`,Pe=i.label`
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
`,Ve=i.input`
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
`,Ne=i.div`

`,Be=i.div`
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
`,Ee=i(De)`
  width: 28px;
  height: 28px;
  stroke: currentColor;
`,Me=i.p`
  text-align: center;
  color: ${e=>e.theme.authButtonColor};
`,He=i.img`
  width: 100%;
  object-fit: contain;
`,Ae=i.div`
  width: 100%;
  padding-top: 18px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`,I=i.div`
  position: relative;
  width: 100%;
`,Re=i.label`
  position: absolute;
  top: ${e=>e.$isFocused||e.$hasValue?"-7px":"10px"};
  left: 0px;
  font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"14px"};
  pointer-events: none;
  color: ${e=>e.$hasValue||e.$isFocused?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  transform: translateY(-8px);
  transition: top var(--transition), font-size var(--transition), color var(--transition);

  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"16px"};
  }
`,qe=i.label`
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
`,M=i.input`
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
`,H=i.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  color:${e=>e.theme.mainTextColor};
  background-color: transparent;
  transition: border-color var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,A=i.p`
  position: absolute;
  top: ${e=>e.$isFocused||e.selectedCategory?"-7px":"10px"};
  left: 0px;
  font-size: ${e=>e.$isFocused||e.selectedCategory?"12px":"14px"};
  color: ${e=>e.selectedCategory||e.$isFocused?e.theme.inputLabelColordHasValue:e.theme.inputLabelColorNoValue};
  font-size: ${e=>e.selectedCategory?"12px":"14px"};
  transform: translateY(-8px);
  transition: top var(--transition), font-size var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocused||e.selectedCategory?"12px":"16px"};
  }
`,R=(e,o,n,c,p)=>({container:r=>({...r,width:"100%",borderBottom:`1px solid ${p.seeMoreBtnTextColor}`}),control:(r,m)=>({...r,fontSize:"16px",lineHeight:"1.21",letterSpacing:"-0.04em",backgroundColor:"transparent",border:"none",boxShadow:"none","&:hover":{cursor:"pointer"}}),option:r=>({...r,padding:"8px",color:`${p.selectOptionColor}`,backgroundColor:`${p.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${p.selectOptionColor_focused}`}}),input:r=>({...r,padding:10,margin:0,border:"none",color:`${p.mainTextColor}`}),menu:r=>({...r,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${p.selectMenuBackground}`}),menuList:r=>({...r,maxHeight:`${o}`,minHeight:`${n}`,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${p.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:r=>({...r,display:"none"}),singleValue:(r,m)=>({...r,padding:10,textAlign:"left",color:`${p.mainTextColor}`}),valueContainer:r=>({...r,padding:"0"}),dropdownIndicator:(r,m)=>({...r,transform:m.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${m.isFocused?p.mainTextColor:p.inputLabelColorNoValue}`,paddingTop:"0",paddingBottom:"0","&:hover":{color:`${p.mainTextColor}`}}),clearIndicator:r=>({...r,display:"none"})}),Oe=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,q=i.label`
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
`,O=i.input`
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
`,W=i.span`
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
`,We=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p,setFieldValue:r,themeColors:m})=>{const[v,h]=a.useState(null),[f,l]=a.useState(!1),[w,y]=a.useState(!1),[$,D]=a.useState(!1),[u,d]=a.useState(!1),[b,g]=a.useState([]),[j,T]=a.useState([]),[U,V]=a.useState(!1),[_,Y]=a.useState([]),[F,K]=a.useState([]),[J,N]=a.useState(!1);a.useEffect(()=>{async function s(){try{const z=(await ve()).map(L=>({value:L,label:L}));g(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}async function k(){try{const z=(await $e()).map(L=>({value:L,label:L}));Y(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}s(),k()},[]);const X=s=>{const k=s.target.files[0]||null;r("drinkThumb",k),h(k?URL.createObjectURL(k):null)},Q=s=>{const{value:k}=s.target;y(k.trim().length>1)},Z=s=>{const{value:k}=s.target;d(k.trim().length>1)},ee=s=>{T(s||[]),r("category",(s==null?void 0:s.value)||"")},te=s=>{K(s||[]),r("glass",(s==null?void 0:s.value)||"")},ie=s=>{};return t.jsxs(Ie,{className:"description-fields",children:[t.jsxs(Fe,{children:[t.jsxs(ze,{children:[t.jsxs(Pe,{htmlFor:"drinkThumb",children:[t.jsx(Ve,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:s=>X(s)}),t.jsxs(Ne,{children:[t.jsx(Be,{className:"add-div",children:t.jsx(Ee,{})}),t.jsx(Me,{children:"Add image"})]})]}),v&&t.jsx(He,{src:v,alt:"Selected"})]}),n.drinkThumb&&o.drinkThumb?t.jsx(x,{children:o.drinkThumb}):null]}),t.jsxs(Ae,{children:[t.jsxs(I,{className:"name",children:[t.jsx(Re,{htmlFor:"drink",$isFocused:f,$hasValue:w,children:"Enter drink title"}),t.jsx(M,{type:"text",id:"drink",name:"drink",minLength:2,maxLength:35,onChange:s=>{Q(s),c(s)},onBlur:s=>{l(!1),p(s)},onFocus:()=>l(!0),value:e.drink}),n.drink&&o.drink?t.jsx(x,{children:o.drink}):t.jsx(x,{})]}),t.jsxs(I,{className:"description",children:[t.jsx(qe,{htmlFor:"description",$isFocusedDescription:$,$hasValueDescription:u,children:"Enter drink description"}),t.jsx(M,{type:"text",rows:1,minLength:25,maxLength:234,id:"description",name:"description",onChange:s=>{Z(s),c(s)},onBlur:s=>{D(!1),p(s)},onFocus:()=>D(!0),value:e.description}),n.description&&o.description?t.jsx(x,{children:o.description}):t.jsx(x,{})]}),t.jsx(I,{className:"category",children:t.jsxs(H,{children:[t.jsx(A,{selectedCategory:j.label,$isFocused:U,children:"Choose drink category"}),t.jsx(P,{isClearable:!0,inputId:"category",name:"category",options:b,value:j,onChange:s=>ee(s),onFocus:()=>V(!0),onBlur:s=>{V(!1),p(s)},styles:R("199px","405px","205px",j,m),placeholder:""}),n.category&&o.category?t.jsx(x,{children:o.category}):t.jsx(x,{})]})}),t.jsx(I,{className:"glass",children:t.jsxs(H,{children:[t.jsx(A,{selectedCategory:F.label,$isFocused:J,children:"Choose drink glass"}),t.jsx(P,{isClearable:!0,inputId:"glass",name:"glass",options:_,value:F,onChange:s=>te(s),onFocus:()=>N(!0),onBlur:s=>{N(!1),p(s)},onMenuOpen:ie,styles:R("199px","305px","205px",F,m),placeholder:""}),n.glass&&o.glass?t.jsx(x,{children:o.glass}):t.jsx(x,{})]})}),t.jsxs(Oe,{className:"alcoholic",children:[t.jsxs(q,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:c}),t.jsx(W,{}),"Alcoholic"]}),t.jsxs(q,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:c}),t.jsx(W,{}),"Non-alcoholic"]}),n.alcoholic&&o.alcoholic?t.jsx(x,{children:o.alcoholic}):null]})]})]})},Ge=e=>a.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ue=e=>a.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_e=e=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));i.p`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  color: #da1414;
`;const Ye=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;

  @media (min-width: 1280px) {
    width: 540px;
  }
`,Ke=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`,Je=i.h3`
  font-size: 28px;
  color: ${e=>e.theme.mainTextColor};
`,Xe=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${e=>e.theme.filterDrinksBorderColorHover};
`,Qe=i(Ue)`
  stroke: currentColor;
`,G=i.button`
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
`,Ze=i(Ge)`
  stroke: currentColor;
`,et=i.ul`
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
`,tt=i.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,it=i.div`
  display: flex;
`,ot=i.div`
  margin-right: 14px;

  @media screen and (max-width: 767.9px){
    margin-right: 8px;
  }
`,nt=i.label`
  padding: 0;
  margin: 0;
  transition: color var(--transition), border-color var(--transition);
`,rt=(e,o)=>({container:n=>({...n,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(n,c)=>({...n,padding:"14px 24px",backgroundColor:"transparent",borderRadius:"200px",border:c.isFocused?`1px solid ${o.mainTextColor}`:`1px solid ${o.inputLabelColorNoValue}`,boxShadow:"none",transition:"border-color 400ms cubic-bezier(0.4, 0, 0.2, 1), color 400ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{borderColor:`${o.mainTextColor}`}}),placeholder:(n,c)=>({...n,margin:0,color:`${o.inputLabelColorNoValue}`,transition:"color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),option:n=>({...n,padding:"8px",color:`${o.selectOptionColor}`,backgroundColor:`${o.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${o.selectOptionColor_focused}`}}),input:(n,c)=>({...n,padding:0,margin:0,border:"none",color:c.isFocused?`${o.mainTextColor}`:`${o.inputLabelColorNoValue}`}),menu:n=>({...n,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${o.selectMenuBackground}`,transition:"background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),menuList:n=>({...n,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:n=>({...n,display:"none"}),singleValue:(n,c)=>({...n,textAlign:"left",color:`${o.mainTextColor}`}),valueContainer:n=>({...n,padding:"0",lineHeight:"1.56",fontSize:"17px",color:`${o.mainTextColor}`}),dropdownIndicator:(n,c)=>({...n,padding:0,transform:c.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${c.isFocused?o.mainTextColor:o.inputLabelColorNoValue}`,"&:hover":{color:`${o.mainTextColor}`}}),clearIndicator:n=>({...n,display:"none"})}),st=i.div`
  margin-right: 40px;

  @media screen and (max-width: 767.9px ){
    margin-right: 8px;
  }
`;i.label`
`;const at=i.input`
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
`,lt=i.div`
`,ct=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px 18px 0px;
`,dt=i.button`
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
`,pt=i(_e)`
  stroke: currentColor;
`,ht=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p,setFieldValue:r,themeColors:m})=>{const[v,h]=a.useState([]),[f,l]=a.useState([]);a.useEffect(()=>{async function u(){try{const b=(await je()).map(g=>({label:g.title,value:g._id}));h(b)}catch(d){console.error("Ошибка при загрузке ингридиента:",d)}}u()},[]);const w=(u,d)=>{let b="",g="";u&&(b=u.value,g=u.label),r(`ingredients[${d}].title`,g),r(`ingredients[${d}]._id`,b),l(j=>{const T=[...j];return T[d]=u,T})},y=()=>{const u={name:""};r("ingredients",[...e.ingredients,u]),l(d=>[...d,null])},$=u=>{const d=[...e.ingredients];d.length===1?(r("ingredients",[{title:"",measure:""}]),l(b=>[])):(d.splice(u,1),r("ingredients",d),l(b=>{const g=[...b];return g.splice(u,1),g}))},D=e.ingredients.length===1;return t.jsxs(Ye,{className:"ingredients-fields",children:[t.jsxs(Ke,{children:[t.jsx(Je,{children:"Ingredients"}),t.jsxs(Xe,{children:[t.jsx(G,{type:"button",onClick:()=>$(e.ingredients.length-1),disabled:D,children:t.jsx(Qe,{})}),t.jsx("div",{children:e.ingredients.length}),t.jsx(G,{type:"button",onClick:y,children:t.jsx(Ze,{})})]})]}),t.jsx(et,{children:e.ingredients.map((u,d)=>{var b,g,j;return t.jsxs(tt,{children:[t.jsxs(it,{children:[t.jsxs(ot,{children:[t.jsx(nt,{children:t.jsx(P,{isClearable:!0,name:`ingredients[${d}].title`,placeholder:"Ingredient",value:f[d]||null,options:v,onChange:T=>w(T,d),onBlur:p,styles:rt(f[d],m)})}),n.ingredients&&o.ingredients&&n.ingredients[d]&&((b=o.ingredients[d])!=null&&b.title)?t.jsx(x,{children:((g=o.ingredients[d])==null?void 0:g.title)||""}):t.jsx(x,{})]}),t.jsxs(st,{children:[t.jsx(at,{type:"text",name:`ingredients[${d}].measure`,placeholder:"1 cl",maxLength:15,value:u.measure||"",onChange:c,onBlur:p}),n.ingredients&&o.ingredients&&n.ingredients[d]&&((j=o.ingredients[d])!=null&&j.measure)?t.jsxs(x,{children:[o.ingredients[d].measure," "]}):t.jsx(x,{})]})]}),t.jsxs(lt,{children:[t.jsx(ct,{children:t.jsx(dt,{type:"button",onClick:()=>$(d),children:t.jsx(pt,{})})}),t.jsx(x,{})]})]},d)})})]})},xt=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${e=>e.theme.mainTextColor};
`,mt=i.div`
  position: relative;
  width: 100%;
`,ut=i.label`
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
`,gt=i.textarea`
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
`,bt=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p})=>{const[r,m]=a.useState(!1),[v,h]=a.useState(!1),f=l=>{const{value:w}=l.target;h(w.trim().length>0)};return t.jsxs(t.Fragment,{children:[t.jsx(xt,{children:"Recipe Preparation"}),t.jsxs(mt,{children:[t.jsx(ut,{htmlFor:"instructions",$isFocusedPreparation:r,$hasValuePreparation:v,children:"Enter the recipe"}),t.jsx(gt,{id:"instructions",name:"instructions",rows:"6",onChange:l=>{f(l),c(l)},onBlur:l=>{m(!1),p(l)},onFocus:()=>m(!0),value:e.instructions,placeholder:" "}),n.instructions&&o.instructions?t.jsx(x,{children:o.instructions}):t.jsx(x,{})]})]})},ft=()=>{const e=se(),o=ae(),{theme:n}=a.useContext(le),c=n==="dark"?{...he}:{...xe},p=E(we),r=E(ke);a.useEffect(()=>{r&&e("/my")},[r]);const m=async(h,{resetForm:f})=>{const l=new FormData;l.append("drink",h.drink),l.append("category",h.category),l.append("shortDescription",h.description),l.append("description",h.description),l.append("alcoholic",h.alcoholic),l.append("instructions",h.instructions),l.append("glass",h.glass),l.append("drinkThumb",h.drinkThumb),l.append("ingredients",JSON.stringify(h.ingredients)),o(me(l))},v={drink:"",description:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",drinkThumb:""};return t.jsxs(Se,{children:[t.jsx(Ce,{title:"Add drink form",hidden:!0}),t.jsx(ce,{initialValues:v,validationSchema:Te,onSubmit:m,children:({values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$})=>t.jsxs(de,{children:[t.jsx(We,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$,themeColors:c}),t.jsx(ht,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$,themeColors:c}),t.jsx(bt,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$}),t.jsx(Le,{type:"submit",children:"Add"})]})}),p&&t.jsx(pe,{children:t.jsx(fe,{color:"#f3f3f3",width:"60"})})]})},wt=i.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`,kt=i.h4`
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);

    @media screen and (min-width: 768px){
    font-size: 24px;
  }
`,vt=()=>t.jsxs(wt,{children:[t.jsx(kt,{children:"Follow Us"}),t.jsx(ue,{})]}),$t=i.div`
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
`,jt=i.h4`
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
`,Ct=i.div`
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
`,yt=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`,Tt=i.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,St=i.p`
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,Lt=i.p`
  height: 63px;
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
  color:  ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,Dt=()=>{const[e,o]=a.useState([]);return a.useEffect(()=>{(async()=>{try{const c=await ye();o(c)}catch(c){console.error("Error fetching drinks:",c)}})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(jt,{children:"Popular Drink"}),t.jsxs($t,{children:[" ",e.slice(0,4).map(({drinkThumb:n,drink:c,description:p,_id:r},m)=>t.jsx(ge,{to:`/drink/${r}`,children:t.jsxs(Ct,{children:[t.jsx(yt,{src:n,alt:c}),t.jsxs(Tt,{children:[t.jsx(St,{children:c}),t.jsx(Lt,{children:p})]})]})},m))]})]})};i.h2`
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
`;const It=i.div`
  position: relative;
  z-index: 200;

  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
  }
`,Ft=i.aside`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,zt=()=>t.jsxs(It,{children:[t.jsx(ft,{}),t.jsxs(Ft,{children:[t.jsx(vt,{}),t.jsx(Dt,{})]})]}),qt=()=>t.jsxs(t.Fragment,{children:[t.jsx(be,{title:"Add drink"}),t.jsx(zt,{})]});export{qt as default};
