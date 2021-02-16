(this.webpackJsonpteam_manager_client=this.webpackJsonpteam_manager_client||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),l=(c(23),c(24),c(2)),i=c(0),o=function(){return Object(i.jsxs)("p",{children:[Object(i.jsx)(l.a,{to:"/players/list",children:"Manage Players"})," | ",Object(i.jsx)(l.a,{to:"/status/game/1",children:"Manager Player Status"})]})},j=c(3),d=c(4),u=c.n(d),h=function(e){var t=e.playerId,c=e.successCallback,n=e.playerName;return Object(i.jsx)("button",{onClick:function(e){window.confirm("Are you sure you want to remove "+n+"?")&&u.a.delete("http://localhost:8000/api/player/"+t).then((function(e){c()})).catch((function(e){return console.log("There was an issue: ",e)}))},style:{background:"red",color:"white"},children:"Delete"})},b=(c(50),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/getAllPlayers").then((function(e){return a(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))}),[]);return Object(i.jsx)(i.Fragment,{children:c.length>0?Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Player Name"}),Object(i.jsx)("th",{scope:"col",children:"Preferred Position"}),Object(i.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:e.playerName}),Object(i.jsx)("td",{children:e.preferredPosition}),Object(i.jsx)("td",{children:Object(i.jsx)(h,{playerId:e._id,successCallback:function(){return t=e._id,void a(c.filter((function(e){return e._id!==t})));var t},playerName:e.playerName})})]},t)}))})]}):Object(i.jsx)("h1",{children:"Loading..."})})}),p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),o=s[0],d=s[1],h=Object(n.useState)([]),b=Object(j.a)(h,2),p=b[0],O=b[1],g=Object(n.useState)(" "),y=Object(j.a)(g,2),m=y[0],x=y[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12",children:[Object(i.jsx)("h1",{children:"Add Player"}),Object(i.jsx)("p",{style:{color:"red"},children:m}),Object(i.jsx)("ul",{children:p.map((function(e,t){return Object(i.jsx)("small",{style:{color:"red"},children:Object(i.jsx)("li",{children:e})},t)}))})]})}),Object(i.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(i.jsx)("div",{className:"col-6",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.post("http://localhost:8000/api/createPlayer",{playerName:c,preferredPosition:o}).then((function(){return Object(l.d)("/players/list")})).catch((function(e){for(var t=e.response.data.errors,c=[],n=0,a=Object.keys(t);n<a.length;n++){var r=a[n];c.push(t[r].message)}O(c)}))},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Player Name:"}),Object(i.jsx)("input",{onChange:function(e){e.target.value.length<1?x("Player Name is required"):e.target.value.length<2?x("Player Name must be at least 2 characters long"):(a(e.target.value),x(""))},type:"text",className:"form-control"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Preferred Position:"}),Object(i.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"text",className:"form-control"})]}),Object(i.jsx)("div",{className:"form-group text-right",children:Object(i.jsx)("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"10px"},"data-toggle":"button",disabled:m,children:"Submit"})})]})})})]})},O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)(l.a,{to:"/players/list",children:"List"})," | ",Object(i.jsx)(l.a,{to:"/players/addPlayer",children:"Add Player"})]}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(b,{path:"list"}),Object(i.jsx)(p,{path:"addPlayer"})]})]})},g=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(j.a)(r,2),l=s[0],o=s[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/getAllPlayers").then((function(e){return a(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))}),[l]);var d=function(e,t,c,n,a,r,s){e.preventDefault(),u.a.put("http://localhost:8000/api/player/"+t,{playerName:c,preferredPosition:n,playerStatus:{game1:s,game2:a,game3:r}}).then((function(e){return o(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))},h=function(e){if("Playing"===e)return"green"},b=function(e){if("Not Playing"===e)return"red"},p=function(e){if("Undecided"===e)return"yellow"};return Object(i.jsx)(i.Fragment,{children:c.length>0?Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Player Name"}),Object(i.jsx)("th",{scope:"col",children:"Status"}),Object(i.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:e.playerName}),Object(i.jsx)("td",{children:e.playerStatus.game1}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{style:{background:h(e.playerStatus.game1)},onClick:function(t){return d(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game2,e.playerStatus.game3,"Playing")},children:"Playing"}),Object(i.jsx)("button",{style:{background:b(e.playerStatus.game1)},onClick:function(t){return d(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game2,e.playerStatus.game3,"Not Playing")},children:"Not Playing"}),Object(i.jsx)("button",{style:{background:p(e.playerStatus.game1)},onClick:function(t){return d(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game2,e.playerStatus.game3,"Undecided")},children:"Undecided"})]})]},t)}))})]}):Object(i.jsx)("h1",{children:"Loading..."})})},y=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),l=Object(j.a)(s,2),o=l[0],d=l[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/getAllPlayers").then((function(e){return r(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))}),[o]);var h=function(e,t,c,n,a,r,s){e.preventDefault(),u.a.put("http://localhost:8000/api/player/"+t,{playerName:c,preferredPosition:n,playerStatus:{game1:a,game2:r,game3:s}}).then((function(e){return d(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))},b=function(e){if("Playing"===e)return"green"},p=function(e){if("Not Playing"===e)return"red"},O=function(e){if("Undecided"===e)return"yellow"};return Object(i.jsx)(i.Fragment,{children:a.length>0?Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Player Name"}),Object(i.jsx)("th",{scope:"col",children:"Status"}),Object(i.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:e.playerName}),Object(i.jsx)("td",{children:e.playerStatus.game3}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{style:{background:b(e.playerStatus.game3)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game2,"Playing")},children:"Playing"}),Object(i.jsx)("button",{style:{background:p(e.playerStatus.game3)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game2,"Not Playing")},children:"Not Playing"}),Object(i.jsx)("button",{style:{background:O(e.playerStatus.game3)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game2,"Undecided")},children:"Undecided"})]})]},t)}))})]}):Object(i.jsx)("h1",{children:"Loading..."})})},m=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),l=Object(j.a)(s,2),o=l[0],d=l[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/getAllPlayers").then((function(e){return r(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))}),[o]);var h=function(e,t,c,n,a,r,s){e.preventDefault(),u.a.put("http://localhost:8000/api/player/"+t,{playerName:c,preferredPosition:n,playerStatus:{game1:a,game2:s,game3:r}}).then((function(e){return d(e.data)})).catch((function(e){return console.log("There was an issue: ",e)}))},b=function(e){if("Playing"===e)return"green"},p=function(e){if("Not Playing"===e)return"red"},O=function(e){if("Undecided"===e)return"yellow"};return Object(i.jsx)(i.Fragment,{children:a.length>0?Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Player Name"}),Object(i.jsx)("th",{scope:"col",children:"Status"}),Object(i.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:e.playerName}),Object(i.jsx)("td",{children:e.playerStatus.game2}),Object(i.jsxs)("td",{children:[Object(i.jsx)("button",{style:{background:b(e.playerStatus.game2)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game3,"Playing")},children:"Playing"}),Object(i.jsx)("button",{style:{background:p(e.playerStatus.game2)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game3,"Not Playing")},children:"Not Playing"}),Object(i.jsx)("button",{style:{background:O(e.playerStatus.game2)},onClick:function(t){return h(t,e._id,e.playerName,e.preferredPosition,e.playerStatus.game1,e.playerStatus.game3,"Undecided")},children:"Undecided"})]})]},t)}))})]}):Object(i.jsx)("h1",{children:"Loading..."})})},x=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:["Player Status - Game ",e.gameId]}),Object(i.jsxs)("p",{children:[Object(i.jsx)(l.a,{to:"/status/game/1",children:"Game 1"})," | ",Object(i.jsx)(l.a,{to:"/status/game/2",children:"Game 2"})," | ",Object(i.jsx)(l.a,{to:"/status/game/3",children:"Game 3"})]}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(g,{path:"1"}),Object(i.jsx)(m,{path:"2"}),Object(i.jsx)(y,{path:"3"})]})]})};var f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.b,{to:"/players/list",from:"/",noThrow:!0}),Object(i.jsx)(O,{path:"players/*"}),Object(i.jsx)(x,{path:"status/game/*"})]})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.d7f62291.chunk.js.map