(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),c=n(3),i=n.n(c),r=(n(15),n(4)),o=n(5),u=n(6),d=n(10),j=n(9),l=(n(16),n(7)),b=n.n(l),h=n(0),p=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{className:b.a.buttons,type:"button",option:t,onClick:function(){return n(t)},children:t},t)}))})},O=n(8),f=n.n(O),x=function(t){var e=t.good,n=t.neutral,s=t.bad,a=t.total,c=t.positivePercentage;return Object(h.jsxs)("div",{className:f.a.statistics,children:[Object(h.jsxs)("span",{children:["Good: ",e]}),Object(h.jsxs)("span",{children:["Neutral: ",n]}),Object(h.jsxs)("span",{children:[" Bad: ",s]}),Object(h.jsxs)("span",{children:["Total: ",a]}),Object(h.jsxs)("span",{children:["Positive Percentage: ",c]})]})},g=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:e}),n]})},v=function(t){var e=t.message;return Object(h.jsx)("span",{children:e})},m=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.total=function(){return t.state.good+t.state.bad+t.state.neutral},t.positivePercentage=function(){var e=t.total();return Math.round(100*t.state.good/e)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(p,{options:this.state,onLeaveFeedback:this.handleIncrement})}),Object(h.jsx)(g,{title:"Statistics",children:this.total()?Object(h.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.total(),positivePercentage:this.positivePercentage()}):Object(h.jsx)(v,{message:"No feedback given"})})]})}}]),n}(s.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={buttons:"Buttons_buttons__2pada"}},8:function(t,e,n){t.exports={statistics:"Statistics_statistics__3T9jt"}}},[[18,1,2]]]);
//# sourceMappingURL=main.a54026d0.chunk.js.map