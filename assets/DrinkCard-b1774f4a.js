import{n as i,x as d,q as h,j as t,X as x,Y as m}from"./index-38c86801.js";import{c as g}from"./coctailPlaceholder-d460326c.js";const p="/drink-master/assets/trash-fc07c8dc.svg",f=i.li`
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
`,u=i.div`
  display: flex;
  margin-top: 14px;
  ${e=>e.location==="home"||e.location==="drinks"?` flex-direction: row;
                align-items: center;
                justify-content: space-between;`:` flex-direction: column;
                align-items: flex-start;
                justify-content: center;`}
`,w=i.p`
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
  
`,b=i.p`
  ${e=>e.location==="home"||e.location==="drinks"?" display: none;":` font-size: 14px;
              line-height: 1.28;
              margin-bottom: 18px;
              color: ${e.theme.seeMoreBtnTextColor};
              transition: color var(--transition);`}
`,v=i.p`
  ${e=>e.location==="home"||e.location==="drinks"?" display: none;":` height: 96px; 
            font-size: 14px; 
            line-height: 1.28; 
            margin-bottom: 18px;
            color: ${e.theme.mainTextColor};
            transition: color var(--transition);`}
`,$=i.div`
   display: flex;
   gap: 8px;
`,j=i(d)`
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
  `,C=i.button`
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
`,z=({location:e="home",_id:n,drink:o="",alcoholic:a="",shortDescription:l="",drinkThumb:s={defaultImg:g}})=>{const r=h(),c=()=>{switch(e){case"own":r(m(n));break;case"favorite":r(x(n));break}};return t.jsxs(f,{children:[t.jsx(k,{src:s,alt:o}),t.jsxs(u,{location:e,children:[t.jsx(w,{location:e,children:o}),t.jsx(b,{location:e,children:a}),t.jsx(v,{location:e,children:l}),t.jsxs($,{children:[t.jsx(j,{location:e,to:`/drink/${n}`,"aria-label":"click button to see more information about drink",children:"See more"}),t.jsx(C,{location:e,type:"button",onClick:c,"aria-label":`click button to delete drink from ${e} drinks`,children:t.jsx("img",{src:p,alt:"trash bucket icon"})})]})]})]},n)};export{z as D};
