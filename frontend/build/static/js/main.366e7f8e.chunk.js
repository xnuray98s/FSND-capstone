(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{186:function(e,t,c){"use strict";c.r(t);var r=c(222),s=c(217),a=(c(138),c(200)),n=Object(a.a)({fonts:{heading:"Noto Sans JP",body:"Noto Sans JP"},config:{initialColorMode:"light",useSystemColorMode:!1}}),i=c(0),o=c.n(i),l=c(118),j=c.n(l),d=c(4),b=c(223),h=c(208),x=c(209),O=c(128),g=c(55),u=c(34),m=c(202),f=c(125),p=c(205),v=c(219),C=c(207),y=c(201),S=c(1),A=function(){var e=Object(O.b)(),t=e.colorMode,c=e.toggleColorMode,r=Object(y.a)("(max-width: 800px)"),s=Object(d.a)(r,1)[0],a=Object(u.b)(),n=a.isAuthenticated,i=a.loginWithRedirect,l=a.logout,j=s?Object(S.jsxs)(o.a.Fragment,{children:[Object(S.jsx)(m.a,{}),Object(S.jsxs)(v.a,{children:[Object(S.jsx)(v.b,{as:f.a,bgColor:"teal",color:"white",_hover:{bg:"teal.700"},_active:{bg:"teal.700"},children:Object(S.jsx)(g.a,{})}),Object(S.jsxs)(v.f,{children:[Object(S.jsxs)(v.d,{title:"Movies",children:[Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/get-movies",children:"All Movies"})}),Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/form-movies",children:"Add Movie"})})]}),Object(S.jsx)(v.c,{}),Object(S.jsxs)(v.d,{title:"Actors & Actresses",children:[Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/get-actors",children:"All Actors & Actresses"})}),Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/form-actors",children:"Add Actor or Actress"})})]}),Object(S.jsx)(v.c,{}),n?Object(S.jsx)(v.e,{onClick:function(){return l({returnTo:window.location.origin})},children:"Log out"}):Object(S.jsx)(v.e,{onClick:function(){return i()},children:"Log in"}),Object(S.jsx)(v.e,{onClick:c,children:"light"===t?"Dark Mode":"Light Mode"})]})]})]}):Object(S.jsxs)(o.a.Fragment,{children:[Object(S.jsxs)(b.a,{spacing:"20px",ml:"10",children:[Object(S.jsx)(v.a,{children:Object(S.jsx)(p.a,{href:"/",children:Object(S.jsx)(v.b,{children:"Homepage"})})}),Object(S.jsxs)(v.a,{children:[Object(S.jsx)(v.b,{children:"Movies"}),Object(S.jsx)(v.f,{children:Object(S.jsxs)(v.d,{children:[Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/get-movies",children:"All Movies"})}),Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/form-movies",children:"Add Movie"})})]})})]}),Object(S.jsxs)(v.a,{children:[Object(S.jsx)(v.b,{children:"Actors & Actresses"}),Object(S.jsx)(v.f,{children:Object(S.jsxs)(v.d,{children:[Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/get-actors",children:"All Actors & Actresses"})}),Object(S.jsx)(v.e,{children:Object(S.jsx)(p.a,{href:"/form-actors",children:"Add Actor or Actress"})})]})})]})]}),Object(S.jsx)(m.a,{}),n?Object(S.jsx)(f.a,{mt:1,bgColor:"teal.500",color:"white",_hover:{bg:"teal.700"},onClick:function(){return l({returnTo:window.location.origin})},children:"Log out"}):Object(S.jsx)(f.a,{bgColor:"teal.500",color:"white",_hover:{bg:"teal.700"},onClick:function(){return i()},children:"Log in"}),Object(S.jsx)(C.a,{ml:8,icon:"light"===t?Object(S.jsx)(g.d,{}):Object(S.jsx)(g.e,{}),isRound:"true",onClick:c})]});return Object(S.jsx)(b.c,{p:5,children:Object(S.jsxs)(h.a,{w:"100%",children:[Object(S.jsx)(x.a,{ml:"8",size:"md",children:"FSND Casting Agency"}),j]})})},w=c(210),z=c(211),B=c(224),M=function(){Object(O.b)().colorMode;var e=Object(y.a)("(max-width: 800px)"),t=Object(d.a)(e,1)[0];return Object(S.jsxs)(b.b,{spacing:"15%",ml:"10",direction:"row",h:"2xl",children:[Object(S.jsxs)(b.c,{mt:"15%",align:"flex-start",spacing:"10%",children:[Object(S.jsx)(x.a,{as:"h1",size:"4xl",children:"the best casting agent"}),Object(S.jsx)(w.a,{fontSize:"2xl",children:"we find the perfect cast for your movie"})]}),Object(S.jsx)(z.a,{children:Object(S.jsx)(B.a,{boxSize:"500px",mt:t?"90%":"40%",objectFit:"contain",src:"panalight.png"})})]})},k=c(122),W=c(17),I=c(8),R=c.n(I),T=c(19),N=c(213),P=c(225),E=c(212),F=c(221),L=(c(33),c(220)),G=function(e){var t=e.movie,c=Object(i.useState)(!1),r=Object(d.a)(c,2),s=r[0],a=r[1],n=Object(O.c)("gray.600","gray.400"),o=Object(O.c)("gray.100","gray.700");return Object(S.jsxs)(z.a,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",bgColor:o,children:[Object(S.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",height:"300px"}}),Object(S.jsxs)(z.a,{p:"6",children:[Object(S.jsxs)(z.a,{d:"flex",alignItems:"baseline",children:[Object(S.jsx)(E.a,{borderRadius:"full",px:"2",colorScheme:"teal",children:t.rating}),Object(S.jsxs)(z.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:[t.genres," | ",t.release]})]}),Object(S.jsx)(z.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:t.title}),Object(S.jsxs)(z.a,{children:[Object(S.jsxs)(z.a,{as:"span",color:n,fontSize:"sm",children:["Cast: ",t.cast]}),Object(S.jsx)(L.a,{startingHeight:25,in:s,children:t.plot}),Object(S.jsxs)(f.a,{size:"sm",colorScheme:"teal",variant:"link",onClick:function(){a(!s)},children:["read ",s?"less":"more"]})]}),Object(S.jsxs)(z.a,{position:"relative",d:"flex",mt:2,children:[Object(S.jsx)(F.a,{mt:.5,color:"teal.500"},1),Object(S.jsxs)(z.a,{as:"span",ml:"2",color:n,fontSize:"sm",children:[t.imdb,"/10"]})]})]})]},t.id)},K=function(){var e=Object(u.b)().getAccessTokenSilently,t=Object(i.useState)(null),c=Object(d.a)(t,2),r=c[0],s=c[1];return Object(i.useEffect)((function(){Object(T.a)(R.a.mark((function t(){var c,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({audience:"capstone",scope:"get:movies"});case 3:return c=t.sent,t.next=6,fetch("/movies",{headers:{Authorization:"Bearer ".concat(c)}});case 6:return r=t.sent,t.t0=s,t.next=10,r.json();case 10:t.t1=t.sent,(0,t.t0)(t.t1),t.next=17;break;case 14:t.prev=14,t.t2=t.catch(0),console.error(t.t2);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}),[e]),r?Object(S.jsxs)("div",{className:"moviesList",children:[Object(S.jsx)(x.a,{ml:10,children:"Movies"}),Object(S.jsx)(N.a,{}),Object(S.jsx)(P.a,{ml:10,mt:5,mr:10,spacing:10,minChildWidth:"300px",columnGap:"100px",children:r.map((function(e){return Object(S.jsx)(G,{movie:e})}))})]}):Object(S.jsx)("div",{children:"Loading..."})},D=function(e){var t=e.actor,c=Object(O.c)("gray.600","gray.400"),r=Object(O.c)("gray.100","gray.700"),s=new Date;return Object(S.jsxs)(z.a,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",bgColor:r,children:[Object(S.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",height:"300px"}}),Object(S.jsxs)(z.a,{p:"6",children:[Object(S.jsxs)(z.a,{d:"flex",alignItems:"baseline",children:[Object(S.jsx)(E.a,{borderRadius:"full",px:"2",colorScheme:"teal",children:t.type}),Object(S.jsx)(z.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:t.nationality})]}),Object(S.jsx)(z.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:t.name}),Object(S.jsxs)(z.a,{children:[Object(S.jsxs)(z.a,{as:"span",color:c,fontSize:"sm",children:[s.getFullYear()-t.dob," years old"]}),Object(S.jsxs)(z.a,{children:["Movie: ",t.movie]})]})]})]},t.id)},J=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(u.b)().getAccessTokenSilently;return Object(i.useEffect)((function(){Object(T.a)(R.a.mark((function e(){var t,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s({audience:"capstone",scope:"get:actors"});case 3:return t=e.sent,e.next=6,fetch("/actors",{headers:{Authorization:"Bearer ".concat(t)}});case 6:return c=e.sent,e.t0=r,e.next=10,c.json();case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(0),console.error(e.t2);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}),[s]),c?Object(S.jsxs)("div",{className:"actorsList",children:[Object(S.jsx)(x.a,{ml:10,children:"Actors & Actresses"}),Object(S.jsx)(N.a,{}),Object(S.jsx)(P.a,{ml:10,mt:5,mr:10,spacing:10,minChildWidth:"200px",columnGap:"100px",children:c.map((function(e){return Object(S.jsx)(D,{actor:e})}))})]}):Object(S.jsx)("div",{children:"Loading..."})},H=c(121),V=function(){return Object(S.jsx)(z.a,{as:"footer",role:"contentinfo",mx:"auto",maxW:"7xl",py:"12",px:{base:"4",md:"8"},children:Object(S.jsxs)(b.b,{children:[Object(S.jsxs)(b.b,{direction:"row",spacing:"4",align:"center",justify:"space-between",children:[Object(S.jsx)(w.a,{fontSize:"lg",children:"Nourah Almutairi"}),Object(S.jsxs)(H.a,{variant:"ghost",color:"gray.600",children:[Object(S.jsx)(C.a,{as:"a",href:"#","aria-label":"LinkedIn",icon:Object(S.jsx)(g.c,{fontSize:"20px"})}),Object(S.jsx)(C.a,{as:"a",href:"#","aria-label":"GitHub",icon:Object(S.jsx)(g.b,{fontSize:"20px"})}),Object(S.jsx)(C.a,{as:"a",href:"#","aria-label":"Twitter",icon:Object(S.jsx)(g.f,{fontSize:"20px"})})]})]}),Object(S.jsx)(w.a,{fontSize:"sm",children:"\xa9 2021 MiSK & Udacity. Capstone project."})]})})},Y=c(91),Q=c(74),U=c(214),_=c(215),q=c(216),X=c(90),Z=c.n(X),$=function(){var e=Object(u.b)().getAccessTokenSilently,t=Object(i.useState)({title:"",image:"",cast:"",plot:"",genres:"",rating:"",imdb:"",release:""}),c=Object(d.a)(t,2),r=c[0],s=c[1],a=Object(i.useRef)(),n=Object(Y.a)().handleSubmit,o=function(t){var c=a.current.files[0],n=a.current.files[0].name;s(r);new Z.a({bucketName:"capstone-project98",region:"us-east-2",accessKeyId:"AKIAYPXATKMQBFPV7IMU",secretAccessKey:"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"}).uploadFile(c,n).then((function(e){204===e.status?(r.image=e.location,console.log("success")):console.log("fail")}));var i=JSON.stringify({title:r.title,image:r.image,cast:r.cast,plot:r.plot,genres:r.genres,rating:r.rating,imdb:r.imdb,release:r.release});console.log(i),Object(T.a)(R.a.mark((function t(){var c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({audience:"capstone",scope:"post:movies"});case 3:return c=t.sent,t.next=6,fetch("/movies",{method:"POST",headers:{Authorization:"Bearer ".concat(c)},body:i});case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},l=function(e){r[e.target.id]=e.target.value},j=Object(O.c)("gray.100","gray.700"),g=Object(y.a)("(min-width: 600px)");return Object(d.a)(g,1)[0]?Object(S.jsx)(h.a,{height:"2xl",alignItems:"center",justifyContent:"center",children:Object(S.jsx)("form",{onSubmit:n(o),children:Object(S.jsxs)(b.b,{direction:"column",spacing:4,p:12,rounded:6,children:[Object(S.jsxs)(z.a,{bgColor:j,p:8,maxWidth:"4xl",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(S.jsx)(x.a,{size:"lg",children:"Add movie"}),Object(S.jsxs)(b.a,{children:[Object(S.jsxs)(b.c,{children:[Object(S.jsxs)(Q.a,{id:"title",name:"title",isRequired:!0,children:[Object(S.jsx)(U.a,{children:"Title"}),Object(S.jsx)(_.a,{placeholder:"Movie's title",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"cast",children:[Object(S.jsx)(U.a,{children:"Cast"}),Object(S.jsx)(_.a,{placeholder:"E.g.: Brad Pitt, Will Smith..",size:"md",w:"20rem",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"genres",children:[Object(S.jsx)(U.a,{children:"Genres"}),Object(S.jsx)(_.a,{placeholder:"E.g.: Action, Fantasy...",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"image",children:[Object(S.jsx)(U.a,{children:"Image"}),Object(S.jsx)(_.a,{type:"file",size:"md",focusBorderColor:"teal.500",onChange:l,ref:a})]})]}),Object(S.jsxs)(b.c,{children:[Object(S.jsxs)(Q.a,{id:"release",children:[Object(S.jsx)(U.a,{children:"Release date"}),Object(S.jsx)(_.a,{placeholder:"Year",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"rating",children:[Object(S.jsx)(U.a,{children:"Rating"}),Object(S.jsx)(_.a,{placeholder:"E.g.: PG-13..",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"imdb",children:[Object(S.jsx)(U.a,{children:"IMDb Rating"}),Object(S.jsx)(_.a,{placeholder:"E.g.: 7.8",size:"md",focusBorderColor:"teal.500",onChange:l})]})]})]}),Object(S.jsxs)(Q.a,{id:"plot",children:[Object(S.jsx)(U.a,{children:"Plot"}),Object(S.jsx)(q.a,{placeholder:"Movie's plot",size:"md",focusBorderColor:"teal.500",onChange:l})]})]}),Object(S.jsx)(f.a,{mt:4,colorScheme:"teal",type:"submit",children:"Submit"})]})})}):Object(S.jsx)(h.a,{height:"xl",alignItems:"center",justifyContent:"center",children:Object(S.jsx)("form",{onSubmit:n(o),children:Object(S.jsx)(z.a,{bgColor:j,p:3,maxWidth:"4xl",borderWidth:1,borderRadius:8,boxShadow:"lg",children:Object(S.jsxs)(b.b,{direction:"column",spacing:2,children:[Object(S.jsx)(x.a,{size:"lg",children:"Add movie"}),Object(S.jsxs)(Q.a,{id:"title",isRequired:!0,children:[Object(S.jsx)(U.a,{children:"Title"}),Object(S.jsx)(_.a,{placeholder:"Movie's title",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"cast",children:[Object(S.jsx)(U.a,{children:"Cast"}),Object(S.jsx)(_.a,{placeholder:"E.g.: Brad Pitt, Will Smith..",size:"md",w:"20rem",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"genres",children:[Object(S.jsx)(U.a,{children:"Genres"}),Object(S.jsx)(_.a,{placeholder:"E.g.: Action, Fantasy...",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(b.a,{children:[Object(S.jsxs)(Q.a,{id:"release",children:[Object(S.jsx)(U.a,{children:"Release date"}),Object(S.jsx)(_.a,{placeholder:"Year",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"rating",children:[Object(S.jsx)(U.a,{children:"Rating"}),Object(S.jsx)(_.a,{placeholder:"E.g.: PG-13..",size:"md",focusBorderColor:"teal.500",onChange:l})]})]}),Object(S.jsxs)(Q.a,{id:"imdb",children:[Object(S.jsx)(U.a,{children:"IMDb Rating"}),Object(S.jsx)(_.a,{placeholder:"E.g.: 7.8",size:"md",focusBorderColor:"teal.500",onChange:l})]}),Object(S.jsxs)(Q.a,{id:"plot",children:[Object(S.jsx)(U.a,{children:"Plot"}),Object(S.jsx)(q.a,{placeholder:"Movie's plot",size:"md",focusBorderColor:"teal.500",onChange:l})]})]})})})})},ee=c(92),te=c(226),ce=function(){var e=Object(u.b)().getAccessTokenSilently,t=Object(i.useState)({name:"",image:"",dob:"",movie:"",nationality:"",gender:""}),c=Object(d.a)(t,2),r=c[0],s=c[1],a=Object(i.useRef)(),n=Object(Y.a)().handleSubmit,o=function(e){"m"==e||"f"==e?r.gender=e:r[e.target.id]=e.target.value},l=Object(O.c)("gray.100","gray.700");return Object(S.jsx)(h.a,{height:"2xl",alignItems:"center",justifyContent:"center",children:Object(S.jsx)("form",{onSubmit:n((function(t){var c=a.current.files[0],n=a.current.files[0].name;s(r);new Z.a({bucketName:"capstone-project98",region:"us-east-2",accessKeyId:"AKIAYPXATKMQBFPV7IMU",secretAccessKey:"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"}).uploadFile(c,n).then((function(e){204===e.status?(r.image=e.location,console.log("success")):console.log("fail")}));var i=JSON.stringify({name:r.name,image:r.image,movie:r.movie,dob:r.dob,nationality:r.nationality,gender:r.gender});console.log(i),Object(T.a)(R.a.mark((function t(){var c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e({audience:"capstone",scope:"post:actors"});case 3:return c=t.sent,t.next=6,fetch("/actors",{method:"POST",headers:{Authorization:"Bearer ".concat(c)},body:i});case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()})),children:Object(S.jsxs)(z.a,{bgColor:l,p:8,maxWidth:"4xl",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(S.jsxs)(b.b,{direction:"column",spacing:4,rounded:6,children:[Object(S.jsx)(x.a,{size:"lg",children:"Add Actor & Actress"}),Object(S.jsxs)(Q.a,{id:"name",isRequired:!0,children:[Object(S.jsx)(U.a,{children:"Name"}),Object(S.jsx)(_.a,{placeholder:"First and Last name",focusBorderColor:"teal.500",onChange:o})]}),Object(S.jsxs)(Q.a,{id:"dob",children:[Object(S.jsx)(U.a,{children:"Date Of Birth"}),Object(S.jsx)(_.a,{type:"date",size:"md",focusBorderColor:"teal.500",onChange:o})]}),Object(S.jsxs)(Q.a,{id:"movie",children:[Object(S.jsx)(U.a,{children:"Movie"}),Object(S.jsx)(_.a,{placeholder:"Movie's Title",size:"md",focusBorderColor:"teal.500",onChange:o})]}),Object(S.jsxs)(Q.a,{id:"nationality",children:[Object(S.jsx)(U.a,{children:"Nationality"}),Object(S.jsx)(_.a,{placeholder:"E.g.: American..",size:"md",focusBorderColor:"teal.500",onChange:o})]}),Object(S.jsxs)(Q.a,{id:"gender",children:[Object(S.jsx)(U.a,{children:"Gender"}),Object(S.jsx)(ee.a,{defaultValue:"2",colorScheme:"teal.500",onChange:o,children:Object(S.jsxs)(b.b,{spacing:5,direction:"row",children:[Object(S.jsx)(te.a,{value:"m",children:"Male"}),Object(S.jsx)(te.a,{value:"f",children:"Female"})]})})]}),Object(S.jsxs)(Q.a,{id:"image",children:[Object(S.jsx)(U.a,{children:"Image"}),Object(S.jsx)(_.a,{type:"file",size:"md",focusBorderColor:"teal.500",ref:a})]})]}),Object(S.jsx)(f.a,{mt:4,colorScheme:"teal",type:"submit",children:"Submit"})]})})})};var re=function(){return Object(S.jsx)(k.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(A,{}),Object(S.jsx)("div",{className:"Content",children:Object(S.jsxs)(W.c,{children:[Object(S.jsx)(W.a,{path:"/get-movies",children:Object(S.jsx)(K,{})}),Object(S.jsx)(W.a,{path:"/get-actors",children:Object(S.jsx)(J,{})}),Object(S.jsx)(W.a,{path:"/form-movies",children:Object(S.jsx)($,{})}),Object(S.jsx)(W.a,{path:"/form-actors",children:Object(S.jsx)(ce,{})}),Object(S.jsx)(W.a,{path:"/",children:Object(S.jsx)(M,{})})]})}),Object(S.jsx)(V,{})]})})};j.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsxs)(r.a,{theme:n,children:[Object(S.jsx)(s.a,{initialColorMode:n.config.initialColorMode}),Object(S.jsx)(u.a,{domain:"capstone-project-udacity.us.auth0.com",clientId:"eJSrsrctWvWxsSihE1W80S6ODdiy55Ko",audience:"capstone",redirectUri:window.location.origin,prompt:"consent",children:Object(S.jsx)(re,{})})]})}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.366e7f8e.chunk.js.map