!function(){const e=document.getElementById("form"),t=document.getElementById("inputCity"),c=document.querySelector(".cards");e.onsubmit=e=>{e.preventDefault();let n=t.value.trim();fetch(`http://api.weatherapi.com/v1/current.json?key=6e9f8da9f7724b75820202029232509&q=${n}`).then((e=>e.json())).then((e=>{if(e.error){const t=`<div class="card">${e.error.message}</div>`;c.innerHTML=t}else{const t=`<div class="card">\n                        <h2 class="card-city">${e.location.name}<span>${e.location.country}</span></h2>\n                        <div class="card-weather">\n                          <div class="card-weather__value">${e.current.temp_c}<sup>°c</sup></div>\n                          <picture><source srcset="./img/cloud.webp" type="image/webp"><img class="card-weather__img" src="./img/cloud.png" alt="Weather" draggable="false"></picture>\n                        </div>\n                        <div class="card-descr">${e.current.condition.text}</div>\n                      </div>`;c.innerHTML=t}}))}}();