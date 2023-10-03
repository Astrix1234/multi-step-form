"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[81],{9487:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a="ButtonGoBack_btnGoBack__MHxDC",l=t(184),r=function(e){var n=e.onClick;return(0,l.jsx)("button",{className:a,type:"button",onClick:n,children:"Go Back"})}},8558:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a="ButtonNextStep_btnNextStep__RBiJR",l=t(184),r=function(e){var n=e.onClick,t=e.type;return(0,l.jsx)("button",{className:a,type:t,onClick:n,children:"Next Step"})}},2996:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a="CommentSteps_comment__LoGUu",l=t(184),r=function(e){var n=e.comment;return(0,l.jsx)("p",{className:a,children:n})}},3716:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var a="TitleSteps_title__HDrAP",l=t(184),r=function(e){var n=e.title;return(0,l.jsx)("h2",{className:a,children:n})}},6081:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(2791),l={container:"Step2_container__vfLiV",contentContainer:"Step2_contentContainer__TeD59",buttons:"Step2_buttons__5T46W"},r=t(3716),o=t(2996),c=t(8558),i=t(9487),s=t(5639),h=t(1413),d=t(7689),p=function(e,n,t,a){var l=(0,d.s0)();return{handleToggleChange:function(){var r,o,c,i="Monthly"===e?"Yearly":"Monthly",s=(0,h.Z)({},t.services);for(var d in s){switch(d){case"online":s[d].price="Monthly"===i?1:10;break;case"larger":case"custom":s[d].price="Monthly"===i?2:20}s[d].period="Monthly"===i?"mo":"yr"}switch(a){case"arcade":r="Monthly"===i?9:90,o="Monthly"===i?"mo":"yr",c="Arcade";break;case"advanced":r="Monthly"===i?12:120,o="Monthly"===i?"mo":"yr",c="Advanced";break;case"pro":r="Monthly"===i?15:150,o="Monthly"===i?"mo":"yr",c="Pro";break;default:r=0,o="mo",c="Arcade"}n((function(e){return(0,h.Z)((0,h.Z)({},e),{},{plan:i,price:r,period:o,planName:c,services:s})})),l("Monthly"===i?"/step2-monthly":"/step2-yearly")},onNextStep:function(){a?l("Monthly"===e?"/step3-monthly":"/step3-yearly"):alert("Please select a plan.")},onGoBack:function(){l("/")}}},u=function(e,n,t){var a,l,r,o=e.target.value;switch(o){case"arcade":a="Monthly"===n?9:90,l="Monthly"===n?"mo":"yr",r="Arcade";break;case"advanced":a="Monthly"===n?12:120,l="Monthly"===n?"mo":"yr",r="Advanced";break;case"pro":a="Monthly"===n?15:150,l="Monthly"===n?"mo":"yr",r="Pro";break;default:a=0,l="mo",r="Arcade"}t((function(e){return(0,h.Z)((0,h.Z)({},e),{},{price:a,period:l,planName:r,selectedInput:o})}))},m="InputRadioPlaceholder_container__C98yg",v="InputRadioPlaceholder_icon__YSulB",y="InputRadioPlaceholder_textContainer__+YesL",f="InputRadioPlaceholder_plan__D97rx",x="InputRadioPlaceholder_price__14zia",g="InputRadioPlaceholder_comment__1aFhR",_=t(184),j=function(e){var n=e.className,t=e.children,a=e.plan,l=e.price,r=e.period,o=e.comment;return(0,_.jsxs)("div",{className:"".concat(m," ").concat(n),children:[(0,_.jsx)("div",{className:v,children:t}),(0,_.jsxs)("div",{className:y,children:[(0,_.jsx)("p",{className:f,children:a}),(0,_.jsx)("p",{className:x,children:"$".concat(l,"/").concat(r)}),(0,_.jsx)("p",{className:g,children:o})]})]})},b=function(){return(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,_.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,_.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#FFAF7E"}),(0,_.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"})]})})},M=function(){return(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,_.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,_.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#F9818E"}),(0,_.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"})]})})},N=function(){return(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,_.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,_.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#483EFF"}),(0,_.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"})]})})},C="FormStep2_visuallyHidden__ed+Jr",w="FormStep2_inputPlaceholder__U5hgL",Z="FormStep2_form__Z3xBg",k=function(e){var n=e.plan,t=e.handleChoiceChange,a=e.selectedInput;return(0,_.jsxs)("form",{className:Z,children:[(0,_.jsxs)("label",{htmlFor:"arcade",children:[(0,_.jsx)("input",{className:C,id:"arcade",type:"radio",name:"planChoice",value:"arcade",checked:"arcade"===a,onChange:t}),(0,_.jsx)(j,{className:w,plan:"Arcade",price:"Monthly"===n?9:90,period:"Monthly"===n?"mo":"yr",comment:"Monthly"===n?"":"2 months free.",children:(0,_.jsx)(b,{})})]}),(0,_.jsxs)("label",{htmlFor:"advanced",children:[(0,_.jsx)("input",{className:C,id:"advanced",type:"radio",name:"planChoice",value:"advanced",checked:"advanced"===a,onChange:t}),(0,_.jsx)(j,{className:w,plan:"Advanced",price:"Monthly"===n?12:120,period:"Monthly"===n?"mo":"yr",comment:"Monthly"===n?"":"2 months free.",children:(0,_.jsx)(M,{})})]}),(0,_.jsxs)("label",{htmlFor:"pro",children:[(0,_.jsx)("input",{className:C,id:"pro",type:"radio",name:"planChoice",value:"pro",checked:"pro"===a,onChange:t}),(0,_.jsx)(j,{className:w,plan:"Pro",price:"Monthly"===n?15:150,period:"Monthly"===n?"mo":"yr",comment:"Monthly"===n?"":"2 months free.",children:(0,_.jsx)(N,{})})]})]})},P="ToggleStep2_toggleContainer__il5yP",S="ToggleStep2_toggleInput__s6Kkz",F="ToggleStep2_toggleLabel__kO80l",O="ToggleStep2_toggleButton__zfwqm",T="ToggleStep2_inactiveText__z59md",R="ToggleStep2_activeText__hEPeo",B=function(e){var n=e.plan,t=e.handleToggleChange;return(0,_.jsxs)("div",{className:P,children:[(0,_.jsx)("span",{className:"Monthly"===n?R:T,children:"Monthly"}),(0,_.jsx)("input",{type:"checkbox",id:"planToggle",className:S,checked:"Yearly"===n,onChange:t}),(0,_.jsx)("label",{htmlFor:"planToggle",className:F,children:(0,_.jsx)("span",{className:O})}),(0,_.jsx)("span",{className:"Yearly"===n?R:T,children:"Yearly"})]})};function A(){var e=(0,a.useContext)(s.v),n=e.planDetails,t=e.setPlanDetails,h=n.plan,d=n.selectedInput,m=p(h,t,n,d),v=m.onNextStep,y=m.onGoBack,f=m.handleToggleChange;return(0,_.jsxs)("div",{className:l.container,children:[(0,_.jsxs)("div",{className:l.contentContainer,children:[(0,_.jsx)(r.Z,{title:"Select your plan"}),(0,_.jsx)(o.Z,{comment:"You have the option of monthly or yearly billing."}),(0,_.jsx)(k,{plan:h,handleChoiceChange:function(e){u(e,h,t)},selectedInput:d}),(0,_.jsx)(B,{plan:h,handleToggleChange:f})]}),(0,_.jsxs)("div",{className:l.buttons,children:[(0,_.jsx)(i.Z,{onClick:y}),(0,_.jsx)(c.Z,{onClick:v,type:"button"})]})]})}},4942:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(9142);function l(e,n,t){return(n=(0,a.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(4942);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=81.2cbdb22b.chunk.js.map