(this["webpackJsonpreact-hooks-demo"]=this["webpackJsonpreact-hooks-demo"]||[]).push([[0],{16:function(e,t,a){e.exports=a(55)},22:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),o=a(4),i=a(8),u=a.n(i);function l(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){!function(){var t,a;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,u.a.awrap(t.json());case 5:a=n.sent,c(JSON.parse(JSON.stringify(a))),m(!1);case 8:case"end":return n.stop()}}))}()}),[e]),[r,l]}a(22);var m=function(e){return r.a.createElement("div",{className:"profiles"},r.a.createElement("img",{className:"profile-image",src:e.users[e.count].avatar_url,alt:""}),r.a.createElement("div",{className:"username"},r.a.createElement("a",{href:e.users[e.count].url},e.users[e.count].login.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))))},f=a(7),p=(a(47),a(13),a(6)),v=a(5);var h=function(e){var t=l("https://api.github.com/users/".concat(e.users[e.count].login,"/repos")),a=Object(o.a)(t,2),n=a[0];return a[1]?r.a.createElement("div",{className:"spinner"},r.a.createElement(f.BarLoader,{size:30,color:"#000000",css:""})):r.a.createElement("div",{className:"repos"},r.a.createElement("hr",null),n.sort((function(e,t){return e.stargazers_count<t.stargazers_count?1:-1})).map((function(e){return r.a.createElement("div",{className:"repo",key:e.id},r.a.createElement("a",{href:e.html_url},r.a.createElement(v.a,{icon:p.c})," ",e.stargazers_count," - ",e.name))})).slice(0,5))};a(53);var E=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],s=l("https://api.github.com/users"),i=Object(o.a)(s,2),u=i[0],E=i[1];function d(e){"next"===e?c((a+1)%JSON.parse(JSON.stringify(u)).length):"previous"===e&&c(0===a?a+JSON.parse(JSON.stringify(u)).length-1:a-1)}return(Object(n.useEffect)((function(){-1===a&&c(0)}),[a]),E?r.a.createElement("div",null,r.a.createElement(f.BarLoader,{className:"spinner",size:150,color:"#000000",css:""})):r.a.createElement("div",{className:"card"},r.a.createElement(v.a,{className:"left-arrow button",icon:p.a,size:"3x",onClick:function(){return d("next")}})," ",r.a.createElement("div",{className:"content"},r.a.createElement(m,{users:u,count:a}),r.a.createElement(h,{users:u,count:a})),r.a.createElement(v.a,{className:"right-arrow button",icon:p.b,size:"3x",onClick:function(){return d("previous")}})," "))};a(54);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f9290978.chunk.js.map