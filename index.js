var D=Object.create,b=Object.defineProperty,K=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,Z=Object.getOwnPropertyNames,q=Object.getOwnPropertyDescriptor,S=e=>b(e,"__esModule",{value:!0}),z=(e,t)=>{S(e);for(var n in t)b(e,n,{get:t[n],enumerable:!0})},G=(e,t,n)=>{if(S(e),t&&typeof t=="object"||typeof t=="function")for(let l of Z(t))!M.call(e,l)&&l!=="default"&&b(e,l,{get:()=>t[l],enumerable:!(n=q(t,l))||n.enumerable});return e},I=e=>e&&e.__esModule?e:G(b(e!=null?D(K(e)):{},"default",{value:e,enumerable:!0}),e);z(exports,{default:()=>O});var i=I(require("react")),J={data:""},Q=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(t){}return e||J},U=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,V=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,m=(e,t)=>{let n,l="",g="",d="";for(let o in e){let s=e[o];typeof s=="object"?(n=t?t.replace(/([^,])+/g,a=>o.replace(/([^,])+/g,r=>/&/g.test(r)?r.replace(/&/g,a):a?a+" "+r:r)):o,g+=o[0]=="@"?o[1]=="f"?m(s,o):o+"{"+m(s,o[1]=="k"?"":t)+"}":m(s,n)):o[0]=="@"&&o[1]=="i"?l=o+" "+s+";":d+=m.p?m.p(o.replace(/[A-Z]/g,"-$&").toLowerCase(),s):o.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";"}return d[0]?(n=t?t+"{"+d+"}":d,l+n+g):l+g},f={},k=e=>{let t="";for(let n in e)t+=n+(typeof e[n]=="object"?k(e[n]):e[n]);return t},W=(e,t,n,l,g)=>{let d=typeof e=="object"?k(e):e,o=f[d]||(f[d]="go"+d.split("").reduce((s,a)=>101*s+a.charCodeAt(0)>>>0,11));if(!f[o]){let s=typeof e=="object"?e:(a=>{let r,c=[{}];for(;r=U.exec(a.replace(V,""));)r[4]&&c.shift(),r[3]?c.unshift(c[0][r[3]]=c[0][r[3]]||{}):r[4]||(c[0][r[1]]=r[2]);return c[0]})(e);f[o]=m(g?{["@keyframes "+o]:s}:s,n?"":"."+o)}return((s,a,r)=>{a.data.indexOf(s)<0&&(a.data=r?s+a.data:a.data+s)})(f[o],t,l),o},X=(e,t,n)=>e.reduce((l,g,d)=>{let o=t[d];if(o&&o.call){let s=o(n),a=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=a?"."+a:s&&typeof s=="object"?s.props?"":m(s,""):s}return l+g+(o??"")},"");function v(e){let t=this||{},n=e.call?e(t.p):e;return W(n.map?X(n,[].slice.call(arguments,1),t.p):n,Q(t.target),t.g,t.o,t.k)}var w,C,ne=v.bind({g:1}),se=v.bind({k:1});function B(e,t,n){m.p=t,w=e,C=n}function x(e,t){let n=this||{};return function(){let l=arguments;function g(d,o){let s=Object.assign({},d),a=s.className||g.className;return n.p=Object.assign({theme:C&&C()},s),n.o=/\s*go[0-9]+/g.test(a),s.className=v.apply(n,l)+(a?" "+a:""),t&&(s.ref=o),w(s.as||e,s)}return t?t(g):g}}B(i.default.createElement);var Y=x("ol")`
  margin: 0;
  padding-bottom: 2.2rem;
  list-style-type: none;
`,R=e=>v`
  display: inline-block;
  text-align: center;
  line-height: 4.5rem;
  padding: 0 0.7rem;
  cursor: pointer;

  color: ${e.state==="todo"?"silver":"black"};
  border-bottom: 4px solid ${e.state==="todo"?"silver":e.stepBackgroundColor||"#33C3F0"};

  &:before {
    position: relative;
    bottom: -3.99rem;
    float: left;
    left: 50%;

    ${e.state==="todo"?'content: "\u039F";':e.state==="doing"?'content: "\u2022";':'content: "\u2713";'}
    color: ${e.state==="todo"?"silver":"white"};
    background-color: ${e.state==="todo"?"white":e.stepBackgroundColor||"#33C3F0"};  
    width: 1.2em;
    height: 1.2em;
    line-height: ${e.state==="todo","1.2em"};
    line-height:normal;
    border-radius: ${e.state==="todo"?"0":"1.2em"};
  }
  &:hover,
  &::before {
    color: ${e.stepBackgroundHoverColor||"#0FA0CE"};
  }
  &:after {
    content: "\\00a0\\00a0";
  }   
  span {
    padding: 0 1.5rem;
  }
`,$=(e,t)=>{let n=[];for(let l=0;l<t;l++)l<e?n.push("done"):l===e?n.push("doing"):n.push("todo");return n},j=(e,t)=>e>0&&e<t-1?{showPreviousBtn:!0,showNextBtn:!0}:e===0?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1};function O(e){let t=!0,{activeComponentClassName:n,inactiveComponentClassName:l}=e;e.showNavigation&&(t=e.showNavigation);let g={};e.prevStyle&&(g=e.prevStyle);let d={};e.nextStyle&&(d=e.nextStyle);let{prevClass:o,nextClass:s}=e,[a,r]=i.useState($(0,e.steps.length)),[c,P]=i.useState(0),[p,A]=i.useState(j(0,e.steps.length)),y=u=>{r($(u,e.steps.length)),P(u<e.steps.length?u:c),A(j(u,e.steps.length))},N=()=>y(c+1),F=()=>y(c>0?c-1:c),H=u=>u.which===13?N(e.steps.length):{},L=u=>{u.currentTarget.value===e.steps.length-1&&c===e.steps.length-1?y(e.steps.length):y(u.currentTarget.value)},T=()=>e.steps.map((u,h)=>i.default.createElement("li",{className:R({state:a[h],stepBackgroundColor:e.stepBackgroundColor,stepBackgroundHoverColor:e.stepBackgroundHoverColor}),onClick:L,key:h,value:h},i.default.createElement("span",null,u.name))),E=u=>u&&i.default.createElement("div",null,i.default.createElement("button",{className:o,style:p.showPreviousBtn?e.prevStyle:{display:"none"},onClick:F},"Prev"),i.default.createElement("button",{className:s,style:p.showNextBtn?e.nextStyle:{display:"none"},onClick:N},"Next"));return i.default.createElement("div",{onKeyDown:H},i.default.createElement(Y,null,T()),l?e.steps.map((u,h)=>{let _=h===c?n:l;return i.default.createElement("div",{className:_},u.component)}):i.default.createElement("div",null,e.steps[c].component),i.default.createElement("div",null,E(t)))}
