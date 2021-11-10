"use strict";(self.webpackChunkrl_notes=self.webpackChunkrl_notes||[]).push([[833],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6634:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Multi-Armed Bandits",sidebar_position:1},l="Multi-Armed Bandits",m={unversionedId:"tabular-methods/multi-armed-bandits",id:"tabular-methods/multi-armed-bandits",isDocsHomePage:!1,title:"Multi-Armed Bandits",description:"The Concept",source:"@site/docs/tabular-methods/multi-armed-bandits.md",sourceDirName:"tabular-methods",slug:"/tabular-methods/multi-armed-bandits",permalink:"/rl-notes/tabular-methods/multi-armed-bandits",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Multi-Armed Bandits",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reinforcement Learning",permalink:"/rl-notes/"},next:{title:"Markov Decision Process",permalink:"/rl-notes/tabular-methods/mdp"}},p=[{value:"The Concept",id:"the-concept",children:[],level:2},{value:"Exploration vs Exploitation",id:"exploration-vs-exploitation",children:[],level:2},{value:"epsilon-greedy strategy",id:"epsilon-greedy-strategy",children:[],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-armed-bandits"},"Multi-Armed Bandits"),(0,i.kt)("h2",{id:"the-concept"},"The Concept"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k")," different options, or actions at each step"),(0,i.kt)("li",{parentName:"ul"},"A reward given at each action, depending on a stationary probability distribution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective:")," Maximize total reward over a given number of steps, say 500 steps.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'The name comes from imagining a gambler at a row of slot machines (sometimes known as "one-armed bandits"), who has to decide which machines to play, how many times to play each machine and in which order to play them, and whether to continue with the current machine or try a different machine.'),(0,i.kt)("p",{parentName:"blockquote"},"-"," Wikipedia")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://blogs.mathworks.com/images/loren/2016/multiarmedbandit.jpg",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"exploration-vs-exploitation"},"Exploration vs Exploitation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Exploitation")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Exploration")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Using known-good strategies/actions"),(0,i.kt)("td",{parentName:"tr",align:null},"Exploring new unknown strategies/actions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Known amount of rewards"),(0,i.kt)("td",{parentName:"tr",align:null},"Rewards unknown")))),(0,i.kt)("p",null,"If the bandit just exploits the known-strategies, it is possible that they are stuck in a local-optima."),(0,i.kt)("p",null,"There may be unknown strategies which yield a higher total reward in the long run."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"epsilon-greedy-strategy"},(0,i.kt)("span",{parentName:"h2",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"\u03f5")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\epsilon")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03f5"))))),"-greedy strategy"),(0,i.kt)("p",null,"Exploit known good strategies most of the time, but for an ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"\u03f5")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\epsilon")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03f5")))))," fraction, explore new strategies randomly."),(0,i.kt)("p",null,"As the number of steps increases, different actions will be sampled more and more times, eventually leading us to finding the optimal strategy in the limit of very large number of steps."))}u.isMDXComponent=!0}}]);