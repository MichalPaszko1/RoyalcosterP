(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9866],{51599:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(4942),r=n(42982),o=n(67294),s=n(79352),c=n(96486),l=n.n(c),i=n(36968),u=n(53352),d=n(85893);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={addressName:"",firstName:"",lastNaem:"",company:"",street:"",additionalInformation:"",land:"",zipCode:"",houseNumber:"",addition:"",phoneNumeber:"",town:""};function N(){var e=(0,o.useState)([]),t=e[0],n=e[1],a=(0,o.useState)(!1),c=a[0],p=a[1],N=(0,o.useState)(),h=N[0],v=N[1],x=(0,u.Ds)().enqueueSnackbar;(0,o.useEffect)((function(){var e=new FormData;e.append("uid",JSON.parse(localStorage.login_user).uid),fetch("https://costercatalog.com/api/index.php?request=getCustomerData",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){if(e.address){var t=JSON.parse(e.address);n((0,r.Z)(t))}else n([m({},f)])})),v(JSON.parse(localStorage.login_user).uid)}),[]);return(0,d.jsxs)("div",{className:"address_panel",children:[(0,d.jsxs)("div",{className:"title-panel d-flex justify-content-between",children:[(0,d.jsx)("h3",{className:"m-0",children:"My Address"}),(0,d.jsx)("button",{className:"btn btn-creat",onClick:function(){return n([].concat((0,r.Z)(t),[m({},f)]))},children:"CREATE NEW ADDRESS"})]}),t.length>0&&t.map((function(e,a){return(0,d.jsxs)("div",{className:"address-panel row",children:[a>0&&(0,d.jsx)("div",{className:"btn-panel text-end mb-3",children:(0,d.jsx)("button",{className:"btn btn-remove p-0",onClick:function(){return function(e){l().remove(t,(function(t,n){return n==e})),n((0,r.Z)(t))}(a)},children:(0,d.jsx)(s.tgW,{})})}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("input",{type:"text",value:e.addressName,className:"form-control",placeholder:"ADDRESS NAME *",onChange:function(e){t[a].addressName=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.firstName,className:"form-control",placeholder:"FIRST NAME *",onChange:function(e){t[a].firstName=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.lastName,className:"form-control",placeholder:"LAST NAME *",onChange:function(e){t[a].lastName=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.company,className:"form-control",placeholder:"COMPANY(OPTIONAL)",onChange:function(e){t[a].company=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.street,className:"form-control",placeholder:"STREET *",onChange:function(e){t[a].street=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.additionalInformation,className:"form-control",placeholder:"ADDITIONAL INFORMATION(OPTIONAL)",onChange:function(e){t[a].additionalInformation=e.target.value,n((0,r.Z)(t))}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("input",{type:"text",value:e.land,className:"form-control",placeholder:"LAND *",onChange:function(e){t[a].land=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.zipCode,className:"form-control",placeholder:"ZIP CODE *",onChange:function(e){t[a].zipCode=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.houseNumber,className:"form-control",placeholder:"HOUSE NUMBER *",onChange:function(e){t[a].houseNumber=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.addition,className:"form-control",placeholder:"ADDITION(OPTIONAL)",onChange:function(e){t[a].addition=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.town,className:"form-control",placeholder:"TOWN *",onChange:function(e){t[a].town=e.target.value,n((0,r.Z)(t))}}),(0,d.jsx)("input",{type:"text",value:e.phoneNumeber,className:"form-control",placeholder:"TELEPHONE NUMBER *",onChange:function(e){t[a].phoneNumeber=e.target.value,n((0,r.Z)(t))}})]})]},a)})),(0,d.jsxs)("button",{className:"btn blue-btn btn-apply d-flex justify-content-between align-items-center",onClick:function(e){e.preventDefault(),p(!0);var n=new FormData;n.append("uid",h),n.append("address",JSON.stringify(t)),fetch("https://costercatalog.com/api/index.php?request=setCustomerData",{method:"post",body:n}).then((function(e){return e.json()})).then((function(e){p(!1);"ok"==e.status&&x("success",{variant:"success"})}))},disabled:c,children:["APPLY",c?(0,d.jsx)(i.Z,{as:"span",animation:"border",role:"status","aria-hidden":"true"}):(0,d.jsx)(s.nzV,{})]})]})}},99155:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myaccount/address",function(){return n(51599)}])},36968:function(e,t,n){"use strict";var a=n(87462),r=n(63366),o=n(44036),s=n.n(o),c=n(67294),l=n(76792),i=["bsPrefix","variant","animation","size","children","as","className"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,u=e.animation,d=e.size,p=e.children,m=e.as,f=void 0===m?"div":m,N=e.className,h=(0,r.Z)(e,i),v=(n=(0,l.vE)(n,"spinner"))+"-"+u;return c.createElement(f,(0,a.Z)({ref:t},h,{className:s()(N,v,d&&v+"-"+d,o&&"text-"+o)}),p)}));u.displayName="Spinner",t.Z=u}},function(e){e.O(0,[3662,9774,2888,179],(function(){return t=99155,e(e.s=t);var t}));var t=e.O();_N_E=t}]);