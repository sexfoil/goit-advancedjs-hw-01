import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as a}from"./assets/vendor-78be7656.js";const t="videoplayer-current-time",m=document.querySelector("#vimeo-player"),o=new r(m),l=localStorage.getItem(t);o.setCurrentTime(l??0);function n(e){localStorage.setItem(t,e)}const i=a(e=>n(e.seconds),1e3);o.on("timeupdate",i);
//# sourceMappingURL=commonHelpers2.js.map
