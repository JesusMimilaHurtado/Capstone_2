"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6556],{75597:function(e,t,i){var o=i(50661),n=i(41145),r=i(49092),l=i(23760),a=i(40322),s=i(25895),d=i(37843),p=i.n(d);let c=o.ZP.div.withConfig({componentId:"sc-8c0ee034-0"})(["display:block;width:100%;height:100%;position:relative;"," @media (hover:hover) and (pointer:fine){&:hover{.overlay-buttons{opacity:1;}}}.link-wrapper{position:absolute;top:0;right:0;left:0;bottom:0;img{display:block;width:100%;height:100%;}.save-layer{position:absolute;inset:0;}}.similar-image{margin-left:auto;}.image-caption{display:block;text-align:center;margin-top:5px;span{display:block;}&.design-caption,&.magic-font-caption{overflow:hidden;text-overflow:ellipsis;word-break:break-word;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;}}.watermarked-status{position:absolute;left:10px;top:10px;}.image-wrapper{position:relative;background:",";"," &.design-image-wrapper{box-shadow:0 0 3px 0 rgb(0 0 0 / 20%);}}&.shadow{.image-wrapper{box-shadow:6px 6px 6px rgba(75,75,76,0.2);}","{padding:","px;}.mobile-buttons{margin-top:16px;}}.boost-pinterest-button{margin:8px 8px 8px auto;display:none;","{display:block;}}.author-avatar{.empty-avatar{",";}}"],(0,n.fq)({$rounded:!0,$hasCaption:!1},(0,o.iv)(["border-radius:8px;overflow:hidden;"])),(0,n.rS)("palette.imageTeaser.placeholder"),(0,n.fq)(["$rounded","$hasCaption"],(0,o.iv)(["border-radius:8px;overflow:hidden;"])),r.ai,s.RW,r.ai,(0,l.Z)(p(),a.Z.white));t.Z=c},27569:function(e,t,i){var o=i(85893),n=i(93967),r=i.n(n),l=i(45697),a=i.n(l),s=i(67294),d=i(35456),p=i(75597),c=i(62252),h=i(42180),u=i(54032),g=i(24730),f=i(44193),m=i(850),w=i(96849),v=i(55917);let y=s.memo(e=>{let{inSidebar:t,onSaveClick:i,isSavePopupOpen:n,saveStatus:l,onDotsMenuClick:a,onDeleteFromProjectClick:d,showDeleteFromProject:p,isMenuPopupOpen:h,showSave:u,deleted:w}=e,[y,b]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{b(!0)},[]),y)?t&&!w?(0,o.jsx)(g.Z,{className:"overlay-buttons top left",children:u&&(0,o.jsx)(f.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:r()({active:h}),onClick:a,children:(0,o.jsx)(c.bb,{$margin:"0",$fontSize:"12px"})})}):(0,o.jsxs)(o.Fragment,{children:[!!a&&(0,o.jsx)(g.Z,{className:"overlay-buttons top left",children:(0,o.jsx)(f.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:r()({active:h}),onClick:a,children:(0,o.jsx)(c.bb,{$margin:"0",$fontSize:"12px"})})}),(0,o.jsxs)(g.Z,{className:"overlay-buttons bottom left",children:[u&&(0,o.jsx)(m.Z,{className:"save",$width:"52px",$hoverColor:"purple",$hoverTextColor:"white",active:n,status:l,onClick:i}),p&&(0,o.jsx)(f.Z,{onClick:d,children:(0,o.jsx)(v.cC,{i18nKey:"uploadteaser-001",children:"Remove"})})]})]}):null});y.displayName="ShareButtonOverlay",y.propTypes={inSidebar:a().bool,onSaveClick:a().func,isSavePopupOpen:a().bool,isMenuPopupOpen:a().bool,onDotsMenuClick:a().func,onDeleteFromProjectClick:a().func,saveStatus:a().string,showDeleteFromProject:a().bool,showSave:a().bool,deleted:a().bool};let b={useTransparentPng:!0},x=e=>{var t,i;let{image:n,project:l,onClick:a,onSaveClick:c,saveStatus:g,isSavePopupOpen:f,inSidebar:m,onDotsMenuClick:v,onDeleteFromProjectClick:x,showDeleteFromProject:k,isMenuPopupOpen:j,showSave:C}=e,{id:Z,uid:P,name:S,width:H,height:$,style_uri:W,filename:N,deleted:O}=n,L=!!l,M=s.useRef(),E=(null==N?void 0:N.length)?null===(t=N.split(".").pop())||void 0===t?void 0:t.toLowerCase():"png",{src:T}=(0,w.Z)(W,n,M,"style_uri",b),D=(0,s.useCallback)(e=>{c(e,n,m?{showInfo:!0,showArrow:!1,placement:"bottom-start"}:null)},[n,c,m]),I=(0,s.useCallback)(e=>{v(e,n,l,m?{enableSaving:!0,inSidebar:!0}:{})},[v,n,l,m]),z=(0,s.useCallback)(e=>{x(e,n,"project")},[x,n]),F=(0,s.useMemo)(()=>({paddingBottom:"".concat($/H*100,"%")}),[$,H]),R=!!(null===(i=n.imgPlaceholder)||void 0===i?void 0:i.src)&&!W,_=(0,s.useMemo)(()=>({opacity:.3}),[]);return(0,o.jsx)(p.Z,{ref:M,className:r()("upload-teaser",{png:"png"===E}),"data-testid":!m&&(null==n?void 0:n.id)?"".concat(d.ItemTypes.UPLOAD,"-").concat(n.id):void 0,children:(0,o.jsxs)("div",{className:r()("image-wrapper",{"is-popup-active":f||j}),style:F,itemScope:!0,itemType:"https://schema.org/ImageObject",typeof:"ImageObject",children:[(0,o.jsxs)(u.Z,{condition:!O&&!R,onClick:m&&!O&&a&&!R?a.bind(void 0,n):void 0,to:O||m||R?void 0:"/uploads/".concat(P,"/").concat(Z),children:[!!W&&(0,o.jsx)(h.Z,{crossOrigin:"anonymous",alt:S,width:H,height:$,srcSet:T,className:"teaser-image drag-preview"}),!!R&&(0,o.jsx)("img",{alt:"",crossOrigin:"anonymous",src:n.imgPlaceholder.src,width:H,height:$,className:"teaser-image drag-preview",onLoad:()=>{URL.revokeObjectURL(n.imgPlaceholder.src)},style:_})]}),!R&&(0,o.jsx)(y,{onSaveClick:D,isSavePopupOpen:f,inSidebar:m,saveStatus:g,onDotsMenuClick:L?null:I,onDeleteFromProjectClick:z,isMenuPopupOpen:j,showDeleteFromProject:k,showSave:C,deleted:!!O})]})})};x.propTypes={image:a().object,onClick:a().func,inSidebar:a().bool,onSaveClick:a().func,isSavePopupOpen:a().bool,saveStatus:a().string,isMenuPopupOpen:a().bool,onDotsMenuClick:a().func,onDeleteFromProjectClick:a().func,showDeleteFromProject:a().bool,showSave:a().bool},t.Z=x},850:function(e,t,i){var o=i(85893),n=i(93967),r=i.n(n),l=i(45697),a=i.n(l),s=i(67294),d=i(50661),p=i(55917),c=i(63627),h=i.n(c),u=i(40322),g=i(68134),f=i(44193);let m=d.ZP.span.withConfig({componentId:"sc-dd229f-0"})(["margin:auto;height:18px;position:relative;&:before{content:'';background:",";mask:url(",") center no-repeat;height:18px;width:20px;padding-left:2px;display:inline-block;animation:scaleTick;animation-duration:0.3s;animation-timing-function:linear;animation-fill-mode:forwards;}"],u.Z.white,h()),w=(0,d.ZP)(f.Z).withConfig({componentId:"sc-dd229f-1"})(["&.saving,&.completed{background:",";color:",";}"],u.Z.purple,u.Z.white),v=s.forwardRef((e,t)=>{let{status:i,active:n,className:l,...a}=e;return(0,o.jsx)(w,{ref:t,...a,className:r()(l,i,{active:n}),children:"pending"===i?(0,o.jsx)("span",{children:(0,o.jsx)(p.cC,{i18nKey:"savebutton-001",children:"Save"})}):"saving"===i?(0,o.jsx)(g.Z,{height:8,$color:"white"}):"completed"===i?(0,o.jsx)(m,{}):null})});v.displayName="SaveButton",v.propTypes={className:a().string,status:a().oneOf(["pending","saving","completed"])},t.Z=v},24730:function(e,t,i){var o=i(50661),n=i(49092);let r=o.ZP.div.withConfig({componentId:"sc-49e1f45c-0"})(["position:absolute;transition:opacity 0.2s ease-in-out;display:flex;flex-wrap:wrap;overflow:hidden;pointer-events:none;> *{pointer-events:auto;margin:2px;}&.full{inset:0;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;}&.top{top:0;padding-top:4px;}&.left{left:0;padding-left:4px;}&.bottom{bottom:0;padding-bottom:4px;}&.right{right:0;padding-right:4px;}&.justified{left:0;right:0;padding-left:4px;padding-right:4px;}&.reverse{flex-wrap:wrap-reverse;}&.has-group{flex-wrap:nowrap;}.grouped{display:flex;flex-wrap:wrap;margin:0;&.left{justify-content:flex-start;}&.right{justify-content:flex-end;}> *{pointer-events:auto;margin:2px;}}.filler{pointer-events:none;flex-grow:1;}@media (hover:hover) and (pointer:fine){opacity:0;.is-popup-active &{opacity:1;}}","{opacity:1;}","{display:none;}"],n.Mq,n.ai);t.Z=r},31401:function(e,t,i){i.d(t,{$R:function(){return r},CX:function(){return u},D8:function(){return c},O6:function(){return a},P8:function(){return h},Pm:function(){return d},Vs:function(){return s},eE:function(){return n},m3:function(){return p},zT:function(){return l}});var o=i(49092);let n=[{width:0,style:"masonry",prefWidth:300,buttons:"none"},{width:o.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],r=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],l=[{width:0,style:"masonry",prefWidth:300,buttons:"boost"},{width:o.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],a=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:o.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:410,buttons:"overlay"},{width:1600,style:"rowgrid",prefHeight:440,buttons:"overlay"}];o.tu;let s=[{width:0,style:"masonry",prefWidth:300,buttons:"none"},{width:567,style:"masonry",prefWidth:306,buttons:"overlay"},{width:918,style:"masonry",prefWidth:342,buttons:"overlay"},{width:1368,style:"masonry",prefWidth:456,buttons:"overlay"},{width:1679,style:"masonry",prefWidth:420,buttons:"overlay"}],d=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:567,style:"masonry",prefWidth:306,buttons:"overlay"},{width:918,style:"masonry",prefWidth:342,buttons:"overlay"},{width:1368,style:"masonry",prefWidth:456,buttons:"overlay"},{width:1679,style:"masonry",prefWidth:420,buttons:"overlay"}],p=[{width:0,style:"masonry",prefWidth:200,margin:8}],c=[{width:0,style:"masonry",prefWidth:90,margin:8}],h=[{width:0,style:"rowgrid",prefHeight:800,margin:8,buttons:"overlay"}],u=[{width:0,style:"rowgrid",prefHeight:240}]},28477:function(e,t,i){i.d(t,{Q5:function(){return c},YW:function(){return p},ZL:function(){return l}});var o=i(67294),n=i(50661),r=i(49092);let l=e=>[!!e.find(e=>"overlay"===e.buttons),!!e.find(e=>"mobile"===e.buttons),!!e.find(e=>"boost"===e.buttons)],a=n.ZP.div.withConfig({componentId:"sc-801baa60-0"})([".inner-wrapper{margin:-","px;","{margin:-","px;}> div{margin:","px;","{margin:","px;}}}.rowgrid.inner-wrapper{display:flex;flex-wrap:wrap;> div{","{width:100% !important;}}}.masonry.inner-wrapper{display:flex;position:relative;> div{position:absolute;height:auto;}}.magic-fonts-create-button-wrapper{.size-template-cta{margin-bottom:0;}.img-caption{height:25.31px;}}"],9,r.ai,5,9,r.ai,5,r.ai),s=(e,t,i,o,n)=>{if(-1===e||!o)return[];let r=i.prefHeight,l=[];if(o.length){let i=0,a=0;o.forEach((s,d)=>{let[p,c]=n(s);if(l[d]={width:p/c*r},(i=i+t+l[d].width)>e+t||d===o.length-1){let o=(d-a+1)*t,n=e-o,r=Math.max(n,i-o);for(let i=a;i<=d;i++){let o=(l[i].width/r*n+t)/e*100;l[i].width="calc(".concat(o,"% - ").concat(t,"px)")}i=0,a=d+1}})}return l},d=(e,t,i,o,n)=>{if(-1===e||!(null==o?void 0:o.length))return[];let r=Math.ceil(e/i.prefWidth),l=Math.round((e-t*r)/r),a=[];for(let e=0;e<r;e++)a.push([]);let s=e=>{var i,o,n;let r=0;for(let t=0;t<e.length;t++){let i=e[t],l=null===(o=i[(null==i?void 0:i.length)-1||0])||void 0===o?void 0:o.runningHeight,a=e[r];if(l)l<(null===(n=a[(null==a?void 0:a.length)-1||0])||void 0===n?void 0:n.runningHeight)&&(r=t);else{r=t;break}}let a=e[r];return[r*(l+t),(null===(i=a[(null==a?void 0:a.length)-1||0])||void 0===i?void 0:i.runningHeight)||0,a]};for(let e=0;e<o.length;e++){let[i,r,d]=s(a),p=Math.round(n(o[e],l,window.innerWidth)),c={width:"".concat(l,"px"),left:"".concat(i,"px"),top:"".concat(r,"px"),topPx:r,index:e,probableHeight:p,runningHeight:r+p+t};d.push(c)}return a},p=(e,t,i,o,n)=>{let l=()=>{try{let l=e.current.children,a=e.current.clientWidth,p=i[0].margin||window.innerWidth<r.tu?10:18,c=i.reduce((e,t)=>t.width<a?t:e,i[0]);if(e.current.style.minHeight=0,"rowgrid"===c.style){e.current.style.height="auto";let i=s(a,p,c,t,o);e.current.classList.remove("masonry"),e.current.classList.add("rowgrid"),i.forEach((e,t)=>{l[t].style.width=e.width,l[t].style.left=null,l[t].style.top=null,l[t].style.display="block"})}else if("masonry"===c.style&&-1!==a&&t){let i=d(a,p,c,t,n);e.current.classList.remove("rowgrid"),e.current.classList.add("masonry");for(let e=0;e<i.length;e++)for(let t=0;t<i[e].length;t++){let o=i[e][t];l[o.index].style.left=o.left,l[o.index].style.top=o.top,l[o.index].style.width=o.width,l[o.index].style.display="block"}for(let e=0;e<i.length;e++)for(let t=0,o=0;t<i[e].length;t++){let n=i[e][t],r=l[n.index].clientHeight-n.probableHeight;0!==o&&(l[n.index].style.top="".concat(n.topPx+o,"px")),0!==r&&(o+=r)}let o=0;for(let e=0;e<i.length;e++){let t=i[e],n=t[(null==t?void 0:t.length)-1||0];if(n){let e=l[n.index].offsetTop+l[n.index].clientHeight+p;o=Math.max(e,o)}}e.current.style.height="".concat(o,"px")}}catch(e){}};return l(),window.addEventListener("resize",l),window.addEventListener("com.rawpixel.rowgrid.relayout",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("com.rawpixel.rowgrid.relayout",l)}},c=()=>{window.dispatchEvent(new Event("com.rawpixel.rowgrid.relayout"))};t.ZP=o.memo(a)},35456:function(e,t,i){i.d(t,{ItemTypes:function(){return o}});let o=Object.freeze({IMAGE:"image",UPLOAD:"upload",DESIGN:"design"})}}]);