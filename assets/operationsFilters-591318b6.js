import{W as e}from"./index-a5a2844a.js";async function a(){try{const{data:t}=await e.get("/filters/categories");return t}catch(t){console.log(t.message)}}async function r(){try{const{data:t}=await e.get("/filters/ingredients");return t}catch(t){console.log(t.message)}}async function o(){try{const{data:t}=await e.get("/filters/glasses");return t}catch(t){console.log(t.message)}}export{r as a,o as b,a as g};
