const e="https://api.thecatapi.com/v1",t="live_doTDU5uNSE3g3jd7R7b82Vlg6CA048GnQOAdMVxdmmR30NvY0LFrd9xqbcSlQ4q3",d=document.querySelector(".breed-select"),r=document.querySelector(".cat-info"),s=document.querySelector(".loader"),i=document.querySelector(".error");fetch(`${e}/breeds`,{headers:{api_key:t}}).then(e=>{if(e.ok)return e.json();throw Error(e.status)}).then(e=>{s.classList.replace("loader","is-hidden");let t=e.map(({id:e,name:t})=>`<option value=${e}>${t}</option>`);d.insertAdjacentHTML("beforeend",t),d.classList.remove("is-hidden")}),d.addEventListener("change",d=>{var a;s.classList.replace("is-hidden","loader"),r.classList.add("is-hidden"),(a=d.target.value,fetch(`${e}/images/search?breed_ids=${a}`,{headers:{"x-api-key":t}}).then(e=>{if(e.ok)return e.json();throw Error(e.status)})).then(e=>{let{url:t,breeds:d}=e[0],{name:a,description:n,temperament:o}=d[0];r.innerHTML=`
            <img src=${t} alt=${a} width="400"/>
            <div>
                <h2>${a}</h2>
                <p>${n}</p>
                <p>${o}</p>
            </div>
        `,r.classList.remove("is-hidden"),s.classList.add("is-hidden"),i.classList.add("is-hidden")})});
//# sourceMappingURL=index.69ef049a.js.map
