import{a as S,S as q,i as M}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const O="https://pixabay.com/api/",$="54679723-82f3546e98f06279d87186197";async function u(t,s=1){const o={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};try{const{data:a}=await S.get(`${O}`,{params:o});return a}catch(a){throw a}}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".js-load-more"),F=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(t){const s=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:v,downloads:x})=>`
        <li class="card">
          <a class="card-link" href="${a}">
            <img
              class="card-image"
              src="${o}"
              data-source="${a}"
              alt="${e}"
            />
          </a>
          <ul class="card-body">
            <li class="card-body-item"><p class="card-body-title">likes</p><p class="card-body-text">${r}</p></li>
            <li class="card-body-item"><p class="card-body-title">views</p><p class="card-body-text">${i}</p></li>
            <li class="card-body-item"><p class="card-body-title">comments</p><p class="card-body-text">${v}</p></li>
            <li class="card-body-item"><p class="card-body-title">downloads</p><p class="card-body-text">${x}</p></li>
          </ul>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",s),F.refresh()}function H(){f.innerHTML=""}function h(){y.classList.remove("hidden")}function g(){y.classList.add("hidden")}function b(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}const w=document.querySelector(".form"),P=document.querySelector(".js-load-more"),B=15;let c=1,d="",n=0;w.addEventListener("submit",E);P.addEventListener("click",I);async function E(t){t.preventDefault();const{"search-text":s}=t.target.elements;if(d=s.value.trim(),!!d){H(),L(),h(),c!==1&&(c=1);try{const o=await u(d,c),a=o.hits;if(a.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}n=Math.ceil(o.totalHits/B),m(a),n===1&&l("We're sorry, but you've reached the end of search results."),c<n&&b(),w.reset()}catch(o){l(o.message)}finally{g()}}}async function I(){c++,L(),h();try{const t=await u(d,c);m(t.hits),c>=n&&l("We're sorry, but you've reached the end of search results.");const o=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(t){l(t.message)}finally{g(),c<n&&b()}}function l(t){M.show({message:`${t}`,messageColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",timeout:3e3,closeOnClick:!0,drag:!1,pauseOnHover:!1,close:!1,progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",maxWidth:"432px"})}
//# sourceMappingURL=index.js.map
