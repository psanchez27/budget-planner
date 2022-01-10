(this["webpackJsonpbudget-planner"]=this["webpackJsonpbudget-planner"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=n(8),l=n(2),o=n(17),u=[],j=n(0),d=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{children:"My Budget"})})},b=function(e){var t=e.children,n=e.type;return Object(j.jsx)("div",{className:"card",style:{backgroundColor:"income"===n?"#2ecc71":"expense"===n?"#e74c3c":"",border:"form"===n?"3px solid #000":"none",color:"form"===n?"#000":"#fff"},children:t})},m=n(7),O=function(e){var t=e.item,n=e.handleDelete;return Object(j.jsxs)(b,{type:t.type,children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.amt}),Object(j.jsx)("button",{onClick:function(){return n(t.id)},className:"close",children:Object(j.jsx)(m.a,{color:"#fff"})})]})},h=function(e){var t=e.Budget,n=e.handleDelete;return Object(j.jsx)("div",{className:"budget-list",children:t.map((function(e){return Object(j.jsx)(O,{item:e,handleDelete:n},e.id)}))})},p=function(e){var t=e.children,n=e.version;e.type;return Object(j.jsx)("button",{className:"btn btn-".concat(n),children:t})};p.defaultProps={version:"primary",type:"button"};var f=p,x=function(e){var t=e.select,n=Object(c.useState)("income"),r=Object(l.a)(n,2),a=r[0],i=r[1],s=function(e){i(e.currentTarget.value),t(e.currentTarget.value)};return Object(j.jsxs)("ul",{className:"amount-type",children:[Object(j.jsxs)("li",{className:"income",children:[Object(j.jsx)("input",{type:"radio",id:"income",name:"type",value:"income",onChange:s,checked:"income"===a}),Object(j.jsx)("label",{htmlFor:"income",children:"Income"})]}),Object(j.jsxs)("li",{className:"expense",children:[Object(j.jsx)("input",{type:"radio",id:"expense",name:"type",value:"expense",onChange:s,checked:"expense"===a}),Object(j.jsx)("label",{htmlFor:"expense",children:"Expense"})]})]})},v=function(e){var t=e.handleAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),u=o[0],d=o[1],m=Object(c.useState)("income"),O=Object(l.a)(m,2),h=O[0],p=O[1];return Object(j.jsx)(b,{type:"form",children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u.trim().length>0&&a.trim().length>2&&u>0){console.log(u);var n={name:a,amt:u,type:h};i(""),d(""),t(n)}},children:[Object(j.jsx)("h2",{children:"Enter Amount"}),Object(j.jsx)(x,{select:function(e){return p(e)}}),Object(j.jsx)("div",{className:"input-group",children:Object(j.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text",value:a,placeholder:"Description"})}),Object(j.jsx)("div",{className:"input-group",children:Object(j.jsx)("input",{onChange:function(e){d(e.target.value)},type:"number",value:u,placeholder:"Amount"})}),Object(j.jsx)(f,{version:"primary",type:"submit",children:"Add"})]})})},g=function(e){var t=e.budget,n=t.filter((function(e){return"income"===e.type})).reduce((function(e,t){return e+t.amt}),0),c=t.filter((function(e){return"expense"===e.type})).reduce((function(e,t){return e+t.amt}),0),r=Number(n)-Number(c);return Object(j.jsxs)("ul",{className:"budget-numbers",children:[Object(j.jsxs)("li",{children:["Income Total: ",Object(j.jsxs)("span",{className:"income-total",children:["$",n]})]}),Object(j.jsxs)("li",{children:["Remainder: ",Object(j.jsxs)("span",{className:"remainder",children:["$",r]})]})]})},y=function(){var e=Object(c.useState)(u),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("budgetData");e&&r(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("budgetData",JSON.stringify(n))}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{}),Object(j.jsx)(v,{handleAdd:function(e){e.id=Object(o.a)(),e.amt=Number(e.amt),r([e].concat(Object(s.a)(n)))}}),Object(j.jsx)(g,{budget:n}),Object(j.jsx)(h,{Budget:n,handleDelete:function(e){console.log(e),window.confirm("Are you sure you want to delete?")&&r(n.filter((function(t){return t.id!==e})))}})]})};n(14);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.beb907f6.chunk.js.map