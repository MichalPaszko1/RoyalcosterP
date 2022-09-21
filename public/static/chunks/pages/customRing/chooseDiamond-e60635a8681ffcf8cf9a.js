(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9090],{58365:function(e,t,a){"use strict";var s=a(87462),n=a(45987),l=a(67294),i=a(86010),c=(a(45697),a(59693)),r=a(8786),o=l.forwardRef((function(e,t){var a=e.animation,c=void 0===a?"pulse":a,r=e.classes,o=e.className,d=e.component,m=void 0===d?"span":d,u=e.height,p=e.variant,x=void 0===p?"text":p,f=e.width,h=(0,n.Z)(e,["animation","classes","className","component","height","variant","width"]),b=Boolean(h.children);return l.createElement(m,(0,s.Z)({ref:t,className:(0,i.Z)(r.root,r[x],o,b&&[r.withChildren,!f&&r.fitContent,!u&&r.heightAuto],!1!==c&&r[c])},h,{style:(0,s.Z)({width:f,height:u},h.style)}))}));t.Z=(0,r.Z)((function(e){return{root:{display:"block",backgroundColor:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(o)},74183:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var s=a(67294),n=a(41120),l=a(33407),i=a(85893),c=(0,n.Z)((function(e){return{root:{},margin:{height:e.spacing(3)},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}}}}));function r(e){var t=e.marks,a=(e.step,c()),n=(0,s.useState)([0,100]),r=n[0],o=n[1];return(0,i.jsx)("div",{className:a.root,children:(0,i.jsx)(l.Z,{defaultValue:20,value:r,onChange:function(e,t){return o(t)},"aria-labelledby":"slider-custom",step:null,"arial-label":100324,valueLabelDisplay:"auto",marks:t,valueLabelFormat:function(e){var a=t.find((function(t){return t.value===e}));return 0==e?t[1].label:a?a.label:void 0}})})}},96979:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var s=a(15671),n=a(43144),l=a(97326),i=a(60136),c=a(82963),r=a(61120),o=a(67294),d=a(9322),m=a.n(d),u=(a(25679),function(){function e(t){(0,s.Z)(this,e),this.minpos=t.minpos||0,this.maxpos=t.maxpos||100,this.minval=Math.log(t.minval||1),this.maxval=Math.log(t.maxval||109e3),this.scale=(this.maxval-this.minval)/(this.maxpos-this.minpos)}return(0,n.Z)(e,[{key:"value",value:function(e){return Math.exp((e-this.minpos)*this.scale+this.minval)}},{key:"position",value:function(e){return this.minpos+(Math.log(e)-this.minval)/this.scale}}]),e}()),p=a(85893);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=(0,r.Z)(e);if(t){var n=(0,r.Z)(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return(0,c.Z)(this,a)}}var f=function(e){(0,i.Z)(a,e);var t=x(a);function a(e){var n;return(0,s.Z)(this,a),(n=t.call(this,e)).state={value:{min:0,max:100}},n.logSlider=new u({minpos:0,maxpos:100,minval:n.props.min,maxval:n.props.max}),n.onChange=n.onChange.bind((0,l.Z)(n)),n.formatLabel=n.formatLabel.bind((0,l.Z)(n)),n}return(0,n.Z)(a,[{key:"calcPos",value:function(e){if(0===e)return 0;var t=this.logSlider.value(e);return t>1e3?100*Math.round(t/100):t>500?10*Math.round(t/10):Math.round(t)}},{key:"onChange",value:function(e){this.setState({value:e})}},{key:"formatLabel",value:function(e){return String(this.props.unit)+String(this.calcPos(e))}},{key:"render",value:function(){return(0,p.jsx)(h,{value:this.state.value,onChange:this.onChange,formatLabel:this.formatLabel})}}]),a}(o.Component),h=function(e){var t=e.value,a=e.onChange,s=e.formatLabel;return(0,p.jsx)(m(),{step:1,formatLabel:s,maxValue:100,minValue:0,value:t,onChange:a})}},36573:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var s=a(42982),n=a(67294),l=a(41664),i=a(9008),c=a(33274),r=a(29824),o=a(77346),d=a(11163),m=a(74183),u=a(96979),p=(a(68341),a(57333)),x=a(58365),f=a(79352),h=a(53854),b=a(85893),v=[{name:"RELEVANCE",value:"RELEVANCE",reverse:!1},{name:"PRICE LOW TO HIGH",value:"PRICE A",reverse:!1},{name:"PRICE HIGH TO LOW",value:"PRICE B",reverse:!0},{name:"RECENTLY ADDED",value:"CREATED_AT",reverse:!0},{name:"RECENTLY UPDATED",value:"UPDATED_AT",reverse:!0},{name:"TITLE A-Z",value:"TITLE A",reverse:!1},{name:"TITLE Z-A",value:"TITLE B",reverse:!0}],j=[{name:"ROUND",image:"shape-1.png"},{name:"PRINCESS",image:"shape-2.png"},{name:"CUSHION",image:"shape-3.png"},{name:"EMERALD",image:"shape-4.png"},{name:"OVAL",image:"shape-5.png"},{name:"RADIANT",image:"shape-6.png"},{name:"ASSCHER",image:"shape-7.png"},{name:"MARQUISE",image:"shape-8.png"},{name:"HEART",image:"shape-9.png"},{name:"PEAR",image:"shape-10.png"}],g="https://royalcoster.com:81/royalcoster/product/index.php",N=[{value:0,label:""},{value:10,label:"M"},{value:20,label:"L"},{value:30,label:"K"},{value:40,label:"J"},{value:50,label:"I"},{value:60,label:"H"},{value:70,label:"G"},{value:80,label:"F"},{value:90,label:"E"},{value:100,label:"D"}],y=[{value:0,label:""},{value:11.111,label:"L1"},{value:22.222,label:"S12"},{value:33.333,label:"SL1"},{value:44.444,label:"VS2"},{value:55.555,label:"VS1"},{value:66.666,label:"VVS2"},{value:77.777,label:"VVS1"},{value:88.888,label:"IF"},{value:99.999,label:"FL"}],w=[{value:0,label:""},{value:25,label:"FAIR"},{value:50,label:"GOOD"},{value:75,label:"VERY GOOD"},{value:100,label:"EXCELLET"}],M="sortKey:RELEVANCE,reverse:false";function E(){var e=(0,n.useState)(),t=e[0],E=(e[1],(0,n.useState)("878")),C=E[0],S=(E[1],(0,n.useState)({name:"RELEVANCE",value:"RELEVANCE",reverse:!1})),k=S[0],L=(S[1],(0,n.useState)("sortKey:RELEVANCE,reverse:false")),Z=(L[0],L[1],(0,n.useState)([])),R=Z[0],D=Z[1],A=(0,n.useState)("white"),O=(A[0],A[1],(0,n.useState)([])),T=O[0],I=O[1],F=(0,n.useState)(),V=F[0],P=F[1],_=(0,n.useState)(!1),H=_[0],G=_[1],U=(0,n.useState)(!1),W=U[0],B=(U[1],(0,d.useRouter)());(0,n.useEffect)((function(){void 0!==typeof document&&a(43734);setTimeout((function(){var e=$.parseJSON(localStorage.choosenSettingData);$("[ringImage]").attr("src",e.image.src)}),1e3)}),[]);var X=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];G(!0);var t=new FormData;"object"===typeof e?t.append("position",'first:9, after:"'.concat(V,'"')):t.append("position","first:9"),t.append("query","status:active AND -tag:drafted AND product_type:Diamonds"),t.append("sort",M),t&&V&&fetch(g,{method:"post",body:t}).then((function(e){return e.json()})).then((function(t){"Yes"==t.hasNextPage?P(t.last):P(!1),D("object"===typeof e?[].concat((0,s.Z)(R),(0,s.Z)(t.data)):t.data),G(!1)}))},K=function(e,t){var a=e.target.closest(".btn-shape");if(a.classList.contains("active")){var n=T.indexOf(j[t].name);0!=n?(T.splice(n,1),I((0,s.Z)(T))):T.splice(-1,1),a.classList.remove("active")}else a.classList.add("active"),I([].concat((0,s.Z)(T),[j[t].name]))},Y=function(e){e.target.closest(".offcanvas-body").querySelectorAll("button").forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),e.target.closest("button").classList.add("active")};return(0,n.useEffect)((function(){var e=new FormData;e.append("position","first:12"),e.append("query","status:active AND product_type:Diamonds"),e.append("sort",M),e&&fetch(g,{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){"Yes"==e.hasNextPage?(P(e.last),e.last):(P(!1),!1),D(e.data),e.data}))}),[t]),(0,b.jsxs)("div",{className:"chooseDiamond_page",children:[(0,b.jsx)(i.default,{children:(0,b.jsx)("title",{children:"chooseSetting | Royal Coster"})}),(0,b.jsx)(c.default,{}),(0,b.jsxs)("div",{className:"state-section",children:[(0,b.jsxs)("div",{className:"link-panel r-container py-3 d-sm-flex d-none align-items-center",children:[(0,b.jsx)("button",{className:"btn back-arrow d-flex me-3 blue-text px-0",onClick:function(){return B.back()},children:(0,b.jsx)(h.Tsu,{})}),(0,b.jsx)(l.default,{passHref:!0,href:"/",children:(0,b.jsx)("a",{className:"mx-2",children:"HOME"})}),"/",(0,b.jsx)(l.default,{passHref:!0,href:"/shop",children:(0,b.jsx)("a",{className:"mx-2",children:"ENGAGEMENT RINGS"})}),"/",(0,b.jsx)(l.default,{passHref:!0,href:"#",children:(0,b.jsx)("a",{className:"mx-2",children:"MAKE A RING"})}),"/",(0,b.jsx)("span",{className:"title ms-2 text-uppercase blue-text",children:"CHOOSE A SETTING"})]}),(0,b.jsxs)("div",{className:"link-panel r-container py-3 mb-md-5 mb-0 d-sm-none d-flex align-items-center",children:[(0,b.jsx)("button",{className:"btn back-arrow d-flex me-3 blue-text px-0",onClick:function(){return B.back()},children:(0,b.jsx)(h.Tsu,{})}),"...",(0,b.jsx)(l.default,{passHref:!0,href:"#",children:(0,b.jsx)("a",{className:"mx-2",children:"MAKE A RING"})}),"/",(0,b.jsx)("span",{className:"title ms-2 text-uppercase blue-text",children:"CHOOSE A SETTING"})]}),(0,b.jsx)("div",{className:"setting-state-panel",children:(0,b.jsxs)("div",{className:"r-container  py-md-3  row",children:[(0,b.jsxs)("div",{className:"pe-5 py-md-0 selected-ring-panel py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center active",children:[(0,b.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,b.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:(0,b.jsx)(f.ffJ,{})}),(0,b.jsxs)("div",{className:"title text-uppercase",children:[(0,b.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,b.jsx)("h3",{className:"m-0",children:"Setting"})]})]}),(0,b.jsx)("div",{className:"hover-panel d-md-none d-block",children:(0,b.jsxs)("div",{className:"r-container  py-4",children:[(0,b.jsxs)("div",{className:"ring-info-panel d-flex justify-content-between align-items-center",children:[(0,b.jsxs)("div",{className:"ring-title-panel d-flex align-items-center",children:[(0,b.jsx)("img",{ringImage:"1",src:"",width:"57",height:"57",alt:"state-image",style:{background:"white"},className:"round-form ring-image me-3"}),(0,b.jsxs)("div",{className:"text-panel",children:[(0,b.jsx)("h3",{className:"m-0",children:"Solitaire"}),(0,b.jsx)("h4",{className:"text-capitalize",children:"Metal : Gold (18k)"})]})]}),(0,b.jsxs)("div",{className:"cost-panel",children:[(0,b.jsx)("h3",{className:"m-0",children:"\u20ac 645.00"}),(0,b.jsx)("h4",{className:"text-end",children:"(ex VAT)"})]})]}),(0,b.jsxs)("div",{className:"btn-panel row mt-4 m-0",children:[(0,b.jsx)("div",{className:"col-6 pe-2 p-0",children:(0,b.jsx)("button",{className:"btn round-form btn-view py-2 text-uppercase",children:"view"})}),(0,b.jsx)("div",{className:"col-6 ps-2 p-0",children:(0,b.jsx)("button",{className:"btn round-form btn-change py-2 text-uppercase",children:"change"})})]})]})}),(0,b.jsx)("img",{ringImage:"1",src:"/img/customRing/chooseDiamond/ring.png",width:"52",height:"52",alt:"state-image",style:{background:"white"},className:"round-form d-md-block d-none"})]}),(0,b.jsxs)("div",{className:"px-5 py-md-0 py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center active",children:[(0,b.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,b.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:"2"}),(0,b.jsxs)("div",{className:"title text-uppercase",children:[(0,b.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,b.jsx)("h3",{className:"m-0",children:"Diamond"})]})]}),(0,b.jsx)("img",{src:"/img/customRing/chooseDiamond/diamond.png",className:"d-md-block d-none",width:"52",height:"52",alt:"state-image"})]}),(0,b.jsxs)("div",{className:"ps-5 py-md-0 py-5 my-md-5 my-0 col-4 setting-state d-flex justify-content-between align-items-center",children:[(0,b.jsxs)("div",{className:"text-panel d-flex align-items-center",children:[(0,b.jsx)("div",{className:"number me-3 d-flex justify-content-center align-items-center",children:"3"}),(0,b.jsxs)("div",{className:"title text-uppercase",children:[(0,b.jsx)("p",{className:"mb-1 d-md-block d-none",children:"Choose a"}),(0,b.jsx)("h3",{className:"m-0",children:"Ring"})]})]}),(0,b.jsx)("img",{className:"d-md-block d-none",src:"/img/customRing/chooseSetting/complete.png",width:"52",height:"52",alt:"state-image"})]})]})})]}),(0,b.jsxs)("div",{className:"choose-section d-sm-block d-none r-container py-5",children:[(0,b.jsxs)("div",{className:"shapes-panel",children:[(0,b.jsx)("div",{className:"title-panel py-4",children:(0,b.jsxs)("h2",{className:"blue-text text-uppercase d-flex align-items-center",children:["SHAPES",(0,b.jsx)(f.j6O,{className:"ms-2 warning-icon"})]})}),(0,b.jsx)("div",{className:"shapes-box py-4 d-flex align-items-center d-flex flex-wrap",children:j.map((function(e,t){return(0,b.jsxs)("button",{className:"btn btn-shape me-3 round mb-3",onClick:function(e){return K(e,t)},children:[(0,b.jsx)("div",{className:"image-box pb-3",children:(0,b.jsx)("img",{src:"/img/customRing/chooseDiamond/"+e.image})}),(0,b.jsx)("p",{className:"m-0",children:e.name})]},t)}))})]}),(0,b.jsxs)("div",{className:"silder-panel row m-0",children:[(0,b.jsxs)("div",{className:"color-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5",children:[(0,b.jsxs)("h3",{className:"text-uppercase blue-text d-flex align-items-center mb-4",children:["carat",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)(u.Z,{max:8,min:0,unit:""})]}),(0,b.jsxs)("div",{className:"color-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5",children:[(0,b.jsxs)("h3",{className:"text-uppercase blue-text d-flex align-items-center",children:["colour",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)(m.Z,{marks:N,step:10})]}),(0,b.jsxs)("div",{className:"clarity-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5",children:[(0,b.jsxs)("h3",{className:"text-uppercase blue-text d-flex align-items-center",children:["clarity",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)(m.Z,{marks:y,step:11.111})]}),(0,b.jsxs)("div",{className:"cut-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5",children:[(0,b.jsxs)("h3",{className:"text-uppercase blue-text d-flex align-items-center",children:["cut",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)(m.Z,{marks:w,step:25})]}),(0,b.jsxs)("div",{className:"price-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5",children:[(0,b.jsxs)("h3",{className:"text-uppercase blue-text d-flex align-items-center mb-4",children:["price",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)(u.Z,{max:109e3,min:0,unit:"$"})]})]})]}),(0,b.jsxs)("div",{className:"product-section r-container mb-5 pb-5",children:[(0,b.jsxs)("div",{className:"top-bar row align-items-center m-0 py-3",children:[(0,b.jsxs)("div",{className:"title-panel col-md-6 col-12 p-0 pb-md-0 pb-3",children:[(0,b.jsx)("h2",{children:"Choose Diamond"}),(0,b.jsxs)("p",{className:"text-uppercase mb-0",style:{display:"none"},children:["Certified Diamonds (",C," items)"]})]}),(0,b.jsxs)("div",{className:"col-md-6 col-12 d-flex justify-content-end flex-sm-row flex-column p-0 pt-3 pt-md-0",children:[(0,b.jsxs)("button",{className:"btn d-sm-none d-flex btn-filter round-form justify-content-between align-items-center px-4 py-3 mb-4",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsxs)("div",{className:"text-uppercase d-flex align-items-center",children:[(0,b.jsx)(f.Dho,{className:"me-3"}),"Filter"]}),(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("div",{className:"search-box round-form d-flex align-items-center py-2 pe-sm-0 pe-2 mb-sm-0 mb-2",children:[(0,b.jsxs)("label",{htmlFor:"selectSearch",className:"px-4",children:["SORT BY :"," "]}),(0,b.jsx)(r.Z,{id:"selectSearch",options:v,value:k,onChange:function(e,t){M="sortKey:"+t.value.split(" ")[0]+",reverse:"+t.reverse.toString(),X(!0)},filterOptions:o.Z,emptyMessage:"Not found",search:!0})]})]})]}),(0,b.jsxs)("div",{className:"list-bar d-flex justify-content-between align-items-center py-sm-0 py-3",children:[(0,b.jsxs)("div",{className:"tab-group d-sm-block d-none",children:[(0,b.jsx)("button",{className:"btn py-4 px-0 me-4",children:"NATURAL"}),(0,b.jsx)("button",{className:"btn py-4 px-0 me-4",children:"COLOURED"}),(0,b.jsx)("button",{className:"btn py-4 px-0",children:"GEMSTONES"})]}),(0,b.jsxs)("select",{className:"form-select select-display-mode blue-text d-sm-none py-3 round-form px-4 me-3","aria-label":"Default select example",children:[(0,b.jsx)("option",{children:"NATURAL"}),(0,b.jsx)("option",{children:"COLOURED"}),(0,b.jsx)("option",{children:"GEMSTONES"})]}),(0,b.jsxs)("div",{className:"order-btn-group d-flex",children:[(0,b.jsx)("button",{className:"btn btn-show-content d-flex round-form py-3 px-3 me-sm-5 me-3",children:(0,b.jsx)(f.B4m,{})}),(0,b.jsx)("button",{className:"btn btn-show-list d-flex round-form py-3 px-3",children:(0,b.jsx)(f.yTT,{})})]})]}),!W&&R&&R.length>0?(0,b.jsxs)("div",{className:"col-lg-12 col-md-8 col-sm-7 col-12 p-0 product-panel m-0",children:[(0,b.jsx)("div",{className:"row m-0",children:R.map((function(e,t){return(0,b.jsxs)("div",{shopifyid:e.shopifyid,className:"product-item col-lg-3 col-md-6 col-sm-12 mb-4",onClick:function(e){return function(e){var t=$(e.target);localStorage.choosenDiamond=t.closest("[shopifyid]").attr("shopifyid");var a=new FormData;a.append("shopifyid",localStorage.choosenDiamond),fetch("https://royalcoster.com:81/royalcoster/getProduct.php",{method:"post",body:a}).then((function(e){return e.json()})).then((function(e){localStorage.choosenDiamondData=JSON.stringify(e),window.location.href="confirmDiamond"}))}(e)},children:[(0,b.jsx)("div",{className:"product-image hover-scale d-flex justify-content-center align-items-center round",children:(0,b.jsx)("img",{src:e.image,alt:"product-image"})}),(0,b.jsx)("h3",{className:"text-uppercase blue-text my-4 m-0",children:e.title}),+e.Fullprice>+e.price?(0,b.jsxs)("div",{className:"d-flex price-panel",children:[(0,b.jsx)("h4",{className:"blue-text me-3",children:(0,b.jsx)(p.Z,{value:e.price,displayType:"text",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,prefix:"\u20ac "})}),(0,b.jsx)("h4",{className:"full-price text-decoration-line-through",children:(0,b.jsx)(p.Z,{value:e.Fullprice,displayType:"text",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,prefix:"\u20ac "})})]}):(0,b.jsx)("div",{className:"price-panel",children:(0,b.jsx)("h4",{className:"blue-text me-3",children:(0,b.jsx)(p.Z,{value:e.price,displayType:"text",decimalScale:2,fixedDecimalScale:!0,thousandSeparator:!0,prefix:"\u20ac "})})})]},t)}))}),H&&(0,b.jsxs)("div",{className:"mt-4 row m-0",children:[(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]}),(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]}),(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12 d-lg-block d-none",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]})]}),V&&(0,b.jsx)("button",{className:"btn load-more-btn text-uppercase py-3 px-5 mt-3 round-form",onClick:X,children:"Load More"})]}):W?(0,b.jsxs)("div",{className:"col-lg-9 col-md-8 col-sm-7 col-12 p-0 row m-0",children:[(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]}),(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]}),(0,b.jsxs)("div",{className:"col-lg-4 col-md-6 col-12 d-lg-block d-none",children:[(0,b.jsx)(x.Z,{animation:"wave",variant:"rect",width:"100%",height:300}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:100,height:20}),(0,b.jsx)(x.Z,{animation:"wave",variant:"text",width:"100%",height:40})]})]}):(0,b.jsx)("h3",{className:"none-text text-center flex-fill p-0",children:"No product"})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"filterMenu","aria-labelledby":"filterMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center",children:[(0,b.jsx)("h3",{id:"filterMenuLabel",className:"text-uppercase mb-0 py-2",children:"Filter"}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body r-container pt-2 p-0",children:[(0,b.jsxs)("button",{className:"btn btn-price text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#priceMenu","aria-controls":"priceMenu",onClick:Y,children:["price",(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("button",{className:"btn btn-style text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#shapeMenu","aria-controls":"shapeMenu",onClick:Y,children:["shape",(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("button",{className:"btn btn-price text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#caratMenu","aria-controls":"caratMenu",onClick:Y,children:["carat",(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("button",{className:"btn btn-price text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#colourMenu","aria-controls":"colourMenu",onClick:Y,children:["COLOUR",(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("button",{className:"btn btn-price text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#clarityMenu","aria-controls":"clarityMenu",onClick:Y,children:["CLARIty",(0,b.jsx)(f.jfD,{})]}),(0,b.jsxs)("button",{className:"btn btn-price text-uppercase mt-3 round-form d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#cutMenu","aria-controls":"cutMenu",onClick:Y,children:["CUT",(0,b.jsx)(f.jfD,{})]})]})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"priceMenu","aria-labelledby":"priceMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"filterMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["price ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container",children:(0,b.jsxs)("div",{className:"range-panel d-flex align-items-center mt-4 pt-4 pdx-5",children:[(0,b.jsx)("div",{className:"range-min-pointer range-pointer"}),(0,b.jsx)("div",{className:"range-max-pointer range-pointer"}),(0,b.jsx)(u.Z,{min:0,max:109e3,unit:"$"})]})})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"shapeMenu","aria-labelledby":"shapeMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"shapeMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["shape ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container row pt-4",children:j.map((function(e,t){return(0,b.jsx)("div",{className:"col-4 shape-item pb-3",children:(0,b.jsxs)("button",{className:"btn btn-shape me-3 round mb-3",onClick:function(e){return K(e,t)},children:[(0,b.jsx)("div",{className:"image-box pb-3",children:(0,b.jsx)("img",{src:"/img/customRing/chooseDiamond/"+e.image})}),(0,b.jsx)("p",{className:"m-0",children:e.name})]})},t)}))})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"caratMenu","aria-labelledby":"caratMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"caratMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["carat ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container row pt-4",children:(0,b.jsx)(u.Z,{max:8,min:0,unit:""})})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"colourMenu","aria-labelledby":"colourMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"colourMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["colour ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container row pt-4",children:(0,b.jsx)(m.Z,{marks:N,step:10})})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"clarityMenu","aria-labelledby":"clarityMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"clarityMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["clarity ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container row pt-4",children:(0,b.jsx)(m.Z,{marks:y,step:11.111})})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]}),(0,b.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"cutMenu","aria-labelledby":"cutMenuLabel",children:[(0,b.jsx)("div",{className:"offcanvas-header py-4 p-0",children:(0,b.jsxs)("div",{className:"r-container d-flex justify-content-between align-items-center py-2",children:[(0,b.jsxs)("h3",{id:"cutMenuLabel",className:"text-uppercase mb-0 d-flex align-items-center",children:["cut ",(0,b.jsx)(f.j6O,{className:"ms-2"})]}),(0,b.jsx)("button",{type:"button",className:"btn btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]})}),(0,b.jsxs)("div",{className:"offcanvas-body p-0 d-flsex flex-column justify-content-between",children:[(0,b.jsxs)("button",{className:"btn btn-back text-uppercase d-flex justify-content-between align-items-center px-4 py-3",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:[(0,b.jsx)(f.jW7,{}),"Reset Filter"]}),(0,b.jsx)("div",{className:"r-container row pt-4",children:(0,b.jsx)(m.Z,{marks:w,step:25})})]}),(0,b.jsx)("div",{className:"offcanvas-footer text-center pb-5",children:(0,b.jsx)("button",{className:"btn btn-apply blue-btn text-uppercase py-3 round-form r-container",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#filterMenu","aria-controls":"filterMenu",children:"apply"})})]})]})}},89360:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customRing/chooseDiamond",function(){return a(36573)}])}},function(e){e.O(0,[6556,8786,9943,8119,5116,9774,2888,179],(function(){return t=89360,e(e.s=t);var t}));var t=e.O();_N_E=t}]);