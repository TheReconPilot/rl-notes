"use strict";(self.webpackChunkrl_notes=self.webpackChunkrl_notes||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Reinforcement Learning",sidebar_position:1,slug:"/"},u="Reinforcement Learning",s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Reinforcement Learning",description:"This is a personal notes site, built with Docusaurus 2.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/rl-notes/",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Reinforcement Learning",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Multi-Armed Bandits",permalink:"/rl-notes/tabular-methods/multi-armed-bandits"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Comparison",id:"comparison",children:[],level:2},{value:"Basic Elements",id:"basic-elements",children:[{value:"Policy",id:"policy",children:[],level:3},{value:"Reward Signal",id:"reward-signal",children:[],level:3},{value:"Value Function",id:"value-function",children:[],level:3},{value:"Model of the Environment",id:"model-of-the-environment",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reinforcement-learning"},"Reinforcement Learning"),(0,i.kt)("p",null,"This is a personal notes site, built with ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Reinforcement Learning is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a paradigm of machine learning"),(0,i.kt)("li",{parentName:"ul"},"about maximizing a goal (reward) by finding what actions to take in an environment at different states")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learning to play a game, like Chess, Go, arcade games"),(0,i.kt)("li",{parentName:"ul"},"A human learning to walk"),(0,i.kt)("li",{parentName:"ul"},"An aircraft autopilot system learning to handle a plane"),(0,i.kt)("li",{parentName:"ul"},"Personalization systems in online services")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"comparison"},"Comparison"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Supervised Learning")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Unsupervised Learning")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Reinforcement Learning")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Learning to approximate answers in new situations using reference answers"),(0,i.kt)("td",{parentName:"tr",align:null},"Learning to find underlying structure in the given data"),(0,i.kt)("td",{parentName:"tr",align:null},"Learning optimal strategy by trial and error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Needs reference data and correct answers"),(0,i.kt)("td",{parentName:"tr",align:null},"No prior data/feedback required"),(0,i.kt)("td",{parentName:"tr",align:null},"Needs feedback/reward on attempted actions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Model does not affect input data"),(0,i.kt)("td",{parentName:"tr",align:null},"Model does not affect input data"),(0,i.kt)("td",{parentName:"tr",align:null},"Agent can affect the environment, its possible future states and actions")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"basic-elements"},"Basic Elements"),(0,i.kt)("p",null,"There is an ",(0,i.kt)("strong",{parentName:"p"},"agent")," and an ",(0,i.kt)("strong",{parentName:"p"},"environment"),". The agent can be any entity that has the ability to take some ",(0,i.kt)("em",{parentName:"p"},"action")," at any given ",(0,i.kt)("em",{parentName:"p"},"state"),"."),(0,i.kt)("h3",{id:"policy"},"Policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The strategy that the agent follows in a given state of the environment"),(0,i.kt)("li",{parentName:"ul"},"Similar to ",(0,i.kt)("em",{parentName:"li"},"stimulus-response")," rules or associations")),(0,i.kt)("h3",{id:"reward-signal"},"Reward Signal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defines the goal"),(0,i.kt)("li",{parentName:"ul"},"At each state/step, the environment gives a certain reward to the signal"),(0,i.kt)("li",{parentName:"ul"},"Agent's objective is to maximize the total reward")),(0,i.kt)("h3",{id:"value-function"},"Value Function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"value of a state")," is the total amount of reward an agent can expect to receive, starting from that ",(0,i.kt)("em",{parentName:"li"},"state"),". "),(0,i.kt)("li",{parentName:"ul"},"Value function is simply a map from states to their given state values")),(0,i.kt)("p",null,"An action may have low rewards but lead to a state with high value, indicating that a lower immediate reward will be more than compensated with an overall higher reward."),(0,i.kt)("h3",{id:"model-of-the-environment"},"Model of the Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A reference which can mimic the actual environment, and can show how the environment will behave given a particular state and action",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Can be used for planning and finding optimal policy"))),(0,i.kt)("li",{parentName:"ul"},"A model may not always be available, when the environment is unpredictable")))}p.isMDXComponent=!0}}]);