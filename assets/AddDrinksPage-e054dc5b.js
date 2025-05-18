import{k as B,l as C,m as oe,o as ne,p as re,n as i,r as s,j as t,u as ae,q as se,G as le,s as E,F as ce,t as de,v as pe,h as he,i as xe,w as ue,M as me,x as ge}from"./index-88d1acf1.js";import{P as be}from"./PageTitle-c1cd74bb.js";import{T as fe}from"./Hourglass-428bf7f4.js";import{s as we,a as ke}from"./ownSelector-f04e3140.js";import{S as P}from"./react-select.esm-08ef5232.js";import{g as ve,b as $e,a as je}from"./operationsFilters-9ed4a4d2.js";import{S as Ce}from"./SectionTitle-44426500.js";import{b as ye}from"./operationsDrinks-1b64174d.js";import{c as Te}from"./coctailPlaceholder-816df3f6.js";const Se=B().shape({drink:C().required("This field is required!").min(2,"This field must be 2-30 symbols long").max(35,"This field must be 2-35 symbols long"),description:C().required("This field is required!").min(25,"This field must be 25-234 symbols long").max(234,"This field must be 25-234 symbols long"),ingredients:oe().of(B().shape({title:C().required("This field is required!"),measure:C().required("This field is required!")})),instructions:C().required("This field is required!").min(25,"This field must be 25-2000 symbols long").max(2e3,"This field must be 25-2000 symbols long"),category:C().required("This field is required!"),glass:C().required("This field is required!"),alcoholic:C().required("Select the type of drink"),drinkThumb:ne().required("Drink photo is required!").test("is-valid-type","Wrong file format! Only jpg, jpeg, png files are allowed",e=>re(e&&e.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",e=>e&&e.size<=102400)}),Le=i.section`
`;i.div`
`;const De=i.button`
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
`,Ie=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),Fe=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    width: 833px;
  }
`,ze=i.div`
`,Pe=i.div`
  position: relative;
  width: 100%;
  height: 320px;
  margin-bottom: 5px;
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
`,Ve=i.label`
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
`,Ne=i.input`
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
`,Be=i.div`

`,Ee=i.div`
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
`,Me=i(Ie)`
  width: 28px;
  height: 28px;
  stroke: currentColor;
`,He=i.p`
  text-align: center;
  color: ${e=>e.theme.authButtonColor};
`,Ae=i.img`
  width: 100%;
  object-fit: contain;
`,Re=i.div`
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
`,qe=i.label`
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
`,Oe=i.label`
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
`,A=i.label`
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
`,R=(e,o,n,c,p)=>({container:r=>({...r,width:"100%",borderBottom:`1px solid ${p.seeMoreBtnTextColor}`}),control:(r,u)=>({...r,fontSize:"16px",lineHeight:"1.21",letterSpacing:"-0.04em",backgroundColor:"transparent",border:"none",boxShadow:"none","&:hover":{cursor:"pointer"}}),option:r=>({...r,padding:"8px",color:`${p.selectOptionColor}`,backgroundColor:`${p.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${p.selectOptionColor_focused}`}}),input:r=>({...r,padding:10,margin:0,border:"none",color:`${p.mainTextColor}`}),menu:r=>({...r,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${p.selectMenuBackground}`}),menuList:r=>({...r,maxHeight:`${o}`,minHeight:`${n}`,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${p.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:r=>({...r,display:"none"}),singleValue:(r,u)=>({...r,padding:10,textAlign:"left",color:`${p.mainTextColor}`}),valueContainer:r=>({...r,padding:"0"}),dropdownIndicator:(r,u)=>({...r,transform:u.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${u.isFocused?p.mainTextColor:p.inputLabelColorNoValue}`,paddingTop:"0",paddingBottom:"0","&:hover":{color:`${p.mainTextColor}`}}),clearIndicator:r=>({...r,display:"none"})}),We=i.div`
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
`,Ge=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p,setFieldValue:r,themeColors:u})=>{const[v,h]=s.useState(null),[f,l]=s.useState(!1),[w,y]=s.useState(!1),[$,D]=s.useState(!1),[m,d]=s.useState(!1),[b,g]=s.useState([]),[j,T]=s.useState([]),[U,V]=s.useState(!1),[_,Y]=s.useState([]),[F,K]=s.useState([]),[J,N]=s.useState(!1);s.useEffect(()=>{async function a(){try{const z=(await ve()).map(L=>({value:L,label:L}));g(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}async function k(){try{const z=(await $e()).map(L=>({value:L,label:L}));Y(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}a(),k()},[]);const X=a=>{const k=a.target.files[0]||null;r("drinkThumb",k),h(k?URL.createObjectURL(k):null)},Q=a=>{const{value:k}=a.target;y(k.trim().length>1)},Z=a=>{const{value:k}=a.target;d(k.trim().length>1)},ee=a=>{T(a||[]),r("category",(a==null?void 0:a.value)||"")},te=a=>{K(a||[]),r("glass",(a==null?void 0:a.value)||"")},ie=a=>{};return t.jsxs(Fe,{className:"description-fields",children:[t.jsxs(ze,{children:[t.jsxs(Pe,{children:[t.jsxs(Ve,{htmlFor:"drinkThumb",children:[t.jsx(Ne,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:a=>X(a)}),t.jsxs(Be,{children:[t.jsx(Ee,{className:"add-div",children:t.jsx(Me,{})}),t.jsx(He,{children:"Add image"})]})]}),v&&t.jsx(Ae,{src:v,alt:"Selected"})]}),n.drinkThumb&&o.drinkThumb?t.jsx(x,{children:o.drinkThumb}):null]}),t.jsxs(Re,{children:[t.jsxs(I,{className:"name",children:[t.jsx(qe,{htmlFor:"drink",$isFocused:f,$hasValue:w,children:"Enter drink title"}),t.jsx(M,{type:"text",id:"drink",name:"drink",minLength:2,maxLength:35,onChange:a=>{Q(a),c(a)},onBlur:a=>{l(!1),p(a)},onFocus:()=>l(!0),value:e.drink}),n.drink&&o.drink?t.jsx(x,{children:o.drink}):t.jsx(x,{})]}),t.jsxs(I,{className:"description",children:[t.jsx(Oe,{htmlFor:"description",$isFocusedDescription:$,$hasValueDescription:m,children:"Enter drink description"}),t.jsx(M,{type:"text",rows:1,minLength:25,maxLength:234,id:"description",name:"description",onChange:a=>{Z(a),c(a)},onBlur:a=>{D(!1),p(a)},onFocus:()=>D(!0),value:e.description}),n.description&&o.description?t.jsx(x,{children:o.description}):t.jsx(x,{})]}),t.jsx(I,{className:"category",children:t.jsxs(H,{children:[t.jsx(A,{htmlFor:"category-input",selectedCategory:j.label,$isFocused:U,children:"Choose drink category"}),t.jsx(P,{isClearable:!0,inputId:"category-input",name:"category",options:b,value:j,onChange:a=>ee(a),onFocus:()=>V(!0),onBlur:a=>{V(!1),p(a)},styles:R("199px","405px","205px",j,u),placeholder:""}),n.category&&o.category?t.jsx(x,{children:o.category}):t.jsx(x,{})]})}),t.jsx(I,{className:"glass",children:t.jsxs(H,{children:[t.jsx(A,{htmlFor:"glass-input",selectedCategory:F.label,$isFocused:J,children:"Choose drink glass"}),t.jsx(P,{isClearable:!0,inputId:"glass-input",name:"glass",options:_,value:F,onChange:a=>te(a),onFocus:()=>N(!0),onBlur:a=>{N(!1),p(a)},onMenuOpen:ie,styles:R("199px","305px","205px",F,u),placeholder:""}),n.glass&&o.glass?t.jsx(x,{children:o.glass}):t.jsx(x,{})]})}),t.jsxs(We,{className:"alcoholic",children:[t.jsxs(q,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:c}),t.jsx(W,{}),"Alcoholic"]}),t.jsxs(q,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:c}),t.jsx(W,{}),"Non-alcoholic"]}),n.alcoholic&&o.alcoholic?t.jsx(x,{children:o.alcoholic}):null]})]})]})},Ue=e=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_e=e=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ye=e=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));i.p`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  color: #da1414;
`;const Ke=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;

  @media (min-width: 1280px) {
    width: 540px;
  }
`,Je=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`,Xe=i.h3`
  font-size: 28px;
  color: ${e=>e.theme.mainTextColor};
`,Qe=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${e=>e.theme.filterDrinksBorderColorHover};
`,Ze=i(_e)`
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
`,et=i(Ue)`
  stroke: currentColor;
`,tt=i.ul`
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
`,it=i.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ot=i.div`
  display: flex;
`,nt=i.div`
  margin-right: 14px;

  @media screen and (max-width: 767.9px){
    margin-right: 8px;
  }
`,rt=i.label`
  padding: 0;
  margin: 0;
  transition: color var(--transition), border-color var(--transition);
`,at=(e,o)=>({container:n=>({...n,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(n,c)=>({...n,padding:"14px 24px",backgroundColor:"transparent",borderRadius:"200px",border:c.isFocused?`1px solid ${o.mainTextColor}`:`1px solid ${o.inputLabelColorNoValue}`,boxShadow:"none",transition:"border-color 400ms cubic-bezier(0.4, 0, 0.2, 1), color 400ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{borderColor:`${o.mainTextColor}`}}),placeholder:(n,c)=>({...n,margin:0,color:`${o.inputLabelColorNoValue}`,transition:"color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),option:n=>({...n,padding:"8px",color:`${o.selectOptionColor}`,backgroundColor:`${o.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${o.selectOptionColor_focused}`}}),input:(n,c)=>({...n,padding:0,margin:0,border:"none",color:c.isFocused?`${o.mainTextColor}`:`${o.inputLabelColorNoValue}`}),menu:n=>({...n,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${o.selectMenuBackground}`,transition:"background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),menuList:n=>({...n,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:n=>({...n,display:"none"}),singleValue:(n,c)=>({...n,textAlign:"left",color:`${o.mainTextColor}`}),valueContainer:n=>({...n,padding:"0",lineHeight:"1.56",fontSize:"17px",color:`${o.mainTextColor}`}),dropdownIndicator:(n,c)=>({...n,padding:0,transform:c.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${c.isFocused?o.mainTextColor:o.inputLabelColorNoValue}`,"&:hover":{color:`${o.mainTextColor}`}}),clearIndicator:n=>({...n,display:"none"})}),st=i.div`
  margin-right: 40px;

  @media screen and (max-width: 767.9px ){
    margin-right: 8px;
  }
`;i.label`
`;const lt=i.input`
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
`,ct=i.div`
`,dt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px 18px 0px;
`,pt=i.button`
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
`,ht=i(Ye)`
  stroke: currentColor;
`,xt=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p,setFieldValue:r,themeColors:u})=>{const[v,h]=s.useState([]),[f,l]=s.useState([]);s.useEffect(()=>{async function m(){try{const b=(await je()).map(g=>({label:g.title,value:g._id}));h(b)}catch(d){console.error("Ошибка при загрузке ингридиента:",d)}}m()},[]);const w=(m,d)=>{let b="",g="";m&&(b=m.value,g=m.label),r(`ingredients[${d}].title`,g),r(`ingredients[${d}]._id`,b),l(j=>{const T=[...j];return T[d]=m,T})},y=()=>{const m={name:""};r("ingredients",[...e.ingredients,m]),l(d=>[...d,null])},$=m=>{const d=[...e.ingredients];d.length===1?(r("ingredients",[{title:"",measure:""}]),l(b=>[])):(d.splice(m,1),r("ingredients",d),l(b=>{const g=[...b];return g.splice(m,1),g}))},D=e.ingredients.length===1;return t.jsxs(Ke,{className:"ingredients-fields",children:[t.jsxs(Je,{children:[t.jsx(Xe,{children:"Ingredients"}),t.jsxs(Qe,{children:[t.jsx(G,{type:"button",onClick:()=>$(e.ingredients.length-1),disabled:D,children:t.jsx(Ze,{})}),t.jsx("div",{children:e.ingredients.length}),t.jsx(G,{type:"button",onClick:y,children:t.jsx(et,{})})]})]}),t.jsx(tt,{children:e.ingredients.map((m,d)=>{var b,g,j;return t.jsxs(it,{children:[t.jsxs(ot,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:t.jsx(P,{isClearable:!0,name:`ingredients[${d}].title`,placeholder:"Ingredient",value:f[d]||null,options:v,onChange:T=>w(T,d),onBlur:p,styles:at(f[d],u)})}),n.ingredients&&o.ingredients&&n.ingredients[d]&&((b=o.ingredients[d])!=null&&b.title)?t.jsx(x,{children:((g=o.ingredients[d])==null?void 0:g.title)||""}):t.jsx(x,{})]}),t.jsxs(st,{children:[t.jsx(lt,{type:"text",name:`ingredients[${d}].measure`,placeholder:"1 cl",maxLength:15,value:m.measure||"",onChange:c,onBlur:p}),n.ingredients&&o.ingredients&&n.ingredients[d]&&((j=o.ingredients[d])!=null&&j.measure)?t.jsxs(x,{children:[o.ingredients[d].measure," "]}):t.jsx(x,{})]})]}),t.jsxs(ct,{children:[t.jsx(dt,{children:t.jsx(pt,{type:"button",onClick:()=>$(d),children:t.jsx(ht,{})})}),t.jsx(x,{})]})]},d)})})]})},ut=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${e=>e.theme.mainTextColor};
`,mt=i.div`
  position: relative;
  width: 100%;
`,gt=i.label`
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
`,bt=i.textarea`
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
`,ft=({values:e,errors:o,touched:n,handleChange:c,handleBlur:p})=>{const[r,u]=s.useState(!1),[v,h]=s.useState(!1),f=l=>{const{value:w}=l.target;h(w.trim().length>0)};return t.jsxs(t.Fragment,{children:[t.jsx(ut,{children:"Recipe Preparation"}),t.jsxs(mt,{children:[t.jsx(gt,{htmlFor:"instructions",$isFocusedPreparation:r,$hasValuePreparation:v,children:"Enter the recipe"}),t.jsx(bt,{id:"instructions",name:"instructions",rows:"6",onChange:l=>{f(l),c(l)},onBlur:l=>{u(!1),p(l)},onFocus:()=>u(!0),value:e.instructions,placeholder:" "}),n.instructions&&o.instructions?t.jsx(x,{children:o.instructions}):t.jsx(x,{})]})]})},wt=()=>{const e=ae(),o=se(),{theme:n}=s.useContext(le),c=n==="dark"?{...he}:{...xe},p=E(we),r=E(ke);s.useEffect(()=>{r&&e("/my")},[r]);const u=async(h,{resetForm:f})=>{const l=new FormData;l.append("drink",h.drink),l.append("category",h.category),l.append("shortDescription",h.description),l.append("description",h.description),l.append("alcoholic",h.alcoholic),l.append("instructions",h.instructions),l.append("glass",h.glass),l.append("drinkThumb",h.drinkThumb),l.append("ingredients",JSON.stringify(h.ingredients)),o(ue(l))},v={drink:"",description:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",drinkThumb:""};return t.jsxs(Le,{children:[t.jsx(Ce,{title:"Add drink form",hidden:!0}),t.jsx(ce,{initialValues:v,validationSchema:Se,onSubmit:u,children:({values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$})=>t.jsxs(de,{children:[t.jsx(Ge,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$,themeColors:c}),t.jsx(xt,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$,themeColors:c}),t.jsx(ft,{values:h,errors:f,touched:l,handleChange:w,handleBlur:y,setFieldValue:$}),t.jsx(De,{type:"submit",children:"Add"})]})}),p&&t.jsx(pe,{children:t.jsx(fe,{color:"currentColor",width:"60"})})]})},kt=i.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`,vt=i.h4`
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);

    @media screen and (min-width: 768px){
    font-size: 24px;
  }
`,$t=()=>t.jsxs(kt,{children:[t.jsx(vt,{children:"Follow Us"}),t.jsx(me,{})]});i.h2`
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
`;const jt=i.div`
  position: relative;
  z-index: 200;

  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
  }
`,Ct=i.aside`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,yt=i.div`
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
`,Tt=i.h4`
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
`,St=i.div`
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
`,Lt=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`,Dt=i.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,It=i.p`
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  color: ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,Ft=i.p`
  height: 63px;
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
  color:  ${e=>e.theme.mainTextColor};
  transition: color var(--transition);
`,zt=()=>{const[e,o]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const c=await ye();o(c)}catch(c){console.error("Error fetching drinks:",c)}})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(Tt,{children:"Popular Drink"}),t.jsxs(yt,{children:[" ",e.slice(0,4).map(({drinkThumb:n={defaultImg:Te},drink:c,description:p,_id:r},u)=>t.jsx(ge,{to:`/drink/${r}`,children:t.jsxs(St,{children:[t.jsx(Lt,{src:n,alt:c}),t.jsxs(Dt,{children:[t.jsx(It,{children:c}),t.jsx(Ft,{children:p})]})]})},u))]})]})},Pt=()=>t.jsxs(jt,{children:[t.jsx(wt,{}),t.jsxs(Ct,{children:[t.jsx($t,{}),t.jsx(zt,{})]})]}),Ot=()=>t.jsxs(t.Fragment,{children:[t.jsx(be,{title:"Add drink"}),t.jsx(Pt,{})]});export{Ot as default};
