(this.webpackJsonprobo_app=this.webpackJsonprobo_app||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(10),c=n.n(a),i=n(18),s=(n(26),n(2)),l=n(3),u=n(5),h=n(4),p=n(6),d=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3  pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.robots.map((function(e){return r.a.createElement(d,{key:e.id,name:e.name,email:e.email,id:e.id})}));return r.a.createElement("div",null,t)},b=function(e){var t=e.onSearchChange,n=e.inputValue;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for robot",onChange:t,value:n}))},m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"600px",border:"5px solid"}},e.children)},v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Hoops, that was not good!"):this.props.children}}]),t}(r.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.count!==e.count}},{key:"render",value:function(){var e=this;return console.log("counter"),r.a.createElement("button",{onClick:function(){return e.props.countFunc()}},"Click me: ",this.props.count)}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).changeCounter=function(){n.setState((function(e){return{counter:e.counter+1}}))},n.state={counter:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),this.state.counter!==t.counter}},{key:"render",value:function(){return console.log("Header"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"f1"},"Welcome To Robo App"),r.a.createElement(g,{count:this.state.counter,countFunc:this.changeCounter}))}}]),t}(r.a.Component),O=n(11),w=n(12),y=n.n(w),j=(n(32),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.search.toLowerCase())}));return 0===this.props.robots.length?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(E,{color:"red"}),r.a.createElement(b,{onSearchChange:this.props.onSearch,inputValue:this.props.search}),r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(f,{robots:t}))))}}]),t}(r.a.Component)),C=Object(O.b)((function(e){return{search:e.searchField.search,robots:e.fetchRobots.robots}}),(function(e){return{onSearch:function(t){return e({type:"SEARCH",payload:t.target.value})},fetchRobots:function(){return e((function(e){var t,n;return y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e({type:"ROBOTS_FETCH_PENDING"}),o.prev=1,o.next=4,y.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 4:return t=o.sent,o.next=7,y.a.awrap(t.json());case 7:n=o.sent,e({type:"ROBOTS_FETCH_SUCCESS",payload:n}),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),e({type:"ROBOTS_FETCH_ERROR",payload:o.t0});case 14:case"end":return o.stop()}}),null,null,[[1,11]])}))}}}))(j),S=(n(33),n(20)),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=n(8),T=n(9),F={search:""},N={robots:[],error:"",isPending:!0},H=(Object(S.createLogger)(),Object(_.c)({searchField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return Object(T.a)({},e,{search:t.payload});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROBOTS_FETCH_PENDING":return Object(T.a)({},e,{isPending:!0});case"ROBOTS_FETCH_SUCCESS":return Object(T.a)({},e,{robots:t.payload});case"ROBOTS_FETCH_ERROR":return Object(T.a)({},e,{error:t.payload});default:return e}}})),x=Object(_.d)(H,Object(_.a)(i.a));c.a.render(r.a.createElement(O.a,{store:x},r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo_app","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.8c6c5268.chunk.js.map