import{a as M,S as q,i as d}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const B="49287567-80da5b96f25a95ab41aa198b2",P="https://pixabay.com/api/";async function p(n,t,r=15){const i={page:t,per_page:r,key:B,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:e}=await M(`${P}`,{params:i});return e}const m=document.querySelector(".gallery"),$=new q(".gallery-link",{captionsData:"alt",captionDelay:250});function O(){m.innerHTML=""}function h(n){const t=n.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:S,downloads:E})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <div class="photo-card">
            <img src="${r}" alt="${e}" />
            <div class="info">
              <p><b>Likes:</b> ${o}</p>
              <p><b>Views:</b> ${a}</p>
              <p><b>Comments:</b> ${S}</p>
              <p><b>Downloads:</b> ${E}</p>
            </div>
          </div>
        </a>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}const y=document.querySelector(".form"),g=document.querySelector(".loader"),u=document.querySelector(".loadMoreBtn"),l=15;let c="",s=1;y.addEventListener("submit",x);u.addEventListener("click",R);async function x(n){if(n.preventDefault(),c=y.elements["search-text"].value.trim(),!c){d.info({position:"topRight",message:"wrong!"});return}s=1,f(),b(),O();try{const{hits:t,totalHits:r}=await p(c,s,l);if(t.length===0){d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t),w(),L(r,s,l)}catch(t){console.log(t)}finally{v()}}async function R(n){s++,f(),b();try{const{hits:t,totalHits:r}=await p(c,s,l);h(t),w(),L(r,s,l);const{height:i}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}catch(t){console.log(t)}finally{v()}}function L(n,t,r){Math.ceil(n/r)===t&&(f(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}function b(){g.classList.remove("hidden")}function v(){g.classList.add("hidden")}function w(){u.classList.remove("hidden")}function f(){u.classList.add("hidden")}
//# sourceMappingURL=index.js.map
