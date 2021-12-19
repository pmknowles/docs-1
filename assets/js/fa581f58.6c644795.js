"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4525],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return r?t.createElement(k,l(l({ref:n},p),{},{components:r})):t.createElement(k,l({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94669:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],s={sidebar_position:5},o="meters",d={unversionedId:"reference/configuration/meters",id:"reference/configuration/meters",isDocsHomePage:!1,title:"meters",description:"Meters (Strommessger\xe4te) ist eine Liste von in der Hausinstallation vorhandenen Ger\xe4ten, welche die Leistung und den Energieverbrauch, die PV Erzeugung oder Hausbatterienutzung zur Verf\xfcgung stellen k\xf6nnen. Ein meter definiert einen Punkt einer Energieleistung und kann ein physikalisches Ger\xe4t sein (z.b. ein Messger\xe4t am Netzanschlusspunkt), ein PV Wechselrichter (AC oder auch DC im Falle von Hybrid-Wechselrichtern), oder ein Batterie-Wechselrichter.",source:"@site/docs/reference/configuration/meters.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/meters",permalink:"/docs/reference/configuration/meters",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/meters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"chargers",permalink:"/docs/reference/configuration/chargers"},next:{title:"vehicles",permalink:"/docs/reference/configuration/vehicles"}},p=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",children:[{value:"<code>name</code>",id:"name",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3}],level:2},{value:"Unterst\xfctzte Typen",id:"unterst\xfctzte-typen",children:[{value:"<code>modbus</code>",id:"modbus",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-1",children:[{value:"<code>power</code>",id:"power",children:[],level:5},{value:"<code>energy</code>",id:"energy",children:[],level:5}],level:4},{value:"Optionale Parameter",id:"optionale-parameter",children:[{value:"<code>soc</code>",id:"soc",children:[],level:5}],level:4}],level:3},{value:"<code>lgess</code>",id:"lgess",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-2",children:[{value:"<code>usage</code>",id:"usage",children:[],level:5},{value:"<code>uri</code>",id:"uri",children:[],level:5},{value:"<code>password</code>",id:"password",children:[],level:5}],level:4}],level:3},{value:"<code>openwb</code>",id:"openwb",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-3",children:[{value:"<code>usage</code>",id:"usage-1",children:[],level:5},{value:"<code>broker</code>",id:"broker",children:[],level:5}],level:4}],level:3},{value:"<code>sma</code>",id:"sma",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-4",children:[{value:"<code>uri</code>",id:"uri-1",children:[],level:5}],level:4}],level:3},{value:"<code>tesla</code>",id:"tesla",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-5",children:[{value:"<code>usage</code>",id:"usage-2",children:[],level:5},{value:"<code>uri</code>",id:"uri-2",children:[],level:5},{value:"<code>password</code>",id:"password-1",children:[],level:5}],level:4}],level:3},{value:"<code>custom</code>",id:"custom",children:[{value:"Erforderliche Parameter",id:"erforderliche-parameter-6",children:[{value:"<code>power</code>",id:"power-1",children:[],level:5}],level:4},{value:"Optionale Parameter",id:"optionale-parameter-1",children:[{value:"<code>energy</code>",id:"energy-1",children:[],level:5}],level:4},{value:"<code>soc</code>",id:"soc-1",children:[],level:4},{value:"<code>currents</code>",id:"currents",children:[],level:4}],level:3}],level:2}],u={toc:p};function c(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meters"},(0,i.kt)("inlineCode",{parentName:"h1"},"meters")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Meters")," (Strommessger\xe4te) ist eine Liste von in der Hausinstallation vorhandenen Ger\xe4ten, welche die Leistung und den Energieverbrauch, die PV Erzeugung oder Hausbatterienutzung zur Verf\xfcgung stellen k\xf6nnen. Ein ",(0,i.kt)("inlineCode",{parentName:"p"},"meter")," definiert einen Punkt einer Energieleistung und kann ein physikalisches Ger\xe4t sein (z.b. ein Messger\xe4t am Netzanschlusspunkt), ein PV Wechselrichter (AC oder auch DC im Falle von Hybrid-Wechselrichtern), oder ein Batterie-Wechselrichter."),(0,i.kt)("p",null,"Wallboxen k\xf6nnen intern ein Messger\xe4t eingebaut haben, oder es kann auch extern angeschlossen sein. Falls eine Wallbox ein internes Strommessger\xe4t hat, dann muss in ",(0,i.kt)("inlineCode",{parentName:"p"},"meters")," ",(0,i.kt)("strong",{parentName:"p"},"kein")," Eintrag daf\xfcr angelegt werden. Falls die Wallbox keinen solchen Z\xe4hler hat, wird evcc den hier konfigurierten und der Wallbox im Ladepunkt unter ",(0,i.kt)("a",{parentName:"p",href:"loadpoints#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," zugewiesenen Z\xe4hler verwenden, oder annehmen dass die eingestellte Ladeleistung auch tats\xe4chlich genutzt wird."),(0,i.kt)("p",null,"evcc benutzt positive (+) Werte f\xfcr eingehende Str\xf6me (Netzbezug, PV Erzeugung, Hausbatterie-Entladung) und negative (-) Werte f\xfcr ausgehende Str\xf6me (Netzeinspeisung, PV Wechselrichter Ruhestrombedarf oder Hausbatterie-Ladung). Jeder anderweitiger Strombedarf, inklusive der Wallbox, ist immer ein positiver (+) Wert."),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"meters")," Konfiguration ist eine Liste von verschiedenen vorhandenen Ger\xe4ten."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"meters:\n- name: grid\n  type: ...\n- name: pv\n  type: ...\n- name: battery\n  type: ...\n- name: charge\n  type: ...\n")),(0,i.kt)("p",null,"Konfigurationen f\xfcr bekannte Ger\xe4te sind unter ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"Ger\xe4te - Hausinstallation")," zu finden."),(0,i.kt)("p",null,"Im folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,"Eine Kurzbezeichnung der hier definierten Wallbox. Der Wert wird in der Referenzierung des Ger\xe4tes in der Konfiguration der ",(0,i.kt)("a",{parentName:"p",href:"site"},"Site")," oder des ",(0,i.kt)("a",{parentName:"p",href:"loadpoints#meters"},"Ladepunktes")," verwendet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: wallbox1\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"Dies ist der evcc spezifische Messger\xe4te Typ, mit Hilfe dessen mit dem Ger\xe4t kommuniziert werden kann. Den passenden Typ f\xfcr bekannte Ger\xe4te findet man unter ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"Ger\xe4te - Hausinstallation"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: modbus\n")),(0,i.kt)("p",null,"Im folgenden sind die verschiedenen m\xf6glichen Typen und deren weitere Parameter dokumentiert:"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"unterst\xfctzte-typen"},"Unterst\xfctzte Typen"),(0,i.kt)("h3",{id:"modbus"},(0,i.kt)("inlineCode",{parentName:"h3"},"modbus")),(0,i.kt)("p",null,"Ger\xe4te welche \xfcber die ModBus Schnittstelle angebunden sind und vom Projekt ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd#supported-devices"},"MBMD")," unterst\xfctzt werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: modbus\n  power: Power\n  energy: Sum\n  soc: ChargeState\n  ...\n")),(0,i.kt)("h4",{id:"erforderliche-parameter-1"},"Erforderliche Parameter"),(0,i.kt)("p",null,"Zus\xe4tzlich zu den hier definierten Parametern, sind weitere Parameter notwendig. Diese sind unter in der ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/modbus"},"Modbus")," Dokumentation aufgef\xfchrt."),(0,i.kt)("h5",{id:"power"},(0,i.kt)("inlineCode",{parentName:"h5"},"power")),(0,i.kt)("p",null,"Definiert den MBMD Messwert welcher die Leistung zur\xfcckliefert, typischerweise ist das ",(0,i.kt)("inlineCode",{parentName:"p"},"Power"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  power: Power\n")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"energy"},(0,i.kt)("inlineCode",{parentName:"h5"},"energy")),(0,i.kt)("p",null,"Definiert den MBMD Messwert welcher die Energiemenge zur\xfcckliefert, typischerweise ist das ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  energy: Sum\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"optionale-parameter"},"Optionale Parameter"),(0,i.kt)("h5",{id:"soc"},(0,i.kt)("inlineCode",{parentName:"h5"},"soc")),(0,i.kt)("p",null,"Definiert den MBMD Messwert welcher den Ladestand der Batterie zur\xfcckliefert, typischerweise ist das ",(0,i.kt)("inlineCode",{parentName:"p"},"ChargeState"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  soc: ChargeState\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lgess"},(0,i.kt)("inlineCode",{parentName:"h3"},"lgess")),(0,i.kt)("p",null,"LG ESS Home 8/10 Ger\xe4te."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  type: lgess\n  usage: grid\n  uri: https://192.0.2.2/\n  password: "DE200..."\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Der Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," werden nur bei einem ",(0,i.kt)("inlineCode",{parentName:"p"},"meter")," Ger\xe4t ben\xf6tigt, falls mehrere konfiguriert werden."))),(0,i.kt)("h4",{id:"erforderliche-parameter-2"},"Erforderliche Parameter"),(0,i.kt)("h5",{id:"usage"},(0,i.kt)("inlineCode",{parentName:"h5"},"usage")),(0,i.kt)("p",null,"Definiert welches Messwerte hier ben\xf6tigt werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"grid")),": F\xfcr die Messwerte am Netzanschlusspunkt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pv")),": F\xfcr die Messwerte der PV Erzeugung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"battery")),": F\xfcr die Messwerte der Hausbatterie")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"uri"},(0,i.kt)("inlineCode",{parentName:"h5"},"uri")),(0,i.kt)("p",null,"Definiert die URL im Heimnetzwerk des LG ESS Ger\xe4tes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  uri: https://192.0.2.2/\n")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"password"},(0,i.kt)("inlineCode",{parentName:"h5"},"password")),(0,i.kt)("p",null,"Hier muss die Registriernummer des LG ESS HOME Wechselrichters eingetragen werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  password: "DE200..."\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"openwb"},(0,i.kt)("inlineCode",{parentName:"h3"},"openwb")),(0,i.kt)("p",null,"Verwendung der Messwerte von der OpenWB Wallbox"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: openwb\n  usage: grid\n  broker: 192.0.2.2\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Der Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," werden nur bei einem ",(0,i.kt)("inlineCode",{parentName:"p"},"meter")," Ger\xe4t ben\xf6tigt, falls mehrere konfiguriert werden."))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"erforderliche-parameter-3"},"Erforderliche Parameter"),(0,i.kt)("h5",{id:"usage-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"usage")),(0,i.kt)("p",null,"Definiert welches Messwerte hier ben\xf6tigt werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"grid")),": F\xfcr die Messwerte am Netzanschlusspunkt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pv")),": F\xfcr die Messwerte der PV Erzeugung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"battery")),": F\xfcr die Messwerte der Hausbatterie")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"broker"},(0,i.kt)("inlineCode",{parentName:"h5"},"broker")),(0,i.kt)("p",null,"Definiert den hostnamen oder die IP Adresse und die Portadresse im Heimnetzwerk der OpenWB."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  broker: 192.0.2.2:1883\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sma"},(0,i.kt)("inlineCode",{parentName:"h3"},"sma")),(0,i.kt)("p",null,"F\xfcr die Verwendung des SMA Home Manager 2.0 oder SMA Energy Meter oder eines SMA Wechselrichters. Die Ger\xe4te m\xfcssen das Protokoll Speedwire unterst\xfctzen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: sma\n  uri: 192.0.2.2\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"erforderliche-parameter-4"},"Erforderliche Parameter"),(0,i.kt)("h5",{id:"uri-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"uri")),(0,i.kt)("p",null,"Definiert den hostnamen oder die IP Adresse im Heimnetzwerk des Ger\xe4tes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  uri: 192.0.2.2\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tesla"},(0,i.kt)("inlineCode",{parentName:"h3"},"tesla")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"tesla")),": F\xfcr die Verwendung der Messwerte einer Tesla Powerwall."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  type: tesla\n  usage: grid\n  uri: https://192.0.2.2/\n  password: "***"\n')),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"erforderliche-parameter-5"},"Erforderliche Parameter"),(0,i.kt)("h5",{id:"usage-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"usage")),(0,i.kt)("p",null,"Definiert welches Messwerte hier ben\xf6tigt werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"grid")),": F\xfcr die Messwerte am Netzanschlusspunkt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pv")),": F\xfcr die Messwerte der PV Erzeugung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"battery")),": F\xfcr die Messwerte der Hausbatterie")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"uri-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"uri")),(0,i.kt)("p",null,"Definiert den hostnamen oder die IP Adresse im Heimnetzwerk des Ger\xe4tes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  uri: 192.0.2.2\n")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"password-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"password")),(0,i.kt)("p",null,"Hier muss das Password f\xfcr den Benutzer ",(0,i.kt)("em",{parentName:"p"},"customer")," (Kunde) eingetragen werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  password: "DasPasswort"\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"custom"},(0,i.kt)("inlineCode",{parentName:"h3"},"custom")),(0,i.kt)("p",null,"Standard Implementierung, bei welchem die einzelnen Werte \xfcber ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/plugins"},"Plugins")," definiert werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: custom\n  power: # Leistung (W)\n    source: # Plugin Typ\n    ...\n  energy: # Energiemenge (kWh)\n    source: # Plugin Typ\n    ...\n  soc: # Batterie SOC (%)\n    source: # Plugin Typ\n    ...\n  currents: # Stromst\xe4rke (A) pro Phase\n    - source: # Phase 1 Plugin Typ\n      ...\n    - source: # Phase 2 Plugin Typ\n      ...\n    - source: # Phase 3 Plugin Typ\n      ...\n  ...\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"erforderliche-parameter-6"},"Erforderliche Parameter"),(0,i.kt)("h5",{id:"power-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"power")),(0,i.kt)("p",null,"Plugin Definition um die Leistung in Watt (W) zur\xfcckzugeben."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  power: ... # Leistung (W)\n    source: # Plugin Typ\n    ...\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"optionale-parameter-1"},"Optionale Parameter"),(0,i.kt)("h5",{id:"energy-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"energy")),(0,i.kt)("p",null,"Plugin Definition um die geladene Energiemenge in kWh zur\xfcckzugeben."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  energy: ... # Energiemenge (kWh)\n    source: # Plugin Typ\n    ...\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"soc-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"soc")),(0,i.kt)("p",null,"Plugin Definiton um den Ladestand SOC in % zur\xfcckzugeben"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  soc: ... # Batterie SOC (%)\n    source: # Plugin Typ\n    ...\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"currents"},(0,i.kt)("inlineCode",{parentName:"h4"},"currents")),(0,i.kt)("p",null,"Eine Liste von Plugin Definitionen um die Stromst\xe4rke in A pro Phase zur\xfcckzugeben"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  currents: # Stromst\xe4rke (A) pro Phase\n    - source: # Phase 1 Plugin Typ\n      ...\n    - source: # Phase 2 Plugin Typ\n      ...\n    - source: # Phase 3 Plugin Typ\n      ...\n  ...\n")))}c.isMDXComponent=!0}}]);