(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,a){e.exports=a.p+"3eae201ef69330ff6cc5958334c5357c.png"},218:function(e,t,a){"use strict";var n=a(1),r=a(441),l=a(445),s=a(438),o=a(281),c=a(440),i=a(427);const m=["#0088FE","#00C49F","#FFBB28","#FF8042","#f44336","#e91e63","#00bcd4","#ff5722","#ff9800","#8bc34a"];t.a=(({data:e,animate:t})=>n.createElement(r.a,{width:"100%",height:250},n.createElement(l.a,null,n.createElement(s.a,null),n.createElement(o.a,null),n.createElement(c.a,{data:e,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:50,fill:"#8884d8",label:e.length>1,isAnimationActive:t},e.map((t,a)=>n.createElement(i.a,{key:a,fill:e.length>1?m[a%m.length]:m[5]}))))))},430:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(6),s=a(8),o=a.n(s),c=a(1),i=a.n(c),m=a(0),u=a.n(m),d=a(38),p=a(2),h={src:u.a.string,alt:u.a.string,href:u.a.string,onError:u.a.func,onLoad:u.a.func},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.src,a=e.alt,l=e.onError,s=e.onLoad,c=e.className,m=e.children,u=Object(r.a)(e,["src","alt","onError","onLoad","className","children"]),h=Object(p.f)(u),b=h[0],y=h[1],E=y.href?d.a:"div",f=Object(p.d)(b);return i.a.createElement(E,Object(n.a)({},y,{className:o()(c,f)}),i.a.createElement("img",{src:t,alt:a,onError:l,onLoad:s}),m&&i.a.createElement("div",{className:"caption"},m))},t}(i.a.Component);b.propTypes=h,t.a=Object(p.a)("thumbnail",b)},446:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(1),l=a.n(r),s=a(62),o=a(100),c=a(278),i=a(430),m=a(39),u=a.n(m),d=a(3),p=a(7),h=a(6),b=a(8),y=a.n(b),E=a(0),f=a.n(E),g=a(2),v=a(9),x=a(30),C=1e3;var O={min:f.a.number,now:f.a.number,max:f.a.number,label:f.a.node,srOnly:f.a.bool,striped:f.a.bool,active:f.a.bool,children:function(e,t,a){var n=e[t];if(!n)return null;var r=null;return l.a.Children.forEach(n,function(e){if(!r){var t=l.a.createElement(k,null);if(e.type!==t.type){var n=l.a.isValidElement(e)?e.type.displayName||e.type.name||e.type:e;r=new Error("Children of "+a+" can contain only ProgressBar components. Found "+n+".")}}}),r},isChild:f.a.bool};var k=function(e){function t(){return e.apply(this,arguments)||this}Object(h.a)(t,e);var a=t.prototype;return a.renderProgressBar=function(e){var t,a=e.min,n=e.now,r=e.max,s=e.label,o=e.srOnly,c=e.striped,i=e.active,m=e.className,u=e.style,h=Object(p.a)(e,["min","now","max","label","srOnly","striped","active","className","style"]),b=Object(g.f)(h),E=b[0],f=b[1],v=Object(d.a)({},Object(g.d)(E),((t={active:i})[Object(g.e)(E,"striped")]=i||c,t));return l.a.createElement("div",Object(d.a)({},f,{role:"progressbar",className:y()(m,v),style:Object(d.a)({width:function(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(n*C)/C}(n,a,r)+"%"},u),"aria-valuenow":n,"aria-valuemin":a,"aria-valuemax":r}),o?l.a.createElement("span",{className:"sr-only"},s):s)},a.render=function(){var e=this.props,t=e.isChild,a=Object(p.a)(e,["isChild"]);if(t)return this.renderProgressBar(a);var n=a.min,s=a.now,o=a.max,c=a.label,i=a.srOnly,m=a.striped,u=a.active,h=a.bsClass,b=a.bsStyle,E=a.className,f=a.children,g=Object(p.a)(a,["min","now","max","label","srOnly","striped","active","bsClass","bsStyle","className","children"]);return l.a.createElement("div",Object(d.a)({},g,{className:y()(E,"progress")}),f?x.a.map(f,function(e){return Object(r.cloneElement)(e,{isChild:!0})}):this.renderProgressBar({min:n,now:s,max:o,label:c,srOnly:i,striped:m,active:u,bsClass:h,bsStyle:b}))},t}(l.a.Component);k.propTypes=O,k.defaultProps={min:0,max:100,active:!1,isChild:!1,srOnly:!1,striped:!1};var w=Object(g.a)("progress-bar",Object(g.c)(u()(v.d),k)),S=a(56),j=a(235),N=a(216),P=a(437),A=a(22);var I=class extends r.Component{render(){const{loading:e,title:t,error:a}=this.props;return r.createElement(P.a,null,r.createElement(P.a.Heading,null,r.createElement(P.a.Title,{componentClass:"h3"},t)),r.createElement(P.a.Body,null,e?a?r.createElement("p",null,"Woops! There was an problem loading this card :("):r.createElement(A.a,{height:50}):this.props.children))}},L=a(218),B={controlId:f.a.string,validationState:f.a.oneOf(["success","warning","error",null])},F={$bs_formGroup:f.a.object.isRequired},R=function(e){function t(){return e.apply(this,arguments)||this}Object(h.a)(t,e);var a=t.prototype;return a.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},a.hasFeedback=function(e){var t=this;return x.a.some(e,function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)})},a.render=function(){var e=this.props,t=e.validationState,a=e.className,n=e.children,r=Object(p.a)(e,["validationState","className","children"]),s=Object(g.g)(r,["controlId"]),o=s[0],c=s[1],i=Object(d.a)({},Object(g.d)(o),{"has-feedback":this.hasFeedback(n)});return t&&(i["has-"+t]=!0),l.a.createElement("div",Object(d.a)({},c,{className:y()(a,i)}),n)},t}(l.a.Component);R.propTypes=B,R.childContextTypes=F;var T=Object(g.a)("form-group",Object(g.b)([v.c.LARGE,v.c.SMALL],R)),D=a(177);const $=n.b`
  mutation AddFeedBack ($text: String!){
    createFeedBack(text: $text)
  }
`;var G=class extends r.Component{constructor(){super(...arguments),this.state={email:"",honeyPot:"",isAnon:!1,submitted:!1,text:{value:"",validation:null}}}render(){return this.state.submitted?r.createElement("p",null,r.createElement("b",null,"Thank you for the submission.")):r.createElement("div",null,r.createElement("p",null,r.createElement("b",null,"Or Send an Anonymous Comment")),r.createElement(s.Mutation,{mutation:$},e=>r.createElement("form",{target:"frame",action:"/redirect",onSubmit:t=>{t.preventDefault(),e({variables:{text:this.state.text}}),this.setState({submitted:!0})}},r.createElement(T,{controlId:"text",validationState:this.state.text.validation},r.createElement("textarea",{value:this.state.text.value,onChange:e=>this.setState({text:{validation:""===e.target.value?"error":"success",value:e.target.value}}),className:"form-control"})),r.createElement("div",{style:{display:"none"}},r.createElement("label",null,"Keep this field blank"),r.createElement("input",{value:this.state.honeyPot,onChange:e=>this.setState({honeyPot:e.target.value}),type:"text"})),r.createElement(D.a,{style:{marginTop:"7px",float:"right"},type:"submit"},"Submit"))),r.createElement("iframe",{style:{display:"none"},name:"frame"}))}};const K={center:{textAlign:"center"},icons:{marginRight:"5px"},socialIcons:{marginTop:"5px"},white:{background:"white",border:"1px solid #ddd",marginBottom:"20px",padding:"1em"}},M=["success","info","warning","danger"];class q{constructor(){this.user={currentLanguageScores:{languageScore:{},languageScoreDiff:{}},recentCommit:{name:"",pushedAt:new Date,url:""},topContributedRepos:[]}}}const H=n.b`
query getProfile {
  user(username: "mrdokenny") {
    recentCommit {
      name
      pushedAt
      url
    }
    topContributedRepos
    currentLanguageScores
  }
}
`;class J extends s.Query{}t.default=(()=>r.createElement(J,{query:H},({loading:e,error:t,data:a})=>{let n=new q;e||(n=a);const{user:{recentCommit:l,topContributedRepos:s,currentLanguageScores:m}}=n;return r.createElement(o.a,null,r.createElement(c.a,{xs:12,sm:4},r.createElement(i.a,{src:N,alt:"Cartoon Picture of Kenny Do"},r.createElement("h3",{style:K.center},"Kenny Do"),r.createElement("p",null,"Why hello there and welcome to my website. All this data was pulled from my express server using the GitHub API. The"," ",r.createElement("a",{href:"https://api.kennydo.com/"},"express server")," crunches the raw data to get these stats for me.",r.createElement("i",null," As I am using free servers at this moment, the cards might take a while to load if the server has slept. Please be patient."))),r.createElement("div",{style:K.white},r.createElement("dl",null,r.createElement("dt",null,"Impressed? Get in touch"),r.createElement("dd",null,r.createElement("a",{href:"mailto:contact@kennydo.com",title:"Click to send me an email"},"contact@kennydo.com"),r.createElement("br",null))),r.createElement(G,null),r.createElement("div",{style:K.socialIcons},r.createElement(j.SocialIcon,{style:K.icons,url:"mailto:contact@kennydo.com",network:"email",title:"Click to send me an email"}),r.createElement(j.SocialIcon,{style:K.icons,url:"https://github.com/mrdokenny",title:"Come see my projects"}),r.createElement(j.SocialIcon,{style:K.icons,url:"https://www.linkedin.com/in/dokenny",title:"Come to my Linkedin"})))),r.createElement(c.a,{xs:12,sm:8},r.createElement(c.a,{xs:12,sm:12},r.createElement(I,{loading:e,error:t,title:"Skills Progress"},Object.keys(m.languageScore).map((e,t)=>{const{languageScore:a,languageScoreDiff:n}=m,l=n[e]/5e3*100,s=(a[e]-n[e])/5e3*100;return r.createElement("div",{key:t+e},r.createElement("p",null,e,r.createElement("b",null,` +${n[e]}`)),r.createElement(w,null,r.createElement(w,{striped:!0,bsStyle:M[t%M.length],now:s}),r.createElement(w,{striped:!0,bsStyle:M[t-1%M.length],now:l})))}),r.createElement("i",null,"Please don't take this as an accurate representation of my skills but rather take away my 'skill' to data analyse my GitHub Profile :)"),r.createElement("i",null," Also note that it doesn't take advantage of private repositories."))),r.createElement(c.a,{xs:12,sm:6},r.createElement(I,{loading:e,error:t,title:"Skills Distribution Chart"},r.createElement(L.a,{data:Object.keys(m.languageScore).map(e=>{const{languageScore:t}=m;return{name:e,value:t[e]}})}))),r.createElement(c.a,{xs:12,sm:6},r.createElement(I,{loading:e,error:t,title:"Latest Commit"},r.createElement("p",null,"I made a recent commit on Repository ",r.createElement("a",{href:l.url},l.name),` on ${new Date(l.pushedAt).toDateString()}`))),r.createElement(c.a,{xs:12,sm:6},r.createElement(I,{loading:e,error:t,title:"My Top 5 Repositories By Commits"},s.map(({node:e},t)=>{if(t<5)return r.createElement("p",{key:`${e.name}${t}`},r.createElement("a",{href:e.url},e.name),` has ${e.defaultBranchRef.target.history.totalCount} commits by me.`)}),r.createElement(S.LinkContainer,{to:"/projects"},r.createElement("a",null,r.createElement("i",null,"See all my Projects")))))))}))}}]);