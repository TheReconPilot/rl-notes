"use strict";(self.webpackChunkrl_notes=self.webpackChunkrl_notes||[]).push([[574],{2158:function(a,e,s){s.r(e),s.d(e,{frontMatter:function(){return r},contentTitle:function(){return N},metadata:function(){return l},toc:function(){return i},default:function(){return o}});var t=s(7462),m=s(3366),n=(s(7294),s(3905)),p=["components"],r={title:"Cross Entropy Method",sidebar_position:3},N="Cross Entropy",l={unversionedId:"tabular-methods/cross-entropy",id:"tabular-methods/cross-entropy",isDocsHomePage:!1,title:"Cross Entropy Method",description:"The Method",source:"@site/docs/tabular-methods/cross-entropy.md",sourceDirName:"tabular-methods",slug:"/tabular-methods/cross-entropy",permalink:"/rl-notes/tabular-methods/cross-entropy",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cross Entropy Method",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Markov Decision Process",permalink:"/rl-notes/tabular-methods/mdp"},next:{title:"Resources",permalink:"/rl-notes/resources"}},i=[{value:"The Method",id:"the-method",children:[]}],k={toc:i};function o(a){var e=a.components,s=(0,m.Z)(a,p);return(0,n.kt)("wrapper",(0,t.Z)({},k,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cross-entropy"},"Cross Entropy"),(0,n.kt)("h2",{id:"the-method"},"The Method"),(0,n.kt)("p",null,"A tabular method for finding a good policy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Policy is a matrix: ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"\u03c0"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"A"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"a")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi(a | s) = A_{s, a}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.969438em",verticalAlign:"-0.286108em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15139200000000003em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,n.kt)("span",{parentName:"span",className:"mpunct mtight"},","),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.286108em"}},(0,n.kt)("span",{parentName:"span"}))))))))))),(0,n.kt)("li",{parentName:"ul"},"Initialize Policy with all actions having equal probabilities in each state")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sample ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"N")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," sessions with this policy")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pick ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"M")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M")))))," best sessions. We call them ",(0,n.kt)("em",{parentName:"p"},"elite"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compute new probabilities for these elite (state, action) pairs:"),(0,n.kt)("div",{parentName:"li",className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"\u03c0"),(0,n.kt)("msup",{parentName:"msup"},(0,n.kt)("mrow",{parentName:"msup"}),(0,n.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("munder",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munder"},"\u2211"),(0,n.kt)("mrow",{parentName:"munder"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"s"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"a"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("mtext",{parentName:"mrow"},"Elite"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"s"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"a"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("munder",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munder"},"\u2211"),(0,n.kt)("mrow",{parentName:"munder"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"s"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("mtext",{parentName:"mrow"},"Elite"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"s"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mtext",{parentName:"mrow"},"Took\xa0"),(0,n.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mi",{parentName:"mstyle"},"a")),(0,n.kt)("mtext",{parentName:"mrow"},"\xa0at\xa0"),(0,n.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mi",{parentName:"mstyle"},"s"))),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mtext",{parentName:"mrow"},"Was\xa0at\xa0"),(0,n.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mi",{parentName:"mstyle"},"s")))),(0,n.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mtext",{parentName:"mrow"},"among\xa0best\xa0"),(0,n.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mi",{parentName:"mstyle"},"M"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,n.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,n.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03c0"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"w"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,n.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"\u03c0"),(0,n.kt)("msup",{parentName:"msup"},(0,n.kt)("mrow",{parentName:"msup"}),(0,n.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,n.kt)("mi",{parentName:"mrow"},"\u03c0"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi^{'}(a | s) = \\frac{\\sum\\limits_{s_t, a_t \\in \\text{Elite}}[s_t=s][a_t=a]}{\\sum\\limits_{s_t\\in \\text{Elite}}[s_t=s]} = \\frac{\\text{Took $a$ at $s$}}{\\text{Was at $s$}}\\ (\\text{among best $M$}) \\\\ \\ \\\\ \\pi_{new}(a | s) = \\alpha\\ \\pi^{'}(a | s) + (1 - \\alpha)\\ \\pi(a | s)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.24248em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.99248em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.99248em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.57948em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span"}),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8278285714285715em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"4.066439em",verticalAlign:"-1.7882129999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.278226em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7500050000000003em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.097887em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29634285714285713em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mord text mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"Elite"))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.0000050000000003em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op"},"\u2211")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.1022129999999999em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-4.528220999999999em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7500050000000001em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.097887em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29634285714285713em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct mtight"},","),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29634285714285713em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mord text mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"Elite"))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.0000050000000003em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op"},"\u2211")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.138221em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.7882129999999998em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.05744em",verticalAlign:"-0.686em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.37144em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Was\xa0at\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Took\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\xa0at\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"among\xa0best\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M")),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")),(0,n.kt)("span",{parentName:"span",className:"mspace newline"}),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mspace"},"\xa0")),(0,n.kt)("span",{parentName:"span",className:"mspace newline"}),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.03588em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.24248em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,n.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.99248em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.99248em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.57948em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span"}),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8278285714285715em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,n.kt)("p",{parentName:"li"},"where ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," can be thought of as learning rate. The updated policy is a combination of the old and the one constructed with elite state/actions."))),(0,n.kt)("p",null,"Repeat Steps 1-3 for a given number of times. "))}o.isMDXComponent=!0}}]);