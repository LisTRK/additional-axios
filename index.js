import{a as m,S as p,i as a}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49287567-80da5b96f25a95ab41aa198b2",g="https://pixabay.com/api/";function h(n){const r={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m(`${g}`,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),L=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function S(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
    <li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img 
		  class="gallery-image" 
		  src="${o}" 
		  alt="${e}" 
		/>
        <div>
        <p>Likes: ${t}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${f}</p>
    </div>
	</a>
    </li>   
    `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}const c=document.querySelector(".form"),u=document.querySelector(".loader");c.addEventListener("submit",v);function v(n){n.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){a.info({message:"wrong!"});return}$(),b(),h(r).then(({hits:o})=>{if(o.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}S(o)}).catch(o=>{console.log(o)}).finally(()=>{E()})}function $(){u.classList.remove("hidden")}function E(){u.classList.add("hidden")}
//# sourceMappingURL=index.js.map
