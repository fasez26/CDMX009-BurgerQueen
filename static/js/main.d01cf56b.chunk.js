(this["webpackJsonpburger-queen-mexa"]=this["webpackJsonpburger-queen-mexa"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/title.b8ce7343.svg"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/house.6493ff32.svg"},,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/back.9d266a2c.svg"},function(e,t,a){e.exports=a.p+"static/media/clock1.436bdd09.svg"},function(e,t,a){e.exports=a.p+"static/media/hourglass.a1da21b1.svg"},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/sign.c881ba91.svg"},function(e,t,a){e.exports=a.p+"static/media/yellowrec.1670c4dc.svg"},,function(e,t,a){e.exports=a.p+"static/media/burger.088ec8e7.svg"},function(e,t,a){e.exports=a.p+"static/media/whiterectangle.36334993.svg"},function(e,t,a){e.exports=a.p+"static/media/user.cb0c1f72.svg"},function(e,t,a){e.exports=a.p+"static/media/padlock.10a13234.svg"},,function(e,t,a){e.exports=a.p+"static/media/waiter.29bb8a2c.svg"},function(e,t,a){e.exports=a.p+"static/media/chef.a70ae04d.svg"},function(e,t,a){e.exports=a.p+"static/media/logout.cad6a5fa.svg"},function(e,t,a){e.exports=a.p+"static/media/breakfast.48456247.svg"},function(e,t,a){e.exports=a.p+"static/media/meal.f5979b7e.svg"},function(e,t,a){e.exports=a.p+"static/media/table.f3fb1415.svg"},function(e,t,a){e.exports=a.p+"static/media/trash.61eda002.svg"},function(e,t,a){e.exports=a.p+"static/media/bill.2ffb9cc7.svg"},function(e,t,a){e.exports=a.p+"static/media/orderReady.551b8d31.svg"},,function(e,t,a){e.exports=a(132)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(61),l=a.n(c),s=(a(82),a(3)),i=a(9),o=a(7),u=a(6),m=a.n(u),d=a(10),E=(a(84),a(62)),p=a.n(E),f=a(8),b=a.n(f),v=a(63),h=a.n(v),g=a(64),N=a.n(g),O=a(65),x=a.n(O),j=a(23),y=a.n(j);a(85),a(89);y.a.initializeApp({apiKey:"AIzaSyBi_yIifajbGfYsbhb1Dk0I4KwltIKBNy4",authDomain:"burger-queen-mexa.firebaseapp.com",databaseURL:"https://burger-queen-mexa.firebaseio.com",projectId:"burger-queen-mexa",storageBucket:"burger-queen-mexa.appspot.com",messagingSenderId:"457070581674",appId:"1:457070581674:web:a1055cbc4dbb8f73783dd3",measurementId:"G-Z7SRWBFN2L"});var k=y.a.firestore(),w=y.a.auth(),C=Object(o.g)((function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],c=a[1],l=r.a.useState(""),i=Object(s.a)(l,2),o=i[0],u=i[1],E=r.a.useState(null),f=Object(s.a)(E,2),v=f[0],g=f[1],O=r.a.useCallback(Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.signInWithEmailAndPassword(n,o);case 3:t.sent,c(""),u(""),g(null),e.history.push("/Personal"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),"auth/invalid-email"===t.t0.code&&g("Email no registrado"),"auth/user-not-found"===t.t0.code&&g("Usuario no encontrado"),"auth/wrong-password"===t.t0.code&&g("Contrase\xf1a incorrecta");case 15:case"end":return t.stop()}}),t,null,[[0,10]])}))),[n,o,e.history]);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("img",{className:"burger",src:p.a,alt:"burger"}),r.a.createElement("img",{className:"img-fluid__white ",src:h.a,alt:"loginRectangle"}),r.a.createElement("img",{className:"logo",src:b.a,alt:"title"}),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),n.trim()?o.trim()?o.length<6?g("Ingrese Password de m\xednimo 6 car\xe1cteres"):g(null):g("Ingrese Password"):g("Ingrese Email")}},r.a.createElement("div",null,v&&r.a.createElement("div",{className:"alert alert-danger"},v),r.a.createElement("img",{className:"user",src:N.a,alt:"user"}),r.a.createElement("input",{type:"email",className:"input form-rounded",id:"email",placeholder:"correo",onChange:function(e){return c(e.target.value)},value:n})),r.a.createElement("div",{className:""},r.a.createElement("img",{className:"user",src:x.a,alt:"padlock"}),r.a.createElement("input",{type:"password",className:"input form-rounded",id:"password",placeholder:"  Contrase\xf1a",onChange:function(e){return u(e.target.value)},value:o})),r.a.createElement("div",null,r.a.createElement("button",{id:"submit",type:"submit",className:"btn form-rounded",onClick:O},"Iniciar Sesi\xf3n")),r.a.createElement("div",null,r.a.createElement("h5",{className:"names"},"Nallely Flores y Danaee Partida"))))})),S=(a(94),a(67)),I=a.n(S),q=a(68),M=a.n(q),T=a(69),D=a.n(T),P=Object(o.g)((function(e){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:b.a,className:"images"})),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("div",{className:"welcome"},"Bienvenida",r.a.createElement("div",null,e.user.user))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mt-5 col-12 text-center"},r.a.createElement("img",{alt:"waiter",src:I.a,className:"waiter float-xs-left ",onClick:function(){e.history.push("/Menu")}}),r.a.createElement("img",{alt:"chef",src:M.a,className:"chef float-xs-right",onClick:function(){e.history.push("/Kitchen")}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{src:D.a,className:"logout float-xs-left",onClick:function(){w.signOut().then((function(){e.history.push("/Login")}))}}),r.a.createElement("h3",null,"Cerrar Sesi\xf3n")))))})),A=(a(95),a(70)),B=a.n(A),F=a(71),K=a.n(F),H=a(72),L=a.n(H),$=(a(96),a(16)),R=a.n($),Q=Object(o.g)((function(e){return r.a.createElement("div",{className:"navbarMenu",fixed:"bottom"},r.a.createElement("img",{alt:"",className:"house",src:R.a,onClick:function(){e.history.push("/Personal")}}))})),U=Object(o.g)((function(e){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"title",src:b.a,className:"images"})),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mt-5 col-12 text-center"},r.a.createElement("img",{alt:"breakfast",src:B.a,className:"breakfast float-xs-left ",onClick:function(){e.history.push("/Breakfast")}}),r.a.createElement("img",{alt:"meal",src:K.a,className:"meal float-xs-left ",onClick:function(){e.history.push("/Meal")}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("img",{src:L.a,className:"guest float-xs-left",onClick:function(){e.history.push("/Floor")}}),r.a.createElement(Q,null)))))})),V=a(39),W=a(11),_=(a(97),a(33)),z=a.n(_),G=(a(115),Object(o.g)((function(e){return r.a.createElement("div",{className:"navbar",fixed:"bottom",bg:"dark",varian:"dark"},r.a.createElement("div",{className:"bill",fixed:"bottom"},r.a.createElement("p",{id:"item"},"Productos: ",e.totalQuantity,"  Total: $",e.payment),r.a.createElement("button",{type:"submit",className:"submit",onClick:function(t){e.addOrder(),e.floor()}},"Enviar")),r.a.createElement("div",{className:"houseMenu"},r.a.createElement("img",{src:R.a,onClick:function(){e.history.push("/Menu")}})))}))),J=a(34),Y=a.n(J),Z=a(20),X=a(35),ee=a(19),te=function(e){var t=e.inicio,a=e.status,c=(e.close,+new Date/1e3),l=t/1e3,i=Object(n.useState)(c-l),o=Object(s.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)(t),E=Object(s.a)(d,2),p=E[0];E[1];return Object(n.useEffect)((function(){var e=null;return p&&"En preparaci\xf3n"===a?e=setInterval((function(){m((function(e){return e+1}))}),1e3):p||(clearInterval(e),console.log("toy aqui adentro",u)),function(){return clearInterval(e)}}),[p,u]),r.a.createElement("div",null,(u/60).toFixed(2))},ae=a(29),ne=Object(o.g)((function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),o=Object(s.a)(i,2),u=o[0],E=o[1],p=Object(n.useState)([]),f=Object(s.a)(p,2),v=f[0],h=f[1],g=Object(n.useState)([]),N=Object(s.a)(g,1)[0],O=Object(n.useState)([]),x=Object(s.a)(O,2),j=x[0],y=x[1],w=Object(n.useState)([]),C=Object(s.a)(w,2),S=C[0],I=C[1],q=Object(n.useState)([]),M=Object(s.a)(q,2),T=M[0],D=M[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("breakfast").orderBy("uid","asc").get();case 3:t=e.sent,a=t.docs.map((function(e){return Object(W.a)({uid:e.uid},e.data())})),D(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",null),r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:b.a,className:"images"})),r.a.createElement("div",{className:"textTable  "},"No. Mesa",r.a.createElement("select",{className:"select",onChange:function(e){return y(e.target.value)}},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",{className:""},r.a.createElement(Z.a,null,r.a.createElement(X.a,null,r.a.createElement(ee.a,null,r.a.createElement(Z.a.Control,{className:"customer",placeholder:"Cliente",id:"name",onChange:function(e){return I(e.target.value)},value:S})))),r.a.createElement("div",{className:"menuTitle text-center"},"Men\xfa"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("li",{className:"list-group"},T.map((function(e){return r.a.createElement("div",{key:e.uid,className:""},r.a.createElement("div",{className:"itemText "},e.item),r.a.createElement("div",{className:"priceText  "},"$ ",e.price,".00"),r.a.createElement(z.a,{min:0,max:100,onChange:function(t){var a,n,r;a=v.find((function(t){return t.productId===e.uid}))?v.map((function(a){return a.productId!==e.uid?a:Object(W.a)(Object(W.a)({},a),{},{quant:t,payment:t*e.price})})):[].concat(Object(V.a)(v),[{productId:e.uid,produItem:e.item,unitaryPrice:e.price,quant:t,payment:t*e.price}]),h(a),n=a.reduce((function(e,t){return e+t.quant}),0),l(n),r=a.reduce((function(e,t){return e+t.payment}),0),E(r)}}),r.a.createElement("div",{className:"descriptionText"}," (",e.description,")"),r.a.createElement("br",null))}))),r.a.createElement(G,{totalQuantity:c,payment:u,order:N,addOrder:function(){var t=ae(new Date),a=60*t.hour()+t.minute(),n={id:Y.a.generate(),item:v,check:u,totQuantity:c,table:j,userName:e.user.user,incomingHour:(new Date).toLocaleString(),inicio:+new Date,startAt:a,status:"En preparaci\xf3n",nameCus:S,openClose:"Abierta"};k.collection("order").add(n),k.collection("orderHistory").add(n)},floor:function(){e.history.push("/Floor")}}))))})),re=(a(126),a(29)),ce=Object(o.g)((function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],l=a[1],i=r.a.useState([]),o=Object(s.a)(i,2),u=o[0],E=o[1],p=Object(n.useState)(0),f=Object(s.a)(p,2),v=f[0],h=f[1],g=Object(n.useState)([]),N=Object(s.a)(g,2),O=N[0],x=N[1],j=Object(n.useState)([]),y=Object(s.a)(j,2),w=y[0],C=(y[1],Object(n.useState)([])),S=Object(s.a)(C,2),I=S[0],q=S[1],M=Object(n.useState)([]),T=Object(s.a)(M,2),D=T[0],P=T[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("meal").orderBy("uid","asc").get();case 3:t=e.sent,a=t.docs.map((function(e){return Object(W.a)({uid:e.uid},e.data())})),E(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",null),r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:b.a,className:"images"})),r.a.createElement("div",{className:"textTable  "},"No. Mesa",r.a.createElement("select",{className:"select",onChange:function(e){return q(e.target.value)}},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",{className:""},r.a.createElement(Z.a,null,r.a.createElement(X.a,null,r.a.createElement(ee.a,null,r.a.createElement(Z.a.Control,{className:"customer",placeholder:"Cliente",id:"name",onChange:function(e){return P(e.target.value)},value:D})))),r.a.createElement("div",{className:"menuTitle text-center"},"Men\xfa"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("li",{className:"list-group"},u.map((function(e){return r.a.createElement("div",{key:e.uid,className:""},r.a.createElement("div",{className:"itemText "},e.item),r.a.createElement("div",{className:"priceText  "},"$ ",e.price,".00"),r.a.createElement(z.a,{min:0,max:100,onChange:function(t){var a,n,r;a=O.find((function(t){return t.productId===e.uid}))?O.map((function(a){return a.productId!==e.uid?a:Object(W.a)(Object(W.a)({},a),{},{quant:t,payment:t*e.price})})):[].concat(Object(V.a)(O),[{productId:e.uid,produItem:e.item,unitaryPrice:e.price,quant:t,payment:t*e.price}]),x(a),n=a.reduce((function(e,t){return e+t.quant}),0),l(n),r=a.reduce((function(e,t){return e+t.payment}),0),h(r)}}),r.a.createElement("div",{className:"descriptionText"}," (",e.description,")"),r.a.createElement("br",null))}))),r.a.createElement(G,{totalQuantity:c,payment:v,order:w,addOrder:function(){var t=re(new Date),a=60*t.hour()+t.minute(),n={id:Y.a.generate(),item:O,check:v,totQuantity:c,table:I,userName:e.user.user,incomingHour:(new Date).toLocaleString(),inicio:+new Date,startAt:a,status:"En preparaci\xf3n",nameCus:D,openClose:"Abierta"};k.collection("order").add(n),k.collection("orderHistory").add(n)},floor:function(){e.history.push("/Floor")}}))))})),le=(a(127),a(36)),se=a.n(le),ie=(a(58),Object(o.g)((function(e){return r.a.createElement("div",{className:"navbarCheck",fixed:"bottom"},r.a.createElement("div",{className:"house"},r.a.createElement("img",{src:R.a,onClick:function(){e.history.push("/Menu")}})),r.a.createElement("div",{className:"back"},r.a.createElement("img",{src:se.a,onClick:function(){e.history.push("/Floor")}})))}))),oe=a(37),ue=a.n(oe),me=a(38),de=a.n(me),Ee=a(73),pe=a.n(Ee),fe=(a(59),a(14)),be=(a(128),a(129),a(60),a(74)),ve=a.n(be),he=Object(o.g)((function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),u=o[0],E=o[1];Object(n.useEffect)((function(){(function(){var t=Object(d.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.idOrder.id,t.next=4,k.collection("order").where("id","==",a).get();case 4:n=t.sent,r=n.docs.map((function(e){return Object(W.a)({id:e.id},e.data())})),l(r),r.forEach((function(e){var t=e.item;E(t)})),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=function(){var t=Object(d.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.idOrder.id,t.next=3,k.collection("order").where("id","==",a).get().then((function(e){e.forEach((function(e){e.ref.update({openClose:"Cerrada"})}))}));case 3:t.sent,setTimeout((function(){e.history.push("/Floor")}),1e3);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"",src:b.a,className:"images"})),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("div",{className:"menuTitle"},"Orden"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(fe.a,null,r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",{key:e.id,className:"text-center"},r.a.createElement("td",{id:"paragraph"},"No. Mesa: ",e.table),r.a.createElement("td",{id:"paragraph"},"Cliente: ",e.nameCus),r.a.createElement("td",{id:"paragraph"},"Meserx: ",e.userName))})))),r.a.createElement(fe.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"text-center"},"Producto"),r.a.createElement("th",{className:"text-center"},"Cantidad"),r.a.createElement("th",{className:"text-center"},"Precio"),r.a.createElement("th",{className:"text-center"},"Subtotal"))),r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",{key:t,className:"text-center"},r.a.createElement("td",{id:"paragraph",key:e.pro}," ",e.produItem),r.a.createElement("td",{id:"paragraph",key:e.qua}," ",e.quant),r.a.createElement("td",{id:"paragraph",key:e.qua},"$ ",e.unitaryPrice),r.a.createElement("td",{id:"paragraph",key:e.qua},"$ ",e.payment))})))),r.a.createElement(fe.a,null,r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",{key:e.id,className:"text-center"},r.a.createElement("td",{className:"check"},"Total: $ ",e.check))}))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"edit"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),c.map((function(e){return r.a.createElement("div",{key:e.id,className:"text-center"},r.a.createElement("img",{alt:"",className:"check",onClick:"Listo"===e.status?function(){return p()}:function(){alert("La orden no est\xe1 lista todav\xeda")},src:ve.a}))})),r.a.createElement(ie,null)))})),ge=Object(o.g)((function(e){Object(n.useEffect)((function(){(function(){var t=Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.collection("order").orderBy("incomingHour","desc").get();case 3:a=t.sent,n=a.docs.map((function(e){return Object(W.a)({id:e.id},e.data())})),e.setOrder(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var t=function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Deseas eliminar esta orden?")){e.next=6;break}return a=t.id,e.next=4,k.collection("order").where("id","==",a).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}));case 4:e.sent,console.log("Borrado");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"",src:b.a,className:"images"})),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("div",{className:"menuTitle"},"Piso"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(fe.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Mesa"),r.a.createElement("th",null,r.a.createElement("img",{alt:"",src:ue.a})),r.a.createElement("th",null,r.a.createElement("img",{alt:"",src:de.a})),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Cuenta"),r.a.createElement("th",null,"Ver"),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.order.map((function(a){return r.a.createElement("tr",{key:a.id,className:""},r.a.createElement("td",{className:"text-center"},a.table),r.a.createElement("td",null,a.incomingHour.split(" ").pop()),r.a.createElement("td",null,"En preparaci\xf3n"===a.status?r.a.createElement(te,{inicio:a.inicio,status:a.status}):a.readyAt-a.startAt," ","min"),r.a.createElement("td",{className:"".concat("En preparaci\xf3n"===a.status?"notReady":"ready")},a.status),r.a.createElement("td",{className:"".concat("Abierta"===a.openClose?"open":"Close")},a.openClose),r.a.createElement("td",{className:"detailfloor",onClick:function(){return function(t){e.history.push("/DetailFloor"),e.setIdOrder(t)}(a)}},"Ver"),r.a.createElement("td",null," ",r.a.createElement("img",{className:"Trash",alt:"",src:pe.a,onClick:function(){return t(a)}})))})))),r.a.createElement(ie,null)))})),Ne=(a(130),a(29),Object(o.g)((function(e){Object(n.useEffect)((function(){(function(){var t=Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.collection("order").orderBy("incomingHour","desc").get();case 3:a=t.sent,n=a.docs.map((function(e){return Object(W.a)({id:e.id},e.data())})),e.setOrder(n),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"",src:b.a,className:"images"})),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("div",{className:"menuTitle"},"Piso"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(fe.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Mesa"),r.a.createElement("th",null,r.a.createElement("img",{alt:"",src:ue.a})),r.a.createElement("th",null,r.a.createElement("img",{alt:"",src:de.a})),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Ver"))),r.a.createElement("tbody",null,e.order.map((function(t){return r.a.createElement("tr",{key:t.id,className:""},r.a.createElement("td",{className:"text-center"},t.table),r.a.createElement("td",null,t.incomingHour.split(" ").pop()),r.a.createElement("td",null,"En preparaci\xf3n"===t.status?r.a.createElement(te,{inicio:t.inicio,status:t.status}):t.readyAt-t.startAt," min"),r.a.createElement("td",{className:"".concat("En preparaci\xf3n"===t.status?"notReady":"ready")},t.status),r.a.createElement("td",{className:"detailfloor",onClick:function(){return function(t){e.history.push("/DetailKitchen"),e.setIdOrder(t)}(t)}},"Ver"))})))),r.a.createElement(Q,null)))}))),Oe=(a(131),a(75)),xe=a.n(Oe),je=Object(o.g)((function(e){return r.a.createElement("div",{className:"navbarCheck",fixed:"bottom"},r.a.createElement("div",{className:"house"},r.a.createElement("img",{src:R.a,onClick:function(){e.history.push("/Personal")}})),r.a.createElement("div",{className:"back"},r.a.createElement("img",{src:se.a,onClick:function(){e.history.push("/Kitchen")}})))})),ye=a(29),ke=Object(o.g)((function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),u=o[0],E=o[1];Object(n.useEffect)((function(){(function(){var t=Object(d.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.idOrder.id,t.next=4,k.collection("order").where("id","==",a).get();case 4:n=t.sent,r=n.docs.map((function(e){return Object(W.a)({id:e.id},e.data())})),l(r),r.forEach((function(e){var t=e.item;E(t)})),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=Object(n.useState)(),f=Object(s.a)(p,2),v=(f[0],f[1],function(){var t=Object(d.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=ye(new Date),n=60*a.hour()+a.minute(),r=e.idOrder.id,t.next=5,k.collection("order").where("id","==",r).get().then((function(e){e.forEach((function(e){e.ref.update({status:"Listo",readyAt:n})}))}));case 5:t.sent,setTimeout((function(){e.history.push("/Kitchen")}),1e3);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"box1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"",src:b.a,className:"images"})),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("div",{className:"menuTitle"},"Orden"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(fe.a,null,r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",{key:e.id,className:"text-center"},r.a.createElement("td",{id:"paragraph"},"No. Mesa: ",e.table),r.a.createElement("td",{id:"paragraph"},"Cliente: ",e.nameCus),r.a.createElement("td",{id:"paragraph"},"Meserx: ",e.userName))})))),r.a.createElement(fe.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"text-center"},"Producto"),r.a.createElement("th",{className:"text-center"},"Cantidad"))),r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",{key:t,className:"text-center"},r.a.createElement("td",{id:"paragraph",key:e.pro}," ",e.produItem),r.a.createElement("td",{id:"paragraph",key:e.qua}," ",e.quant))}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{alt:"",className:"ready",src:xe.a,onClick:function(){return v()}}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(je,null)))})),we=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),l=Object(s.a)(c,2),i=l[0],o=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),d=m[0],E=m[1];return Object(n.useEffect)((function(){w.onAuthStateChanged((function(e){E(!0),e?(r(e),k.collection("user").doc(e.uid).get().then((function(e){var t=e.data();o(t),E(!1)}))):r(null)}))}),[]),{firebaseUser:a,user:i,loading:d}},Ce=function(e){var t=e.path,a=e.user,n=e.component;return e.loading?r.a.createElement("div",null,"Cargando..."):a.user?r.a.createElement(o.b,{path:t},r.a.createElement(n,{user:a})):r.a.createElement(o.a,{to:"/"})};var Se=function(){var e=we(),t=e.firebaseUser,a=e.user,c=e.loading,l=Object(n.useState)([]),u=Object(s.a)(l,2),m=u[0],d=u[1],E=Object(n.useState)([]),p=Object(s.a)(E,2),f=p[0],b=p[1];return!1===t?r.a.createElement("div",null,"Cargando..."):r.a.createElement(i.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(C,null)),r.a.createElement(Ce,{path:"/Personal",component:P,user:a,loading:c}),r.a.createElement(Ce,{path:"/Menu",component:U,user:a,loading:c}),r.a.createElement(Ce,{path:"/Breakfast",component:ne,user:a,loading:c}),r.a.createElement(Ce,{path:"/Meal",component:ce,user:a,loading:c}),r.a.createElement(o.b,{path:"/Floor"},r.a.createElement(ge,{order:m,setOrder:d,idOrder:f,setIdOrder:b})),r.a.createElement(o.b,{path:"/Kitchen"},r.a.createElement(Ne,{order:m,setOrder:d,idOrder:f,setIdOrder:b})),r.a.createElement(o.b,{path:"/DetailFloor"},r.a.createElement(he,{order:m,setOrder:d,idOrder:f,setIdOrder:b})),r.a.createElement(o.b,{path:"/DetailKitchen"},r.a.createElement(ke,{order:m,setOrder:d,idOrder:f,setIdOrder:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[77,1,2]]]);
//# sourceMappingURL=main.d01cf56b.chunk.js.map