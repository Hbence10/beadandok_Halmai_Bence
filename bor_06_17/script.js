const borSelect = document.getElementById("borSelect")
const detailsDiv = document.getElementById("detailsDiv")
const borImg = document.getElementById("borImg")
const borName = document.getElementById("borName")
const borPlace = document.getElementById("borPlace")
const borPince = document.getElementById("borPince")
const raitingNumber = document.getElementById("raitingNumber")
const borProgress = document.getElementById("borProgress")
const percentageSpan = document.getElementById("percentage")
const borList = []
const borNames = []

async function apiCall(){
    let request = (await fetch("https://api.sampleapis.com/wines/rose")).json()
    let response = await request
    fillSelect(response)
    return response
}

function fillSelect(response){
    for(let i = 0; i<response.length; i++){
        let borOption = document.createElement("option")
        borOption.classList.add("w-50")
        borOption.value = response[i].wine;
        borOption.innerHTML = response[i].wine;
        borSelect.append(borOption)
        borList.push(response[i])
        borNames.push(response[i].wine)
    }
}

function selectBor(){
    let selectedBor = borSelect.value
    detailsDiv.style.display = "";
    borImg.src = borList[borNames.indexOf(selectedBor)].image || 'A Bor képe';
    borImg.alt = borList[borNames.indexOf(selectedBor)].wine || 'A Bor képe';
    borName.innerHTML = borNames[borNames.indexOf(selectedBor)]
    borPlace.innerHTML = borList[borNames.indexOf(selectedBor)].location
    borPince.innerHTML = borList[borNames.indexOf(selectedBor)].winery
    raitingNumber.innerHTML = borList[borNames.indexOf(selectedBor)].rating.reviews
    let percentage = Math.floor(borList[borNames.indexOf(selectedBor)].rating.average / 5 * 100 )
    borProgress.style.width = `${percentage}%`
    percentageSpan.innerHTML = `${percentage}%`
    console.log(percentage)
}

apiCall()