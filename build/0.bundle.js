webpackJsonp([0],{344:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),a=n(l),s=o(148),i=n(s),r=o(348),u=n(r),d=o(363),f=n(d),c=o(365),p=n(c),m=o(366),h=function(){return a.default.createElement(i.default,null,a.default.createElement(u.default,null,p.default.projects.map(function(e,t){return a.default.createElement(f.default,{key:t,title:e.title,description:e.description,src:m("./"+e.src,!0),projectLinks:e.projectLinks,alt:e.alt})})))};t.default=h},348:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=o(10),a=n(l),s=o(15),i=n(s),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),y=o(60),g=n(y),T=o(23),w={componentClass:g.default},C={componentClass:"div"},v=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=(0,i.default)(e,["componentClass","className"]),l=(0,T.splitBsProps)(n),s=l[0],r=l[1],u=(0,T.getClassSet)(s);return b.default.createElement(t,(0,a.default)({},r,{className:(0,h.default)(o,u)}))},t}(b.default.Component);v.propTypes=w,v.defaultProps=C,t.default=(0,T.bsClass)("row",v),e.exports=t.default},349:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=o(10),a=n(l),s=o(15),i=n(s),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),y=o(4),g=n(y),T=o(60),w=n(T),C=o(23),v=o(95),A={componentClass:w.default,xs:g.default.number,sm:g.default.number,md:g.default.number,lg:g.default.number,xsHidden:g.default.bool,smHidden:g.default.bool,mdHidden:g.default.bool,lgHidden:g.default.bool,xsOffset:g.default.number,smOffset:g.default.number,mdOffset:g.default.number,lgOffset:g.default.number,xsPush:g.default.number,smPush:g.default.number,mdPush:g.default.number,lgPush:g.default.number,xsPull:g.default.number,smPull:g.default.number,mdPull:g.default.number,lgPull:g.default.number},E={componentClass:"div"},L=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=(0,i.default)(e,["componentClass","className"]),l=(0,C.splitBsProps)(n),s=l[0],r=l[1],u=[];return v.DEVICE_SIZES.forEach(function(e){function t(t,o){var n=""+e+t,l=r[n];null!=l&&u.push((0,C.prefix)(s,""+e+o+"-"+l)),delete r[n]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var o=e+"Hidden";r[o]&&u.push("hidden-"+e),delete r[o]}),b.default.createElement(t,(0,a.default)({},r,{className:(0,h.default)(o,u)}))},t}(b.default.Component);L.propTypes=A,L.defaultProps=E,t.default=(0,C.bsClass)("col",L),e.exports=t.default},350:function(e,t,o){e.exports={default:o(351),__esModule:!0}},351:function(e,t,o){o(352),e.exports=o(24).Object.values},352:function(e,t,o){var n=o(28),l=o(149)(!1);n(n.S,"Object",{values:function(e){return l(e)}})},353:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=o(10),a=n(l),s=o(15),i=n(s),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),y=o(4),g=n(y),T=o(147),w=n(T),C=o(23),v={src:g.default.string,alt:g.default.string,href:g.default.string,onError:g.default.func,onLoad:g.default.func},A=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.src,o=e.alt,n=e.onError,l=e.onLoad,s=e.className,r=e.children,u=(0,i.default)(e,["src","alt","onError","onLoad","className","children"]),d=(0,C.splitBsProps)(u),f=d[0],c=d[1],p=c.href?w.default:"div",m=(0,C.getClassSet)(f);return b.default.createElement(p,(0,a.default)({},c,{className:(0,h.default)(s,m)}),b.default.createElement("img",{src:t,alt:o,onError:n,onLoad:l}),r&&b.default.createElement("div",{className:"caption"},r))},t}(b.default.Component);A.propTypes=v,t.default=(0,C.bsClass)("thumbnail",A),e.exports=t.default},363:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),a=n(l),s=o(349),i=n(s),r=o(364),u=n(r),d=o(353),f=n(d),c={GITHUB:"default",PRODUCT:"success",MEDIA:"primary"},p=function(e){var t=e.src,o=e.title,n=e.alt,l=e.description,s=e.projectLinks;return a.default.createElement(i.default,{xs:12,sm:6,md:4},a.default.createElement(f.default,{src:t,alt:""+n},a.default.createElement("h3",null,""+o),a.default.createElement("p",null,""+l),a.default.createElement("p",null,s.map(function(e,t){return a.default.createElement(u.default,{key:t,href:e.linkURL,bsStyle:c[e.linkType],style:{margin:"0 10px 10px 0"}},e.linkName)}))))};t.default=p},364:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=o(350),a=n(l),s=o(15),i=n(s),r=o(10),u=n(r),d=o(12),f=n(d),c=o(13),p=n(c),m=o(14),h=n(m),k=o(17),b=n(k),y=o(1),g=n(y),T=o(4),w=n(T),C=o(60),v=n(C),A=o(23),E=o(95),L=o(147),j=n(L),x={active:w.default.bool,disabled:w.default.bool,block:w.default.bool,onClick:w.default.func,componentClass:v.default,href:w.default.string,type:w.default.oneOf(["button","reset","submit"])},S={active:!1,block:!1,disabled:!1},U=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,e.apply(this,arguments))}return(0,h.default)(t,e),t.prototype.renderAnchor=function(e,t){return g.default.createElement(j.default,(0,u.default)({},e,{className:(0,b.default)(t,e.disabled&&"disabled")}))},t.prototype.renderButton=function(e,t){var o=e.componentClass,n=(0,i.default)(e,["componentClass"]),l=o||"button";return g.default.createElement(l,(0,u.default)({},n,{type:n.type||"button",className:t}))},t.prototype.render=function(){var e,t=this.props,o=t.active,n=t.block,l=t.className,a=(0,i.default)(t,["active","block","className"]),s=(0,A.splitBsProps)(a),r=s[0],d=s[1],f=(0,u.default)({},(0,A.getClassSet)(r),(e={active:o},e[(0,A.prefix)(r,"block")]=n,e)),c=(0,b.default)(l,f);return d.href?this.renderAnchor(d,c):this.renderButton(d,c)},t}(g.default.Component);U.propTypes=x,U.defaultProps=S,t.default=(0,A.bsClass)("btn",(0,A.bsSizes)([E.Size.LARGE,E.Size.SMALL,E.Size.XSMALL],(0,A.bsStyles)([].concat((0,a.default)(E.State),[E.Style.DEFAULT,E.Style.PRIMARY,E.Style.LINK]),E.Style.DEFAULT,U))),e.exports=t.default},365:function(e,t){e.exports={projects:[{title:"Echos of Tikkun",description:"My first major project in college with the Video Game Development Association. This project helped me learn the inner workings on how to make a video game. I used the Unity Game Engine which uses C# primarily.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/technicalvgda/Adagio"},{linkName:"Play Store",linkType:"PRODUCT",linkURL:"https://play.google.com/store/apps/details?id=com.VGDA.EchoesOfTikkun&hl=en"}],src:"echos-of-tikkun.jpg",alt:"The three goddess in Echos of Tikkun"},{title:"Skulls and Asteroids",description:"After Echoes of Tikkun, I wanted to try making a game on my own. During my first Hackathon (BeachHacks), I decided to join with a couple of my peers from VGDA and a couple of people outside of the association. The result was Skulls and Asteroids.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/Skulls-and-Asteroids"},{linkName:"Play Store",linkType:"PRODUCT",linkURL:"https://play.google.com/store/apps/details?id=com.MachinaGames.SkullsandAsteroids&hl=en"}],src:"skulls-and-asteroids.jpg",alt:"The gameplay of Skulls and Asteroids"},{title:"History AutoDelete",description:"This is another passion project of mine. An annoyance that I had with Google Maps was that every time I moved the map, it would spawn 3-4 history entries. So after 5 minutes, I might have over 100 history entries. This extension is suppose to stop that from happening. This project introduced me to HTML, CSS, and JavaScript.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/History-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/history-autodelete/bhfakmaiadhflpjloimlagikhodjiefj"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/history-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/History-AutoDelete-for-Chrome.shtml"}],src:"history-autodelete.png",alt:"The popup menu of History AutoDelete"},{title:"Cookie AutoDelete",description:"After History AutoDelete, I wanted to port Self Destructing Cookies which I think is an amazing cookie policy for web browsers that compromises between privacy and convenience. This extension will delete all unused cookies on tab close. Unused means that if all google.com tabs are closed then google.com cookies are cleared, automating the cookie process.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/Cookie-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/cookie-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/Cookie-AutoDelete.shtml"},{linkName:"Ghacks Review",linkType:"MEDIA",linkURL:"https://www.ghacks.net/2017/05/15/cookie-autodelete-for-firefox-webextension/"}],src:"cookie-autodelete.png",alt:"The popup menu of of Cookie AutoDelete showing deleted cookies on github.com"},{title:"Personal Website",description:"Using a boilerplate as a starting point, I turned it into what you see here today. All this was from scratch using React Components and BootStrap, taking into inspiration of my old website which was a template. The result is a personal website with more modern components (React Framework and BootStrap 4.0) and easier expandability (maybe a blog?). Also all routes are lazy loaded; so if this were a real app, it would be efficient.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/mrdokenny.github.io"},{linkName:"Original Boilerplate",linkType:"GITHUB",linkURL:"http://spa-github-pages.rafrex.com/"}],src:"website-pic.jpg",alt:"The home page of this website"}]}},366:function(e,t,o){function n(e){return o(l(e))}function l(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./cookie-autodelete.png":367,"./echos-of-tikkun.jpg":368,"./history-autodelete.png":369,"./skulls-and-asteroids.jpg":370,"./website-pic.jpg":371};n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id=366},367:function(e,t,o){e.exports=o.p+"302470a0adfb0deed127661270e1a08e.png"},368:function(e,t,o){e.exports=o.p+"52719162f699ff62163ef1bd3e229f20.jpg"},369:function(e,t,o){e.exports=o.p+"73a1bc9fe722199ad4aa90ce7ecd25f1.png"},370:function(e,t,o){e.exports=o.p+"4f3e68e815591a5ee597c41d3c21a902.jpg"},371:function(e,t,o){e.exports=o.p+"952af73d828273c66d1ac8b0fc48d72f.jpg"}});