var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequirea071;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){t[e]=a},e.parcelRequirea071=n),n("3vNOG"),n("jL0BM"),n("lF9VE"),n("1nCmX");var o=n("dSs1Y"),i=n("lCN0J");var s=(e,a=1,t="")=>{const n={totalItems:e,itemsPerPage:20,visiblePages:3,page:a,centerAlign:!0,firstItemClassName:"pagination--first",lastItemClassName:"pagination--last",template:{page:'<a href="#" class="pagination__btn">{{page}}</a>',currentPage:'<strong class="pagination__btn pagination__btn--current">{{page}}</strong>',moveButton:'<a href="#" class="pagination__btn pagination__btn--{{type}}"></a>',disabledMoveButton:'<a href="#" class="pagination__disabled pagination__btn--{{type}}"></a>',moreButton:'<a href="#" class="pagination__btn pagination__btn--{{type}}-ellipsis"><i class="fa-solid fa-ellipsis"></i></a>'}},o=document.getElementById("pagination"),i=new Pagination(o,n);return i.on("beforeMove",(function(e){t?d(t,e.page):c(e.page),window.scrollTo({top:400,behavior:"smooth"})})),i.on("afterMove",(function(e){})),i},r=n("6tYrs"),l=n("jV0Ik"),g=n("krGWQ");g.refs.catalogForm.addEventListener("submit",(function(e){e.preventDefault();const a=e.currentTarget,t=a.elements.search.value.trim();t?d(t):c(),a.reset()})),g.refs.catalogMovieList.addEventListener("click",p);const c=async(e=1)=>{try{o.Loading.standard("Loading...",{className:"hero-loading",backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const{results:a,total_pages:t}=await(0,i.fetchTrendingMoviesByWeek)(e);s(t,e);const n=a.map((e=>(0,r.movieListMarkup)(e))).join("");g.refs.catalogMovieList.innerHTML=n}catch(e){}finally{o.Loading.remove()}},d=async(e,a=1)=>{try{o.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const{results:t,total_pages:n}=await(0,i.fetchSearchMovies)(e,a);if(0===t.length)g.refs.catalogMovieList.innerHTML='\n        <li class="movie__item--notfound">\n          OOPS...<br/>\n          We are very sorry!<br/>\n          We don&apost have any results matching your search.<br/>\n        </li>',g.refs.paginationEl.classList.toggle("vhidden");else{s(n,a,e);const o=t.map((e=>(0,r.movieListMarkup)(e))).join("");g.refs.catalogMovieList.innerHTML=o,g.refs.catalogMovieList.addEventListener("click",p)}}catch(e){}finally{o.Loading.remove()}};function p(e){const a=e.target.closest("[data-movie-id]");if(!a)return;const t=a.dataset.movieId;(0,l.openMovieInfoModal)(t)}c();
//# sourceMappingURL=catalog.a2297939.js.map