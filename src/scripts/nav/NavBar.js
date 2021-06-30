import { fetchMessages } from "../data/provider.js"
import { ShowMessages } from "../friends/DirectMessage.js"
import { GiffyGram } from "../GiffyGram.js"
const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "logo"){
        //re render the home page
        applicationElement.innerHTML = GiffyGram() 
        console.log("logo clicked") //A check to make sure the button is working
    }
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "directMessageIcon"){
        //render message form... probably will need to build message form and import it into this file to then activate it once click event is triggered
    }
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "notifications"){
        //render notification page
        fetchMessages().then(() => 
        applicationElement.innerHTML = ShowMessages()
        )}
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "logout"){
        //logout... not sure how to trigger a log out yet
    }
})

export const NavBar = () => {
    return `<div class="navigation__icon navigation__icon">
                <img src="/images/pb.png" id="logo">
            </div>
            <div class="navigation__item navigation__name">
                GiffyGram
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg">
                    <div class="notification__count" id="notifications">
                        0
                    </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
    `
}