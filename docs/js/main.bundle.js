!function(){const n=document.getElementById("form"),e=document.getElementById("inputCity"),t=document.querySelector(".cards");n.onsubmit=async function(n){n.preventDefault();let c=e.value.trim();const a=await async function(n){const e=`http://api.weatherapi.com/v1/current.json?key=6e9f8da9f7724b75820202029232509&q=${n}`,t=await fetch(e);return await t.json()}(c);a.error?function(n){const e=`<div class="card">${n}</div>`;t.innerHTML=e}(a.error.message):function({name:n,country:e,temp:c,condition:a}){const r=`<div class="card">\n                          <h2 class="card-city">${n}<span>${e}</span></h2>\n                          <div class="card-weather">\n                            <div class="card-weather__value">${Math.ceil(c)}<sup>°c</sup></div>\n                            <picture>\n                            <source srcset="./img/cloud.webp" type="image/webp">\n                            <img class="card-weather__img" src="./img/cloud.png" alt="Weather" draggable="false">\n                            </picture>\n                          </div>\n                          <div class="card-descr">${a}</div>\n                        </div>`;t.innerHTML=r}({name:a.location.name,country:a.location.country,temp:a.current.temp_c,condition:a.current.condition.text})}}();