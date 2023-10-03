"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[651],{9487:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var c="ButtonGoBack_btnGoBack__MHxDC",o=t(184),r=function(e){var n=e.onClick;return(0,o.jsx)("button",{className:c,type:"button",onClick:n,children:"Go Back"})}},8558:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var c="ButtonNextStep_btnNextStep__RBiJR",o=t(184),r=function(e){var n=e.onClick,t=e.type;return(0,o.jsx)("button",{className:c,type:t,onClick:n,children:"Next Step"})}},2996:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var c="CommentSteps_comment__LoGUu",o=t(184),r=function(e){var n=e.comment;return(0,o.jsx)("p",{className:c,children:n})}},3716:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var c="TitleSteps_title__HDrAP",o=t(184),r=function(e){var n=e.title;return(0,o.jsx)("h2",{className:c,children:n})}},1651:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var c=t(2791),o={container:"Step3_container__bTTpa",contentContainer:"Step3_contentContainer__RZOP3",buttons:"Step3_buttons__f+pXl"},r=t(3716),l=t(2996),a=t(8558),s=t(9487),i=t(5639),u="FormStep3_visuallyHidden__qVpal",p="FormStep3_inputPlaceholder__GFvms",h="FormStep3_checkboxPlaceholder__1IxXO",m="FormStep3_form__zzMv4",d="InputCheckboxPlaceholder_container__ApHOL",x="InputCheckboxPlaceholder_checkbox__zhUow",f="InputCheckboxPlaceholder_description__i5sLg",_="InputCheckboxPlaceholder_plan__o7YsJ",b="InputCheckboxPlaceholder_comment__6-abA",v="InputCheckboxPlaceholder_price__z8NsD",y=t(184),j=function(e){var n=e.classNameBox,t=e.className,c=e.title,o=e.price,r=e.period,l=e.comment;return(0,y.jsxs)("div",{className:"".concat(d," ").concat(t),children:[(0,y.jsx)("div",{className:"".concat(x," ").concat(n)}),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)("p",{className:_,children:c}),(0,y.jsx)("p",{className:b,children:l})]}),(0,y.jsx)("p",{className:v,children:"$".concat(o,"/").concat(r)})]})},C=function(e){var n=e.plan,t=e.handleChoiceChange,c=e.selectedCheckbox;return(0,y.jsxs)("form",{className:m,children:[(0,y.jsxs)("label",{htmlFor:"online",children:[(0,y.jsx)("input",{id:"online",className:u,type:"checkbox",name:"serviceChoice",value:"online",onChange:t,checked:c.includes("online")}),(0,y.jsx)(j,{className:p,classNameBox:h,title:"Online service",comment:"Access to multiplayer games",price:"Monthly"===n?1:10,period:"Monthly"===n?"mo":"yr"})]}),(0,y.jsxs)("label",{htmlFor:"larger",children:[(0,y.jsx)("input",{id:"larger",className:u,type:"checkbox",name:"serviceChoice",value:"larger",onChange:t,checked:c.includes("larger")}),(0,y.jsx)(j,{className:p,classNameBox:h,title:"Larger storage",comment:"Extra 1TB of cloud save",price:"Monthly"===n?2:20,period:"Monthly"===n?"mo":"yr"})]}),(0,y.jsxs)("label",{htmlFor:"custom",children:[(0,y.jsx)("input",{id:"custom",className:u,type:"checkbox",name:"serviceChoice",value:"custom",onChange:t,checked:c.includes("custom")}),(0,y.jsx)(j,{className:p,classNameBox:h,title:"Customizable profile",comment:"Custom theme on your profile",price:"Monthly"===n?2:20,period:"Monthly"===n?"mo":"yr"})]})]})},k=t(7689),N=function(e){var n=(0,k.s0)();return{onNextStep:function(){n("/step4")},onGoBack:function(){n("Monthly"===e?"/step2-monthly":"/step2-yearly")}}},g=t(3433),O=t(1413),P=function(e,n,t){var c=e.target,o=c.value,r=c.checked,l={online:{name:"Online service",price:"Monthly"===n?1:10,period:"Monthly"===n?"mo":"yr"},larger:{name:"Larger storage",price:"Monthly"===n?2:20,period:"Monthly"===n?"mo":"yr"},custom:{name:"Customizable profile",price:"Monthly"===n?2:20,period:"Monthly"===n?"mo":"yr"}};t((function(e){var n=(0,O.Z)({},e.services),t=(0,g.Z)(e.selectedCheckbox);if(r)n[o]=l[o],t.push(o);else{delete n[o];var c=t.indexOf(o);c>-1&&t.splice(c,1)}return(0,O.Z)((0,O.Z)({},e),{},{services:n,selectedCheckbox:t})}))};function Z(){var e=(0,c.useContext)(i.v),n=e.planDetails,t=e.setPlanDetails,u=n.plan,p=N(u),h=p.onNextStep,m=p.onGoBack;return(0,y.jsxs)("div",{className:o.container,children:[(0,y.jsxs)("div",{className:o.contentContainer,children:[(0,y.jsx)(r.Z,{title:"Pick add-ons"}),(0,y.jsx)(l.Z,{comment:"Add-ons help enhance your gaming experience."}),(0,y.jsx)(C,{plan:u,handleChoiceChange:function(e){P(e,u,t)},selectedCheckbox:n.selectedCheckbox})]}),(0,y.jsxs)("div",{className:o.buttons,children:[(0,y.jsx)(s.Z,{onClick:m}),(0,y.jsx)(a.Z,{type:"button",onClick:h})]})]})}},4942:function(e,n,t){t.d(n,{Z:function(){return o}});var c=t(9142);function o(e,n,t){return(n=(0,c.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return r}});var c=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=651.c02f5031.chunk.js.map