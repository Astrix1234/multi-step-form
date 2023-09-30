"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[82],{8558:function(e,n,a){a.d(n,{Z:function(){return t}});a(2791);var r="ButtonNextStep_btnNextStep__RBiJR",l=a(184),t=function(e){var n=e.onClick,a=e.type;return(0,l.jsx)("button",{className:r,type:a,onClick:n,children:"Next Step"})}},2996:function(e,n,a){a.d(n,{Z:function(){return t}});a(2791);var r="CommentSteps_comment__LoGUu",l=a(184),t=function(e){var n=e.comment;return(0,l.jsx)("p",{className:r,children:n})}},3716:function(e,n,a){a.d(n,{Z:function(){return t}});a(2791);var r="TitleSteps_title__HDrAP",l=a(184),t=function(e){var n=e.title;return(0,l.jsx)("h2",{className:r,children:n})}},5082:function(e,n,a){a.r(n),a.d(n,{default:function(){return N}});a(2791);var r={container:"Step1_container__48AvB"},l=a(3716),t=a(2996),i="FormStep1_form__DUT5l",o="FormStep1_label__XluXo",s="FormStep1_input__mn9Kh",m="FormStep1_inputPhone__SAbbl",c="FormStep1_formikMessage__DxT4g",u="FormStep1_error__0OJi0",h=a(6727),d=h.Ry({name:h.Z_().min(2,"Minimum 2 characters").max(25,"Maximum 25 characters").required("This field is required"),email:h.Z_().email("Invalid email format").required("This field is required"),phone:h.Z_().matches(/^\+\d{1,2} \d{3} \d{3} \d{3}$/,"Is invalid. Expected format: +1 234 567 890").required("This field is required")}),p=a(5705),_=a(7689),f=a(8558),x=a(184),v=function(){var e=(0,_.s0)(),n=(0,p.TA)({initialValues:{name:"",email:"",phone:""},validationSchema:d,onSubmit:function(){e("/step2-monthly")}});return(0,x.jsxs)("form",{className:i,onSubmit:n.handleSubmit,children:[(0,x.jsxs)("label",{htmlFor:"name",className:o,children:["Name",(0,x.jsx)("input",{id:"name",placeholder:"e.g. Stephen King",className:"".concat(s," ").concat(n.touched.name&&n.errors.name?u:""),type:"text",name:"name",onChange:n.handleChange,value:n.values.name,onBlur:n.handleBlur}),n.touched.name&&n.errors.name?(0,x.jsx)("div",{className:c,children:n.errors.name}):null]}),(0,x.jsxs)("label",{htmlFor:"email",className:o,children:["Email Address",(0,x.jsx)("input",{id:"email",placeholder:"e.g. stephenking@lorem.com",className:"".concat(s," ").concat(n.touched.email&&n.errors.email?u:""),type:"email",name:"email",onChange:n.handleChange,value:n.values.email,onBlur:n.handleBlur}),n.touched.email&&n.errors.email?(0,x.jsx)("div",{className:c,children:n.errors.email}):null]}),(0,x.jsxs)("label",{htmlFor:"phone",className:o,children:["Phone Number",(0,x.jsx)("input",{id:"phone",placeholder:"e.g. +1 234 567 890",className:"".concat(s," ").concat(m," ").concat(n.touched.phone&&n.errors.phone?u:""),type:"tel",name:"phone",onChange:n.handleChange,value:n.values.phone,onBlur:n.handleBlur}),n.touched.phone&&n.errors.phone?(0,x.jsx)("div",{className:c,children:n.errors.phone}):null]}),(0,x.jsx)(f.Z,{type:"submit"})]})};function N(){return(0,x.jsxs)("div",{className:r.container,children:[(0,x.jsx)(l.Z,{title:"Personal info"}),(0,x.jsx)(t.Z,{comment:"Please provide your name, email address, and phone number."}),(0,x.jsx)(v,{})]})}}}]);
//# sourceMappingURL=82.33bca76c.chunk.js.map