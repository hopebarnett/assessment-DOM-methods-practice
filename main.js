let newButton = document.createElement("button")
newButton.append("remove")


let bodyElement = document.querySelector("body")
bodyElement.append(newButton)

let mainElement = document.createElement("main")
bodyElement.append(mainElement)

let imageElement = document.createElement("img")
imageElement.className = "image"
mainElement.append(imageElement)

imageElement.src = "https://www.fishkeepingworld.com/wp-content/uploads/2019/07/Discus-Fish-Ultimate-Care-Guide-The-King-Of-The-Aquarium-Banner.jpg"


let anchorElement = document.createElement("a")
anchorElement.href = "https://www.google.com/"
anchorElement.className = "link"
mainElement.append(anchorElement)
anchorElement.append("this a link to google")


newButton.addEventListener("click", function(){
mainElement.remove()
})