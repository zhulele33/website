!function(){function t(t){_.set(t)}function e(t){if(100!=t.get(Ye)&&y(ft(t,Ve))%1e4>=100*gt(t,Ye))throw"abort"}function n(t){if(z(ft(t,$e)))throw"abort"}function i(){var t=q.location.protocol;if("http:"!=t&&"https:"!=t)throw"abort"}function a(e){try{U.navigator.sendBeacon?t(42):U.XMLHttpRequest&&"withCredentials"in new U.XMLHttpRequest&&t(40)}catch(t){}e.set(me,x(e),!0),e.set(It,gt(e,It)+1);var n=[];ht.map(function(t,i){i.F&&void 0!=(t=e.get(t))&&t!=i.defaultValue&&("boolean"==typeof t&&(t*=1),n.push(i.F+"="+D(""+t)))}),n.push("z="+ct()),e.set(Lt,n.join("&"),!0)}function r(t){var e=ft(t,nn)||J()+"/collect",n=ft(t,At);if(!n&&t.get(Ct)&&(n="beacon"),n){var i=ft(t,Lt),a=(a=t.get(Tt))||I;"image"==n?et(e,i,a):"xhr"==n&&nt(e,i,a)||"beacon"==n&&it(e,i,a)||tt(e,i,a)}else tt(e,ft(t,Lt),t.get(Tt));e=t.get($e),n=(e=rt(e)).hitcount,e.hitcount=n?n+1:1,e=t.get($e),delete rt(e).pending_experiments,t.set(Tt,I,!0)}function o(t){(U.gaData=U.gaData||{}).expId&&t.set(ce,(U.gaData=U.gaData||{}).expId),(U.gaData=U.gaData||{}).expVar&&t.set(ue,(U.gaData=U.gaData||{}).expVar);var e=t.get($e);if(e=rt(e).pending_experiments){var n=[];for(i in e)e.hasOwnProperty(i)&&e[i]&&n.push(encodeURIComponent(i)+"."+encodeURIComponent(e[i]));var i=n.join("!")}else i=void 0;i&&t.set(he,i,!0)}function s(){if(U.navigator&&"preview"==U.navigator.loadPurpose)throw"abort"}function c(t){var e=U.gaDevIds;O(e)&&0!=e.length&&t.set("&did",e.join(","),!0)}function u(t){if(!t.get($e))throw"abort"}function h(e){var n=gt(e,de);if(500<=n&&t(15),"transaction"!=(i=ft(e,Et))&&"item"!=i){var i=gt(e,ve),a=(new Date).getTime(),r=gt(e,pe);if(0==r&&e.set(pe,a),0<(r=Math.round(2*(a-r)/1e3))&&(i=Math.min(i+r,20),e.set(pe,a)),0>=i)throw"abort";e.set(ve,--i)}e.set(de,++n)}function l(e,n,i,a){n[e]=function(){try{return a&&t(a),i.apply(this,arguments)}catch(t){throw at("exc",e,t&&t.name),t}}}function f(){var t,e;if((e=(e=U.navigator)?e.plugins:null)&&e.length)for(var n=0;n<e.length&&!t;n++){var i=e[n];-1<i.name.indexOf("Shockwave Flash")&&(t=i.description)}if(!t)try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");t=a.GetVariable("$version")}catch(t){}if(!t)try{t="WIN 6,0,21,0",(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")).AllowScriptAccess="always",t=a.GetVariable("$version")}catch(t){}if(!t)try{t=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(t){}return t&&(a=t.match(/[\d]+/g))&&3<=a.length&&(t=a[0]+"."+a[1]+" r"+a[2]),t||void 0}function g(t,e,n){"none"==e&&(e="");var i=[],a=X(t);t="__utma"==t?6:2;for(var r=0;r<a.length;r++){var o=(""+a[r]).split(".");o.length>=t&&i.push({hash:o[0],R:a[r],O:o})}if(0!=i.length)return 1==i.length?i[0]:d(e,i)||d(n,i)||d(null,i)||i[0]}function d(t,e){if(null==t)var n=t=1;else n=y(t),t=y(T(t,".")?t.substring(1):"."+t);for(var i=0;i<e.length;i++)if(e[i].hash==n||e[i].hash==t)return e[i]}function p(t,e){var n=new Date,i=U.navigator,a=i.plugins||[];for(t=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],e=0;e<a.length;++e)t.push(a[e].description);return y(t.join("."))}function v(t,e){var n=new Date,i=U.navigator;return y([t,i.userAgent,i.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e].join("."))}function m(t,e){if(e==q.location.hostname)return!1;for(var n=0;n<t.length;n++)if(t[n]instanceof RegExp){if(t[n].test(e))return!0}else if(0<=e.indexOf(t[n]))return!0;return!1}function w(t){return 0<=t.indexOf(".")||0<=t.indexOf(":")}function y(t){var e,n=1;if(t)for(n=0,e=t.length-1;0<=e;e--){var i=t.charCodeAt(e);n=0!=(i=266338304&(n=(n<<6&268435455)+i+(i<<14)))?n^i>>21:n}return n}var b=function(t){this.w=t||[]};b.prototype.set=function(t){this.w[t]=!0},b.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++)this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"};var _=new b,k=function(t,e){var n=new b(j(t));n.set(e),t.set(we,n.w)},x=function(t){t=j(t),t=new b(t);for(var e=_.w.slice(),n=0;n<t.w.length;n++)e[n]=e[n]||t.w[n];return new b(e).encode()},j=function(t){return t=t.get(we),O(t)||(t=[]),t},S=function(t){return"function"==typeof t},O=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t))},E=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String")},T=function(t,e){return 0==t.indexOf(e)},L=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},C=function(){for(var t=U.navigator.userAgent+(q.cookie?q.cookie:"")+(q.referrer?q.referrer:""),e=t.length,n=U.history.length;0<n;)t+=n--^e++;return[st()^2147483647&y(t),Math.round((new Date).getTime()/1e3)].join(".")},A=function(t){var e=q.createElement("img");return e.width=1,e.height=1,e.src=t,e},I=function(){},D=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e)},P=function(e,n,i,a){try{e.addEventListener?e.addEventListener(n,i,!!a):e.attachEvent&&e.attachEvent("on"+n,i)}catch(e){t(27)}},N=/^[\w\-:/.?=&%!]+$/,M=function(t,e,n,i){t&&(n?(i="",e&&N.test(e)&&(i=' id="'+e+'"'),N.test(t)&&q.write("<script"+i+' src="'+t+'"><\/script>')):(n=q.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,i&&(n.onload=i),e&&(n.id=e),(t=q.getElementsByTagName("script")[0]).parentNode.insertBefore(n,t)))},V=function(){return"https:"==q.location.protocol},G=function(t,e){return(t=t.match("(?:&|#|\\?)"+D(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==t.length?t[1]:""},R=function(){var t=""+q.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t},$=function(t){var e=q.referrer;if(/^https?:\/\//i.test(e)){if(t)return e;t="//"+q.location.hostname;var n=e.indexOf(t);if(!(5!=n&&6!=n||"/"!=(t=e.charAt(n+t.length))&&"?"!=t&&""!=t&&":"!=t))return;return e}},F=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},i=Math.min(t.length+1,e.length),a=0;a<i;a++){if("object"==typeof e[a]){for(var r in e[a])e[a].hasOwnProperty(r)&&(n[r]=e[a][r]);break}a<t.length&&(n[t[a]]=e[a])}return n},H=function(){this.keys=[],this.values={},this.m={}};H.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e},H.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t]},H.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],i=this.get(n);i&&t(n,i)}};var U=window,q=document,B=window,z=function(t){var e=B._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===B["ga-disable-"+t])return!0;try{var n=B.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(t){}return!1},X=function(t){var e=[],n=q.cookie.split(";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n.length;i++){var a=n[i].match(t);a&&e.push(a[1])}return e},W=function(e,n,i,a,r,o){if(!(r=!z(r)&&!(Z.test(q.location.hostname)||"/"==i&&Y.test(a))))return!1;if(n&&1200<n.length&&(n=n.substring(0,1200),t(24)),i=e+"="+n+"; path="+i+"; ",o&&(i+="expires="+new Date((new Date).getTime()+o).toGMTString()+"; "),a&&"none"!=a&&(i+="domain="+a+";"),a=q.cookie,q.cookie=i,!(a=a!=q.cookie))t:{for(e=X(e),a=0;a<e.length;a++)if(n==e[a]){a=!0;break t}a=!1}return a},K=function(t){return D(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},Y=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Z=/(^|\.)doubleclick\.net$/i,J=function(){return(xt||V()?"https:":"http:")+"//www.google-analytics.com"},Q=function(t){this.name="len",this.message=t+"-8192"},tt=function(t,e,n){if(n=n||I,2036>=e.length)et(t,e,n);else{if(!(8192>=e.length))throw at("len",e.length),new Q(e.length);it(t,e,n)||nt(t,e,n)||et(t,e,n)}},et=function(t,e,n){var i=A(t+"?"+e);i.onload=i.onerror=function(){i.onload=null,i.onerror=null,n()}},nt=function(t,e,n){var i=U.XMLHttpRequest;if(!i)return!1;var a=new i;return"withCredentials"in a&&(t=t.replace(/^http:/,"https:"),a.open("POST",t,!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){4==a.readyState&&(n(),a=null)},a.send(e),!0)},it=function(t,e,n){return!!U.navigator.sendBeacon&&(!!U.navigator.sendBeacon(t,e)&&(n(),!0))},at=function(t,e,n){1<=100*Math.random()||z("?")||(t=["t=error","_e="+t,"_v=j56","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+D(n.substring(0,100))),t.push("aip=1"),t.push("z="+st()),et(J()+"/collect",t.join("&"),I))},rt=function(t){var e=U.gaData=U.gaData||{};return e[t]=e[t]||{}},ot=function(){this.M=[]};ot.prototype.add=function(t){this.M.push(t)},ot.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&S(n)&&n.call(U,t)}}catch(t){}(e=t.get(Tt))!=I&&S(e)&&(t.set(Tt,I,!0),setTimeout(e,10))};var st=function(){return Math.round(2147483647*Math.random())},ct=function(){try{var t=new Uint32Array(1);return U.crypto.getRandomValues(t),2147483647&t[0]}catch(t){return st()}},ut=function(){this.data=new H},ht=new H,lt=[];ut.prototype.get=function(t){var e=vt(t),n=this.data.get(t);return e&&void 0==n&&(n=S(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n};var ft=function(t,e){return void 0==(t=t.get(e))?"":""+t},gt=function(t,e){return void 0==(t=t.get(e))||""===t?0:1*t};ut.prototype.set=function(t,e,n){if(t)if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&dt(this,i,t[i],n);else dt(this,t,e,n)};var dt=function(t,e,n,i){if(void 0!=n)switch(e){case $e:Xn.test(n)}var a=vt(e);a&&a.o?a.o(t,e,n,i):t.data.set(e,n,i)},pt=function(t,e,n,i,a){this.name=t,this.F=e,this.Z=i,this.o=a,this.defaultValue=n},vt=function(t){var e=ht.get(t);if(!e)for(var n=0;n<lt.length;n++){var i=lt[n],a=i[0].exec(t);if(a){e=i[1](a),ht.set(e.name,e);break}}return e},mt=function(t){var e;return ht.map(function(n,i){i.F==t&&(e=i)}),e&&e.name},wt=function(t,e,n,i,a){return t=new pt(t,e,n,i,a),ht.set(t.name,t),t.name},yt=function(t,e){lt.push([new RegExp("^"+t+"$"),e])},bt=function(t,e,n){return wt(t,e,n,void 0,_t)},_t=function(){},kt=E(window.GoogleAnalyticsObject)&&L(window.GoogleAnalyticsObject)||"ga",xt=!1,jt=bt("apiVersion","v"),St=bt("clientVersion","_v");wt("anonymizeIp","aip");var Ot=wt("adSenseId","a"),Et=wt("hitType","t"),Tt=wt("hitCallback"),Lt=wt("hitPayload");wt("nonInteraction","ni"),wt("currencyCode","cu"),wt("dataSource","ds");var Ct=wt("useBeacon",void 0,!1),At=wt("transport");wt("sessionControl","sc",""),wt("sessionGroup","sg"),wt("queueTime","qt");var It=wt("_s","_s");wt("screenName","cd");var Dt=wt("location","dl",""),Pt=wt("referrer","dr"),Nt=wt("page","dp","");wt("hostname","dh");var Mt=wt("language","ul"),Vt=wt("encoding","de");wt("title","dt",function(){return q.title||void 0}),yt("contentGroup([0-9]+)",function(t){return new pt(t[0],"cg"+t[1])});var Gt=wt("screenColors","sd"),Rt=wt("screenResolution","sr"),$t=wt("viewportSize","vp"),Ft=wt("javaEnabled","je"),Ht=wt("flashVersion","fl");wt("campaignId","ci"),wt("campaignName","cn"),wt("campaignSource","cs"),wt("campaignMedium","cm"),wt("campaignKeyword","ck"),wt("campaignContent","cc");var Ut=wt("eventCategory","ec"),qt=wt("eventAction","ea"),Bt=wt("eventLabel","el"),zt=wt("eventValue","ev"),Xt=wt("socialNetwork","sn"),Wt=wt("socialAction","sa"),Kt=wt("socialTarget","st"),Yt=wt("l1","plt"),Zt=wt("l2","pdt"),Jt=wt("l3","dns"),Qt=wt("l4","rrt"),te=wt("l5","srt"),ee=wt("l6","tcp"),ne=wt("l7","dit"),ie=wt("l8","clt"),ae=wt("timingCategory","utc"),re=wt("timingVar","utv"),oe=wt("timingLabel","utl"),se=wt("timingValue","utt");wt("appName","an"),wt("appVersion","av",""),wt("appId","aid",""),wt("appInstallerId","aiid",""),wt("exDescription","exd"),wt("exFatal","exf");var ce=wt("expId","xid"),ue=wt("expVar","xvar"),he=wt("exp","exp"),le=wt("_utma","_utma"),fe=wt("_utmz","_utmz"),ge=wt("_utmht","_utmht"),de=wt("_hc",void 0,0),pe=wt("_ti",void 0,0),ve=wt("_to",void 0,20);yt("dimension([0-9]+)",function(t){return new pt(t[0],"cd"+t[1])}),yt("metric([0-9]+)",function(t){return new pt(t[0],"cm"+t[1])}),wt("linkerParam",void 0,void 0,function(t){var e=t.get(Ve);if(t.get(tn)){var n=t.get(Qe);return t=v(n+e,0),"_ga=2."+D(t+"."+n+"-"+e)}return t=v(e,0),"_ga=1."+D(t+"."+e)},_t);var me=wt("usage","_u"),we=wt("_um");wt("forceSSL",void 0,void 0,function(){return xt},function(e,n,i){t(34),xt=!!i});var ye=wt("_j1","jid"),be=wt("_j2","gjid");yt("\\&(.*)",function(t){var e=new pt(t[0],t[1]),n=mt(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n)},e.o=function(t,e,i,a){t.set(n,i,a)},e.F=void 0),e});var _e=bt("_oot"),ke=wt("previewTask"),xe=wt("checkProtocolTask"),je=wt("validationTask"),Se=wt("checkStorageTask"),Oe=wt("historyImportTask"),Ee=wt("samplerTask"),Te=wt("_rlt"),Le=wt("buildHitTask"),Ce=wt("sendHitTask"),Ae=wt("ceTask"),Ie=wt("devIdTask"),De=wt("timingTask"),Pe=wt("displayFeaturesTask"),Ne=wt("customTask"),Me=bt("name"),Ve=bt("clientId","cid"),Ge=bt("clientIdTime"),Re=wt("userId","uid"),$e=bt("trackingId","tid"),Fe=bt("cookieName",void 0,"_ga"),He=bt("cookieDomain"),Ue=bt("cookiePath",void 0,"/"),qe=bt("cookieExpires",void 0,63072e3),Be=bt("legacyCookieDomain"),ze=bt("legacyHistoryImport",void 0,!0),Xe=bt("storage",void 0,"cookie"),We=bt("allowLinker",void 0,!1),Ke=bt("allowAnchor",void 0,!0),Ye=bt("sampleRate","sf",100),Ze=bt("siteSpeedSampleRate",void 0,1),Je=bt("alwaysSendReferrer",void 0,!1),Qe=bt("_gid","_gid"),tn=bt("_ge"),en=bt("_gcn"),nn=wt("transportUrl"),an=wt("_r","_r"),rn=function(t,e,n){this.V=t,this.fa=e,this.$=!1,this.oa=n,this.ea=1},on=function(t,e,n){if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.oa&&gt(e,t.oa))return gt(e,t.oa);if(0==e.get(Ze))return 0}return 0==t.V?0:(void 0===n&&(n=ct()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0)},sn=function(t){var e=Math.min(gt(t,Ze),100);return!(y(ft(t,Ve))%100>=e)},cn=function(t){var e={};if(un(e)||hn(e)){var n=e[Yt];void 0==n||1/0==n||isNaN(n)||(0<n?(ln(e,Jt),ln(e,ee),ln(e,te),ln(e,Zt),ln(e,Qt),ln(e,ne),ln(e,ie),setTimeout(function(){t(e)},10)):P(U,"load",function(){cn(t)},!1))}},un=function(t){var e=U.performance||U.webkitPerformance;if(!(e=e&&e.timing))return!1;var n=e.navigationStart;return 0!=n&&(t[Yt]=e.loadEventStart-n,t[Jt]=e.domainLookupEnd-e.domainLookupStart,t[ee]=e.connectEnd-e.connectStart,t[te]=e.responseStart-e.requestStart,t[Zt]=e.responseEnd-e.responseStart,t[Qt]=e.fetchStart-n,t[ne]=e.domInteractive-n,t[ie]=e.domContentLoadedEventStart-n,!0)},hn=function(t){if(U.top!=U)return!1;var e=U.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),2147483648<n&&(n=void 0),0<n&&e.setPageReadyTime(),void 0!=n&&(t[Yt]=n,!0)},ln=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},fn=function(t){return function(e){if("pageview"==e.get(Et)&&!t.I){t.I=!0;var n=sn(e);e=0<G(e.get(Dt),"gclid").length,(n||e)&&cn(function(e){t.send(n?"timing":"adtiming",e)})}}},gn=!1,dn=function(t){"cookie"==ft(t,Xe)&&(pn(t,Ve,Fe),t.get(tn)&&pn(t,Qe,en,864e5))},pn=function(e,n,i,a){var r=wn(e,n);if(r){i=ft(e,i),n=kn(ft(e,Ue));var o=_n(ft(e,He));a=a||1e3*gt(e,qe);var s=ft(e,$e);if("auto"!=o)W(i,r,n,o,s,a)&&(gn=!0);else{t(32);t:{if(r=[],4==(o=R().split(".")).length){var c=o[o.length-1];if(parseInt(c,10)==c){c=["none"];break t}}for(c=o.length-2;0<=c;c--)r.push(o.slice(c).join("."));r.push("none"),c=r}for(var u=0;u<c.length;u++)if(o=c[u],e.data.set(He,o),r=wn(e,Ve),W(i,r,n,o,s,a))return void(gn=!0);e.data.set(He,"auto")}}else e.get(tn)||t(54)},vn=function(t){if("cookie"==ft(t,Xe)&&!gn&&(dn(t),!gn))throw"abort"},mn=function(e){if(e.get(ze)){var n=ft(e,He),i=ft(e,Be)||R(),a=g("__utma",i,n);a&&(t(19),e.set(ge,(new Date).getTime(),!0),e.set(le,a.R),(n=g("__utmz",i,n))&&a.hash==n.hash&&e.set(fe,n.R))}},wn=function(t,e){e=K(ft(t,e));var n=_n(ft(t,He)).split(".").length;return 1<(t=xn(ft(t,Ue)))&&(n+="-"+t),e?["GA1",n,e].join("."):""},yn=function(e,n){if(!n||1>n.length)t(12);else{for(var i=[],a=0;a<n.length;a++){var r=n[a],o=r.split("."),s=o.shift();("GA1"==s||"1"==s)&&1<o.length?(1==(r=o.shift().split("-")).length&&(r[1]="1"),r[0]*=1,r[1]*=1,o={H:r,s:o.join(".")}):o=/^amp-/.test(r)?{H:[0,0],s:r}:void 0,o&&i.push(o)}if(1==i.length)return t(13),i[0].s;if(0!=i.length)return t(14),n=_n(ft(e,He)).split(".").length,1==(i=bn(i,n,0)).length?i[0].s:(e=xn(ft(e,Ue)),1<(i=bn(i,e,1)).length&&t(41),i[0]&&i[0].s);t(12)}},bn=function(t,e,n){for(var i,a=[],r=[],o=0;o<t.length;o++){var s=t[o];s.H[n]==e?a.push(s):void 0==i||s.H[n]<i?(r=[s],i=s.H[n]):s.H[n]==i&&r.push(s)}return 0<a.length?a:r},_n=function(t){return 0==t.indexOf(".")?t.substr(1):t},kn=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/"},xn=function(t){return"/"==(t=kn(t))?1:t.split("/").length},jn=new RegExp(/^https?:\/\/([^\/:]+)/),Sn=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,On=function(e){t(48),this.target=e,this.T=!1};On.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase())return void(t.href&&(t.href=En(this,t.href,e)));if("form"==t.tagName.toLowerCase())return Tn(this,t)}if("string"==typeof t)return En(this,t,e)};var En=function(t,e,n){(a=Sn.exec(e))&&3<=a.length&&(e=a[1]+(a[3]?a[2]+a[3]:"")),t=t.target.get("linkerParam");var i=e.indexOf("?"),a=e.indexOf("#");return n?e+=(-1==a?"#":"&")+t:(n=-1==i?"?":"&",e=-1==a?e+(n+t):e.substring(0,a)+n+t+e.substring(a)),e=e.replace(/&+_ga=/,"&_ga=")},Tn=function(t,e){if(e&&e.action)if("get"==e.method.toLowerCase()){t=t.target.get("linkerParam").split("=")[1];for(var n=e.childNodes||[],i=0;i<n.length;i++)if("_ga"==n[i].name)return void n[i].setAttribute("value",t);(n=q.createElement("input")).setAttribute("type","hidden"),n.setAttribute("name","_ga"),n.setAttribute("value",t),e.appendChild(n)}else"post"==e.method.toLowerCase()&&(e.action=En(t,e.action))};On.prototype.S=function(e,n,i){function a(i){try{t:{var a=(i=i||U.event).target||i.srcElement;for(i=100;a&&0<i;){if(a.href&&a.nodeName.match(/^a(?:rea)?$/i)){var o=a;break t}a=a.parentNode,i--}o={}}("http:"==o.protocol||"https:"==o.protocol)&&m(e,o.hostname||"")&&o.href&&(o.href=En(r,o.href,n))}catch(e){t(26)}}var r=this;this.T||(this.T=!0,P(q,"mousedown",a,!1),P(q,"keyup",a,!1)),i&&P(q,"submit",function(t){if(t=t||U.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(jn);n&&m(e,n[1])&&Tn(r,t)}})};var Ln,Cn=/^(GTM|OPT)-[A-Z0-9]+$/,An=/;_gaexp=[^;]*/g,In=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Dn=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,Pn=function(t){function e(t,e){e&&(n+="&"+t+"="+D(e))}var n="https://www.google-analytics.com/gtm/js?id="+D(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("cid",t.clientId),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.sync&&e("m","sync"),e("cycle",t.G),t.qa&&e("gclid",t.qa),Dn.test(q.referrer)&&e("cb",String(st())),n},Nn=function(t,e,n){this.U=ye,this.aa=e,(e=n)||(e=(e=ft(t,Me))&&"t0"!=e?$n.test(e)?"_gat_"+K(ft(t,$e)):"_gat_"+K(e):"_gat"),this.Y=e},Mn=function(t,e){var n=e.get(Le);e.set(Le,function(e){Vn(t,e,t.U),Vn(t,e,be);var i=n(e);return Gn(t,e),i});var i=e.get(Ce);e.set(Ce,function(e){var n=i(e);return Rn(t,e),n})},Vn=function(t,e,n){e.get(n)||("1"==X(t.Y)[0]?e.set(n,"",!0):e.set(n,""+st(),!0))},Gn=function(t,e){e.get(t.U)&&W(t.Y,"1",e.get(Ue),e.get(He),e.get($e),6e4)},Rn=function(t,e){if(e.get(t.U)){var n=new H,i=function(t){vt(t).F&&n.set(vt(t).F,e.get(t))};i(jt),i(St),i($e),i(Ve),i(Re),i(t.U),i(be),i(Qe),n.set(vt(me).F,x(e));var a=t.aa;n.map(function(t,e){a+=D(t)+"=",a+=D(""+e)+"&"}),a+="z="+st(),A(a),e.set(t.U,"",!0)}},$n=/^gtm\d+$/,Fn=function(t,e){if(!(t=t.b).get("dcLoaded")){k(t,29);var n;(e=e||{})[Fe]&&(n=K(e[Fe])),e=new Nn(t,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",n),Mn(e,t),t.set("dcLoaded",!0)}},Hn=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get(Xe)){k(t,51);var e=new Nn(t);Vn(e,t,e.U),Vn(e,t,be),Gn(e,t),t.get(e.U)&&(t.set(an,1,!0),t.set(nn,J()+"/r/collect",!0))}},Un=function(){var t=U.gaGlobal=U.gaGlobal||{};return t.hid=t.hid||st()},qn=function(t,e,n){if(!Ln){var i=q.location.hash,a=U.name,r=/^#?gaso=([^&]*)/;(a=(i=(i=i&&i.match(r)||a&&a.match(r))?i[1]:X("GASO")[0]||"")&&i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(W("GASO",""+i,n,e,t,0),window._udo||(window._udo=e),window._utcp||(window._utcp=n),t=a[1],M("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+st(),"_gasojs")),Ln=!0}},Bn=function(t){return t?(1*t).toFixed(3):"0"},zn=function(e){var n=U.performance;if(n&&n.getEntriesByName){t(35);var i="https://www.google-analytics.com/analytics.js?wpid="+e;M(i,void 0,void 0,function(){try{var a=1,r=n.getEntriesByName("https://www.google-analytics.com/analytics.js");r&&0!=r.length||(r=n.getEntriesByName("http://www.google-analytics.com/analytics.js"),a=0);var o=n.getEntriesByName(i);if(r&&1==r.length&&o&&1==o.length){t(37);var s=r[0],c=o[0],u={tid:e,ad:Bn(s.duration),bd:Bn(c.duration),ar:Bn(s.responseEnd-s.requestStart),br:Bn(c.responseEnd-c.requestStart),an:Bn(s.domainLookupEnd-s.domainLookupStart),bn:Bn(c.domainLookupEnd-c.domainLookupStart),ac:Bn(s.connectEnd-s.connectStart),bc:Bn(c.connectEnd-c.connectStart),as:a};(a=[]).push("_v=j56"),a.push("id=10");for(var h in u)u.hasOwnProperty(h)&&a.push(h+"="+D(u[h]));a.push("z="+st()),et("https://www.google-analytics.com/u/d",a.join("&"),I)}}catch(t){}})}},Xn=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,Wn=function(t){function l(t,e){g.b.data.set(t,e)}function f(t,e){l(t,e),g.filters.add(t)}var g=this;this.b=new ut,this.filters=new ot,l(Me,t[Me]),l($e,L(t[$e])),l(Fe,t[Fe]),l(He,t[He]||R()),l(Ue,t[Ue]),l(qe,t[qe]),l(Be,t[Be]),l(ze,t[ze]),l(We,t[We]),l(Ke,t[Ke]),l(Ye,t[Ye]),l(Ze,t[Ze]),l(Je,t[Je]),l(Xe,t[Xe]),l(Re,t[Re]),l(Ge,t[Ge]),l(tn,t[tn]),l(jt,1),l(St,"j56"),f(_e,n),f(Ne,I),f(ke,s),f(xe,i),f(je,u),f(Se,vn),f(Oe,mn),f(Ee,e),f(Te,h),f(Ae,o),f(Ie,c),f(Pe,Hn),f(Le,a),f(Ce,r),f(De,fn(this)),Kn(this.b,t[Ve]),Yn(this.b),this.b.set(Ot,Un()),qn(this.b.get($e),this.b.get(He),this.b.get(Ue)),this.ra=new rn(1e4,!0,"gaexp10")},Kn=function(e,n){if(e.data.set(tn,e.get(tn)||1==on(new rn(1,!0),void 0,y(e.get(Ve)))),e.get(tn)){a=ft(e,Fe);e.data.set(en,"_ga"==a?"_gid":a+"_gid")}if("cookie"==ft(e,Xe)){if(gn=!1,a=X(ft(e,Fe)),!(a=yn(e,a))){a=ft(e,He);void 0!=(a=g("__utma",r=ft(e,Be)||R(),a))?(t(10),a=a.O[1]+"."+a.O[2]):a=void 0}a&&(e.data.set(Ve,a),a=X(ft(e,en)),(a=yn(e,a))&&e.data.set(Qe,a),gn=!0)}t:if(a=e.get(Ke),r=G(q.location[a?"href":"search"],"_ga"))if(e.get(We))if(-1==(a=r.indexOf(".")))t(22);else{var i=r.substring(0,a),a=(o=r.substring(a+1)).indexOf("."),r=o.substring(0,a),o=o.substring(a+1);if("1"==i){if(a=o,r!=p(a,0)&&r!=p(a,-1)&&r!=p(a,-2)&&r!=v(a,0)&&r!=v(a,-1)&&r!=v(a,-2)){t(23);break t}}else{if("2"!=i){t(22);break t}if(a=o.indexOf("-"),i=o.substring(0,a),a=o.substring(a+1),r!=p(i+a,0)&&r!=p(i+a,-1)&&r!=p(i+a,-2)&&r!=v(i+a,0)&&r!=v(i+a,-1)&&r!=v(i+a,-2)){t(53);break t}t(2),e.data.set(Qe,i)}t(11),e.data.set(Ve,a)}else t(21);n&&(t(9),e.data.set(Ve,D(n))),e.get(Ve)||((n=(n=U.gaGlobal&&U.gaGlobal.vid)&&-1!=n.search(/^(?:utma\.)?\d+\.\d+$/)?n:void 0)?(t(17),e.data.set(Ve,n)):(t(8),e.data.set(Ve,C()))),e.get(tn)&&!e.get(Qe)&&(t(3),e.data.set(Qe,C())),dn(e)},Yn=function(e){var n=U.navigator,i=U.screen,a=q.location;if(e.set(Pt,$(e.get(Je))),a){var r=a.pathname||"";"/"!=r.charAt(0)&&(t(31),r="/"+r),e.set(Dt,a.protocol+"//"+a.hostname+r+a.search)}i&&e.set(Rt,i.width+"x"+i.height),i&&e.set(Gt,i.colorDepth+"-bit");var i=q.documentElement,o=(r=q.body)&&r.clientWidth&&r.clientHeight,s=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===q.compatMode||!o)?s=[i.clientWidth,i.clientHeight]:o&&(s=[r.clientWidth,r.clientHeight]),i=0>=s[0]||0>=s[1]?"":s.join("x"),e.set($t,i),e.set(Ht,f()),e.set(Vt,q.characterSet||q.charset),e.set(Ft,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(Mt,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),a&&e.get(Ke)&&(n=q.location.hash)){for(n=n.split(/[?&#]+/),a=[],i=0;i<n.length;++i)(T(n[i],"utm_id")||T(n[i],"utm_campaign")||T(n[i],"utm_source")||T(n[i],"utm_medium")||T(n[i],"utm_term")||T(n[i],"utm_content")||T(n[i],"gclid")||T(n[i],"dclid")||T(n[i],"gclsrc"))&&a.push(n[i]);0<a.length&&(n="#"+a.join("&"),e.set(Dt,e.get(Dt)+n))}};Wn.prototype.get=function(t){return this.b.get(t)},Wn.prototype.set=function(t,e){this.b.set(t,e)};var Zn={pageview:[Nt],event:[Ut,qt,Bt,zt],social:[Xt,Wt,Kt],timing:[ae,re,se,oe]};Wn.prototype.send=function(t){if(!(1>arguments.length)){if("string"==typeof arguments[0])var e=arguments[0],n=[].slice.call(arguments,1);else e=arguments[0]&&arguments[0][Et],n=arguments;e&&(n=F(Zn[e]||[],n),n[Et]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={},on(this.ra,this.b)&&zn(this.b.get($e)))}},Wn.prototype.ma=function(t,e){var n=this;oi(t,n,e)||(ci(t,function(){oi(t,n,e)}),si(String(n.get(Me)),t,void 0,e,!0))};var Jn,Qn,ti,ei,ni=function(t){return"prerender"!=q.visibilityState&&(t(),!0)},ii=function(e){if(!ni(e)){t(16);var n=!1,i=function(){if(!n&&ni(e)){n=!0;var t=i,a=q;a.removeEventListener?a.removeEventListener("visibilitychange",t,!1):a.detachEvent&&a.detachEvent("onvisibilitychange",t)}};P(q,"visibilitychange",i)}},ai=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,ri=function(t){if(S(t[0]))this.u=t[0];else{var e=ai.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(E(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C)throw"abort";if(this.i&&(!E(e)||""==e))throw"abort";if(this.g&&(!E(e)||""==e||!S(t)))throw"abort";if(w(this.c)||w(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};Jn=new H,ti=new H,ei=new H,Qn={ec:45,ecommerce:46,linkid:47};var oi=function(t,e,n){e==gi||e.get(Me);var i=Jn.get(t);return!!S(i)&&(e.plugins_=e.plugins_||new H,!!e.plugins_.get(t)||(e.plugins_.set(t,new i(e,n||{})),!0))},si=function(e,n,i,a,r){if(!S(Jn.get(n))&&!ti.get(n)){if(Qn.hasOwnProperty(n)&&t(Qn[n]),Cn.test(n)){if(t(52),!(e=gi.j(e)))return!0;a={id:n,B:(i=a||{}).dataLayer||"dataLayer",ia:!!e.get("anonymizeIp"),sync:r,G:!1},e.get("&gtm")==n&&(a.G=!0);var o=String(e.get("name"));"t0"!=o&&(a.target=o),z(String(e.get("trackingId")))||(a.clientId=String(e.get(Ve)),a.ka=Number(e.get(Ge)),i=i.palindrome?In:An,i=(i=q.cookie.replace(/^|(; +)/g,";").match(i))?i.sort().join("").substring(1):void 0,a.la=i,a.qa=G(e.b.get(Dt)||"","gclid")),e=a.B,i=(new Date).getTime(),U[e]=U[e]||[],i={"gtm.start":i},r||(i.event="gtm.js"),U[e].push(i),i=Pn(a)}!i&&Qn.hasOwnProperty(n)?(t(39),i=n+".js"):t(43),i&&(i&&0<=i.indexOf("/")||(i=(xt||V()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+i),a=li(i),e=a.protocol,i=q.location.protocol,("https:"==e||e==i||("http:"!=e?0:"http:"==i))&&hi(a)&&(M(a.url,void 0,r),ti.set(n,!0)))}},ci=function(t,e){var n=ei.get(t)||[];n.push(e),ei.set(t,n)},ui=function(t,e){Jn.set(t,e),e=ei.get(t)||[];for(var n=0;n<e.length;n++)e[n]();ei.set(t,[])},hi=function(t){var e=li(q.location.href);return!!T(t.url,"https://www.google-analytics.com/gtm/js?id=")||!(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))&&(t.host==e.host&&t.port==e.port||(e="http:"==t.protocol?80:443,!("www.google-analytics.com"!=t.host||(t.port||e)!=e||!T(t.path,"/plugins/"))))},li=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase(),n=1*t.port||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",T(t,"/")||(t="/"+t),[e,""+n,t]}var n=q.createElement("a");n.href=q.location.href;var i=(n.protocol||"").toLowerCase(),a=e(n),r=n.search||"",o=i+"//"+a[0]+(a[1]?":"+a[1]:"");return T(t,"//")?t=i+t:T(t,"/")?t=o+t:!t||T(t,"?")?t=o+a[2]+(t||r):0>t.split("/")[0].indexOf(":")&&(t=o+a[2].substring(0,a[2].lastIndexOf("/"))+"/"+t),n.href=t,i=e(n),{protocol:(n.protocol||"").toLowerCase(),host:i[0],port:i[1],path:i[2],query:n.search||"",url:t||""}},fi={ga:function(){fi.f=[]}};fi.ga(),fi.D=function(t){var e=fi.J.apply(fi,arguments),e=fi.f.concat(e);for(fi.f=[];0<e.length&&!fi.v(e[0])&&(e.shift(),!(0<fi.f.length)););fi.f=fi.f.concat(e)},fi.J=function(t){for(var e,n=[],i=0;i<arguments.length;i++)try{(e=new ri(arguments[i])).g?ui(e.a[0],e.a[1]):(e.i&&(e.ha=si(e.c,e.a[0],e.X,e.W)),n.push(e))}catch(t){}return n},fi.v=function(t){try{if(t.u)t.u.call(U,gi.j("t0"));else{var e=t.c==kt?gi:gi.j(t.c);if(t.A)"t0"!=t.c||gi.create.apply(gi,t.a);else if(t.ba)gi.remove(t.c);else if(e)if(t.i){if(t.ha&&(t.ha=si(t.c,t.a[0],t.X,t.W)),!oi(t.a[0],e,t.W))return!0}else if(t.K){var n=t.C,i=t.a,a=e.plugins_.get(t.K);a[n].apply(a,i)}else e[t.C].apply(e,t.a)}}catch(t){}};var gi=function(e){t(1),fi.D.apply(fi,[arguments])};gi.h={},gi.P=[],gi.L=0,gi.answer=42;var di=[$e,He,Me];gi.create=function(t){var e=F(di,[].slice.call(arguments));e[Me]||(e[Me]="t0");var n=""+e[Me];return gi.h[n]?gi.h[n]:(e=new Wn(e),gi.h[n]=e,gi.P.push(e),e)},gi.remove=function(t){for(var e=0;e<gi.P.length;e++)if(gi.P[e].get(Me)==t){gi.P.splice(e,1),gi.h[t]=null;break}},gi.j=function(t){return gi.h[t]},gi.getAll=function(){return gi.P.slice(0)},gi.N=function(){"ga"!=kt&&t(49);var e=U[kt];if(!e||42!=e.answer){if(gi.L=e&&e.l,gi.loaded=!0,l("create",n=U[kt]=gi,n.create),l("remove",n,n.remove),l("getByName",n,n.j,5),l("getAll",n,n.getAll,6),n=Wn.prototype,l("get",n,n.get,7),l("set",n,n.set,4),l("send",n,n.send),l("requireSync",n,n.ma),n=ut.prototype,l("get",n,n.get),l("set",n,n.set),!V()&&!xt){t:{for(var n=q.getElementsByTagName("script"),i=0;i<n.length&&100>i;i++){var a=n[i].src;if(a&&0==a.indexOf("https://www.google-analytics.com/analytics")){t(33),n=!0;break t}}n=!1}n&&(xt=!0)}V()||xt||!on(new rn(1e4))||(t(36),xt=!0),(U.gaplugins=U.gaplugins||{}).Linker=On,n=On.prototype,ui("linker",On),l("decorate",n,n.ca,20),l("autoLink",n,n.S,25),ui("displayfeatures",Fn),ui("adfeatures",Fn),e=e&&e.q,O(e)?fi.D.apply(gi,e):t(50)}},gi.da=function(){for(var t=gi.getAll(),e=0;e<t.length;e++)t[e].get(Me)};var pi=gi.N,vi=U[kt];vi&&vi.r?pi():ii(pi),ii(function(){fi.D(["provide","render",I])})}(window);