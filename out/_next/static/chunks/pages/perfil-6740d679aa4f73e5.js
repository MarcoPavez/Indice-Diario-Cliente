(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{3406:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/perfil",function(){return i(7185)}])},5131:function(e,r,i){"use strict";i.d(r,{Z:function(){return t}});var s=i(5893),l=i(7294);function n(){let[e,r]=(0,l.useState)(!1),i=(0,l.useRef)(null),[n,a]=(0,l.useState)(!1),t=async()=>{let e=localStorage.getItem("usuario");null==e&&(window.location="inicio.html");let r=JSON.parse(e),i=r.stsTokenManager.accessToken;try{let e=await fetch("https://placid-seen-raven.glitch.me/usuario/verificarToken",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}});if(!e.ok)throw Error("Token inv\xe1lido");let r=await e.json();return r}catch(e){throw console.log(e.message),window.location="ingreso.html",Error("Error al verificar usuario")}},o=()=>{r(!0)};(0,l.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[i]),(0,l.useEffect)(()=>{localStorage.getItem("usuario")&&a(!0)},[]);let c=()=>{localStorage.removeItem("usuario");let e=localStorage.getItem("usuario");null==e?window.location="/inicio.html":window.location="/perfil",t()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{children:[(0,s.jsx)("picture",{id:"contenedor-icono-barras",onClick:o,children:(0,s.jsx)("img",{src:"./assets/img/barras.svg",alt:"",id:"icono-barras"})}),(0,s.jsx)("a",{href:"/inicio.html",children:(0,s.jsx)("h1",{id:"titulo-principal",children:"\xcdndice Diario"})}),(0,s.jsxs)("ul",{id:"lista-barra-navegacion",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/inicio.html",children:"Inicio"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/planes.html",children:"Planes"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/glosario.html",children:"Glosario"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/registro.html",children:"Reg\xedstrate"})})]})]}),e&&(0,s.jsxs)("section",{id:"menu-lateral",classNameName:"show",ref:i,children:[(0,s.jsx)("h3",{children:"Men\xfa"}),(0,s.jsxs)("ul",{id:"lista-menu-lateral",children:[(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/inicio.html",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"./assets/img/casa.svg",alt:"",className:"iconos-menu-lateral"}),"Inicio"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/planes.html",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"./assets/img/papel.svg",alt:"",className:"iconos-menu-lateral"}),"Planes"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/glosario.html",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"./assets/img/listado.svg",alt:"",className:"iconos-menu-lateral"}),"Glosario"]})}),n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/perfil",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"",alt:"",className:"iconos-menu-lateral"}),"Perfil"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("button",{onClick:c,children:["Cerrar",(0,s.jsx)("br",{})," sesi\xf3n"]})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/ingreso.html",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"./assets/img/ingreso.svg",alt:"",className:"iconos-menu-lateral"}),"Ingresa"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"/registro.html",className:"links-menu-lateral",children:[(0,s.jsx)("img",{src:"./assets/img/registro.svg",alt:"",className:"iconos-menu-lateral"}),"Reg\xedstrate"]})})]})]})]})]})}function a(e){return(0,s.jsx)("footer",{id:"footer",children:(0,s.jsxs)("div",{id:"contenedor-links",children:[(0,s.jsx)("div",{id:"footer-links",children:(0,s.jsxs)("ul",{id:"footer-lista",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"footer-link",href:"./inicio.html",children:"Inicio"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"footer-link",href:"./planes.html",children:"Planes"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"footer-link",href:"./glosario.html",children:"Glosario"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"footer-link",href:"./ingreso.html",children:"Ingresa"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"footer-link",href:"./registro.html",children:"Reg\xedstrate"})})]})}),(0,s.jsx)("p",{id:"footer-parrafo",children:"Indice Diario \xa9 2023"})]})})}function t(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),e.children,(0,s.jsx)(a,{})]})}},7185:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return t}});var s=i(5893),l=i(5131),n=i(7294);function a(){let[e,r]=(0,n.useState)([]),i=async()=>{try{let e=await fetch("https://placid-seen-raven.glitch.me/infoUsuarioAdicional");if(!e.ok)throw Error("Problema al recuperar las categor\xedas");let i=await e.json(),s=localStorage.getItem("usuario"),l=JSON.parse(s);i.forEach(e=>{e.correo.includes(l.email)&&r(e)})}catch(e){console.error(e)}};return(0,n.useEffect)(()=>{i()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h2",{children:["Bienvenido ",e.nombre," ",e.apellido]}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Campo"}),(0,s.jsx)("th",{children:"Datos"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Nombre"}),(0,s.jsx)("td",{children:e.nombre})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Apellido"}),(0,s.jsx)("td",{children:e.apellido})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Nombre de usuario"}),(0,s.jsx)("td",{children:e.nombreUsuario})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Correo electr\xf3nico"}),(0,s.jsx)("td",{children:e.correo})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"G\xe9nero"}),(0,s.jsx)("td",{children:e.genero})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Fecha de nacimiento"}),(0,s.jsx)("td",{children:e.fechaNacimiento})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Pa\xeds de residencia"}),(0,s.jsx)("td",{children:e.paisResidencia})]})]})]})]})}function t(){let e=()=>{localStorage.removeItem("usuario");let e=localStorage.getItem("usuario");null==e?window.location="/inicio.html":window.location="/perfil",r()},r=async()=>{let e=localStorage.getItem("usuario");null==e&&(window.location="inicio.html");let r=JSON.parse(e),i=r.stsTokenManager.accessToken;try{let e=await fetch("https://placid-seen-raven.glitch.me/usuario/verificarToken",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}});if(!e.ok)throw Error("Token inv\xe1lido");let r=await e.json();return r}catch(e){throw console.log(e.message),window.location="ingreso.html",Error("Error al verificar usuario")}};return(0,n.useEffect)(()=>{r()},[]),(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("section",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Perfil"}),(0,s.jsx)("li",{children:"Realizar consultas"}),(0,s.jsx)("li",{children:"Registro de consultas"}),(0,s.jsx)("li",{children:"Configuraci\xf3n"})]})}),(0,s.jsx)("button",{onClick:e,children:"Cerrar sesi\xf3n"}),(0,s.jsx)(a,{})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3406)}),_N_E=e.O()}]);