(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),c=(a(18),a(11)),s=a(2),l=a(3),h=a(5),d=a(4),u=a(1),m=a(6),b=a(10),v=a(7),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).boxKey=0,a.state={width:"",height:"",color:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object(b.a)({},this.state,{id:this.boxKey});this.props.addBox(t),this.setState({color:"",width:"",height:""}),this.boxKey++}},{key:"render",value:function(){return o.a.createElement("div",{className:"card-form"},o.a.createElement("form",{className:"signup",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-title"},"Create Color Box!"),o.a.createElement("div",{className:"form-body"},o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"text",name:"color",placeholder:"Box Color",value:this.state.color,onChange:this.handleChange})),o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"text",placeholder:"Width",name:"width",value:this.state.width,onChange:this.handleChange}),o.a.createElement("input",{type:"text",placeholder:"Height",name:"height",value:this.state.height,onChange:this.handleChange}))),o.a.createElement("div",{className:"rule"}),o.a.createElement("div",{className:"form-footer"},o.a.createElement("button",{type:"submit"},"Add!"))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleRemove=a.handleRemove.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleRemove",value:function(e){this.props.remBox(this.props.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"boxlist-item"},o.a.createElement("div",{className:"box",style:{width:"".concat(this.props.width,"px"),height:"".concat(this.props.height,"px"),backgroundColor:this.props.color}}),o.a.createElement("button",{className:"button",onClick:this.handleRemove},"Remove Box!"))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={boxesList:[]},a.addBox=a.addBox.bind(Object(u.a)(a)),a.remBox=a.remBox.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"remBox",value:function(e){this.setState(function(t){return{boxesList:t.boxesList.filter(function(t){return t.id!==e})}})}},{key:"addBox",value:function(e){this.setState(function(t){return{boxesList:[].concat(Object(c.a)(t.boxesList),[e])}})}},{key:"listRender",value:function(){var e=this;return o.a.createElement("ul",{className:"boxlist"},this.state.boxesList.map(function(t){return o.a.createElement(f,{key:t.id,id:t.id,color:t.color,width:t.width,height:t.height,remBox:e.remBox})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{addBox:this.addBox}),this.listRender())}}]),t}(n.Component);a(19);var g=function(){return o.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.77ed52fd.chunk.js.map