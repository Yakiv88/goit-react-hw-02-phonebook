(this["webpackJsonpreact-35-module-1"]=this["webpackJsonpreact-35-module-1"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__4KWyQ",input:"Filter_input__2veel"}},19:function(t,e,n){},2:function(t,e,n){t.exports={formWrapper:"ContactForm_formWrapper__2naJg",form:"ContactForm_form__3nOO5",label:"ContactForm_label__1FATm",input:"ContactForm_input__YQFPh",button:"ContactForm_button__1uoxR"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),i=(n(19),n(14)),o=n(4),l=n(5),u=n(8),m=n(7),b=n(9),d=n.n(b),p=n(13),j=n(6),h=n(2),f=n.n(h),O=n(23),_=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameId=Object(O.a)(),t.numberId=Object(O.a)(),t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c=Object(j.a)(t).resetForm,s={id:Object(O.a)(),name:a,number:r};t.props.formSubmit(s),c()},t.inputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.inputChange,n=this.nameId,a=this.numberId,r=this.state,c=r.name,s=r.number;return Object(_.jsx)("div",{className:f.a.formWrapper,children:Object(_.jsxs)("form",{className:f.a.form,onSubmit:t,children:[Object(_.jsxs)("label",{className:f.a.label,htmlFor:n,children:["Name",Object(_.jsx)("input",{id:n,className:f.a.input,value:c,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:e})]}),Object(_.jsxs)("label",{className:f.a.label,htmlFor:a,children:["Number",Object(_.jsx)("input",{id:a,className:f.a.input,type:"tel",value:s,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:e})]}),Object(_.jsx)("button",{className:f.a.button,children:"Add contact"})]})})}}]),n}(a.Component),x=C,v=n(3),N=n.n(v);var F=function(t){var e=t.getContacts,n=t.deleteContact;return Object(_.jsx)("div",{className:N.a.listWrapper,children:Object(_.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(_.jsxs)("li",{className:N.a.item,children:[Object(_.jsxs)("p",{className:N.a.text,children:[e,":"]}),Object(_.jsx)("p",{className:N.a.text,children:a}),Object(_.jsx)("button",{className:N.a.button,type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})})},g=n(11),S=n.n(g);var y=function(t){var e=t.filter,n=t.onFilterChange;return Object(_.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:S.a.input,type:"text",name:"name",value:e,onChange:n})]})},A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmit=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("This contact has already been added to the list");t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.handleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.filterChange=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.deleteContact,e=this.formSubmit,n=this.filterChange,a=this.state.filter,r=this.handleContacts();return Object(_.jsxs)("div",{className:d.a.App,children:[Object(_.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(_.jsx)(x,{formSubmit:e}),Object(_.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(_.jsx)(y,{filter:a,onFilterChange:n}),Object(_.jsx)(F,{getContacts:r,deleteContact:t})]})}}]),n}(a.Component),w=A;s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(w,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={item:"ContactList_item__2LzqY",text:"ContactList_text__32F9S",button:"ContactList_button__szR4F"}},9:function(t,e,n){t.exports={App:"App_App__1vvVb",title:"App_title__19rAB"}}},[[21,1,2]]]);
//# sourceMappingURL=main.a4456159.chunk.js.map