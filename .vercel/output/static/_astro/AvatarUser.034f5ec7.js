import{j as e}from"./jsx-runtime.236aeee0.js";const o={src:"/_astro/placeholder.8869f4ba.jpg",width:360,height:360,format:"jpg"};function s({user:r,className:a=""}){return e.jsx("div",{className:`object-cover overflow-hidden  w-10 h-10 rounded-full flex-shrink-0 ${a}`,children:e.jsx("img",{className:"object-cover w-full h-full hover:scale-105 transition",src:r?.photoURL||r?.picture||o.src,alt:`Avatar del usuario ${r?.displayName}`})})}export{s as A};