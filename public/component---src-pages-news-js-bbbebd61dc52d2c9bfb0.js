(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FJi0:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),i=t.n(o),a=t("JzyJ"),r=t("vOnD"),c=t("wBNj"),l=t("KTcv"),m=r.b.section.withConfig({componentId:"jjvxkv-0"})(["background-image:url(",");background-size:cover;background-repeat:no-repeat;"],(function(e){return e.theme.about.hero.background})),u=r.b.div.withConfig({componentId:"jjvxkv-1"})(["position:relative;height:calc(100vh - 81px);display:flex;justify-content:center;align-items:center;"]),d=r.b.h1.withConfig({componentId:"jjvxkv-2"})(["position:relative;padding:1rem;text-align:left;margin:0;width:100%;font-weight:300;@media(min-width:576px){text-align:left;width:70vw;}"]),s=(r.b.img.withConfig({componentId:"jjvxkv-3"})(["width:50vw;height:100%;object-fit:cover;object-position:center;"]),function(){return i.a.createElement(m,null,i.a.createElement(c.Container,null,i.a.createElement(u,null,i.a.createElement(d,null,"Noticias"))))}),p=t("v162"),f=r.b.section.withConfig({componentId:"sc-53dvip-0"})([""]),g=r.b.nav.withConfig({componentId:"sc-53dvip-1"})(["display:flex;justify-content:center;align-items:center;padding:2rem 0;"]),b=r.b.button.withConfig({componentId:"sc-53dvip-2"})(["background:transparent;border:none;cursor:pointer;transition:250ms ease;"]),h=Object(r.b)(b).withConfig({componentId:"sc-53dvip-3"})(["width:30px;height:30px;border-radius:50%;color:#919191;margin:0 1rem;&:hover{color:#fff;background-color:",";}"],(function(e){return e.theme.main.primaryColor})),E=r.b.svg.withConfig({componentId:"sc-53dvip-4"})(["fill:#919191;transition:250ms ease;",":hover &{fill:",";}"],b,(function(e){return e.theme.main.primaryColor})),w=r.b.nav.withConfig({componentId:"sc-53dvip-5"})(["display:flex;align-items:center;margin:2rem 0;"]),x=r.b.span.withConfig({componentId:"sc-53dvip-6"})(["color:#919191;"]),v=r.b.ul.withConfig({componentId:"sc-53dvip-7"})(["list-style:none;margin:0 1rem;padding:0;display:flex;"]),C=r.b.button.withConfig({componentId:"sc-53dvip-8"})(["background-color:",";transition:250ms ease;color:",";border:none;cursor:pointer;width:58px;height:34px;border-radius:25px;@media(min-width:768px){width:106px;height:34px;border-radius:25px;}"],(function(e){return e.active?e.theme.main.primaryColor:"transparent"}),(function(e){return e.active?"#fff":"#000"})),I=function(){Object(o.useContext)(l.a).office.officeId;var e=Object(o.useContext)(l.a).news.items,n=Object(o.useState)([]),t=n[0],a=n[1],r=Object(o.useState)("TODAS"),m=r[0],u=r[1];return Object(o.useEffect)((function(){switch(m){case"TODAS":return a(e);case"LEGALES":return a(e.filter((function(e){return"Legales"===e.tag})));case"NOTICIAS":return a(e.filter((function(e){return"Noticias"===e.tag})));default:return a(e)}}),[m]),i.a.createElement(f,null,i.a.createElement(c.Container,null,i.a.createElement(c.Row,null,i.a.createElement(c.Col,{xs:12},i.a.createElement(w,null,i.a.createElement(x,null,"Categorias: "),i.a.createElement(v,null,i.a.createElement("li",null,i.a.createElement(C,{onClick:function(){return u("TODAS")},active:"TODAS"===m},"Todas")),i.a.createElement("li",null,i.a.createElement(C,{onClick:function(){return u("LEGALES")},active:"LEGALES"===m},"Legales")),i.a.createElement("li",null,i.a.createElement(C,{onClick:function(){return u("NOTICIAS")},active:"NOTICIAS"===m},"Noticias"))))),t.map((function(e){return i.a.createElement(c.Col,{key:e.id,xs:12,md:4,style:{margin:"1rem 0"}},i.a.createElement(p.a,e))})),i.a.createElement(c.Col,{xs:12},i.a.createElement(g,null,i.a.createElement(b,null,i.a.createElement(E,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},i.a.createElement("path",{d:"m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"}))),i.a.createElement(h,null,"1"),i.a.createElement(h,null,"2"),i.a.createElement(h,null,"3"),i.a.createElement(h,null,"4"),i.a.createElement(h,null,"5"),i.a.createElement(b,null,i.a.createElement(E,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},i.a.createElement("path",{d:"m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"}))))))))},y=t("nrwI");n.default=function(){return i.a.createElement(a.a,null,i.a.createElement(s,null),i.a.createElement(I,null),i.a.createElement(c.Container,null,i.a.createElement(c.Row,null,i.a.createElement(c.Col,{xs:12},i.a.createElement(y.a,null)))))}},nrwI:function(e,n,t){"use strict";var o=t("q1tI"),i=t.n(o),a=t("vOnD"),r=t("wBNj"),c=t("KTcv"),l=t("qTur"),m=a.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["margin-top:",";padding:2rem 0;"],(function(e){return e.noMargin?0:"4rem"})),u=(a.b.div.withConfig({componentId:"sc-5j4wy4-1"})([""]),a.b.p.withConfig({componentId:"sc-5j4wy4-2"})(["text-align:left;@media(min-width:768px){font-size:2rem;}"])),d=a.b.div.withConfig({componentId:"sc-5j4wy4-3"})(["display:flex;justify-content:center;align-items:center;width:100%;"]);n.a=function(e){var n=e.noMargin,t=Object(o.useContext)(c.a).home.contact.title;return i.a.createElement(o.Fragment,null,i.a.createElement(m,{noMargin:n},i.a.createElement(r.Container,null,i.a.createElement(r.Row,{align:"center",justify:"center"},i.a.createElement(r.Col,{xs:12,md:9},i.a.createElement(d,null,i.a.createElement(u,null,t))),i.a.createElement(r.Col,{xs:12,md:3},i.a.createElement(d,null,i.a.createElement(l.a,{primary:!0,block:!0},"Contactanos")))))))}},v162:function(e,n,t){"use strict";t.d(n,"b",(function(){return b})),t.d(n,"a",(function(){return I}));var o=t("q1tI"),i=t.n(o),a=t("fHS2"),r=t("vOnD"),c=r.b.div.withConfig({componentId:"sc-1bfeezo-0"})(["background-color:#fff;display:flex;flex-direction:column;align-items:center;border:1px solid #EBEBEB;height:460px;transition:250ms ease;box-shadow:0px 2px 10px rgba(0,0,0,0.108337);width:100%;&:hover{box-shadow:0px 1px 1px rgba(0,0,0,.12),0px 2px 2px rgba(0,0,0,.12),0px 4px 4px rgba(0,0,0,.12),0px 8px 8px rgba(0,0,0,.12),0px 16px 16px rgba(0,0,0,.12),0px 32px 32px rgba(0,0,0,.12);}@media(min-width:768px){margin:0 1rem;}"]),l=r.b.div.withConfig({componentId:"sc-1bfeezo-1"})(["background-image:url(",");background-position:center;background-size:cover;background-repeat:none;width:100%;padding-top:75%;"],(function(e){return e.src})),m=r.b.div.withConfig({componentId:"sc-1bfeezo-2"})(["padding:1rem 1rem 1.5rem 1rem;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;color:#212121;"]),u=r.b.ul.withConfig({componentId:"sc-1bfeezo-3"})(["list-style:none;padding:0;margin:0;font-size:14px;"]),d=r.b.li.withConfig({componentId:"sc-1bfeezo-4"})(["font-size:1.2rem;margin-bottom:.5rem;"]),s=r.b.li.withConfig({componentId:"sc-1bfeezo-5"})(["color:",";font-size:1.2rem;font-weight:bold;margin-bottom:.5rem;"],(function(e){return e.theme.main.primaryColor})),p=r.b.span.withConfig({componentId:"sc-1bfeezo-6"})([""]),f=r.b.ul.withConfig({componentId:"sc-1bfeezo-7"})(["list-style:none;color:#919191;font-size:14px;"]),g=r.b.li.withConfig({componentId:"sc-1bfeezo-8"})(["margin-bottom:.5rem;"]),b=(r.b.span.withConfig({componentId:"sc-1bfeezo-9"})(["height:1px;width:100%;background-color:#EBEBEB;"]),function(e){var n=e.mainImage,t=e.title,o=e.value,r=e.code,b=e.ubication,h=e.characteristics;return i.a.createElement(a.a,{to:"/property",title:"Ver propiedad"},i.a.createElement(c,null,i.a.createElement(l,{src:n}),i.a.createElement(m,null,i.a.createElement(u,null,i.a.createElement(d,null,t),i.a.createElement(s,null,"UF $",o),i.a.createElement("li",{style:{margin:"1rem 0"}},i.a.createElement(p,null,"Venta - "),i.a.createElement("span",null,"cod ",r))),i.a.createElement(f,null,i.a.createElement(g,null,b.address),h.slice(0,2).map((function(e,n){return i.a.createElement(g,{key:n},i.a.createElement("span",null,e.name," ",e.value," ","Sup. Total"===e.name&&"mt2"))}))))))}),h=r.b.div.withConfig({componentId:"sc-1bg8bqe-0"})(["background-color:#fff;border:1px solid #EBEBEB;"]),E=r.b.img.withConfig({componentId:"sc-1bg8bqe-1"})(["object-fit:cover;object-position:center;width:100%;"]),w=r.b.span.withConfig({componentId:"sc-1bg8bqe-2"})(["width:86px;height:27px;border-radius:20px;background-color:",";color:#fff;display:flex;justify-content:center;align-items:center;"],(function(e){return e.theme.main.primaryColor})),x=r.b.div.withConfig({componentId:"sc-1bg8bqe-3"})(["padding:1rem;"]),v=r.b.p.withConfig({componentId:"sc-1bg8bqe-4"})(["font-weight:bold;"]),C=r.b.span.withConfig({componentId:"sc-1bg8bqe-5"})(["color:#919191;font-size:14px;"]),I=function(e){var n=e.image,t=e.title,o=e.tag,r=e.date;return i.a.createElement(a.a,{to:"/new"},i.a.createElement(h,null,i.a.createElement(E,{src:n,alt:t}),i.a.createElement(x,null,i.a.createElement(w,null,o),i.a.createElement(v,null,t),i.a.createElement(C,null,r))))}}}]);
//# sourceMappingURL=component---src-pages-news-js-bbbebd61dc52d2c9bfb0.js.map