(this["webpackJsonpburger-queen-mexa"]=this["webpackJsonpburger-queen-mexa"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/title.b8ce7343.svg"},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/house.6493ff32.svg"},,,function(e,t,a){e.exports=a.p+"static/media/clock1.a0b9357e.svg"},function(e,t,a){e.exports=a.p+"static/media/hourglass.aab7645b.svg"},,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/burger.088ec8e7.svg"},function(e,t,a){e.exports=a.p+"static/media/whiterectangle.36334993.svg"},function(e,t,a){e.exports=a.p+"static/media/user.cb0c1f72.svg"},function(e,t,a){e.exports=a.p+"static/media/padlock.10a13234.svg"},,function(e,t,a){e.exports=a.p+"static/media/waiter.29bb8a2c.svg"},function(e,t,a){e.exports=a.p+"static/media/chef.a70ae04d.svg"},function(e,t,a){e.exports=a.p+"static/media/logout.cad6a5fa.svg"},function(e,t,a){e.exports=a.p+"static/media/breakfast.48456247.svg"},function(e,t,a){e.exports=a.p+"static/media/meal.f5979b7e.svg"},function(e,t,a){e.exports=a.p+"static/media/table.f3fb1415.svg"},function(e,t,a){e.exports=a.p+"static/media/sign.dd6d5874.svg"},,,function(e,t,a){e.exports=a.p+"static/media/yellowrec.f8418dbc.svg"},function(e,t,a){e.exports=a.p+"static/media/bill.63d03a42.svg"},function(e,t,a){e.exports=a(116)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(49),l=a.n(r),s=(a(71),a(6)),i=a(4),o=a(9),m=a.n(o),u=a(13),d=a(2),E=(a(73),a(50)),f=a.n(E),p=a(5),v=a.n(p),b=a(51),g=a.n(b),h=a(52),N=a.n(h),x=a(53),O=a.n(x),j=a(20),y=a.n(j);a(74),a(77);y.a.initializeApp({apiKey:"AIzaSyBi_yIifajbGfYsbhb1Dk0I4KwltIKBNy4",authDomain:"burger-queen-mexa.firebaseapp.com",databaseURL:"https://burger-queen-mexa.firebaseio.com",projectId:"burger-queen-mexa",storageBucket:"burger-queen-mexa.appspot.com",messagingSenderId:"457070581674",appId:"1:457070581674:web:a1055cbc4dbb8f73783dd3",measurementId:"G-Z7SRWBFN2L"});var k=y.a.firestore(),w=y.a.auth(),S=Object(i.f)((function(e){var t=c.a.useState(""),a=Object(d.a)(t,2),n=a[0],r=a[1],l=c.a.useState(""),s=Object(d.a)(l,2),i=s[0],o=s[1],E=c.a.useState(null),p=Object(d.a)(E,2),b=p[0],h=p[1],x=c.a.useCallback(Object(u.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.signInWithEmailAndPassword(n,i);case 3:a=t.sent,r(""),o(""),h(null),console.log(a.user),e.history.push("/Personal"),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),"auth/invalid-email"===t.t0.code&&h("Email no registrado"),"auth/user-not-found"===t.t0.code&&h("Usuario no encontrado"),"auth/wrong-password"===t.t0.code&&h("Contrase\xf1a incorrecta");case 17:case"end":return t.stop()}}),t,null,[[0,11]])}))),[n,i,e.history]);return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("img",{className:"burger",src:f.a,alt:"burger"}),c.a.createElement("img",{className:"img-fluid__white ",src:g.a,alt:"loginRectangle"}),c.a.createElement("img",{className:"logo",src:v.a,alt:"title"}),c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),n.trim()?i.trim()?i.length<6?h("Ingrese Password de m\xednimo 6 car\xe1cteres"):(h(null),console.log("Pasando todas las validaciones")):h("Ingrese Password"):h("Ingrese Email")}},c.a.createElement("div",null,b&&c.a.createElement("div",{className:"alert alert-danger"},b),c.a.createElement("img",{className:"user",src:N.a,alt:"user"}),c.a.createElement("input",{type:"email",className:"input form-rounded",id:"email",placeholder:"   Correo",onChange:function(e){return r(e.target.value)},value:n})),c.a.createElement("div",{className:""},c.a.createElement("img",{className:"user",src:O.a,alt:"padlock"}),c.a.createElement("input",{type:"password",className:"input form-rounded",id:"password",placeholder:"  Contrase\xf1a",onChange:function(e){return o(e.target.value)},value:i})),c.a.createElement("div",null,c.a.createElement("button",{id:"submit",type:"submit",className:"btn form-rounded",onClick:x},"Iniciar Sesi\xf3n")),c.a.createElement("div",null,c.a.createElement("h5",{className:"names"},"Nallely Flores y Danaee Partida"))))})),C=(a(82),a(55)),I=a.n(C),M=a(56),P=a.n(M),T=a(57),q=a.n(T);var B=Object(i.f)((function(e){var t=c.a.useState(null),a=Object(d.a)(t,2),n=(a[0],a[1]);return c.a.useEffect((function(){w.currentUser?(console.log("vive"),n(w.currentUser)):(console.log("no vive"),e.history.push("/"))}),[]),c.a.createElement("div",null)})),F=Object(i.f)((function(e){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"box1"},c.a.createElement(B,null),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement("div",{className:"welcome"},"Bienvenida")),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"mt-5 col-12 text-center"},c.a.createElement("img",{src:I.a,className:"waiter float-xs-left ",onClick:function(){e.history.push("/Menu")}}),c.a.createElement("img",{src:P.a,className:"chef float-xs-right",onClick:function(){e.history.push("/Kitchen")}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("img",{src:q.a,className:"logout float-xs-left",onClick:function(){w.signOut().then((function(){e.history.push("/")}))}}),c.a.createElement("h3",null,"Cerrar Sesi\xf3n")))))})),D=(a(83),a(58)),U=a.n(D),$=a(59),A=a.n($),K=a(60),Q=a.n(K),G=a(21),W=(a(84),a(27)),L=a.n(W),R=Object(i.f)((function(e){var t;return c.a.createElement("div",{className:"navbarMenu",fixed:"bottom"},c.a.createElement("img",(t={className:"house",src:L.a},Object(G.a)(t,"className","house"),Object(G.a)(t,"onClick",(function(){e.history.push("/Personal")})),t)))})),V=Object(i.f)((function(e){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"mt-5 col-12 text-center"},c.a.createElement("img",{src:U.a,className:"breakfast float-xs-left ",onClick:function(){e.history.push("/Breakfast")}}),c.a.createElement("img",{src:A.a,className:"meal float-xs-left ",onClick:function(){e.history.push("/Meal")}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("img",{src:Q.a,className:"guest float-xs-left",onClick:function(){e.history.push("/Floor")}})),c.a.createElement(R,null))))})),_=a(32),z=a(11),H=(a(85),a(28)),J=a.n(H),Y=(a(103),Object(i.f)((function(e){return c.a.createElement("div",{className:"navbar",fixed:"bottom",bg:"dark",varian:"dark"},c.a.createElement("div",{className:"bill",fixed:"bottom"},c.a.createElement("p",{id:"item"},"Productos: ",e.totalQuantity,"  Total: $",e.payment),c.a.createElement("button",{className:"submit",onClick:function(t){e.addOrder(),e.floor()}},"Enviar")),c.a.createElement("div",{className:"houseMenu"},c.a.createElement("img",{src:L.a,onClick:function(){e.history.push("/Menu")}})))}))),Z=a(29),X=a.n(Z),ee=Object(i.f)((function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(0),i=Object(d.a)(s,2),o=i[0],E=i[1],f=Object(n.useState)([]),p=Object(d.a)(f,2),b=p[0],g=p[1],h=Object(n.useState)([]),N=Object(d.a)(h,2),x=N[0],O=(N[1],Object(n.useState)([])),j=Object(d.a)(O,2),y=j[0],w=j[1];console.log(b,e.user);var S=Object(n.useState)([]),C=Object(d.a)(S,2),I=C[0],M=C[1];c.a.useEffect((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("breakfast").orderBy("uid","asc").get();case 3:t=e.sent,a=t.docs.map((function(e){return Object(z.a)({uid:e.uid},e.data())})),M(a),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"textTable  "},"No. Mesa",c.a.createElement("select",{className:"select",onChange:function(e){return w(e.target.value)}},c.a.createElement("option",{value:"0"},"0"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5"))),c.a.createElement("div",{className:""},c.a.createElement("div",{className:"menuTitle text-center"},"Men\xfa"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("li",{className:"list-group"},I.map((function(e){return c.a.createElement("div",{key:e.uid,className:""},c.a.createElement("div",{className:"itemText "},e.item),c.a.createElement("div",{className:"priceText  "},"$ ",e.price,".00"),c.a.createElement("div",null,c.a.createElement(J.a,{min:0,max:100,onChange:function(t){var a,n,c;a=b.find((function(t){return t.productId===e.uid}))?b.map((function(a){return a.productId!==e.uid?a:Object(z.a)(Object(z.a)({},a),{},{quant:t,payment:t*e.price})})):[].concat(Object(_.a)(b),[{productId:e.uid,produItem:e.item,unitaryPrice:e.price,quant:t,payment:t*e.price}]),g(a),n=a.reduce((function(e,t){return e+t.quant}),0),l(n),console.log(n),c=a.reduce((function(e,t){return e+t.payment}),0),E(c),console.log(c)}})),c.a.createElement("div",{className:"descriptionText"}," (",e.description,")"))}))),c.a.createElement(Y,{totalQuantity:r,payment:o,order:x,addOrder:function(){console.log("Guardados en Firebase");var t={id:X.a.generate(),item:b,check:o,totQuantity:r,table:y,userName:e.user.user,incomingHour:(new Date).toLocaleString(),status:"Abierta"};k.collection("order").add(t)},floor:function(){e.history.push("/Floor")}}))))})),te=(a(112),Object(i.f)((function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),r=a[0],l=a[1],s=c.a.useState([]),i=Object(d.a)(s,2),o=i[0],E=i[1],f=Object(n.useState)(0),p=Object(d.a)(f,2),b=p[0],g=p[1],h=Object(n.useState)([]),N=Object(d.a)(h,2),x=N[0],O=N[1],j=Object(n.useState)([]),y=Object(d.a)(j,2),w=y[0],S=(y[1],Object(n.useState)([])),C=Object(d.a)(S,2),I=C[0],M=C[1];c.a.useEffect((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("meal").orderBy("uid","asc").get();case 3:t=e.sent,console.log(t),a=t.docs.map((function(e){return Object(z.a)({uid:e.uid},e.data())})),E(a),console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"textTable  "},"No. Mesa",c.a.createElement("select",{className:"select",onChange:function(e){return M(e.target.value)}},c.a.createElement("option",{value:"0"},"0"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4"),c.a.createElement("option",{value:"5"},"5"))),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement("div",{className:"menuTitle"},"Men\xfa"),c.a.createElement("li",{className:"list-group"},o.map((function(e){return c.a.createElement("div",{key:e.uid,className:""},c.a.createElement("div",{className:"itemTextMeal"},e.item),c.a.createElement("div",{className:"priceTextMeal"},"$ ",e.price,".00"),c.a.createElement(J.a,{min:0,max:100,onChange:function(t){var a,n,c;a=x.find((function(t){return t.productId===e.uid}))?x.map((function(a){return a.productId!==e.uid?a:Object(z.a)(Object(z.a)({},a),{},{quant:t,payment:t*e.price})})):[].concat(Object(_.a)(x),[{productId:e.uid,produItem:e.item,unitaryPrice:e.price,quant:t,payment:t*e.price}]),O(a),n=a.reduce((function(e,t){return e+t.quant}),0),l(n),console.log(n),c=a.reduce((function(e,t){return e+t.payment}),0),g(c),console.log(c)}}),c.a.createElement("div",{className:"descriptionTextMeal"},e.description),"  ",c.a.createElement("br",null))})))),c.a.createElement(Y,{totalQuantity:r,payment:b,order:w,addOrder:function(){console.log("Guardados en Firebase");var t={id:X.a.generate(),item:x,check:b,totQuantity:r,table:I,userName:e.user.user,incomingHour:Date.now()};k.collection("order").add(t)},floor:function(){e.history.push("/Floor")}})))}))),ae=(a(113),a(30)),ne=a.n(ae),ce=a(31),re=a.n(ce),le=a(61),se=a.n(le),ie=a(15),oe=Object(i.f)((function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],l=a[1];return c.a.useEffect((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("order").orderBy("id","asc").get();case 3:t=e.sent,a=t.docs.map((function(e){return Object(z.a)({id:e.id},e.data())})),l(a),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement("div",{className:"menuTitle"},"Piso"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(ie.a,null,c.a.createElement("div",{className:""},c.a.createElement("tr",null,c.a.createElement("th",null,"Mesa"),c.a.createElement("th",null," ",c.a.createElement("img",{src:ne.a})),c.a.createElement("th",null,c.a.createElement("img",{src:re.a})),c.a.createElement("th",null,c.a.createElement("img",{src:se.a})),c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Ver")),c.a.createElement("tbody",null,c.a.createElement("tr",null,console.log("order",r),r.map((function(e){return c.a.createElement("td",{key:e.id,className:""},c.a.createElement("td",null,e.table),c.a.createElement("td",null))})))))),c.a.createElement(R,null)))})),me=(a(114),Object(i.f)((function(e){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement("div",{className:"menuTitle"},"Cocina"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(ie.a,{responsive:!0},c.a.createElement("div",{className:"table"},c.a.createElement("tr",null,c.a.createElement("th",null,"Mesa"),c.a.createElement("th",null," ",c.a.createElement("img",{src:ne.a})),c.a.createElement("th",null,c.a.createElement("img",{src:re.a})),c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Ver")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Mesa 2"),c.a.createElement("td",null,"11:45"),c.a.createElement("td",null,"00:10"),c.a.createElement("td",null,"Ver"))))),c.a.createElement(R,null)))}))),ue=(a(115),a(64)),de=a.n(ue),Ee=a(65),fe=a.n(Ee),pe=Object(i.f)((function(e){return c.a.createElement("div",{className:"container mt-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"box1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:v.a,className:"images"})),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement("div",{className:"menuTitle"},"Pedido"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("div",{className:"numbertable"},c.a.createElement("p",{id:"paragraph"},"No. Mesa",c.a.createElement("img",{src:de.a})),c.a.createElement("p",{id:"waiterUser"},"Mesero:")),c.a.createElement(ie.a,null,c.a.createElement("div",{className:""},c.a.createElement("tr",null,c.a.createElement("th",null,"Producto"),c.a.createElement("th",null,"Cantidad"),c.a.createElement("th",null,"Precio")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Chilakillers"),c.a.createElement("td",null,"1"),c.a.createElement("td",null,"$95.00"))))),c.a.createElement(ie.a,null,c.a.createElement("div",{className:""},c.a.createElement("tr",null,c.a.createElement("th",{id:"edit"},"Editar"),c.a.createElement("th",null,"Total: $")),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null," "))))),c.a.createElement("div",{className:"bill"},c.a.createElement("img",{src:fe.a}))))})),ve=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),l=Object(d.a)(r,2),s=l[0],i=l[1];return Object(n.useEffect)((function(){w.onAuthStateChanged((function(e){e?(c(e),k.collection("user").doc(e.uid).get().then((function(e){var t=e.data();i(t)}))):c(null)}))}),[]),{firebaseUser:a,user:s}};var be=function(){var e=ve(),t=e.firebaseUser,a=e.user;return!1!==t?c.a.createElement(s.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0},c.a.createElement(S,null)),c.a.createElement(i.a,{path:"/Personal"},c.a.createElement(F,{user:a})),c.a.createElement(i.a,{path:"/Kitchen"},c.a.createElement(me,null)),c.a.createElement(i.a,{path:"/Menu"},c.a.createElement(V,null)),c.a.createElement(i.a,{path:"/Breakfast"},c.a.createElement(ee,{user:a})),c.a.createElement(i.a,{path:"/Meal"},c.a.createElement(te,{user:a})),c.a.createElement(i.a,{path:"/Floor"},c.a.createElement(oe,null)),c.a.createElement(i.a,{path:"/DetailFloor"},c.a.createElement(pe,null)))):c.a.createElement("p",null,"Cargando... :D")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[66,1,2]]]);
//# sourceMappingURL=main.65978329.chunk.js.map