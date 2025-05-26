import{n as i,x as h,q as x,j as t,X as m,Y as g}from"./index-dc5bf24c.js";import{c as p}from"./coctailPlaceholder-3a35aade.js";const f="/drink-master/assets/trash-fc07c8dc.svg",w=i.li`
  flex-basis: 100%;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`,k=i.img`
  width: 335px;  
  border-radius: 8px;

  @media (max-width: 350px) {
    width: 100%;
    min-width: 290px;
  }

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,b=i.div`
  display: flex;
  margin-top: 14px;
  ${e=>e.location==="home"||e.location==="drinks"?` flex-direction: row;
                align-items: center;
                justify-content: space-between;`:` flex-direction: column;
                align-items: flex-start;
                justify-content: center;`}
`,u=i.p`
  font-weight: 500; 
  word-wrap: break-word; 
  ${e=>e.location==="home"||e.location==="drinks"?` font-size: 16px; 
                            line-height: 1.125; 
                            color: ${e.theme.mainTextColor};
                            transition: color var(--transition);
                            @media (min-width: 768px) {
                              font-size: 18px; 
                              line-height: 1.33;
                            }`:` font-size: 18px; 
                            line-height: 1.33; 
                            margin-bottom: 4px; 
                            color: ${e.theme.mainTextColor};
                            transition: color var(--transition);
                            @media (min-width: 768px) {
                              font-size: 24px; 
                            }`}
  
`,v=i.p`
  ${e=>e.location==="home"||e.location==="drinks"?" display: none;":` font-size: 14px;
              line-height: 1.28;
              margin-bottom: 18px;
              color: ${e.theme.seeMoreBtnTextColor};
              transition: color var(--transition);`}
`,$=i.p`
  ${e=>e.location==="home"||e.location==="drinks"?" display: none;":` height: 96px; 
            font-size: 14px; 
            line-height: 1.28; 
            margin-bottom: 18px;
            color: ${e.theme.mainTextColor};
            transition: color var(--transition);`}
`,j=i.div`
   display: flex;
   gap: 8px;
`,C=i(h)`
  ${e=>e.location==="home"||e.location==="drinks"?` font-size: 14px; 
          font-weight: 500; 
          line-height: 1.28; 
          word-wrap: break-word; 
          align-self: flex-start;
          color: ${e.theme.seeMoreBtnTextColor};
          transition: color var(--transition);
          
          &:hover {
            color: ${e.theme.mainTextColor};
          }

          @media (min-width: 678px) { 
            font-size: 16px; 
            line-height: 1.125;
          }`:` display: flex; 
          padding: 14px 40px; 
          align-items: flex-start; 
          gap: 10px; 
          font-weight: 600; 
          font-size: 14px; 
          line-height: 1.28;
          border: none; 
          outline: none; 
          border-radius: 42px;
          background-color: ${e.theme.navBackgroundColorHover};
          color: ${e.theme.navTextColorHover};
          transition: color var(--transition), background-color var(--transition);

          &:hover, &:focus { 
            background-color: ${e.theme.paginationLabelsHover}; 
            color: ${e.theme.themeSwitcherColor};
          }`}
  `,y=i.button`
  ${e=>e.location==="home"||e.location==="drinks"?"display: none;":` width: 46px; 
                      padding: 11px 32px;
                      display: flex; 
                      justify-content: center; 
                      align-items: center;
                      gap: 10px; 
                      border: none; 
                      outline: none; 
                      border-radius: 40px;
                      background-color: ${e.theme.navBackgroundColorHover};
                      transition: transform var(--transition), background-color var(--transition);

                      &:hover, &:focus {
                        background-color: ${e.theme.trashBucketBackgroundHover};
                      }`}
`,T=({location:e="home",_id:n,drink:o="",alcoholic:l="",shortDescription:s="",drinkThumb:c={defaultImg:p}})=>{const a=x(),r=o.toLowerCase().split(" ").join("-").slice(0,20),d=()=>{switch(e){case"own":a(g(n));break;case"favorite":a(m(n));break}};return t.jsxs(w,{"aria-labelledby":r,children:[t.jsx(k,{src:c,alt:o}),t.jsxs(b,{location:e,children:[t.jsx(u,{id:r,location:e,children:o}),t.jsx(v,{location:e,children:l}),t.jsx($,{location:e,children:s}),t.jsxs(j,{children:[t.jsx(C,{location:e,to:`/drink/${n}`,"aria-labelledby":r,children:"See more"}),t.jsx(y,{location:e,type:"button",onClick:d,"aria-label":"remove drink",children:t.jsx("img",{src:f,alt:"trash bucket icon"})})]})]})]},n)};export{T as D};
