var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequirea071;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequirea071=n),n("3vNOG"),n("jL0BM"),n("lF9VE"),n("1nCmX");var o=n("2j7ES"),i=n("4jPST");const d=document.querySelector(".dropdown__select"),l=o.genres.map((({name:e})=>`<li class="dropdown__select-option" role="option">${e}</li>`)).join("");d.insertAdjacentHTML("beforeend",l);const c=document.querySelector(".dropdown__filter-selected");Array.from(document.querySelectorAll(".dropdown__select-option")).forEach((e=>{e.addEventListener("click",(()=>{c.textContent=e.textContent,(0,i.renderFilteredLibrary)(e.textContent)}))})),document.addEventListener("click",(e=>{const r=document.querySelector(".dropdown__switch"),t=e.target;if(t==r)return;t.closest(".dropdown__filter")||(r.checked=!1)}));i=n("4jPST"),i=n("4jPST");var a=n("krGWQ");i=n("4jPST");a.refs.libraryMovieList.addEventListener("click",i.handlerMovieListClick),(0,i.initLibrary)();
//# sourceMappingURL=library.4618ac24.js.map