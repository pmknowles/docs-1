"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3999],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75467:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],l={sidebar_position:1},o="Einf\xfchrung",u={unversionedId:"Home",id:"Home",isDocsHomePage:!1,title:"Einf\xfchrung",description:"evcc erm\xf6glicht das Laden von Elektrofahrzeugen (EV) bedarfsgerecht zu steuern und den dazu ben\xf6tigten Energiebezug zu optimieren. Es kann eine Photovoltaikanlage (PV) angebunden werden, um so viel selbsterzeugte Energie wie m\xf6glich ins EV zu laden, oder es k\xf6nnen auch Anbieter mit dynamischen Strompreisen angebunden werden.",source:"@site/docs/Home.md",sourceDirName:".",slug:"/Home",permalink:"/docs/Home",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/Home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\xdcbersicht",permalink:"/docs/installation/overview"}},c=[{value:"Funktionalit\xe4ten",id:"funktionalit\xe4ten",children:[],level:2},{value:"Anforderungen",id:"anforderungen",children:[],level:2}],d={toc:c};function m(e){var n=e.components,l=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"einf\xfchrung"},"Einf\xfchrung"),(0,i.kt)("p",null,"evcc erm\xf6glicht das Laden von Elektrofahrzeugen (EV) bedarfsgerecht zu steuern und den dazu ben\xf6tigten Energiebezug zu optimieren. Es kann eine Photovoltaikanlage (PV) angebunden werden, um so viel selbsterzeugte Energie wie m\xf6glich ins EV zu laden, oder es k\xf6nnen auch Anbieter mit dynamischen Strompreisen angebunden werden."),(0,i.kt)("p",null,"Normalerweise muss die Wallbox dazu mit der bestehenden PV-Installation kompatibel, oft sogar vom selben Hersteller sein. evcc erm\xf6glicht dies jedoch hersteller\xfcbergreifend und mit einer Vielzahl von Wallboxen, Strommessger\xe4ten und PV-Wechselrichtern ohne dass diese speziell dazu vorgesehen sein m\xfcssen."),(0,i.kt)("p",null,"Dazu wird evcc auf einem System im lokalen Netzwerk installiert, so dass es mit allen notwendigen Ger\xe4ten kommunizieren kann. evcc selbst arbeitet dabei vollst\xe4ndig lokal und ben\xf6tigt selbst keine Cloud-Anbindung wenn keine der angebundenen Komponenten dies erfordert. Die Software ist sehr gen\xfcgsam, so dass ein einfaches NAS (Netzwerkspeicherger\xe4t) oder ein Kleinstcomputersystem wie z. B. ein Raspberry Pi (oder \xe4hnliches) v\xf6llig ausreichen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot",src:t(51805).Z})),(0,i.kt)("h2",{id:"funktionalit\xe4ten"},"Funktionalit\xe4ten"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einfache und klare Benutzeroberfl\xe4che"),(0,i.kt)("li",{parentName:"ul"},"Unterst\xfctzung von",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/devices/chargers"},"Wallboxen und schaltbaren Steckdosen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/devices/meters"},"Erzeugungsanlagen, Batteriespeichern und Energiemessger\xe4ten (Z\xe4hler)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/devices/vehicles"},"Fahrzeugen")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/plugins"},"Plugins")," um nahezu beliebige Wallboxen / Z\xe4hler / Fahrzeuge hinzuzuf\xfcgen: Modbus, HTTP, MQTT, Javascript, WebSockets und Shell Scripte"),(0,i.kt)("li",{parentName:"ul"},"Status ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/messaging"},"Benachrichtigungen")," \xfcber ",(0,i.kt)("a",{parentName:"li",href:"https://telegram.org"},"Telegram"),", ",(0,i.kt)("a",{parentName:"li",href:"https://pushover.net"},"PushOver")," und ",(0,i.kt)("a",{parentName:"li",href:"https://containrrr.dev/shoutrrr/"},"viele mehr")),(0,i.kt)("li",{parentName:"ul"},"Datenanalyse mit ",(0,i.kt)("a",{parentName:"li",href:"https://www.influxdata.com"},"InfluxDB")," und ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/"},"Grafana")),(0,i.kt)("li",{parentName:"ul"},"Stufenlose Regelung der Ladestr\xf6me mit unterst\xfctzen Wallboxen (z.b. bei smartWB als ",(0,i.kt)("a",{parentName:"li",href:"https://board.evse-wifi.de/viewtopic.php?f=16&t=187"},"OLC")," bezeichnet)"),(0,i.kt)("li",{parentName:"ul"},"REST- und MQTT-",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api"},"APIs")," zur Integration in andere Heimautomationssysteme (z.B. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc-hassio-addon"},"HomeAssistant"),")")),(0,i.kt)("h2",{id:"anforderungen"},"Anforderungen"),(0,i.kt)("p",null,"Um evcc zu verwenden wird mindestens folgendes ben\xf6tigt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eine unterst\xfctzte ",(0,i.kt)("a",{parentName:"li",href:"/docs/devices/chargers"},"Wallbox oder schaltbare Steckdose")),(0,i.kt)("li",{parentName:"ul"},"ein unterst\xfctztes ",(0,i.kt)("a",{parentName:"li",href:"/docs/devices/meters"},"Messger\xe4t")," am Hausanschluss, oder alternativ ein unterst\xfctzter PV-Wechselrichter bzw. anderes Messger\xe4t welches die aktuelle Erzeugungsleistung misst"),(0,i.kt)("li",{parentName:"ul"},"ein unterst\xfctztes System auf welchem evcc l\xe4uft")),(0,i.kt)("p",null,"Optional:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ein oder mehrere unterst\xfctzte ",(0,i.kt)("a",{parentName:"li",href:"/docs/devices/vehicles"},"Fahrzeuge")," deren Ladezustand abgerufen wird"),(0,i.kt)("li",{parentName:"ul"},"weitere unterst\xfctzte Wallboxen, schaltbare Steckdosen, PV-Erzeugungs- und Batteriespeichersysteme"),(0,i.kt)("li",{parentName:"ul"},"ein unterst\xfctztes ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/hems"},"Energiemanagementsystem")," (wie z. B. SMA Sunny Home Manager) oder ein dynamischer Stromtarif")),(0,i.kt)("p",null,"\xdcber diese Wege sind wir zu erreichen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support, Konfiguration, Fragen zu Ger\xe4ten: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/discussions"},"Community Support Forum")),(0,i.kt)("li",{parentName:"ul"},"Chat zu Entwicklungsthemen: ",(0,i.kt)("a",{parentName:"li",href:"https://join.slack.com/t/evccgroup/shared_invite/zt-fw52e6lt-tdazCp1LPdPlYuKz3PvTAw"},"Slack"),".")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"evcc kommt ohne jede Art von Garantie. Du verwendest die Software auf eigenes Risiko. Es liegt in deiner Verantwortung dass evcc so l\xe4uft wie es beabsichtigt ist."))))}m.isMDXComponent=!0},51805:function(e,n,t){n.Z=t.p+"assets/images/screenshot-22320160a593e3c4248d7f3d244b2bc5.png"}}]);