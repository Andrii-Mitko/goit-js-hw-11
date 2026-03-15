import{a as p,S as m,i as a}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="55026716-4dbe0fcfc8dcb0cc6e29137c8";function y(i){const r={key:h,q:i,lang:"ru",image_type:"photo",orientation:"horizontal"};return p.get(g,{params:r}).then(o=>o.data).catch(o=>{throw o})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
<li class="gallery-item">
<a href="${s}">
<img src="${o}" alt="${e}" />

<div class="info">
<p>Likes ${t}</p>
<p>Views ${n}</p>
<p>Comments ${f}</p>
<p>Downloads ${d}</p>
</div>

</a>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("visible")}function S(){u.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.search.value.trim();r&&(v(),w(),y(r).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{a.error({message:"Something went wrong",position:"topRight"})}).finally(()=>{S()}),c.reset())});
//# sourceMappingURL=index.js.map
