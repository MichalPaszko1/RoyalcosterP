(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7700],{81556:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return o}});var s=t(67294),n=t(79352),r=t(41664),l=t(36968),i=t(53352),c=t(85893);function o(e){e.data;var a=(0,s.useState)(),t=a[0],o=a[1],u=(0,s.useState)(),m=u[0],d=u[1],p=(0,s.useState)(),f=p[0],N=p[1],h=(0,s.useState)(),v=h[0],x=h[1],b=(0,s.useState)(),j=b[0],S=b[1],g=(0,s.useState)(!1),_=g[0],w=g[1],E=(0,i.Ds)().enqueueSnackbar;(0,s.useEffect)((function(){var e=JSON.parse(localStorage.login_user);o(e.firstName),d(e.lastName),N(e.email),S(e.uid)}),[]);return(0,c.jsxs)("div",{className:"details_panel",children:[(0,c.jsx)("h3",{className:"title",children:"My Details"}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=JSON.parse(localStorage.login_user),t=document.forms.setUserForm,s=new FormData;t.email.value==f?(w(!0),s.append("firstName",t.firstName.value),s.append("lastName",t.lastName.value),s.append("email",t.email.value),s.append("uid",j),fetch("https://costercatalog.com/api/index.php?request=setCustomerData",{method:"post",body:s}).then((function(e){return e.json()})).then((function(e){w(!1);"ok"==e.status&&(a.firstName=t.firstName.value,a.lastName=t.lastName.value,a.email=t.email.value,localStorage.setItem("login_user",JSON.stringify(a)),E("success",{variant:"success"}))})),x()):x("Email is not matched")},name:"setUserForm",children:[(0,c.jsxs)("div",{className:"edit-panel row mt-4",children:[(0,c.jsxs)("div",{className:"edit-info-panel col-md-6",children:[(0,c.jsx)("h3",{className:"sub-title mb-3 text-capitalize",children:"Change name/email"}),(0,c.jsx)("input",{type:"text",value:t,name:"firstName",className:"form-control",placeholder:"FIRST NAME",onChange:function(e){return o(e.target.value)}}),(0,c.jsx)("input",{type:"text",name:"lastName",value:m,className:"form-control",placeholder:"LAST NAME",onChange:function(e){return d(e.target.value)}}),(0,c.jsx)("input",{type:"text",value:f,className:"form-control",placeholder:"EMAIL ADDRESS",onChange:function(e){return N(e.target.value)}}),(0,c.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"CONFIRM EMAIL ADDRESS"}),v&&(0,c.jsx)("p",{className:"error",children:v}),(0,c.jsx)("p",{})]}),(0,c.jsxs)("div",{className:"edit-password-panel col-md-6",children:[(0,c.jsx)("h3",{className:"sub-title mb-3 text-capitalize",children:"Change password"}),(0,c.jsx)(r.default,{href:"/myaccount/resetPassword",children:(0,c.jsx)("a",{className:"btn blue-btn btn-reset-password text-uppercase",children:"Reset Password"})})]})]}),(0,c.jsx)("div",{className:"confirm-panel",children:(0,c.jsxs)("button",{className:"btn blue-btn btn-apply d-flex justify-content-between align-items-center",disabled:_,children:["APPLY",_?(0,c.jsx)(l.Z,{as:"span",animation:"border",role:"status","aria-hidden":"true"}):(0,c.jsx)(n.nzV,{})]})})]})]})}},58643:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myaccount0/detail",function(){return t(81556)}])},36968:function(e,a,t){"use strict";var s=t(87462),n=t(63366),r=t(44036),l=t.n(r),i=t(67294),c=t(76792),o=["bsPrefix","variant","animation","size","children","as","className"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,u=e.animation,m=e.size,d=e.children,p=e.as,f=void 0===p?"div":p,N=e.className,h=(0,n.Z)(e,o),v=(t=(0,c.vE)(t,"spinner"))+"-"+u;return i.createElement(f,(0,s.Z)({ref:a},h,{className:l()(N,v,m&&v+"-"+m,r&&"text-"+r)}),d)}));u.displayName="Spinner",a.Z=u}},function(e){e.O(0,[9774,2888,179],(function(){return a=58643,e(e.s=a);var a}));var a=e.O();_N_E=a}]);