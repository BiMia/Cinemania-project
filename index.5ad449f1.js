var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},e={},o=n.parcelRequirea071;null==o&&((o=function(n){if(n in i)return i[n].exports;if(n in e){var o=e[n];delete e[n];var a={id:n,exports:{}};return i[n]=a,o.call(a.exports,a,a.exports),a.exports}var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(n,i){e[n]=i},n.parcelRequirea071=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.5ad449f1.js","6rPHm":"default-movie-img@2x.2bd481c5.png","5UbS1":"catalog.56fc9316.css","7adTC":"library.c6b80c84.js"}')),o("3vNOG"),o("jL0BM"),o("lF9VE"),o("1nCmX");var a=o("dSs1Y"),t=o("lCN0J"),s=o("iHGmp"),r=o("6tYrs");const d=n=>{let i;i=window.innerWidth<768?(0,s.randomIndex)():(0,s.randomIndex)(3);return i.map((i=>(0,r.movieListMarkup)(n[i]))).join("")};var l=o("jV0Ik"),c=o("krGWQ");function g(n){const i=n.target.closest("[data-movie-id]");if(!i)return;const e=i.dataset.movieId;(0,l.openMovieInfoModal)(e)}(async()=>{try{a.Loading.standard("Loading...",{className:"hero-loading",backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const{results:n}=await(0,t.fetchTrendingMoviesByWeek)();c.refs.movieList.innerHTML=d(n),c.refs.movieList.addEventListener("click",g)}catch(n){console.log(`Error in renderTrendingMoviesByWeek: ${n}`)}finally{a.Loading.remove()}})();a=o("dSs1Y"),t=o("lCN0J");var u,p=o("8RzAb");u=new URL(o("kyEFX").resolve("6rPHm"),import.meta.url).toString();const m=n=>{const{id:i,title:e,original_title:o,vote_average:a,vote_count:t,popularity:s,overview:r,genre_ids:d,poster_path:l,backdrop_path:c,release_date:g}=n;let m;const _=(0,p.getGenreNames)(d).join(", ");m=window.innerWidth<768?`https://image.tmdb.org/t/p/w500/${l}`:`https://image.tmdb.org/t/p/original/${c}`,l&&c||(window.innerWidth<768&&(m=new URL(u)),window.innerWidth>=768&&window.innerWidth<1280&&(m=new URL(u)),window.innerWidth>=1280&&(m=new URL(u)));return`\n    <div class="upcoming__thumb">\n      <img class ="upcoming__image" src="${m}" alt="${e||o}" />\n    </div>\n\n    <div class="upcoming__meta">\n      <h3 class="upcoming__caption">${e||o}</h3>\n      \n      \n      <div class="upcoming__ctx">\n        <ul class="upcoming__list">\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Release date</div>\n            <div class="upcoming__date">${g.slice(0,4)}</div>\n          </li>\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Vote / Votes</div>\n            <div class="upcoming__value">\n              <span class="tag">\n                ${a.toFixed(1)}\n              </span>\n              &nbsp;/&nbsp;\n              <span class="tag">\n                ${t}\n              </span>\n            </div>\n          </li>\n        </ul>\n        <ul class="upcoming__list">\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Popularity</div>\n            <div class="upcoming__value">${s.toFixed(1)}</div>\n          </li>\n          <li class="upcoming__item">\n            <div class="upcoming__desc">Genre</div>\n            <div class="upcoming__value">${_}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class="upcoming__about">\n        <h3 class="upcoming__subtitle">About</h3>\n        <p class="upcoming__text">${r}</p>\n      </div>\n\n      <button class="btn btn--primary" data-movie-id="${i}" data-lable="upcoming" type="button">\n        Add to my library\n      </button>\n    </div>`};var _=o("5utJa");s=o("iHGmp"),c=o("krGWQ");(async()=>{const n=(0,s.randomIndex)()[0];try{a.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const{results:i}=await(0,t.fetchUpcomingMovies)();c.refs.upcomingContainer.innerHTML=m(i[n]);const e=document.querySelector(".upcoming .btn");(0,_.initAddToLibraryBtn)(e)}catch(n){console.log(`upcomingError: ${n}`)}finally{a.Loading.remove()}})();
//# sourceMappingURL=index.5ad449f1.js.map
