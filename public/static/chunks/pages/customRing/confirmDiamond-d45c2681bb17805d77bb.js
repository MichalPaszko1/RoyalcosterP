(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2639],{58365:function(e,t,s){"use strict";var a=s(87462),i=s(45987),n=s(67294),c=s(86010),l=(s(45697),s(59693)),r=s(8786),o=n.forwardRef((function(e,t){var s=e.animation,l=void 0===s?"pulse":s,r=e.classes,o=e.className,d=e.component,m=void 0===d?"span":d,h=e.height,p=e.variant,x=void 0===p?"text":p,u=e.width,f=(0,i.Z)(e,["animation","classes","className","component","height","variant","width"]),j=Boolean(f.children);return n.createElement(m,(0,a.Z)({ref:t,className:(0,c.Z)(r.root,r[x],o,j&&[r.withChildren,!u&&r.fitContent,!h&&r.heightAuto],!1!==l&&r[l])},f,{style:(0,a.Z)({width:u,height:h},f.style)}))}));t.Z=(0,r.Z)((function(e){return{root:{display:"block",backgroundColor:(0,l.Fq)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(o)},20265:function(e,t,s){"use strict";s.r(t);var a=s(42982),i=(s(4942),s(67294)),n=s(41664),c=s(9008),l=s(33274),r=s(11911),o=s(1149),d=s(74455),m=s(56497),h=s(62051),p=(s(51801),s(11163)),x=s(57333),u=s(68341),f=s.n(u),j=s(40600),g=s(96303),v=s(46458),N=(s(52535),s(79352)),b=s(53854),w=s(58365),y=s(53352),S=s(85893);h.ZP.use([h.pt,h.W_]);var k={setWishList:j.Q5,setCartData:g.Ng};t.default=(0,v.$j)((function(e){return{wishList:e.wishList.value,cartData:e.cartData.value}}),k)((function(e){var t=(0,i.useState)(0),h=t[0],u=t[1],j=(0,i.useState)(),g=j[0],v=j[1],k=(0,i.useState)(1),C=k[0],Z=k[1],_=(0,i.useState)(),L=_[0],R=_[1],D=(0,i.useState)(),E=D[0],T=D[1],O=(0,p.useRouter)(),I=(0,i.useState)(),A=I[0],H=I[1],W=(0,i.useState)(),X=W[0],P=W[1],G=(0,i.useState)(),J=(G[0],G[1]),z=(0,i.useState)([]),F=z[0],M=z[1],q=((0,y.Ds)().enqueueSnackbar,(0,i.useState)(["H-Color","SI1 Clarity","Excellent Cut"])),B=q[0],K=q[1];return(0,i.useEffect)((function(){void 0!==typeof document&&(s(43734),localStorage.wishList&&e.setWishList(JSON.parse(localStorage.wishList))),localStorage.access_token&&H(localStorage.access_token);try{var t=$.parseJSON(localStorage.choosenSettingData);$("#ringImage").attr("src",t.image.src)}catch(a){}}),[]),(0,i.useEffect)((function(){e.wishList&&localStorage.setItem("wishList",JSON.stringify(e.wishList))}),[e.wishList]),(0,i.useEffect)((function(){var e=localStorage.choosenDiamond,t=new FormData;t.append("shopifyid",e),fetch("https://royalcoster.com:81/royalcoster/getProduct.php",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){P(e);var t=e.title.split(" "),s=[];s.push(t[2]+" Color"),s.push(t[3]+" Clarity"),s.push(t[4].charAt(0).toUpperCase()+t[4].slice(1)+" Cut"),K(s),T(e.image.src.replace(".jpg","_500x.jpg")),R(e.variants[0].price),J({variantTitle:e.variants[0].title,variantId:e.variants[0].id}),e.tags.split(",").map((function(e){e>=45&&e<=65&&M([].concat((0,a.Z)(F),[e]))})),localStorage.wishList&&JSON.parse(localStorage.wishList).find((function(t){return t.shopifyid==e.id}))&&v("favor")}))}),[O.query]),(0,S.jsxs)("div",{className:"confirmDiamond_page",id:"productPage",children:[(0,S.jsx)(c.default,{children:(0,S.jsx)("title",{children:"ConfirmSetting | Royal Coster"})}),(0,S.jsx)(l.default,{}),(0,S.jsxs)("div",{className:"state-section",children:[(0,S.jsxs)("div",{className:"link-panel r-container py-3 d-sm-flex d-none align-items-center",children:[(0,S.jsx)("button",{className:"btn back-arrow d-flex me-3 blue-text px-0",onClick:function(){return O.back()},children:(0,S.jsx)(b.Tsu,{})}),(0,S.jsx)(n.default,{passHref:!0,href:"/",children:(0,S.jsx)("a",{className:"mx-2",children:"HOME"})}),"/",(0,S.jsx)(n.default,{passHref:!0,href:"/customRing/chooseSetting",children:(0,S.jsx)("a",{className:"mx-2",children:"CHOOSE SETTING"})}),"/",(0,S.jsx)("span",{className:"title ms-2 text-uppercase blue-text",children:"CONFIRM A SETTING"})]}),(0,S.jsxs)("div",{className:"link-panel r-container py-3 mb-md-5 mb-0 d-sm-none d-flex align-items-center",children:[(0,S.jsx)("button",{className:"btn back-arrow d-flex me-3 blue-text px-0",onClick:function(){return O.back()},children:(0,S.jsx)(b.Tsu,{})}),"...",(0,S.jsx)(n.default,{passHref:!0,href:"#",children:(0,S.jsx)("a",{className:"mx-2",children:"MAKE A RING"})}),"/",(0,S.jsx)("span",{className:"title ms-2 text-uppercase blue-text",children:"confirm A SETTING"})]}),(0,S.jsx)("div",{className:"setting-state-panel",children:(0,S.jsxs)("div",{className:"r-container  py-md-3  row",children:[(0,S.jsxs)("div",{className:"pe-5 py-md-0 py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center active",children:[(0,S.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,S.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:"1"}),(0,S.jsxs)("div",{className:"title text-uppercase",children:[(0,S.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,S.jsx)("h3",{className:"m-0",children:"Diamond"})]})]}),(0,S.jsx)("img",{id:"ringImage",className:"d-md-block d-none",src:"/img/customRing/chooseSetting/choose.png",width:"52",height:"52",alt:"state-image"})]}),(0,S.jsxs)("div",{className:"px-5 py-md-0 py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center active",children:[(0,S.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,S.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:"2"}),(0,S.jsxs)("div",{className:"title text-uppercase",children:[(0,S.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,S.jsx)("h3",{className:"m-0",children:"Diamond"})]})]}),(0,S.jsx)("img",{className:"d-md-block d-none",src:"/img/customRing/chooseSetting/diamond.png",width:"52",height:"52",alt:"state-image"})]}),(0,S.jsxs)("div",{className:"ps-5 py-md-0 py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center",children:[(0,S.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,S.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:"3"}),(0,S.jsxs)("div",{className:"title text-uppercase",children:[(0,S.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,S.jsx)("h3",{className:"m-0",children:"Ring"})]})]}),(0,S.jsx)("img",{className:"d-md-block d-none",src:"/img/customRing/chooseSetting/complete.png",width:"52",height:"52",alt:"state-image"})]})]})})]}),X?(0,S.jsxs)("div",{className:"confirm-section py-5 mb-5 row r-container",children:[(0,S.jsx)("div",{className:"show-product col-md-6 col-12 p-0 pt-5 pe-5",children:(0,S.jsxs)("div",{className:"row m-0",children:[(0,S.jsx)("div",{className:"tile-product col-2 p-0 pe-3",children:X.images&&X.images.length>0&&X.images.map((function(e,t){return(0,S.jsx)("button",{className:"btn btn-show-product mb-3 p-0 round-form",onClick:function(){return T(e.src.replace(".jpg","_500x.jpg"))},children:(0,S.jsx)("img",{src:e.src.replace(".jpg","_50x.jpg"),alt:"product-image"})},t)}))}),(0,S.jsxs)("div",{className:"main-product col-10 p-0",children:[(0,S.jsx)("div",{className:"image-panel round mb-4",children:(0,S.jsx)("div",{className:"image-box",children:E&&(0,S.jsx)("img",{src:E,alt:"main-image"})})}),(0,S.jsxs)("div",{className:"btn-panel d-flex align-items-center justify-content-between",children:[(0,S.jsxs)("button",{className:"btn px-4 py-2 blue-text btn-share text-uppercase round-form d-flex align-items-center",children:[(0,S.jsx)(N.wdf,{className:"me-2"}),"share"]}),(0,S.jsx)("button",{className:"btn px-4 py-2 blue-text btn-share text-uppercase round-form d-flex align-items-center","data-bs-toggle":"modal","data-bs-target":"#dropHint",children:"drop a hint"})]})]})]})}),(0,S.jsxs)("div",{className:"show-setting col-md-6 col-12 p-0 pt-5 ps-5",children:[(0,S.jsxs)("div",{className:"title-panel",children:[(0,S.jsx)("h3",{className:"type pb-4 m-0",children:f()(X.vendor)}),(0,S.jsx)("h3",{className:"title text-capitalize pb-4 m-0",children:f()(X.title)}),(0,S.jsxs)("p",{className:"product-id pb-4 m-0",children:["SKU ",X.variants[0].sku]}),(0,S.jsx)("div",{className:"product-categories pb-4",children:B.map((function(e,t){return 0==t?(0,S.jsxs)("span",{children:[e," "]},t):(0,S.jsxs)("span",{children:[" | ",e]},t)}))})]}),(0,S.jsxs)("div",{className:"confirm-panel",children:[F.length>0&&(0,S.jsx)("div",{className:"selector-panel row m-0 py-4",children:(0,S.jsxs)("div",{className:"select-karat col-lg-6 col-md-12 col-sm-6 col-12 p-0 pe-lg-3 pe-md-0 pe-sm-3 pe-0",children:[(0,S.jsxs)("div",{className:"d-flex justify-content-between pb-4 align-items-center",children:[(0,S.jsxs)("h3",{htmlFor:"selectKarat",className:"d-flex align-items-center m-0 text-uppercase",children:["Ring Size",(0,S.jsx)(N.j6O,{className:"ms-2"})]}),(0,S.jsx)("button",{className:"btn text-uppercase btn-find-size py-1",onClick:function(){return u(0)},children:"find my size"})]}),(0,S.jsx)("div",{className:"select-box",children:(0,S.jsx)("select",{className:"form-select blue-text ps-4 round-form py-3","aria-label":"Default select example",value:h,onChange:function(e){return u(e.target.value)},children:F>0&&F.map((function(e,t){return(0,S.jsx)("option",{value:e,children:e},t)}))})})]})}),(0,S.jsxs)("div",{className:"cost-panel d-flex justify-content-between align-items-center py-4",children:[(0,S.jsxs)("div",{className:"price-panel",children:[(0,S.jsx)("h4",{className:"text-uppercase",children:"total"}),(0,S.jsx)("h3",{className:"blue-text",children:(0,S.jsx)(x.Z,{value:L*C,displayType:"text",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,prefix:"\u20ac "})})]}),(0,S.jsxs)("div",{className:"amount-panel d-flex align-items-center",children:[(0,S.jsx)("button",{className:"btn btn-decrease round-form blue-text d-flex align-items-center justify-content-center p-4",onClick:function(){return C>1&&Z(C-1)},children:(0,S.jsx)(N.$N3,{})}),(0,S.jsx)("span",{className:"mx-4",children:C}),(0,S.jsx)("button",{className:"btn btn-increase round-form blue-text d-flex align-items-center justify-content-center p-4",onClick:function(){return C<X.available&&Z(C+1)},children:(0,S.jsx)(N.uGf,{})})]})]}),(0,S.jsxs)("div",{className:"confirm-box d-flex flex-wrap justify-content-between align-items-start m-0 py-4",children:[A&&(0,S.jsx)("button",{className:"btn favor-btn round-form d-flex align-items-center justify-content-center p-4 me-3 "+g,onClick:function(){return function(){if(g){v();var t=e.wishList,s=t.find((function(e){return e.shopifyid==X.id}));s&&(t.splice(t.indexOf(s),1),e.setWishList(t))}else{v("favor");var i={shopifyid:X.id,title:X.title,price:X.variants[0].price,variantID:X.variants[0].id,image:X.image.src.replace(".jpg","_100x.jpg"),amount:C,product_type:"Rings",descripion:X.body_html};localStorage.wishList?e.setWishList([].concat((0,a.Z)(e.wishList),[i])):(localStorage.setItem("wishList",JSON.stringify([i])),e.setWishList([i]))}}()},children:(0,S.jsx)(N.iB2,{})}),(0,S.jsxs)("div",{className:"setting-btn-panel d-flex flex-column flex-1 text-end",children:[(0,S.jsx)("button",{className:"btn blue-btn text-uppercase round-form px-5 py-3 mb-4",onClick:function(){O.push("/customRing/confirmRing")},children:"select this diamond"}),(0,S.jsx)("p",{className:"m-0",children:"Price includes VAT"})]})]}),(0,S.jsxs)("div",{className:"help-panel d-flex justify-content-between py-4",children:[(0,S.jsx)("p",{className:"text-uppercase m-0",children:"Need help?"}),(0,S.jsxs)("div",{className:"link-panel d-flex",children:[(0,S.jsx)(n.default,{passHref:!0,href:"/contact",children:(0,S.jsxs)("a",{className:"text-uppercase me-4 d-flex align-items-center blue-text",children:[(0,S.jsx)(N.cNh,{className:"me-2"}),"contact"]})}),(0,S.jsx)(n.default,{passHref:!0,href:"#",children:(0,S.jsxs)("a",{className:"text-uppercase d-flex align-items-center blue-text",children:[(0,S.jsx)(N.CXA,{className:"me-2"}),"chat"]})})]})]}),(0,S.jsxs)("div",{className:"schedule-panel d-flex align-items-center justify-content-between flex-wrap py-4",children:[(0,S.jsx)("p",{className:"m-0 text-uppercase",children:"Not ready to purchase online?"}),(0,S.jsx)("button",{className:"btn btn-schedule text-uppercase blue-text my-3 px-5 py-2","data-bs-toggle":"modal","data-bs-target":"#appointment",children:"Schedule an appointment"})]})]})]})]}):(0,S.jsxs)("div",{className:"row r-container mb-5",children:[(0,S.jsx)("div",{className:"col-md-6 col-12 p-0 pt-5 pe-5",children:(0,S.jsxs)("div",{className:"row m-0",children:[(0,S.jsxs)("div",{className:"tile-product d-sm-block d-none col-2 p-0 pe-3",children:[(0,S.jsx)(w.Z,{variant:"rect",width:"100%",height:50,animation:"wave"}),(0,S.jsx)(w.Z,{variant:"rect",width:"100%",className:"mt-4",height:50,animation:"wave"}),(0,S.jsx)(w.Z,{variant:"rect",width:"100%",className:"mt-4",height:50,animation:"wave"}),(0,S.jsx)(w.Z,{variant:"rect",width:"100%",className:"mt-4",height:50,animation:"wave"})]}),(0,S.jsx)("div",{className:"main-product col-sm-10 col-12 p-0",children:(0,S.jsx)(w.Z,{variant:"rect",width:"100%",height:300,animation:"wave"})}),(0,S.jsxs)("div",{className:"tile-product d-sm-none d-flex col-12 p-0 pt-4",children:[(0,S.jsx)(w.Z,{variant:"rect",width:50,height:50,animation:"wave"}),(0,S.jsx)(w.Z,{variant:"rect",width:50,className:"ms-4",height:50,animation:"wave"}),(0,S.jsx)(w.Z,{variant:"rect",width:50,className:"ms-4",height:50,animation:"wave"})]})]})}),(0,S.jsxs)("div",{className:"col-md-6 col-12 p-0 pt-5 ps-5",children:[(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:45,className:"mb-4"}),(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:45,className:"mb-4"}),(0,S.jsx)(w.Z,{variant:"text",height:35,width:"100%"}),(0,S.jsx)(w.Z,{variant:"text",height:35,width:"100%"}),(0,S.jsx)(w.Z,{variant:"text",height:35,width:"100%"}),(0,S.jsx)(w.Z,{variant:"text",height:35,width:"100%"})]})]}),X?(0,S.jsx)(d.Z,{informations:X.specifications,productID:X.variants[0].sku,productDescription:X.body_html,productType:X.product_type}):(0,S.jsxs)("div",{className:"r-container pt-5",children:[(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:40}),(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:40}),(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:40}),(0,S.jsx)(w.Z,{variant:"text",width:"100%",height:40})]}),(0,S.jsx)(m.Z,{}),(0,S.jsx)(o.default,{}),(0,S.jsx)(r.default,{})]})}))},61070:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customRing/confirmDiamond",function(){return s(20265)}])}},function(e){e.O(0,[6556,3808,8786,3353,9774,2888,179],(function(){return t=61070,e(e.s=t);var t}));var t=e.O();_N_E=t}]);