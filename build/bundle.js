webpackJsonp([0],{219:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o=l(a),r=n(18),i=l(r),u=n(71),c=n(337),s=l(c);i.default.render(o.default.createElement(u.BrowserRouter,null,o.default.createElement(s.default,null)),document.getElementById("root"))},337:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(338),i=l(r),u=n(476),c=l(u),s=function(){return o.default.createElement("div",null,o.default.createElement(i.default,null),o.default.createElement("div",{id:"routeContainer"},o.default.createElement(c.default,null)))};t.default=s},338:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(36),i=n(131),u=l(i),c=function(){return o.default.createElement(r.Navbar,{inverse:!0,collapseOnSelect:!0,fixedTop:!0},o.default.createElement(r.Navbar.Header,null,o.default.createElement(r.Navbar.Brand,null,o.default.createElement(u.default,{to:"/"},o.default.createElement("a",null,"Kenny Do | Developer"))),o.default.createElement(r.Navbar.Toggle,null)),o.default.createElement(r.Navbar.Collapse,null,o.default.createElement(r.Nav,null,o.default.createElement(u.default,{to:"/projects"},o.default.createElement(r.NavItem,{eventKey:1},"Projects")),o.default.createElement(u.default,{to:"/about"},o.default.createElement(r.NavItem,{eventKey:2},"About Me")),o.default.createElement(u.default,{to:"/contact"},o.default.createElement(r.NavItem,{eventKey:3},"Contact")))))};t.default=c},476:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(71),i=n(214),u=n(215),c=n(478),s=l(c),d=n(5),f=l(d),m=(0,u.asyncComponent)(function(){return n.e(0).then(n.bind(null,480))},{placeholder:o.default.createElement(s.default,null)}),p=(0,u.asyncComponent)(function(){return n.e(0).then(n.bind(null,485))},{placeholder:o.default.createElement(s.default,null)}),h=(0,u.asyncComponent)(function(){return n.e(0).then(n.bind(null,493))},{placeholder:o.default.createElement(s.default,null)}),y=(0,u.asyncComponent)(function(){return n.e(0).then(n.bind(null,495))},{placeholder:o.default.createElement(s.default,null)}),b=(0,u.asyncComponent)(function(){return n.e(0).then(n.bind(null,501))},{placeholder:o.default.createElement(s.default,null)}),g=function(e){var t=e.location;return o.default.createElement(r.Switch,{key:t.key,location:t},o.default.createElement(r.Route,{exact:!0,path:"/",component:m}),o.default.createElement(r.Route,{exact:!0,path:"/projects",component:p}),o.default.createElement(r.Route,{exact:!0,path:"/about",component:h}),o.default.createElement(r.Route,{exact:!0,path:"/contact",component:y}),o.default.createElement(r.Route,{component:b}))};g.propTypes={location:f.default.object.isRequired};var E=function(){return window.innerWidth>=768?o.default.createElement(r.Route,{render:function(e){var t=e.location;return e.history,e.match,o.default.createElement(i.RouteTransition,{pathname:t.pathname,atEnter:{opacity:0},atLeave:{},atActive:{opacity:1},runOnMount:!0},o.default.createElement(g,{location:t}))}}):o.default.createElement(r.Route,{render:function(e){var t=e.location;return e.history,e.match,o.default.createElement(g,{location:t})}})};t.default=E},478:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(0),s=l(c),d=n(216),f=l(d),m=50,p={center:{display:"flex",justifyContent:"center",alignItems:"center"}},h=function(e){function t(){var e,n,l,r;a(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.state={height:window.innerHeight-m},r=n,o(l,r)}return r(t,e),u(t,[{key:"updateDimensions",value:function(){var e=window.innerHeight-m;this.setState({height:e})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return s.default.createElement("div",{style:i({},p.center,{height:window.innerHeight-50+"px"})},s.default.createElement(f.default,{size:120,spinnerColor:"#333",spinnerWidth:5,visible:!0}))}}]),t}(s.default.Component);t.default=h},480:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),c=n(0),s=l(c),d=n(36),f=n(481),m=l(f),p=n(482),h=l(p),y=n(483),b=l(y),g=n(484),E=l(g),w=50,v={fill:{width:"100%",backgroundPosition:"center",backgroundSize:"cover"}},k=function(e){function t(){var e,n,l,r;a(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.state={height:window.innerHeight-w},r=n,o(l,r)}return r(t,e),u(t,[{key:"updateDimensions",value:function(){var e=window.innerHeight-w;this.setState({height:e})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return s.default.createElement(d.Carousel,null,s.default.createElement(d.Carousel.Item,null,s.default.createElement("div",{style:i({},v.fill,{height:this.state.height+"px",backgroundImage:"url("+m.default+")"})})),s.default.createElement(d.Carousel.Item,null,s.default.createElement("div",{style:i({},v.fill,{height:this.state.height+"px",backgroundImage:"url("+h.default+")"})})),s.default.createElement(d.Carousel.Item,null,s.default.createElement("div",{style:i({},v.fill,{height:this.state.height+"px",backgroundImage:"url("+b.default+")"})})),s.default.createElement(d.Carousel.Item,null,s.default.createElement("div",{style:i({},v.fill,{height:this.state.height+"px",backgroundImage:"url("+E.default+")"})})))}}]),t}(s.default.Component);t.default=k},481:function(e,t,n){e.exports=n.p+"fb37c14f78f25d058ea14a138903295c.jpg"},482:function(e,t,n){e.exports=n.p+"696397487eb5c30205e895caad066f29.jpg"},483:function(e,t,n){e.exports=n.p+"ff0c2b8efcc470a30550a6b89a1eddbc.jpg"},484:function(e,t,n){e.exports=n.p+"1bf0a39265770d684339bb864545b9b0.jpg"},485:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=n(0),c=l(u),s=n(486),d=l(s),f=n(487),m=l(f),p=n(36),h=n(488),y={image:{margin:"auto",width:"150em",height:"auto"},center:{textAlign:"center"}},b=function(e){function t(){var e,n,l,r;a(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.state={openIndex:0,showModal:!1},r=n,o(l,r)}return r(t,e),i(t,[{key:"close",value:function(){this.setState({showModal:!1})}},{key:"open",value:function(e){this.setState({showModal:!0,openIndex:e})}},{key:"render",value:function(){var e=this;return c.default.createElement(p.Grid,null,c.default.createElement(p.Row,null,c.default.createElement("div",{className:"thumbnail"},c.default.createElement("h2",{style:y.center},"Click on an Image/Gif to Enlarge"))),c.default.createElement(p.Row,null,m.default.projects.map(function(t,n){return c.default.createElement(d.default,{key:n,projectIndex:n,openModal:function(t){return e.open(t)},title:t.title,description:t.description,src:h("./"+t.src,!0),projectLinks:t.projectLinks,alt:t.alt})}),c.default.createElement(p.Modal,{bsSize:"large",show:this.state.showModal,onHide:function(){return e.close()}},c.default.createElement(p.Modal.Header,{closeButton:!0},c.default.createElement(p.Modal.Title,null,"Project Images/Gifs")),c.default.createElement(p.Modal.Body,null,c.default.createElement(p.Carousel,{interval:null,defaultActiveIndex:this.state.openIndex},m.default.projects.map(function(e,t){return c.default.createElement(p.Carousel.Item,{key:t},c.default.createElement("img",{style:y.image,src:h("./"+e.src,!0)}))}))),c.default.createElement(p.Modal.Footer,null,c.default.createElement(p.Button,{onClick:function(){return e.close()}},"Close")))))}}]),t}(c.default.Component);t.default=b},486:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(36),i=n(5),u=l(i),c={GITHUB:"default",PRODUCT:"success",MEDIA:"primary"},s={image:{cursor:"zoom-in"}},d=function(e){var t=e.src,n=e.title,l=e.alt,a=e.description,i=e.projectLinks,u=e.openModal,d=e.projectIndex;return o.default.createElement(r.Col,{xs:12,sm:6,md:4},o.default.createElement("div",{className:"thumbnail"},o.default.createElement("img",{style:s.image,onClick:function(){return u(d)},src:t,alt:""+l}),o.default.createElement("div",{className:"caption"},o.default.createElement("h3",null,""+n),o.default.createElement("p",null,""+a),o.default.createElement("p",null,i.map(function(e,t){return o.default.createElement(r.Button,{key:t,href:e.linkURL,bsStyle:c[e.linkType],style:{margin:"0 10px 10px 0"}},e.linkName)})))))};d.propTypes={src:u.default.string.isRequired,title:u.default.string.isRequired,alt:u.default.string.isRequired,description:u.default.string.isRequired,projectLinks:u.default.string.isRequired,openModal:u.default.func.isRequired,projectIndex:u.default.number.isRequired},t.default=d},487:function(e,t){e.exports={projects:[{title:"History AutoDelete",description:"An annoyance that I had with Google Maps was that every time I moved the map, it would spawn 3-4 history entries. So, after 5 minutes, I might have over 100 history entries. This extension is supposed to stop that from happening. This project introduced me to HTML, CSS, and JavaScript; it would also jump start me in the world of web development and web apps.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/History-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/history-autodelete/bhfakmaiadhflpjloimlagikhodjiefj"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/history-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/History-AutoDelete-for-Chrome.shtml"}],src:"history-autodelete.gif",alt:"A GIF showing how History AutoDelete can prevent multiple history entries from the same domain"},{title:"Cookie AutoDelete",description:"After History AutoDelete, I wanted to port Self Destructing Cookies which I think is an amazing cookie policy for web browsers that compromises between privacy and convenience. This extension will delete all unused cookies on tab close. Unused means that if all google.com tabs are closed then google.com cookies are cleared. This helps people set what cookies they want to keep and then forget about it (meaning you don't have to micromanage it).",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/Cookie-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/cookie-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/Cookie-AutoDelete.shtml"},{linkName:"Ghacks Review",linkType:"MEDIA",linkURL:"https://www.ghacks.net/2017/05/15/cookie-autodelete-for-firefox-webextension/"}],src:"cookie-autodelete.gif",alt:"A GIF showing the cleanup operation of Cookie AutoDelete on github.com"},{title:"Personal Website",description:"Using a boilerplate as a starting point, I turned it into what you see here today. All this was from scratch using React Components and BootStrap, taking into inspiration of my old website which was a template. The result is a personal website with more modern components (React Framework and BootStrap 3 via React-BootStrap) and easier expandability (maybe a blog?).",projectLinks:[{linkName:"Original Boilerplate",linkType:"GITHUB",linkURL:"http://spa-github-pages.rafrex.com/"}],src:"website-pic.jpg",alt:"The home page of this website"},{title:"TicTacTuring",description:"To get me to learn React Native, which is using the framework of React to create mobile apps, I created a simple TicTacToe game that is inspired from Lynda.com's TicTacTuring that was written in React-DOM. The main addition is that it also connects to a serverless backend, GraphCool. With that, users can login and see the history of all their games.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/TicTacTuring"}],src:"TicTacTuring.gif",alt:"A GIF showing how the mobile app operates"}]}},488:function(e,t,n){function l(e){return n(a(e))}function a(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./TicTacTuring.gif":489,"./cookie-autodelete.gif":490,"./history-autodelete.gif":491,"./website-pic.jpg":492};l.keys=function(){return Object.keys(o)},l.resolve=a,e.exports=l,l.id=488},489:function(e,t,n){e.exports=n.p+"bb9f8a8f5f0fa151f3b1a5a0ed3f23e4.gif"},490:function(e,t,n){e.exports=n.p+"c9670ba1abea2d7a9fb9ea467c402f46.gif"},491:function(e,t,n){e.exports=n.p+"d8bd11b7ab0224fec265899517b9cecb.gif"},492:function(e,t,n){e.exports=n.p+"cfde3feb565a9831c07f7dbb366b80b4.jpg"},493:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(36),i=n(494),u=l(i),c={center:{textAlign:"center"}},s=function(){return o.default.createElement(r.Grid,null,o.default.createElement(r.Row,null,o.default.createElement(r.Col,{xs:12,sm:6},o.default.createElement(r.Thumbnail,{src:u.default,alt:"Cartoon Picture of Kenny Do"},o.default.createElement("h3",{style:c.center},"Kenny Do"),o.default.createElement("p",null,"I have been interested in technology ever since I used my first computer at around 6. Through my interest, I learned how to tinker with stuff whether that be hardware or software. My interests are varied, going from Video Games to Web Development. I tinker with whatever I find interesting, so if I see a project or if I have an idea that I like, then I would see how would I implement it. In the process, I learned a lot from my projects, and also I enjoy seeing other people use something that I made."))),o.default.createElement(r.Col,{xs:12,sm:6},o.default.createElement(r.Accordion,null,o.default.createElement(r.Panel,{header:"Languages",eventKey:1},"Intermediate",o.default.createElement("ul",null,o.default.createElement("li",null,"HTML"),o.default.createElement("li",null,"CSS"),o.default.createElement("li",null,"JavaScript"),o.default.createElement("li",null,"Java"),o.default.createElement("li",null,"SQL")),"Some Experience",o.default.createElement("ul",null,o.default.createElement("li",null,"Facebook GraphQL"),o.default.createElement("li",null,"Bash"),o.default.createElement("li",null,"C++"),o.default.createElement("li",null,"C#"),o.default.createElement("li",null,"Python"))),o.default.createElement(r.Panel,{header:"Frameworks",eventKey:2},o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("a",{href:"https://facebook.github.io/react/"},"React")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://facebook.github.io/react/docs/react-dom.html"},"React DOM")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://facebook.github.io/react-native/"},"React Native")),o.default.createElement("li",null,o.default.createElement("a",{href:"http://redux.js.org/"},"Redux")),o.default.createElement("li",null,o.default.createElement("a",{href:"http://dev.apollodata.com/"},"Apollo")),o.default.createElement("li",null,o.default.createElement("a",{href:"http://graphql.org/"},"GraphQL")," via ",o.default.createElement("a",{href:"https://www.graph.cool/"},"Graph.Cool")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://getbootstrap.com/"},"BootStrap")," and ",o.default.createElement("a",{href:"https://react-bootstrap.github.io/"},"React-BootStrap")))),o.default.createElement(r.Panel,{header:"Software and Operating Systems",eventKey:3},"Software",o.default.createElement("ul",null,o.default.createElement("li",null,"GitHub"),o.default.createElement("li",null,"Eclipse"),o.default.createElement("li",null,"Atom"),o.default.createElement("li",null,"Trello"),o.default.createElement("li",null,"Microsoft Office (Word, Powerpoint, Excel)"),o.default.createElement("li",null,o.default.createElement("a",{href:"https://www.graph.cool/"},"Graph.Cool")," (Serverless backend as a service)")),"Operating Systems",o.default.createElement("ul",null,o.default.createElement("li",null,"Windows"),o.default.createElement("li",null,"Linux")))))))};t.default=s},494:function(e,t,n){e.exports=n.p+"790e741dab53e3f28de07b70956d96fc.png"},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(l),o=n(36),r=n(217),i={center:{textAlign:"center"},white:{background:"white",border:"1px solid #ddd",padding:"1em"},icons:{marginRight:"5px"}},u=function(){return a.default.createElement(o.Grid,null,a.default.createElement(o.Row,null,a.default.createElement(o.Col,{xs:12,sm:8},a.default.createElement("div",{style:i.white},a.default.createElement("h2",{style:i.center},"Get in Touch"),a.default.createElement("p",null,"If you like what you see here and would like to request a resume, please contact me via email."),a.default.createElement("p",null,"Also, if you have any questions, please don't hesitate to ask."))),a.default.createElement(o.Col,{xs:12,sm:4},a.default.createElement("div",{style:i.white},a.default.createElement("dl",null,a.default.createElement("dt",null,"Email"),a.default.createElement("dd",null,a.default.createElement("a",{href:"mailto:contact@kennydo.com",title:"Click to send me an email"},"contact@kennydo.com"))),a.default.createElement(r.SocialIcon,{style:i.icons,url:"mailto:contact@kennydo.com",network:"email",title:"Click to send me an email"}),a.default.createElement(r.SocialIcon,{style:i.icons,url:"https://github.com/mrdokenny",title:"Come see my projects"}),a.default.createElement(r.SocialIcon,{style:i.icons,url:"https://www.linkedin.com/in/dokenny",title:"Come to my Linkedin"})))))};t.default=u},501:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=l(a),r=n(5),i=l(r),u=function(e){var t=e.location;return o.default.createElement("p",null,"Page not found - the path, ",o.default.createElement("b",null,t.pathname),", did not match any React Router routes.")};u.propTypes={location:i.default.string},t.default=u}},[219]);