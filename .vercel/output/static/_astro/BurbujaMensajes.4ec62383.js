import{j as e}from"./jsx-runtime.236aeee0.js";import{r as n}from"./index.9e3bb68e.js";import{F as i}from"./FlechaIcon.7d235e09.js";import{A as o}from"./AvatarUser.034f5ec7.js";import{B as l}from"./BotonAccion.7f0b3692.js";function h({user:t}){const[s,a]=n.useState(!1);function r(){a(!s)}return e.jsx("div",{className:" hidden lg:flex  overflow-hidden shadow-2xl rounded-t-xl fixed bottom-0 right-0 mr-4   z-50 ",children:e.jsx("aside",{className:`w-[288px] bg-white   flex pointer-events-auto   z-50 ${s?"h-[70vh] transition-all":"h-[50px]"} transition-all`,children:e.jsxs("div",{className:"flex h-[50px] w-full border-b-2 items-center p-3 justify-between ",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{className:"w-[30px]  h-[30px]",user:t})," ",e.jsx("p",{className:" ",children:"Mensajes"})]}),e.jsx(l,{onClick:()=>r(),children:e.jsx(i,{className:`${s?"rotate-[720deg]":"-rotate-[180deg]"}
            transition-all duration-500`})})]})})})}export{h as BurbujaMensajes};