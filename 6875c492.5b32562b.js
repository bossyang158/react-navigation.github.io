(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{276:function(e,a,t){"use strict";t.r(a);t(507);var r=t(0),n=t.n(r),l=t(493),c=t(509),o=t(490);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,s=a.name,i=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',s,'"'),n.a.createElement(o.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},494:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(68),t(491),t(492),t(495);var r=t(0),n=t.n(r),l=t(486),c=t.n(l),o=t(489),s=(t(121),["1.x","2.x","3.x","4.x"]);a.a=function(e){var a=Object(r.useState)(!1),l=a[0],i=a[1],m=Object(r.useRef)(null),u=Object(o.a)().siteConfig,d=(void 0===u?{}:u).themeConfig.algolia;function h(e){var a,t,r=(a=window.location.href,(t=s.findIndex((function(e){return a.includes(e)})))>=0?s[t]:"5.x");d.algoliaOptions.facetFilters=["version:"+r],window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,a,t){var r=document.createElement("a");r.href=t.url;var n="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;window.open(n,"_self")}}),e&&m.current.focus()}var p=function(e){void 0===e&&(e=!0),l||Promise.all([t.e(357).then(t.t.bind(null,496,7)),t.e(250).then(t.t.bind(null,498,7))]).then((function(a){var t=a[0].default;i(!0),window.docsearch=t,h(e)}))},g=Object(r.useCallback)((function(){p(),l&&m.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(r.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(r.useCallback)((function(e){var a="mouseover"!==e.type;p(a)}));return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:f,ref:m}))}},507:function(e,a,t){var r=t(24).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(11)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},509:function(e,a,t){"use strict";t(69);var r=t(0),n=t.n(r),l=t(486),c=t.n(l),o=t(485),s=t(490),i=t(518),m=t(122),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,m,h=e.children,p=e.frontMatter,g=e.metadata,f=e.truncated,v=e.isBlogPostPage,E=void 0!==v&&v,b=g.date,_=g.permalink,N=g.tags,x=p.author,w=p.title,k=p.author_url||p.authorURL,S=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],l=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},E?w:n.a.createElement(s.a,{to:_},w)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",m,", ",r)),n.a.createElement("div",{className:"avatar margin-bottom--md"},y&&n.a.createElement("a",{className:"avatar__photo-link",href:k,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:y,alt:x})),n.a.createElement("div",{className:"avatar__intro"},x&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},x)),n.a.createElement("small",{className:"avatar__subtitle"},S)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:i.a},h)),(N.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:g.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,"Read More")))))}}}]);