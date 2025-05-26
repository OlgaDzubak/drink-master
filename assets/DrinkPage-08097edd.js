import{n as i,j as e,r as p,s as f,q as j,X as k,Z as v,$ as w,v as $}from"./index-4c10e095.js";import{a as C}from"./operationsFilters-eaf772a5.js";import{c as y}from"./coctailPlaceholder-ea3b77ad.js";import{a as D}from"./favoriteSelectors-94e92a4d.js";import{P as I}from"./PageTitle-182f00d6.js";import{c as T}from"./operationsDrinks-126ab23a.js";import{T as B}from"./Hourglass-e7ccd0ad.js";const S=i.li`
  width: 157px;
    
  @media (min-width: 768px) {
      width: 220px;
  }
`,z=i.div`
  width: 157px;
  height: 157px;
  padding: 25px;
  margin-bottom: 8px;
  border-radius:8px;
  background-color: ${t=>t.theme.imageBackground};

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
  }
`,P=i.img`
    width: 107px;
    height: 107px;
    
    @media (min-width: 768px) {
      width: 175px;
      height: 175px;
    }
`,A=i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (min-width: 768px) {
    margin-bottom: 14px;
  }
`,E=i.p`
  font-size: 14px;
  wrap-text: wrap;
  color: ${t=>t.theme.mainTextColor};
  
  @media (min-width: 768px) {
      font-size: 18px;
  }
`,F=i.span`
  font-size: 14px;
  text-align: right;
  color: ${t=>t.theme.seeMoreBtnTextColor};
  
  @media (min-width: 768px) {
      font-size: 16px;
  }
`,L=({photo:t,title:o,measure:s})=>e.jsxs(S,{children:[e.jsx(z,{children:e.jsx(P,{src:t||y,alt:o})}),e.jsxs(A,{children:[e.jsx(E,{children:o}),e.jsx(F,{children:s})]})]}),R=i.section`
  margin-bottom: 100px;
`,G=i.h2`
  color: ${t=>t.theme.seeMoreBtnTextColor};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,H=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  @media (max-width: 374px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    gap: 35px;
  }
`,M=({coctailInfo:t})=>{const[o,s]=p.useState([]),a=t!==null?t.ingredients:[],c=a.map(r=>r.ingredientId);p.useEffect(()=>{(async()=>{try{const n=await C();if(n.length!==0){const d=n.filter(m=>c.includes(m._id));s(d)}}catch(n){console.log(n.message)}})()},[t]);const x=a.map(r=>{const n=o.find(d=>d._id===r.ingredientId);return{...r,ingredientThumb:n?n.ingredientThumb:null}});return e.jsxs(R,{"aria-labelledby":"ingredients",children:[e.jsx(G,{id:"ingredients",children:"Ingredients"}),e.jsx(H,{children:x.map(({title:r,measure:n,ingredientId:d,ingredientThumb:m})=>e.jsx(L,{title:r,measure:n,photo:m},d))})]})},_=i.button`
  width: 222px;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 42px;
  border-color: transparent;
  border: 2px solid ${t=>t.theme.borderBtnColor};
  background-color: ${t=>t.theme.backGroundBtnColor};
  color: ${t=>t.theme.mainBackground};
  transition: color var(--transition), background-color var(--transition), border var(--transition);
  
  &:hover, &:focus {
    border: 2px solid ${t=>t.theme.borderBtnColorHover};
    background-color: ${t=>t.theme.backGroundBtnColorHover};
    color: ${t=>t.theme.mainBackground};
  }

  &:active{
    border: 2px solid ${t=>t.theme.backGroundBtnColorActive};
    background-color: ${t=>t.theme.backGroundBtnColorActive};
    color: ${t=>t.theme.btnColorActive};
  }

  @media (max-width: 374px) {
    margin-left: 40px;
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`,q=({text:t,onClick:o})=>e.jsx(_,{onClick:o,"aria-label":t==="Add to favorite drinks"?"add to favorites":"remove from favorites",children:t}),N=i.section`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 80px;

  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 100px;
  }
`,O=i.div`
  max-width: 750px;
  
    @media screen and (min-width: 1280px) {
      padding-top: 30px;
  }
`,W=i.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: ${t=>t.theme.seeMoreBtnTextColor};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,X=i.p`
  width: 335px;
  font-size: 14px;
  margin-bottom: 40px;
  color:${t=>t.theme.mainTextColor};
  
  @media (max-width: 374px) {
    width: 310px;
  }

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,Z=i.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1280px) {
    width: 400px;
    height: 400px;

}
`,J=({photo:t})=>e.jsx(Z,{src:t}),K=({coctailInfo:t})=>{const o=f(D),s=t!==null?t.drink:"",a=t!==null?t.glass:"",c=t!==null?t.alcoholic:"",x=t!==null?t.shortDescription:"",r=t!==null?t.drinkThumb:"image",n=t!==null?t._id:"",d=j(),[m,h]=p.useState(!1);p.useEffect(()=>{o.find(l=>l._id===n)&&h(!0)},[o,n]);const b=({target:l})=>{d(m?k(n):v(n)),h(!m),l.blur()};return e.jsxs(N,{"aria-labelledby":"drink-title",children:[e.jsxs(O,{children:[e.jsx(I,{id:"drink-title",title:s,marginBottom:"8px"}),e.jsxs(W,{children:[a," / ",c]}),e.jsxs(X,{children:[x," "]}),e.jsx(q,{text:m?String.fromCharCode(10003)+" Added to favorites":"Add to favorite drinks",onClick:b})]}),e.jsx(J,{photo:r})]})},Q="/drink-master/assets/desktop@1x-8eda6905.jpg",U="/drink-master/assets/desktop@2x-0896e2bb.jpg",V="/drink-master/assets/tablet@1x-1ce56edb.jpg",Y="/drink-master/assets/tablet@2x-11f63109.jpg",g="/drink-master/assets/mob@1x-b65eaffd.jpg",tt="/drink-master/assets/mob@2x-d2eb580b.jpg",et=i.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,it=()=>e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1280px)",srcSet:`${Q}, ${U} 2x`,type:"image/jpg"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${V}, ${Y} 2x`,type:"image/jpg"}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}, ${tt} 2x`,type:"image/jpg"}),e.jsx(et,{src:g,alt:"Coctails"})]}),nt=i.section` 
  width:100%;
  display: flex;
  flex-direction: column;
  
`,ot=i.div`

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,rt=i.h2`
  margin-bottom: 40px;
  font-size: 28px;
  color: ${t=>t.theme.mainTextColor};
`,u=i.p`
  
  width: 335px;
  font-size: 14px;
  margin-bottom: 40px;
  color: ${t=>t.theme.mainTextColor};

  @media (max-width: 374px) {
    width: 300px;
  }
  
  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,st=({coctailInfo:t})=>{const o=t!==null?t.instructions:"",s=t!==null?t.description:"";return e.jsxs(nt,{"aria-labelledby":"recipe-preparation",children:[e.jsx(rt,{id:"recipe-preparation",children:"Recipe Preparation"}),e.jsxs(ot,{children:[e.jsxs("div",{children:[e.jsxs(u,{style:{marginBottom:40},children:[" ",s," "]}),e.jsxs(u,{children:[" ",o," "]})]}),e.jsx(it,{})]})]})},dt=()=>{const[t,o]=p.useState(null),[s,a]=p.useState(!1),{drinkId:c}=w();return p.useEffect(()=>{a(!0),(async()=>{try{const r=await T(c);o(r)}catch(r){console.error(r.message)}finally{a(!1)}})()},[c]),s?e.jsxs($,{children:[" ",e.jsx(B,{color:"#f3f3f3",width:"80"})," "]}):e.jsxs(e.Fragment,{children:[e.jsx(K,{coctailInfo:t}),e.jsx(M,{coctailInfo:t}),e.jsx(st,{coctailInfo:t})]})},gt=()=>{const{drinkId:t}=w();return e.jsx(dt,{id:t})};export{gt as default};
