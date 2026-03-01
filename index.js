import{a as b,S as L,i as w}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const v="https://pixabay.com/api/",x="";async function f(t,o=1){const a={key:x,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{const{data:r}=await b.get(`${v}`,{params:a});return r}catch(r){throw r}}const p=document.querySelector(".gallery"),O=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(t){const o=t.map(({webformatURL:a,largeImageURL:r,tags:e,likes:s,views:c,comments:h,downloads:g})=>`
        <li class="card">
          <a class="card-link" href="${r}">
            <img
              class="card-image"
              src="${a}"
              data-source="${r}"
              alt="${e}"
            />
          </a>
          <ul class="card-body">
            <li class="card-body-item"><p class="card-body-title">likes</p><p class="card-body-text">${s}</p></li>
            <li class="card-body-item"><p class="card-body-title">views</p><p class="card-body-text">${c}</p></li>
            <li class="card-body-item"><p class="card-body-title">comments</p><p class="card-body-text">${h}</p></li>
            <li class="card-body-item"><p class="card-body-title">downloads</p><p class="card-body-text">${g}</p></li>
          </ul>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",o),O.refresh()}function $(){p.innerHTML=""}function S(){loader.classList.remove("hidden")}function q(){loader.classList.add("hidden")}const y=document.querySelector(".form"),l=document.querySelector(".js-load-more");let i=1,n="",d=0;y.addEventListener("submit",F);l.addEventListener("click",H);function F(t){t.preventDefault();const{"search-text":o}=t.target.elements;n=o.value.trim(),n&&($(),S(),i!==1&&(i=1),f(n,i).then(a=>{const r=a.hits;if(r.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}d=Math.ceil(a.totalHits/r.length),console.log(d),m(r),i<d&&l.classList.remove("hidden"),y.reset()}).catch(a=>{u(a.message)}).finally(q))}async function H(){try{i++,l.disabled=!0;const t=await f(n,i);m(t.hits),i>=d&&(l.classList.add("hidden"),u("We're sorry, but you've reached the end of search results."));const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){u(t.message)}finally{l.disabled=!1}}function u(t){w.show({message:`${t}`,messageColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",timeout:3e3,closeOnClick:!0,drag:!1,pauseOnHover:!1,close:!1,progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",maxWidth:"432px"})}
//# sourceMappingURL=index.js.map
