import{o as e,c as t,a as s,r as o,b as n,d as i,e as a,f as l}from"./vendor.8e60dda0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,i)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return s(self[t].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){i(new Error(`Failed to import: ${e}`)),n(r)},onload(){s(self[t].moduleMap[a]),n(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");const r={methods:{goTo(e){this.$parent.switchView(),setTimeout((t=>{this.$router.push({path:e})}),1e3)}}},c={class:"limit"},d={class:"flex"},u=s("div",{class:"self"},[s("div",{class:"self-name"}," Sebastian Vega "),s("div",{class:"self-self"}," Full stack developer, based in Chile ")],-1),m=s("a",{class:"linkedin",target:"_blank",href:"https://www.linkedin.com/in/sebastian-vega-pena"},[s("img",{src:"/assets/linkedin.9e7bbde5.svg",alt:"linkedin"})],-1);r.render=function(o,n,i,a,l,r){return e(),t("header",null,[s("div",c,[s("div",d,[s("span",{onClick:n[1]||(n[1]=e=>r.goTo("/"))},[u]),s("nav",null,[s("ul",null,[s("li",null,[s("a",{class:"nav-link",onClick:n[2]||(n[2]=e=>r.goTo("/works"))},"Works"),s("a",{class:"nav-link",onClick:n[3]||(n[3]=e=>r.goTo("/about"))},"About"),s("a",{class:"nav-link",onClick:n[4]||(n[4]=e=>r.goTo("/contact"))},"Contact"),m])])])])])])};const p={components:{AppHeader:r},watch:{"$route.name"(){}},mounted(){this.switchView(),this.mouse()},updated(){this.switchView()},methods:{mouse(){({delay:8,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$dot:document.querySelector(".cursor-dot"),$outline:document.querySelector(".cursor-dot-outline"),init(){this.dotSize=this.$dot.offsetWidth,this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners(){var e=this;document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseover",(function(){e.cursorEnlarged=!0,e.toggleCursorSize()})),t.addEventListener("mouseout",(function(){e.cursorEnlarged=!1,e.toggleCursorSize()}))})),document.addEventListener("mousedown",(function(){e.cursorEnlarged=!0,e.toggleCursorSize()})),document.addEventListener("mouseup",(function(){e.cursorEnlarged=!1,e.toggleCursorSize()})),document.addEventListener("mousemove",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.endX=t.pageX,e.endY=t.pageY,e.$dot.style.top=e.endY+"px",e.$dot.style.left=e.endX+"px"})),document.addEventListener("mouseenter",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.display="block",e.$outline.style.display="block"})),document.addEventListener("mouseleave",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.$dot.style.display="none",e.$outline.style.display="none"}))},animateDotOutline(){var e=this;e._x+=(e.endX-e._x)/e.delay,e._y+=(e.endY-e._y)/e.delay,e.$outline.style.top=e._y+"px",e.$outline.style.left=e._x+"px",requestAnimationFrame(this.animateDotOutline.bind(e))},toggleCursorSize(){var e=this;e.cursorEnlarged?(e.$dot.style.transform="translate(-50%, -50%) scale(0.75)",e.$outline.style.transform="translate(-50%, -50%) scale(1.5)"):(e.$dot.style.transform="translate(-50%, -50%) scale(1)",e.$outline.style.transform="translate(-50%, -50%) scale(1)")},toggleCursorVisibility(){var e=this;e.cursorVisible?(e.$dot.style.opacity=1,e.$outline.style.opacity=1):(e.$dot.style.opacity=0,e.$outline.style.opacity=0)}}).init()},switchView(){setTimeout((e=>{document.body.classList.add("white-in"),document.body.classList.remove("done")}),500),setTimeout((e=>{document.body.classList.remove("zero"),document.body.classList.add("black-in")}),1500),setTimeout((e=>{document.body.classList.add("done")}),2500),setTimeout((e=>{document.body.classList.remove("white-in"),document.body.classList.remove("black-in")}),3e3)}}},h={class:"content"},f=s("div",{class:"cursor-dot-outline"},null,-1),v=s("div",{class:"cursor-dot"},null,-1);p.render=function(n,i,a,l,r,c){const d=o("app-header"),u=o("router-view");return e(),t("div",h,[s(d),s(u),f,v])};const y={},b={class:"main"},g=s("div",{class:"limit"},[s("h1",null," I'm a Full stack developer, passionate for learning new technologies that help me to do a better job and also just for fun. ")],-1);y.render=function(s,o){return e(),t("section",b,[g])};const w={},k={id:"contact",class:"section section-left"},$=s("div",{class:"limit"},[s("div",{class:"section-header"},[s("h1",null,"Let's chat!")]),s("div",{class:"section-body d-flex"},[s("div",{class:"contact-message"},[s("p",null," Use the form, send me a Whatsapp or however you want, if you have a question just talk to me. "),s("ul",{class:"blank-list"},[s("li",null,[s("img",{class:"icon",src:"/assets/whatsapp.647353d8.svg",alt:"whatsapp icon"}),n(" +569 4923 3611")]),s("li",null,[s("img",{class:"icon",src:"/assets/email.19979f84.svg",alt:"email icon"}),n(" seba.kc@gmail.com")])])]),s("div",{class:"contact-form"},[s("form",null,[s("div",{class:"form-input"},[s("label",{for:"nombre"},"Nombre:"),s("input",{id:"nombre",type:"text"})]),s("div",{class:"form-input"},[s("label",{for:"email"},"Email:"),s("input",{id:"email",type:"email"})]),s("div",{class:"form-input"},[s("label",{for:"message"},"Mensaje:"),s("textarea",{id:"message",rows:"4"})])])])])],-1);w.render=function(s,o){return e(),t("section",k,[$])};const L={};L.render=function(s,o){return e(),t("h1",null,"works")};const E={};E.render=function(s,o){return e(),t("h1",null,"about")};const C=[{path:"",name:"Home",component:y},{path:"/contact",name:"Contact",component:w},{path:"/works",name:"Works",component:L},{path:"/about",name:"About",component:E}],V=i({history:a(),routes:C});l(p).use(V).mount("#app");