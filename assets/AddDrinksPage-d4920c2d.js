import{k as B,l as y,m as ne,o as re,p as ae,n as i,r as s,j as t,u as se,q as le,G as de,s as E,F as ce,t as pe,v as he,h as xe,i as ue,w as me,M as ge,x as be}from"./index-50b91055.js";import{P as fe}from"./PageTitle-38a76d09.js";import{T as we}from"./Hourglass-8d3b384e.js";import{s as ke,a as ve}from"./ownSelector-f04e3140.js";import{S as P}from"./react-select.esm-2e8c8139.js";import{g as $e,b as je,a as ye}from"./operationsFilters-7db4745d.js";import{S as U}from"./SectionTitle-d7743d0d.js";import{b as Ce}from"./operationsDrinks-c05c34ac.js";import{c as Te}from"./coctailPlaceholder-e30d9b79.js";const Se=B().shape({drink:y().required("This field is required!").min(2,"This field must be 2-30 symbols long").max(35,"This field must be 2-35 symbols long"),description:y().required("This field is required!").min(25,"This field must be 25-234 symbols long").max(234,"This field must be 25-234 symbols long"),ingredients:ne().of(B().shape({title:y().required("This field is required!"),measure:y().required("This field is required!")})),instructions:y().required("This field is required!").min(25,"This field must be 25-2000 symbols long").max(2e3,"This field must be 25-2000 symbols long"),category:y().required("This field is required!"),glass:y().required("This field is required!"),alcoholic:y().required("Select the type of drink"),drinkThumb:re().required("Drink photo is required!").test("is-valid-type","Wrong file format! Only jpg, jpeg, png files are allowed",e=>ae(e&&e.name.toLowerCase(),"image")).test("is-valid-size","Max allowed size is 100KB",e=>e&&e.size<=102400)}),Le=i.section`
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
`,R=(e,o,n,d,p)=>({container:r=>({...r,width:"100%",borderBottom:`1px solid ${p.seeMoreBtnTextColor}`}),control:(r,u)=>({...r,fontSize:"16px",lineHeight:"1.21",letterSpacing:"-0.04em",backgroundColor:"transparent",border:"none",boxShadow:"none","&:hover":{cursor:"pointer"}}),option:r=>({...r,padding:"8px",color:`${p.selectOptionColor}`,backgroundColor:`${p.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${p.selectOptionColor_focused}`}}),input:r=>({...r,padding:10,margin:0,border:"none",color:`${p.mainTextColor}`}),menu:r=>({...r,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${p.selectMenuBackground}`}),menuList:r=>({...r,maxHeight:`${o}`,minHeight:`${n}`,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${p.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:r=>({...r,display:"none"}),singleValue:(r,u)=>({...r,padding:10,textAlign:"left",color:`${p.mainTextColor}`}),valueContainer:r=>({...r,padding:"0"}),dropdownIndicator:(r,u)=>({...r,transform:u.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${u.isFocused?p.mainTextColor:p.inputLabelColorNoValue}`,paddingTop:"0",paddingBottom:"0","&:hover":{color:`${p.mainTextColor}`}}),clearIndicator:r=>({...r,display:"none"})}),We=i.div`
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
`,Ge=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p,setFieldValue:r,themeColors:u})=>{const[v,h]=s.useState(null),[f,l]=s.useState(!1),[w,C]=s.useState(!1),[$,D]=s.useState(!1),[m,c]=s.useState(!1),[b,g]=s.useState([]),[j,T]=s.useState([]),[_,V]=s.useState(!1),[Y,K]=s.useState([]),[F,J]=s.useState([]),[X,N]=s.useState(!1);s.useEffect(()=>{async function a(){try{const z=(await $e()).map(L=>({value:L,label:L}));g(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}async function k(){try{const z=(await je()).map(L=>({value:L,label:L}));K(z)}catch(S){console.error("Ошибка при загрузке категорий:",S)}}a(),k()},[]);const Q=a=>{const k=a.target.files[0]||null;r("drinkThumb",k),h(k?URL.createObjectURL(k):null)},Z=a=>{const{value:k}=a.target;C(k.trim().length>1)},ee=a=>{const{value:k}=a.target;c(k.trim().length>1)},te=a=>{T(a||[]),r("category",(a==null?void 0:a.value)||"")},ie=a=>{J(a||[]),r("glass",(a==null?void 0:a.value)||"")},oe=a=>{};return t.jsxs(Fe,{className:"description-fields",children:[t.jsxs(ze,{children:[t.jsxs(Pe,{"aria-labelledby":"drinkThumb",children:[t.jsxs(Ve,{htmlFor:"drinkThumb",children:[t.jsx(Ne,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:a=>Q(a),"aria-label":"add drink photo"}),t.jsxs(Be,{"aria-labelledby":"drinkThumb",children:[t.jsx(Ee,{className:"add-div",children:t.jsx(Me,{})}),t.jsx(He,{children:"Add image"})]})]}),v&&t.jsx(Ae,{src:v,alt:"Selected"})]}),n.drinkThumb&&o.drinkThumb?t.jsx(x,{children:o.drinkThumb}):null]}),t.jsxs(Re,{children:[t.jsxs(I,{className:"name",children:[t.jsx(qe,{htmlFor:"drink",$isFocused:f,$hasValue:w,children:"Enter drink title"}),t.jsx(M,{type:"text",id:"drink",name:"drink",minLength:2,maxLength:35,onChange:a=>{Z(a),d(a)},onBlur:a=>{l(!1),p(a)},onFocus:()=>l(!0),value:e.drink,"aria-label":"drink name"}),n.drink&&o.drink?t.jsx(x,{children:o.drink}):t.jsx(x,{})]}),t.jsxs(I,{className:"description",children:[t.jsx(Oe,{htmlFor:"description",$isFocusedDescription:$,$hasValueDescription:m,children:"Enter drink description"}),t.jsx(M,{type:"text",rows:1,minLength:25,maxLength:250,id:"description",name:"description",onChange:a=>{ee(a),d(a)},onBlur:a=>{D(!1),p(a)},onFocus:()=>D(!0),value:e.description,"aria-label":"drink description"}),n.description&&o.description?t.jsx(x,{children:o.description}):t.jsx(x,{})]}),t.jsx(I,{className:"category",children:t.jsxs(H,{children:[t.jsx(A,{htmlFor:"category-input",selectedCategory:j.label,$isFocused:_,children:"Choose drink category"}),t.jsx(P,{isClearable:!0,inputId:"category-input",name:"category",options:b,value:j,onChange:a=>te(a),onFocus:()=>V(!0),onBlur:a=>{V(!1),p(a)},styles:R("199px","405px","205px",j,u),placeholder:"","aria-label":"drink category"}),n.category&&o.category?t.jsx(x,{children:o.category}):t.jsx(x,{})]})}),t.jsx(I,{className:"glass",children:t.jsxs(H,{children:[t.jsx(A,{htmlFor:"glass-input",selectedCategory:F.label,$isFocused:X,children:"Choose drink glass"}),t.jsx(P,{isClearable:!0,inputId:"glass-input",name:"glass",options:Y,value:F,onChange:a=>ie(a),onFocus:()=>N(!0),onBlur:a=>{N(!1),p(a)},onMenuOpen:oe,styles:R("199px","305px","205px",F,u),placeholder:"","aria-label":"drink glass type"}),n.glass&&o.glass?t.jsx(x,{children:o.glass}):t.jsx(x,{})]})}),t.jsxs(We,{className:"alcoholic",children:[t.jsxs(q,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:d,"aria-label":"alcoholic marker"}),t.jsx(W,{}),"Alcoholic"]}),t.jsxs(q,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[t.jsx(O,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:d,"aria-label":"non-alcoholic marker"}),t.jsx(W,{}),"Non-alcoholic"]}),n.alcoholic&&o.alcoholic?t.jsx(x,{children:o.alcoholic}):null]})]})]})},Ue=e=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_e=e=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ye=e=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));i.p`
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
`,at=(e,o)=>({container:n=>({...n,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(n,d)=>({...n,padding:"14px 24px",backgroundColor:"transparent",borderRadius:"200px",border:d.isFocused?`1px solid ${o.mainTextColor}`:`1px solid ${o.inputLabelColorNoValue}`,boxShadow:"none",transition:"border-color 400ms cubic-bezier(0.4, 0, 0.2, 1), color 400ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{borderColor:`${o.mainTextColor}`}}),placeholder:(n,d)=>({...n,margin:0,color:`${o.inputLabelColorNoValue}`,transition:"color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),option:n=>({...n,padding:"8px",color:`${o.selectOptionColor}`,backgroundColor:`${o.selectMenuBackground}`,borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${o.selectOptionColor_focused}`}}),input:(n,d)=>({...n,padding:0,margin:0,border:"none",color:d.isFocused?`${o.mainTextColor}`:`${o.inputLabelColorNoValue}`}),menu:n=>({...n,width:"199px",padding:"14px",borderRadius:"20px",overflow:"hidden",right:"0px",backgroundColor:`${o.selectMenuBackground}`,transition:"background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)"}),menuList:n=>({...n,padding:"5px",overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.selectScrollbarThumbColor}`},"::-webkit-scrollbar-corner":{background:"none"}}),indicatorSeparator:n=>({...n,display:"none"}),singleValue:(n,d)=>({...n,textAlign:"left",color:`${o.mainTextColor}`}),valueContainer:n=>({...n,padding:"0",lineHeight:"1.56",fontSize:"17px",color:`${o.mainTextColor}`}),dropdownIndicator:(n,d)=>({...n,padding:0,transform:d.isFocused?"rotate(180deg)":"rotate(0deg)",color:`${d.isFocused?o.mainTextColor:o.inputLabelColorNoValue}`,"&:hover":{color:`${o.mainTextColor}`}}),clearIndicator:n=>({...n,display:"none"})}),st=i.div`
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
`,dt=i.div`
`,ct=i.div`
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
`,xt=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p,setFieldValue:r,themeColors:u})=>{const[v,h]=s.useState([]),[f,l]=s.useState([]);s.useEffect(()=>{async function m(){try{const b=(await ye()).map(g=>({label:g.title,value:g._id}));h(b)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}m()},[]);const w=(m,c)=>{let b="",g="";m&&(b=m.value,g=m.label),r(`ingredients[${c}].title`,g),r(`ingredients[${c}]._id`,b),l(j=>{const T=[...j];return T[c]=m,T})},C=()=>{const m={name:""};r("ingredients",[...e.ingredients,m]),l(c=>[...c,null])},$=m=>{const c=[...e.ingredients];c.length===1?(r("ingredients",[{title:"",measure:""}]),l(b=>[])):(c.splice(m,1),r("ingredients",c),l(b=>{const g=[...b];return g.splice(m,1),g}))},D=e.ingredients.length===1;return t.jsxs(Ke,{className:"ingredients-fields","aria-labelledby":"ingredients-title",children:[t.jsxs(Je,{children:[t.jsx(Xe,{id:"ingredients-title",children:"Ingredients"}),t.jsxs(Qe,{children:[t.jsx(G,{type:"button",onClick:()=>$(e.ingredients.length-1),disabled:D,"aria-label":"remove ingredient",children:t.jsx(Ze,{})}),t.jsx("div",{children:e.ingredients.length}),t.jsx(G,{type:"button",onClick:C,"aria-label":"add ingredient",children:t.jsx(et,{})})]})]}),t.jsx(tt,{children:e.ingredients.map((m,c)=>{var b,g,j;return t.jsxs(it,{children:[t.jsxs(ot,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:t.jsx(P,{isClearable:!0,name:`ingredients[${c}].title`,placeholder:"Ingredient",value:f[c]||null,options:v,onChange:T=>w(T,c),onBlur:p,styles:at(f[c],u),"aria-label":"ingredient name"})}),n.ingredients&&o.ingredients&&n.ingredients[c]&&((b=o.ingredients[c])!=null&&b.title)?t.jsx(x,{children:((g=o.ingredients[c])==null?void 0:g.title)||""}):t.jsx(x,{})]}),t.jsxs(st,{children:[t.jsx(lt,{type:"text",name:`ingredients[${c}].measure`,placeholder:"1 cl",maxLength:15,value:m.measure||"",onChange:d,onBlur:p,"aria-label":"ingredient measure"}),n.ingredients&&o.ingredients&&n.ingredients[c]&&((j=o.ingredients[c])!=null&&j.measure)?t.jsxs(x,{children:[o.ingredients[c].measure," "]}):t.jsx(x,{})]})]}),t.jsxs(dt,{children:[t.jsx(ct,{children:t.jsx(pt,{type:"button",onClick:()=>$(c),"aria-label":"remove ingredient",children:t.jsx(ht,{})})}),t.jsx(x,{})]})]},c)})})]})},ut=i.h3`
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
`,ft=({values:e,errors:o,touched:n,handleChange:d,handleBlur:p})=>{const[r,u]=s.useState(!1),[v,h]=s.useState(!1),f=l=>{const{value:w}=l.target;h(w.trim().length>0)};return t.jsxs("div",{"aria-labelledby":"recipe-title",children:[t.jsx(ut,{id:"recipe-title",children:"Recipe Preparation"}),t.jsxs(mt,{children:[t.jsx(gt,{htmlFor:"instructions",$isFocusedPreparation:r,$hasValuePreparation:v,children:"Enter the recipe"}),t.jsx(bt,{id:"instructions",name:"instructions",rows:"6",onChange:l=>{f(l),d(l)},onBlur:l=>{u(!1),p(l)},onFocus:()=>u(!0),value:e.instructions,placeholder:" ","aria-label":"preparation recipe"}),n.instructions&&o.instructions?t.jsx(x,{children:o.instructions}):t.jsx(x,{})]})]})},wt=()=>{const e=se(),o=le(),{theme:n}=s.useContext(de),d=n==="dark"?{...xe}:{...ue},p=E(ke),r=E(ve);s.useEffect(()=>{r&&e("/my")},[r]);const u=async(h,{resetForm:f})=>{const l=new FormData;l.append("drink",h.drink),l.append("category",h.category),l.append("shortDescription",h.description),l.append("description",h.description),l.append("alcoholic",h.alcoholic),l.append("instructions",h.instructions),l.append("glass",h.glass),l.append("drinkThumb",h.drinkThumb),l.append("ingredients",JSON.stringify(h.ingredients)),o(me(l))},v={drink:"",description:"",ingredients:[{title:"",measure:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic",drinkThumb:""};return t.jsxs(Le,{"aria-labelledby":"add-drink-form-title",children:[t.jsx(U,{id:"add-drink-form-title",title:"Add drink form",hidden:!0}),t.jsx(ce,{initialValues:v,validationSchema:Se,onSubmit:u,children:({values:h,errors:f,touched:l,handleChange:w,handleBlur:C,setFieldValue:$})=>t.jsxs(pe,{children:[t.jsx(Ge,{values:h,errors:f,touched:l,handleChange:w,handleBlur:C,setFieldValue:$,themeColors:d}),t.jsx(xt,{values:h,errors:f,touched:l,handleChange:w,handleBlur:C,setFieldValue:$,themeColors:d}),t.jsx(ft,{values:h,errors:f,touched:l,handleChange:w,handleBlur:C,setFieldValue:$}),t.jsx(De,{type:"submit","aria-label":"click button to add new drink to your own collection",children:"Add"})]})}),p&&t.jsx(he,{children:t.jsx(we,{color:"currentColor",width:"60"})})]})},kt=i.div`
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
`,$t=()=>t.jsxs(kt,{"aria-labelledby":"follow-us-title",children:[t.jsx(vt,{id:"follow-us-title",children:"Follow Us"}),t.jsx(ge,{})]});i.h2`
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
`,yt=i.aside`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,Ct=i.div`
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
`,zt=()=>{const[e,o]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const d=await Ce();o(d)}catch(d){console.error("Error fetching drinks:",d)}})()},[]),t.jsxs("div",{"aria-labelledby":"popular-drinks-title",children:[t.jsx(Tt,{id:"popular-drinks-title",children:"Popular Drinks"}),t.jsxs(Ct,{children:[" ",e.slice(0,4).map(({drinkThumb:n={defaultImg:Te},drink:d,description:p,_id:r},u)=>t.jsx(be,{to:`/drink/${r}`,"aria-labelledby":"popular-drink-name",children:t.jsxs(St,{children:[t.jsx(Lt,{src:n,alt:d,"aria-labelledby":"popular-drink-name"}),t.jsxs(Dt,{children:[t.jsx(It,{id:"popular-drink-name",children:d}),t.jsx(Ft,{"aria-labelledby":"popular-drink-name",children:p})]})]})},u))]})]})},Pt=()=>t.jsxs(jt,{children:[t.jsx(wt,{}),t.jsxs(yt,{"aria-labelledby":"aside-title",children:[t.jsx(U,{id:"aside-title",title:"socials links and popular drinks",hidden:!0}),t.jsx($t,{}),t.jsx(zt,{})]})]}),Ot=()=>t.jsxs(t.Fragment,{children:[t.jsx(fe,{title:"Add drink",marginBottom:["40px","60px","60px"]}),t.jsx(Pt,{})]});export{Ot as default};
