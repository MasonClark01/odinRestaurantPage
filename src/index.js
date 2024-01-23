let currentTab = document.getElementById("activeTab")
let contentDisplay = document.getElementById("activeContent")
let navTabs = document.querySelectorAll(".navTab")

// Create the content for the different pages
//Home
let homeContent = document.createElement("div")
let homeImage = document.createElement("img")
homeImage.src = "./src/images/brockChef.webp"
let homeText = document.createElement("p")
homeText.innerText = "TESTING THE TEXT PORTION OF HOME PAGE TEST TEST TEST GALADE SIGMA CALCULATOR ATTACK ON TITAN"
homeContent.appendChild(homeImage)
homeContent.appendChild(homeText)
//
for(let nt of navTabs){
    nt.addEventListener("click", function() {
        setActiveTab(this)
    })
}

function setActiveTab(selectedTab){
    contentDisplay.innerHTML = ""
    console.log(selectedTab)
    if(selectedTab.innerHTML === "Home"){
        contentDisplay.appendChild(homeContent)
        selectedTab.id = "activeTab"
    }
}