import{j as e}from"./jsx-runtime.236aeee0.js";import{r as l}from"./index.9e3bb68e.js";import{N as I}from"./config.a3d1421f.js";import{CalendarioIcon as A}from"./CalendarioIcon.83e48f43.js";import{A as M}from"./AvatarUser.034f5ec7.js";import{CloseIcon as E}from"./CloseIcon.bb1f0a42.js";import{B as k}from"./BotonAccion.7f0b3692.js";import{f as T,u as P}from"./fileReader.9ea72be0.js";import{A as L}from"./_astro-entry_sonner.dae5ec25.js";import"./client.595546ea.js";import"./index.ec3c183f.js";const D=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function C({placeholder:a,error:m,label:h,...p}){return e.jsxs("label",{className:"flex flex-col gap-1",children:[e.jsxs("span",{className:"text-sm tracking-wide",children:[h,":"]}),e.jsx("input",{className:"border p-3 rounded-md bg-gray-100",type:"text",placeholder:a,maxLength:30,...p}),m&&e.jsx("span",{className:"text-rose-800",children:m})]})}const O="https://img.freepik.com/vector-premium/patron-fisuras-reciclaje-separacion-basura-co2-concepto-cambio-climatico-doodle-vectorial_414360-2797.jpg";function F({user:a}){return e.jsxs("div",{className:"w-full h-full shadow-md",children:[e.jsx("div",{className:" h-[150px] bg-cover aspect-video bg-no-repeat w-full bg-center block",style:{backgroundImage:`url(${a?.portadaURL||O})`}}),e.jsxs("div",{className:"flex flex-col items-center gap-2 -translate-y-14",children:[e.jsx(M,{"client:only":!0,className:"w-24 h-24 border-2",user:a}),e.jsx("p",{className:"text-sm w-[90%] text-center",children:a?.displayName})]})]})}function _({user:a,setAbrirModal:m}){function h(s){m(!1),document.body.classList.remove("overflow-hidden"),document.body.classList.remove("sm:overflow-auto")}const[p,r]=l.useState(a),[x,c]=l.useState(""),[y,g]=l.useState(""),[j,N]=l.useState(null),[w,v]=l.useState(null),[S,t]=l.useState(!1),[o,d]=l.useState(!1);l.useEffect(()=>{JSON.stringify(p)===JSON.stringify(a)?t(!1):t(!0)},[p]),l.useEffect(()=>{document.body.classList.add("overflow-hidden"),document.body.classList.add("sm:overflow-auto")},[]);function b(s){const i=s.target.name;i==="nombre"?r(n=>({...n,nombre:s.target.value.trim()||a.nombre})):i==="apellido"?r(n=>({...n,apellido:s.target.value.trim()||a.apellido})):i==="displayName"&&r(n=>({...n,displayName:s.target.value.trim()||a.displayName}))}async function u(s){const i=s.target.name,n=await T(s.target.files[0]);i==="perfil"?(c(n),N(s.target.files[0]),r(f=>({...f,photoURL:n}))):i==="portada"&&(v(s.target.files[0]),g(n),r(f=>({...f,portadaURL:n})))}async function R(s){s.preventDefault();let i={...p};try{if(d(!0),j){const{urlMultimedia:f}=await P({user:a,file:j});i.photoURL=f}if(w){const{urlMultimedia:f}=await P({user:a,file:w});i.portadaURL=f}(await fetch("/api/auth/actualizarUsuario",{method:"POST",body:JSON.stringify({data:i})})).status===200&&(L.success("Información actualizada"),localStorage.setItem(`${I}.userData`,JSON.stringify(i)),window.location.reload())}catch(n){console.log(n),L.error("Ha ocurrido un error al actualizar la información")}finally{d(!1),m(!1)}}return e.jsx("div",{className:"absolute top-0 left-0 bottom-0 bg-gray-600 bg-opacity-75 w-full z-50  ",children:e.jsxs("main",{className:`w-full sm:w-11/12 max-w-[800px] h-[100vh] md:h-auto mx-auto sm:mt-20 bg-white sm:rounded-md shadow-xl p-5 flex flex-col gap-3 sticky top-0 overflow-y-scroll z-50 sm:top-5\r
      pb-[110px] md:pb-5\r
      `,children:[e.jsxs("header",{className:"flex items-center",children:[e.jsx("h2",{className:"text-3xl font-semibold",children:"Editar información"}),e.jsx(k,{className:"block ml-auto",onClick:h,children:e.jsx(E,{})})]}),e.jsx("section",{className:" ",children:e.jsxs("form",{onSubmit:R,className:"flex flex-col gap-3",children:[e.jsx(C,{onInput:b,name:"nombre",label:"Nombre/s",placeholder:a.nombre||"",id:"nombre"}),e.jsx(C,{onInput:b,name:"apellido",label:"Apellido/s",placeholder:a.apellido||"",id:"apellido"}),e.jsx(C,{maxLength:20,onInput:b,name:"displayName",label:"Nombre a mostrar",placeholder:a.displayName||"",id:"displayName"}),e.jsxs("section",{className:"flex flex-col gap-1 md:gap-5 md:flex-row justify-around",children:[e.jsxs("div",{className:"flex flex-col w-full max-w-[300px] items-start gap-5",children:[e.jsxs("div",{className:"flex flex-col w-full gap-1 ",children:[e.jsx("h2",{className:" tracking-wide",children:"Foto de perfil"}),e.jsxs("div",{className:"flex justify-between  w-full",children:[e.jsxs("label",{className:` text-sm \r
                                   py-2 px-4\r
                                  rounded-full border-0\r
                                   font-semibold\r
                                  bg-sky-50 text-sky-700\r
                                  hover:bg-sky-100 cursor-pointer`,children:[e.jsx("p",{children:"Seleccionar archivo"}),e.jsx("input",{name:"perfil",onChange:u,type:"file",className:"hidden"})]}),x&&e.jsx(k,{onClick:()=>{c(""),r(s=>({...s,photoURL:a.photoURL}))},children:"🗑"})]})]}),e.jsxs("div",{className:"flex flex-col w-full gap-1 ",children:[e.jsx("h2",{className:" tracking-wide",children:"Foto de portada"}),e.jsxs("div",{className:"flex justify-between  w-full",children:[e.jsxs("label",{className:` text-sm \r
                                   py-2 px-4\r
                                  rounded-full border-0\r
                                   font-semibold\r
                                  bg-sky-50 text-sky-700\r
                                  hover:bg-sky-100 cursor-pointer`,children:[e.jsx("p",{children:"Seleccionar archivo"}),e.jsx("input",{name:"portada",onChange:u,type:"file",className:"hidden"})]}),y&&e.jsx(k,{onClick:()=>{g(""),r(s=>({...s,portadaURL:a.portadaURL}))},children:"🗑"})]})]})]}),e.jsxs("div",{className:"w-full  flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm",children:"Vista Previa"}),e.jsx(F,{user:p})]})]}),S&&e.jsx("button",{disabled:o,className:` p-3 bg-emerald-500 rounded-xl text-white w-full max-w-[300px] mx-auto disabled:brightness-90 disabled:cursor-wait disabled:pointer-events-none  \r
                hover:bg-transparent hover:text-emerald-500 hover:outline outline-emerald-500\r
                transition \r
            `,children:o?"Guardando...⏫":"Guardar"})]})})]})})}const J="https://i.pinimg.com/550x/70/45/60/7045605ab117e78aa27d00f99e033b18.jpg";function W({infoUsuario:a}){const[m,h]=l.useState(!1);function p(t){h(!m)}const r=JSON.parse(localStorage.getItem(`${I}-userData`)),[x,c]=l.useState(),y=a?.uid===r?.uid;l.useEffect(()=>{const{solicitudesEnviadas:t}=a,{solicitudesRecibidas:o}=a,{usuariosConectados:d}=a;if(d.length>0&&d.some(u=>u===r._id))return c("enviarMensaje");if(t.length>0&&t.some(u=>u===r._id))return c("Confirmar");if(o.length>0&&o.some(u=>u===r._id))return c("Pendiente");c("Sugerencia")},[a]);const g={Sugerencia:"➕ Conectar",Pendiente:"🕗 Pendiente",Confirmar:"✅ Confirmar",enviarMensaje:"📨 Enviar mensaje"},j={Sugerencia:`border border-emerald-600 text-emerald-700
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,Pendiente:`border border-gray-600 
    px-3 py-2 rounded-3xl  text-white hover:border-white hover:bg-gray-400 bg-gray-600 transition`,Confirmar:`border border-emerald-600 text-emerald-700 bg-emerald-100 
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-emerald-600 transition`,enviarMensaje:`border border-sky-600 text-sky-700 bg-sky-100 
    px-3 py-2 rounded-3xl  hover:text-white hover:border-white hover:bg-sky-600 transition`};async function N(t){const o=await fetch("/api/usuarios/conectarUsuario",{method:"POST",body:JSON.stringify({usuarioInSesion:r._id,usuarioAConectar:t._id})});await o.json(),o.status===200&&c("Pendiente")}async function w(t){const o=await fetch("/api/usuarios/conectarUsuario",{method:"DELETE",body:JSON.stringify({usuarioInSesion:r._id,usuarioAConectar:t._id})}),d=await o.json();o.status===200&&c("Sugerencia"),console.log(d)}async function v(t){const o=await fetch("/api/usuarios/conectarUsuario",{method:"PUT",body:JSON.stringify({usuarioInSesion:r._id,usuarioAConectar:t._id})}),d=await o.json();o.status===200&&c("enviarMensaje"),console.log(d)}function S(t){x==="Sugerencia"?N(t):x==="Pendiente"?w(t):x==="Confirmar"&&v(t)}return e.jsxs(e.Fragment,{children:[m&&e.jsx(_,{setAbrirModal:h,user:a}),e.jsxs("section",{className:"bg-white shadow-md rounded-md flex-grow",children:[e.jsx("div",{style:{backgroundImage:`url(${a?.portadaURL||J})`},className:`bg-cover\r
        bg-no-repeat\r
        bg-center\r
        \r
        h-[300px]`}),e.jsxs("div",{className:"flex justify-between items-start h-[60px] md:h-[120px]",children:[e.jsx(M,{className:"h-[100px] w-[100px] md:h-[200px] md:w-[200px] -translate-y-[50px]  md:-translate-y-[100px] translate-x-[10px] border-[5px] border-white ",user:a}),y?e.jsx("button",{onClick:p,className:`p-3 rounded-3xl border border-emerald-950\r
          mt-3 mr-3 hover:scale-105 transition-all shadow-md`,children:"Editar perfil"}):e.jsxs("button",{className:`${j[x]} mt-3 mr-3`,onClick:()=>{S(a)},children:[" ",g[x]]})]}),e.jsxs("div",{className:"flex flex-col gap-3 p-3 px-5",children:[e.jsxs("p",{className:"text-3xl font-mono font-bold flex flex-col",children:[a?.displayName,e.jsx("small",{className:"text-sm font-serif text-gray-500",children:a?.correoElectronico})]}),e.jsxs("div",{className:"flex items-center flex-wrap gap-5 md:gap-10",children:[e.jsxs("p",{className:"text-sm whitespace-nowrap",children:[a?.usuariosConectados.length,a?.usuariosConectados.length===1?" contacto":" contactos"]}),e.jsxs("p",{className:"flex itemx-center text-sm whitespace-nowrap",children:[e.jsx(A,{className:"h-5 w-5 stroke-black"}),"Se unio en"," ",D[new Date(a?.fechaDeRegistro).getMonth()],"de ",new Date(a?.fechaDeRegistro).getFullYear()]})]})]})]})]})}export{W as HeaderUsuario};