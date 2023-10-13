"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[667],{9487:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var r="ButtonGoBack_btnGoBack__MHxDC",o=t(184),l=function(e){var n=e.onClick;return(0,o.jsx)("button",{className:r,type:"button",onClick:n,children:"Go Back"})}},8558:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var r="ButtonNextStep_btnNextStep__RBiJR",o=t(184),l=function(e){var n=e.onClick,t=e.type;return(0,o.jsx)("button",{className:r,type:t,onClick:n,children:"Next Step"})}},2996:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var r="CommentSteps_comment__LoGUu",o=t(184),l=function(e){var n=e.comment;return(0,o.jsx)("p",{className:r,children:n})}},3716:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var r="TitleSteps_title__HDrAP",o=t(184),l=function(e){var n=e.title;return(0,o.jsx)("h2",{className:r,children:n})}},7667:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(2791),o=t(7689),l={container:"Step2_container__vfLiV",contentContainer:"Step2_contentContainer__TeD59",buttons:"Step2_buttons__5T46W"},a=t(3716),c=t(2996),i=t(8558),s=t(9487),h=t(5639),m=t(1413),y=t(5310),u=function(e,n,t,r){var l=(0,o.s0)();return{handleToggleChange:function(){var o="Monthly"===e?"Yearly":"Monthly",a=Object.keys(t.services).reduce((function(e,n){return e[n]=(0,m.Z)((0,m.Z)({},y.A[n]),{},{price:"Monthly"===o?y.A[n].monthlyPrice:y.A[n].yearlyPrice,period:"Monthly"===o?y.A[n].monthlyPeriod:y.A[n].yearlyPeriod}),e}),{}),c=y.X[r.toUpperCase()],i="Monthly"===o?c.monthlyPrice:c.yearlyPrice,s="Monthly"===o?c.monthlyPeriod:c.yearlyPeriod,h=c.name;n((function(e){return(0,m.Z)((0,m.Z)({},e),{},{plan:o,price:i,period:s,planName:h,services:a})})),l("Monthly"===o?"/step2-monthly":"/step2-yearly")},onNextStep:function(){r?l("Monthly"===e?"/step3-monthly":"/step3-yearly"):alert("Please select a plan.")},onGoBack:function(){l("/")}}},d=function(e,n,t){var r=e.target.value,o=y.X[r.toUpperCase()],l="Monthly"===n?o.monthlyPrice:o.yearlyPrice,a="Monthly"===n?o.monthlyPeriod:o.yearlyPeriod,c=o.name;t((function(e){return(0,m.Z)((0,m.Z)({},e),{},{price:l,period:a,planName:c,selectedInput:r})}))},p=t(9439),f="InputRadioPlaceholder_container__C98yg",v="InputRadioPlaceholder_icon__YSulB",g="InputRadioPlaceholder_textContainer__+YesL",_="InputRadioPlaceholder_plan__D97rx",x="InputRadioPlaceholder_price__14zia",P="InputRadioPlaceholder_comment__1aFhR",j=t(184),C=function(e){var n=e.className,t=e.children,r=e.plan,o=e.price,l=e.period,a=e.comment;return(0,j.jsxs)("div",{className:"".concat(f," ").concat(n),children:[(0,j.jsx)("div",{className:v,children:t}),(0,j.jsxs)("div",{className:g,children:[(0,j.jsx)("p",{className:_,children:r}),(0,j.jsx)("p",{className:x,children:"$".concat(o,"/").concat(l)}),(0,j.jsx)("p",{className:P,children:a})]})]})},b="FormStep2_visuallyHidden__ed+Jr",Z="FormStep2_inputPlaceholder__U5hgL",w="FormStep2_form__Z3xBg",N=function(e){var n=e.plan,t=e.handleChoiceChange,o=e.selectedInput;return(0,j.jsx)("form",{className:w,children:Object.entries(y.X).map((function(e){var l=(0,p.Z)(e,2),a=l[0],c=l[1];return(0,j.jsxs)("label",{htmlFor:a.toLowerCase(),children:[(0,j.jsx)("input",{className:b,id:a.toLowerCase(),type:"radio",name:"planChoice",value:a.toLowerCase(),checked:o===a.toLowerCase(),onChange:t}),(0,j.jsx)(C,{className:Z,plan:c.name,price:"Monthly"===n?c.monthlyPrice:c.yearlyPrice,period:"Monthly"===n?c.monthlyPeriod:c.yearlyPeriod,comment:"Monthly"===n?c.monthlyComment:c.yearlyComment,children:r.createElement(c.icon)})]},a)}))})},S="ToggleStep2_toggleContainer__il5yP",O="ToggleStep2_toggleInput__s6Kkz",k="ToggleStep2_toggleLabel__kO80l",F="ToggleStep2_toggleButton__zfwqm",M="ToggleStep2_inactiveText__z59md",T="ToggleStep2_activeText__hEPeo",A=function(e){var n=e.plan,t=e.handleToggleChange;return(0,j.jsxs)("div",{className:S,children:[(0,j.jsx)("span",{className:"Monthly"===n?T:M,children:"Monthly"}),(0,j.jsx)("input",{type:"checkbox",id:"planToggle",className:O,checked:"Yearly"===n,onChange:t}),(0,j.jsx)("label",{htmlFor:"planToggle",className:k,children:(0,j.jsx)("span",{className:F})}),(0,j.jsx)("span",{className:"Yearly"===n?T:M,children:"Yearly"})]})};function R(){var e=(0,o.s0)(),n=(0,r.useContext)(h.v),t=n.planDetails,m=n.setPlanDetails,y=t.plan,p=t.selectedInput;(0,r.useEffect)((function(){t.step1Completed||e("/step1")}),[t.step1Completed,e]);var f=u(y,m,t,p),v=f.onNextStep,g=f.onGoBack,_=f.handleToggleChange;return(0,j.jsxs)("div",{className:l.container,children:[(0,j.jsxs)("div",{className:l.contentContainer,children:[(0,j.jsx)(a.Z,{title:"Select your plan"}),(0,j.jsx)(c.Z,{comment:"You have the option of monthly or yearly billing."}),(0,j.jsx)(N,{plan:y,handleChoiceChange:function(e){d(e,y,m)},selectedInput:p}),(0,j.jsx)(A,{plan:y,handleToggleChange:_})]}),(0,j.jsxs)("div",{className:l.buttons,children:[(0,j.jsx)(s.Z,{onClick:g}),(0,j.jsx)(i.Z,{onClick:v,type:"button"})]})]})}},5310:function(e,n,t){t.d(n,{X:function(){return o},A:function(){return l}});t(2791);var r=t(184),o={ARCADE:{name:"Arcade",monthlyPrice:9,yearlyPrice:90,monthlyPeriod:"mo",yearlyPeriod:"yr",monthlyComment:"",yearlyComment:"2 months free.",icon:function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#FFAF7E"}),(0,r.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"})]})})}},ADVANCED:{name:"Advanced",monthlyPrice:12,yearlyPrice:120,monthlyPeriod:"mo",yearlyPeriod:"yr",monthlyComment:"",yearlyComment:"2 months free.",icon:function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#F9818E"}),(0,r.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"})]})})}},PRO:{name:"Pro",monthlyPrice:15,yearlyPrice:150,monthlyPeriod:"mo",yearlyPeriod:"yr",monthlyComment:"",yearlyComment:"2 months free.",icon:function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("circle",{cx:"20",cy:"20",r:"20",fill:"#483EFF"}),(0,r.jsx)("path",{fill:"#FFF",fillRule:"nonzero",d:"M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"})]})})}}},l={online:{name:"Online service",monthlyPrice:1,yearlyPrice:10,monthlyPeriod:"mo",yearlyPeriod:"yr",comment:"Access to multiplayer games"},larger:{name:"Larger storage",monthlyPrice:2,yearlyPrice:20,monthlyPeriod:"mo",yearlyPeriod:"yr",comment:"Extra 1TB of cloud save"},custom:{name:"Customizable profile",monthlyPrice:2,yearlyPrice:20,monthlyPeriod:"mo",yearlyPeriod:"yr",comment:"Custom theme on your profile"}}},4942:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9142);function o(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=667.93804b53.chunk.js.map