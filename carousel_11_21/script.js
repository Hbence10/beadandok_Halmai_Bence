const carouselBody = document.getElementById("carouselBody")
const buttonRow = document.getElementById("buttonRow")

carouselBody.innerHTML = ""
async function apiCallFunction(){
        const apiCallList = []
        for(let i = 1; i <= 100; i++ ){
            apiCallList.push(fetch(`https://api.sampleapis.com/switch/games/${i}`))
        }
        
        const apiCalls = await Promise.all(apiCallList)
        const apiDatas = []
        for(let i = 0; i< apiCalls.length; i++){
            apiDatas.push(await apiCalls[i].json())
        }

        for(let i = 0; i<apiDatas.length; i++){
            writeDeatils(apiDatas[i], i, apiDatas.length)
        }
}

function writeDeatils(response, index, gameLength){
        carouselBody.innerHTML += `
                        <div class="carousel-item ${index == 0 ? 'active' : ''}">
                            <img src="bg.jpg" class="d-block" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                              <h5>${response.id}.  ${response.name}</h5>
                              <p class="m-0 mb-1"> <span class="fw-bold">Genre:</span> ${response.genre},  <span class="fw-bold">Developers:</span> ${response.developers},  <span class="fw-bold">Publishers:</span> ${response.publishers}</p>
                              <p class="m-0 mb-1">Összesen ${gameLength} elem van.</p>
                            </div>
                        </div>
                        `
}

document.addEventListener("DOMContentLoaded", apiCallFunction())