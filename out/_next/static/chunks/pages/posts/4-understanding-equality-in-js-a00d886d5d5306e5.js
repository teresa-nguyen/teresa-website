(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{486:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/4-understanding-equality-in-js",function(){return n(6554)}])},250:function(e,t,n){"use strict";var r=n(5893),a=n(5988),i=n.n(a);(new Date).getFullYear();t.Z={footer:(0,r.jsx)("footer",{className:"jsx-2447ca1c11803f07",children:(0,r.jsx)(i(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})})}},6554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(8941),i=n.n(a),s=n(3805),o=n(250),c=n(3905);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Understanding Equality in JavaScript"}),"\n",(0,r.jsxs)(t.p,{children:["Understanding equality in JavaScript is complex! I recently learned that using ",(0,r.jsx)(t.code,{children:"==="})," is the safest way to check equality in JavaScript; ",(0,r.jsx)(t.code,{children:"=="})," has tripped me up so many times, but what is the difference between the two?"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"1 === '1' // false\n1 == '1' // true\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"==="}),", also known as strict equality, checks the two values if they are the same or not. It's that simple. While ",(0,r.jsx)(t.code,{children:"=="}),", also known as abstract equality, actually tries to convert the second value that it is comparing to be the same type as the first value before comparing the two."]}),"\n",(0,r.jsxs)(t.p,{children:["In our above example, ",(0,r.jsx)(t.code,{children:"==="})," checks the number ",(0,r.jsx)(t.code,{children:"1"})," against the string ",(0,r.jsx)(t.code,{children:"'1'"}),", which are not the same. Therefore, returning false."]}),"\n",(0,r.jsxs)(t.p,{children:["While ",(0,r.jsx)(t.code,{children:"=="})," tries to convert the second value. The string ",(0,r.jsx)(t.code,{children:"'1'"})," will be converted to the number ",(0,r.jsx)(t.code,{children:"1"})," before being compared against the first value (the number ",(0,r.jsx)(t.code,{children:"1"}),"). Once converted, the two values are now the number ",(0,r.jsx)(t.code,{children:"1"})," when compared, which returns true."]}),"\n",(0,r.jsxs)(t.p,{children:["I hope this explains the weird behavior of ",(0,r.jsx)(t.code,{children:"=="})," and helps you avoid making mistakes!"]})]})},n=Object.assign({},(0,c.useMDXComponents)(),e.components),a=n.wrapper;return a?(0,r.jsx)(a,l({},e,{children:(0,r.jsx)(t,{})})):t()}var h=(0,r.jsx)(u,{});function p(e){return(0,s.withSSG)(i()({filename:"4-understanding-equality-in-js.md",route:"/posts/4-understanding-equality-in-js",meta:{title:"Understanding Equality in JavaScript",date:"2022/4/23",description:"Learn the difference between '==' and '===' in JavaScript.",tag:"javascript",author:"Teresa"},pageMap:[{name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2022-04-02T00:00:00.000Z"}},{name:"posts",children:[{name:"1-controlled-input",route:"/posts/1-controlled-input",frontMatter:{title:"Learning About Controlled Inputs in React",date:"2022/4/02",description:"Understanding controlled inputs and why we should use them.",tag:"react",author:"Teresa"}},{name:"2-each",route:"/posts/2-each",frontMatter:{title:"All the Different Ways to Go Through a List in JavaScript",date:"2022/4/09",description:"Understanding all the different ways to go through a list in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"3-copying-object",route:"/posts/3-copying-object",frontMatter:{title:"How to Copy an Object in JavaScript",date:"2022/4/16",description:"Learn the different ways to copy an object in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"4-understanding-equality-in-js",route:"/posts/4-understanding-equality-in-js",frontMatter:{title:"Understanding Equality in JavaScript",date:"2022/4/23",description:"Learn the difference between '==' and '===' in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"5-understanding-box-model",route:"/posts/5-understanding-box-model",frontMatter:{title:"Understanding the Box Model",date:"2022/4/30",description:"Learn about Padding, Border, and Margin in the CSS box model.",tag:"css",author:"Teresa"}},{name:"6-flexbox",route:"/posts/6-flexbox",frontMatter:{title:"Helpful Resources for Flexbox",date:"2022/5/07",description:"Some valuable resources for understanding Flexbox.",tag:"css",author:"Teresa"}},{name:"7-style-in-react",route:"/posts/7-style-in-react",frontMatter:{title:"How to Style in React",date:"2022/5/14",description:"Understanding the className and style properties in React.",tag:"css,react",author:"Teresa"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Blog",date:"2022-04-02T00:00:00.000Z"}}],route:"/posts"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"}]},o.Z))(l({},e,{children:h}))}}},function(e){e.O(0,[774,686,888,179],(function(){return t=486,e(e.s=t);var t}));var t=e.O();_N_E=t}]);