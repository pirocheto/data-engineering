(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{298:(e,t,r)=>{"use strict";r.d(t,{FumadocsIcon:()=>i});var n=r(5155);r(6046);var a=r(2115);function i(e){let t=(0,a.useId)();return(0,n.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 180 180",filter:"url(#".concat(t,"-shadow)"),...e,children:[(0,n.jsx)("circle",{cx:"90",cy:"90",r:"90",fill:"url(#".concat(t,"-iconGradient)")}),(0,n.jsxs)("defs",{children:[(0,n.jsx)("filter",{id:"".concat(t,"-shadow"),colorInterpolationFilters:"sRGB",children:(0,n.jsx)("feDropShadow",{dx:"0",dy:"0",stdDeviation:"0.5",floodColor:"var(--color-fd-primary)",floodOpacity:"1"})}),(0,n.jsxs)("linearGradient",{id:"".concat(t,"-iconGradient"),gradientTransform:"rotate(45)",children:[(0,n.jsx)("stop",{offset:"45%",stopColor:"var(--color-fd-background)"}),(0,n.jsx)("stop",{offset:"100%",stopColor:"var(--color-fd-primary)"})]})]})]})}},425:(e,t,r)=>{"use strict";r.d(t,{LayoutTab:()=>g,LayoutTabs:()=>v,Navbar:()=>x,NavbarSidebarTrigger:()=>p,SidebarLayoutTab:()=>y});var n=r(5155),a=r(9795),i=r(5184),l=r(7772),s=r(8422),o=r(3171),d=r(7401);let c=(0,d.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u=(0,d.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var f=r(162),h=r(6046),m=r(2);function x(e){let{open:t,collapsed:r}=(0,i.c)(),{isTransparent:s}=(0,l.h)();return(0,n.jsx)("header",{id:"nd-subnav",...e,className:(0,a.QP)("fixed inset-x-0 top-(--fd-banner-height) z-10 pe-(--fd-layout-offset) backdrop-blur-lg transition-colors",(!s||t)&&"bg-fd-background/80",e.className),style:{paddingInlineStart:r?"var(--fd-layout-offset)":"calc(var(--fd-layout-offset) + var(--fd-sidebar-width))",...e.style},children:e.children})}function p(e){let{open:t}=(0,i.c)();return(0,n.jsx)(s.x2,{...e,className:(0,a.QP)((0,o.r)({color:"ghost",size:"icon"}),e.className),children:t?(0,n.jsx)(c,{}):(0,n.jsx)(u,{})})}function v(e){return(0,n.jsx)("div",{...e,className:(0,a.QP)("flex flex-row items-end gap-6 overflow-auto",e.className),children:e.children})}function b(e){let t=(0,h.usePathname)();return e.urls?e.urls.has(t.endsWith("/")?t.slice(0,-1):t):(0,m.$)(e.url,t,!0)}function g(e){let{closeOnRedirect:t}=(0,i.c)(),r=b(e);return(0,n.jsx)(f.A,{className:(0,a.QP)("inline-flex items-center py-2.5 border-b border-transparent gap-2 text-fd-muted-foreground text-sm text-nowrap",r&&"text-fd-foreground font-medium border-fd-primary"),href:e.url,onClick:()=>{t.current=!1},children:e.title})}function y(e){let{item:t,...r}=e,i=b(t);return(0,n.jsxs)(f.A,{...r,className:(0,a.QP)("flex flex-row items-center px-2 -mx-2 py-1.5 gap-2.5 text-fd-muted-foreground [&_svg]:!size-4.5",i?"text-fd-primary font-medium":"hover:text-fd-accent-foreground",r.className),"data-active":i,href:t.url,children:[t.icon,t.title]})}},481:(e,t,r)=>{Promise.resolve().then(r.bind(r,298)),Promise.resolve().then(r.bind(r,6148)),Promise.resolve().then(r.bind(r,7772)),Promise.resolve().then(r.bind(r,9617)),Promise.resolve().then(r.bind(r,4542)),Promise.resolve().then(r.bind(r,1802)),Promise.resolve().then(r.bind(r,9774)),Promise.resolve().then(r.bind(r,3098)),Promise.resolve().then(r.bind(r,7232)),Promise.resolve().then(r.bind(r,4881)),Promise.resolve().then(r.bind(r,1160)),Promise.resolve().then(r.bind(r,425)),Promise.resolve().then(r.t.bind(r,8173,23))},840:(e,t,r)=>{"use strict";r.d(t,{T:()=>a});var n=r(2115);function a(e,t,r=function e(t,r){return Array.isArray(t)&&Array.isArray(r)?r.length!==t.length||t.some((t,n)=>e(t,r[n])):t!==r}){let[i,l]=(0,n.useState)(e);r(i,e)&&(t(e,i),l(e))}},1719:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},3098:(e,t,r)=>{"use strict";r.d(t,{StylesProvider:()=>s,v:()=>l});var n=r(5155),a=r(2115);let i=(0,a.createContext)({tocNav:"xl:hidden",toc:"max-xl:hidden"});function l(){return(0,a.useContext)(i)}function s(e){let{children:t,...r}=e;return(0,n.jsx)(i.Provider,{value:r,children:t})}},4881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CollapsibleSidebar:()=>w,Sidebar:()=>N,SidebarCollapseTrigger:()=>z,SidebarFolder:()=>M,SidebarFolderContent:()=>L,SidebarFolderLink:()=>E,SidebarFolderTrigger:()=>A,SidebarFooter:()=>C,SidebarHeader:()=>k,SidebarItem:()=>Q,SidebarPageTree:()=>I,SidebarSeparator:()=>T,SidebarViewport:()=>S});var n=r(5155),a=r(7401);let i=(0,a.A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var l=r(1719);let s=(0,a.A)("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);var o=r(8422),d=r(6046),c=r(2115),u=r(162),f=r(7930),h=r(9795),m=r(9340),x=r(2),p=r(2616),v=r(5184),b=r(6421),g=r(7232);let y=(0,b.F)("relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0",{variants:{active:{true:"bg-fd-primary/10 text-fd-primary",false:"transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"}}}),j=(0,c.createContext)(null),P=(0,c.createContext)(null);function w(e){let{collapsed:t}=(0,v.c)(),[r,a]=(0,c.useState)(!1),i=(0,c.useRef)(0),l=(0,c.useRef)(0);(0,f.T)(t,()=>{a(!1),l.current=Date.now()+150});let s=(0,c.useCallback)(e=>{"touch"===e.pointerType||l.current>Date.now()||(window.clearTimeout(i.current),a(!0))},[]),o=(0,c.useCallback)(e=>{"touch"!==e.pointerType&&(window.clearTimeout(i.current),i.current=window.setTimeout(()=>{a(!1),l.current=Date.now()+150},Math.min(e.clientX,document.body.clientWidth-e.clientX)>100?0:500))},[]);return(0,n.jsx)(N,{...e,onPointerEnter:t?s:void 0,onPointerLeave:t?o:void 0,"data-collapsed":t,className:(0,h.QP)("md:transition-all",t&&"md:-me-(--fd-sidebar-width) md:translate-x-[calc(var(--fd-sidebar-offset)*-1)] rtl:md:translate-x-(--fd-sidebar-offset)",t&&r&&"z-50 md:translate-x-0",t&&!r&&"md:opacity-0",e.className),style:{"--fd-sidebar-offset":"calc(var(--fd-sidebar-width) - 20px)"}})}function N(e){let{defaultOpenLevel:t=0,prefetch:r=!0,inner:a,...i}=e,l=(0,c.useMemo)(()=>({defaultOpenLevel:t,prefetch:r,level:1}),[t,r]);return(0,n.jsx)(j.Provider,{value:l,children:(0,n.jsx)(o.Pg,{id:"nd-sidebar",blockScrollingWidth:768,...i,className:(0,h.QP)("fixed top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] z-30 bg-fd-card text-sm md:sticky md:h-(--fd-sidebar-height)","max-md:inset-x-0 max-md:bottom-0 max-md:bg-fd-background/80 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible",i.className),style:{...i.style,"--fd-sidebar-height":"calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))"},children:(0,n.jsx)("div",{...a,className:(0,h.QP)("flex size-full max-w-full flex-col pt-2 md:ms-auto md:w-(--fd-sidebar-width) md:border-e md:pt-4",null==a?void 0:a.className),children:i.children})})})}function k(e){return(0,n.jsx)("div",{...e,className:(0,h.QP)("flex flex-col gap-2 px-4 empty:hidden",e.className),children:e.children})}function C(e){return(0,n.jsx)("div",{...e,className:(0,h.QP)("flex flex-col border-t px-4 py-3 empty:hidden",e.className),children:e.children})}function S(e){return(0,n.jsx)(m.FK,{...e,className:(0,h.QP)("h-full",e.className),children:(0,n.jsx)(m.Gl,{className:"p-4",style:{maskImage:"linear-gradient(to bottom, transparent, white 12px)"},children:e.children})})}function T(e){let{level:t}=_();return(0,n.jsx)("p",{...e,className:(0,h.QP)("inline-flex items-center gap-2 mb-2 px-2 text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0",e.className),style:{paddingInlineStart:D(t),...e.style},children:e.children})}function Q(e){let{icon:t,...r}=e,a=(0,d.usePathname)(),l=void 0!==r.href&&(0,x.$)(r.href,a,!1),{prefetch:s,level:o}=_();return(0,n.jsxs)(u.A,{...r,"data-active":l,className:(0,h.QP)(y({active:l}),r.className),prefetch:s,style:{paddingInlineStart:D(o),...r.style},children:[(0,n.jsx)(G,{level:o,active:l}),null!=t?t:r.external?(0,n.jsx)(i,{}):null,r.children]})}function M(e){let{defaultOpen:t=!1,...r}=e,[a,i]=(0,c.useState)(t);return(0,f.T)(t,e=>{e&&i(e)}),(0,n.jsx)(p.Nt,{open:a,onOpenChange:i,...r,children:(0,n.jsx)(P.Provider,{value:(0,c.useMemo)(()=>({open:a,setOpen:i}),[a]),children:r.children})})}function A(e){let{level:t}=_(),{open:r}=F();return(0,n.jsxs)(p.R6,{...e,className:(0,h.QP)(y({active:!1}),"w-full"),style:{paddingInlineStart:D(t),...e.style},children:[(0,n.jsx)(G,{level:t}),e.children,(0,n.jsx)(l.A,{"data-icon":!0,className:(0,h.QP)("ms-auto transition-transform",!r&&"-rotate-90")})]})}function E(e){let{open:t,setOpen:r}=F(),{prefetch:a,level:i}=_(),s=(0,d.usePathname)(),o=void 0!==e.href&&(0,x.$)(e.href,s,!1);return(0,n.jsxs)(u.A,{...e,"data-active":o,className:(0,h.QP)(y({active:o}),"w-full",e.className),onClick:e=>{e.target.hasAttribute("data-icon")?(r(e=>!e),e.preventDefault()):r(e=>!o||!e)},prefetch:a,style:{paddingInlineStart:D(i),...e.style},children:[(0,n.jsx)(G,{level:i,active:o}),e.children,(0,n.jsx)(l.A,{"data-icon":!0,className:(0,h.QP)("ms-auto transition-transform",!t&&"-rotate-90")})]})}function L(e){let t=_();return(0,n.jsx)(p.Ke,{...e,className:(0,h.QP)("relative",e.className),children:(0,n.jsxs)(j.Provider,{value:(0,c.useMemo)(()=>({...t,level:t.level+1}),[t]),children:[(0,n.jsx)("div",{className:"absolute w-px inset-y-0 bg-fd-border start-3"}),e.children]})})}function z(e){var t;let{collapsed:r,setCollapsed:a}=(0,v.c)();return(0,n.jsx)("button",{type:"button","aria-label":"Collapse Sidebar","data-collapsed":r,...e,onClick:()=>{a(e=>!e)},children:null!==(t=e.children)&&void 0!==t?t:(0,n.jsx)(s,{})})}function F(){let e=(0,c.useContext)(P);if(!e)throw Error("Missing sidebar folder");return e}function _(){let e=(0,c.useContext)(j);if(!e)throw Error("<Sidebar /> component required.");return e}function I(e){let{root:t}=(0,g.t)();return(0,c.useMemo)(()=>{var r;let{Separator:a,Item:i,Folder:l}=null!==(r=e.components)&&void 0!==r?r:{};return(0,n.jsx)(c.Fragment,{children:function e(t,r){return t.map((t,s)=>{if("separator"===t.type)return a?(0,n.jsx)(a,{item:t},s):(0,n.jsxs)(T,{className:(0,h.QP)(0!==s&&"mt-8"),children:[t.icon,t.name]},s);if("folder"===t.type){let a=e(t.children,r+1);return l?(0,n.jsx)(l,{item:t,level:r,children:a},s):(0,n.jsx)(O,{item:t,children:a},s)}return i?(0,n.jsx)(i,{item:t},t.url):(0,n.jsx)(Q,{href:t.url,external:t.external,icon:t.icon,children:t.name},t.url)})}(t.children,1)},t.$id)},[e.components,t.$id])}function O(e){var t;let{item:r,...a}=e,{defaultOpenLevel:i,level:l}=_(),s=(0,g.L)();return(0,n.jsxs)(M,{defaultOpen:(null!==(t=r.defaultOpen)&&void 0!==t?t:i>=l)||s.includes(r),children:[r.index?(0,n.jsxs)(E,{href:r.index.url,external:r.index.external,...a,children:[r.icon,r.name]}):(0,n.jsxs)(A,{...a,children:[r.icon,r.name]}),(0,n.jsx)(L,{children:a.children})]})}function D(e){return"calc(var(--spacing) * ".concat((e>1?e:0)*2+2,")")}function G(e){let{level:t,active:r}=e;return t<=1?null:(0,n.jsx)("div",{className:(0,h.QP)("absolute w-px inset-y-2 z-[2] start-3",r&&"bg-fd-primary")})}},5184:(e,t,r)=>{"use strict";r.d(t,{G:()=>c,c:()=>d});var n=r(5155),a=r(2115),i=r(6046),l=r(8422),s=r(7930);let o=(0,a.createContext)(void 0);function d(){let e=(0,a.useContext)(o);if(!e)throw Error("Missing root provider");return e}function c({children:e}){let t=(0,a.useRef)(!0),[r,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),f=(0,i.usePathname)();return(0,s.T)(f,()=>{t.current&&d(!1),t.current=!0}),(0,n.jsx)(o.Provider,{value:(0,a.useMemo)(()=>({open:r,setOpen:d,collapsed:c,setCollapsed:u,closeOnRedirect:t}),[r,c]),children:(0,n.jsx)(l.GB,{open:r,onOpenChange:d,children:e})})}},5263:(e,t,r)=>{"use strict";function n(e,t,r){let{includePage:n=!0,includeSeparator:a=!1,includeRoot:i}=r,l=[];return t.forEach((e,r)=>{if("separator"===e.type&&a&&l.push({name:e.name}),"folder"===e.type){let n=t.at(r+1);if(n&&e.index===n)return;if(e.root){l=[];return}l.push({name:e.name,url:e.index?.url})}"page"===e.type&&n&&l.push({name:e.name,url:e.url})}),i&&l.unshift({name:e.name,url:"object"==typeof i?i.url:void 0}),l}r.d(t,{Pp:()=>n,oe:()=>function e(t,r){let n;for(let a of(r.endsWith("/")&&(r=r.slice(0,-1)),t)){if("separator"===a.type&&(n=a),"folder"===a.type){if(a.index?.url===r){let e=[];return n&&e.push(n),e.push(a,a.index),e}let t=e(a.children,r);if(t)return t.unshift(a),n&&t.unshift(n),t}if("page"===a.type&&a.url===r){let e=[];return n&&e.push(n),e.push(a),e}}return null}}),r(2346),r(2115)},7232:(e,t,r)=>{"use strict";r.d(t,{L:()=>c,TreeContextProvider:()=>d,t:()=>u});var n=r(5155),a=r(6046),i=r(2115),l=r(5263);let s=(0,i.createContext)(null),o=(0,i.createContext)([]);function d(e){var t,r;let{children:d,tree:c}=e,u=(0,i.useRef)(0),f=(0,a.usePathname)(),h=(0,i.useMemo)(()=>{var e;return null!==(e=(0,l.oe)(c.children,f))&&void 0!==e?e:[]},[f,c]),m=null!==(t=h.findLast(e=>"folder"===e.type&&e.root))&&void 0!==t?t:c;return null!==(r=m.$id)&&void 0!==r||(m.$id=String(u.current++)),(0,n.jsx)(s.Provider,{value:(0,i.useMemo)(()=>({root:m}),[m]),children:(0,n.jsx)(o.Provider,{value:h,children:d})})}function c(){return(0,i.useContext)(o)}function u(){let e=(0,i.useContext)(s);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}},7930:(e,t,r)=>{"use strict";r.d(t,{T:()=>n.T});var n=r(840);r(2346)},8422:(e,t,r)=>{"use strict";r.d(t,{GB:()=>o,Pg:()=>c,x2:()=>d}),r(2346);var n=r(2115),a=r(4065),i=r(5155),l=(0,n.createContext)(null);function s(){let e=(0,n.useContext)(l);if(!e)throw Error("Missing sidebar provider");return e}function o(e){let[t,r]=void 0===e.open?(0,n.useState)(!1):[e.open,e.onOpenChange];return(0,i.jsx)(l.Provider,{value:(0,n.useMemo)(()=>({open:t,setOpen:null!=r?r:()=>void 0}),[t,r]),children:e.children})}function d(e){let{as:t,...r}=e,{open:n,setOpen:a}=s();return(0,i.jsx)(null!=t?t:"button",{"aria-label":"Toggle Sidebar","data-open":n,onClick:()=>{a(!n)},...r})}function c(e){let{as:t,blockScrollingWidth:r,...l}=e,{open:o}=s(),[d,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!r)return;let e=window.matchMedia("(min-width: ".concat(r.toString(),"px)")),t=()=>{c(!e.matches)};return t(),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[r]),(0,i.jsx)(a.A,{as:null!=t?t:"aside","data-open":o,enabled:!!(d&&o),...l,children:l.children})}},9617:(e,t,r)=>{"use strict";r.d(t,{RootToggle:()=>f});var n=r(5155);let a=(0,r(7401).A)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);var i=r(2115),l=r(8173),s=r(6046),o=r(9795),d=r(2),c=r(5184),u=r(9774);function f(e){let{options:t,placeholder:r,...f}=e,[m,x]=(0,i.useState)(!1),{closeOnRedirect:p}=(0,c.c)(),v=(0,s.usePathname)(),b=(0,i.useMemo)(()=>t.findLast(e=>e.urls?e.urls.has(v.endsWith("/")?v.slice(0,-1):v):(0,d.$)(e.url,v,!0)),[t,v]),g=()=>{p.current=!1,x(!1)},y=b?(0,n.jsx)(h,{...b}):r;return(0,n.jsxs)(u.Popover,{open:m,onOpenChange:x,children:[y?(0,n.jsxs)(u.PopoverTrigger,{...f,className:(0,o.QP)("flex flex-row items-center gap-2.5 rounded-lg ps-2 pe-4 py-1.5 hover:bg-fd-accent/50 hover:text-fd-accent-foreground",f.className),children:[y,(0,n.jsx)(a,{className:"size-4 text-fd-muted-foreground"})]}):null,(0,n.jsx)(u.PopoverContent,{className:"w-(--radix-popover-trigger-width) overflow-hidden p-0",children:t.map(e=>{var t;return(0,n.jsx)(l,{href:e.url,onClick:g,...e.props,className:(0,o.QP)("flex w-full flex-row items-center gap-2 px-2 py-1.5",b===e?"bg-fd-accent text-fd-accent-foreground":"hover:bg-fd-accent/50",null===(t=e.props)||void 0===t?void 0:t.className),children:(0,n.jsx)(h,{...e})},e.url)})})]})}function h(e){return(0,n.jsxs)(n.Fragment,{children:[e.icon,(0,n.jsxs)("div",{className:"flex-1 text-start",children:[(0,n.jsx)("p",{className:"text-sm font-medium",children:e.title}),e.description?(0,n.jsx)("p",{className:"text-xs text-fd-muted-foreground",children:e.description}):null]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[473,15,837,66,472,441,587,358],()=>t(481)),_N_E=e.O()}]);