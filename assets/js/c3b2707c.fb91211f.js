"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[2783],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68663:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Version 0.73",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},c=void 0,u={permalink:"/blog/2021/12/12/version-0-73",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2021-12-12/version-0-73.md",source:"@site/blog/2021-12-12/version-0-73.md",title:"Version 0.73",description:"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.",date:"2021-12-12T00:00:00.000Z",formattedDate:"December 12, 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.75,truncated:!1,authors:[{name:"Andreas Linde",title:"Core-Team, Allrounder",url:"https://github.com/DerAndereAndi",imageURL:"https://github.com/DerAndereAndi.png",key:"derandereandi"}],prevItem:{title:"Version 0.74",permalink:"/blog/2021/12/19/version-0-74"},nextItem:{title:"Version 0.72",permalink:"/blog/2021/12/10/version-0-72"}},s={authorsImageUrls:[void 0]},d=[{value:"<code>evcc configure</code>",id:"evcc-configure",children:[],level:2},{value:"Standort-Erkennung",id:"standort-erkennung",children:[],level:2},{value:"Download &amp; Installation",id:"download--installation",children:[],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen."),(0,i.kt)("h2",{id:"evcc-configure"},(0,i.kt)("inlineCode",{parentName:"h2"},"evcc configure")),(0,i.kt)("p",null,"Das Kommando zur gef\xfchrten Erstellung einer Konfigurationsdatei und die darunterliegenden Templates hat folgende Verbesserungen erhalten:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bei einem Ladepunkt kann nun eingestellt werden, ob beim Abstecken des Ladekabels die Lade-Standardeinstellungen wieder hergestellt werden sollen. Mehr dazu in unserer Dokumentation unter ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/loadpoints#resetondisconnect"},(0,i.kt)("inlineCode",{parentName:"a"},"resetOnDisconnect"))),(0,i.kt)("li",{parentName:"ul"},"Es k\xf6nnen nun Fahrzeugspezifische Lade-Standardwerte eingerichtet werden. Interaktiv sind diese mit ",(0,i.kt)("inlineCode",{parentName:"li"},"evcc configure --advanced")," verf\xfcgbar. Mehr dazu in der Dokumentation unter ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/vehicles#onidentify"},(0,i.kt)("inlineCode",{parentName:"a"},"onIdentify"))),(0,i.kt)("li",{parentName:"ul"},"Ger\xe4te mit Modbus erzeugen nun korrekte Konfigurationen"),(0,i.kt)("li",{parentName:"ul"},"Verbesserter Umgang wenn eine ",(0,i.kt)("inlineCode",{parentName:"li"},"evcc.yaml")," Datei bereits im aktuellen Ordner existiert aber andere Zugriffsrechte hat.")),(0,i.kt)("h2",{id:"standort-erkennung"},"Standort-Erkennung"),(0,i.kt)("p",null,"F\xfcr einige Fahrzeuge kann ",(0,i.kt)("strong",{parentName:"p"},"evcc")," nun den aktuellen Standort erkennen. Dies wird momentan jedoch noch nicht aktiv verwendet."),(0,i.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/linux"},"Debian, Ubuntu, Raspberry Pi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/macos"},"macOS Homebrew")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/docker"},"Docker, Synology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"Manuell (inkl. Windows)"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.73"},"Detaillierte Liste der \xc4nderungen"))))}m.isMDXComponent=!0}}]);