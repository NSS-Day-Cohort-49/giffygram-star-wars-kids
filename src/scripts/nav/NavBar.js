import { fetchMessages, getMessages } from "../data/provider.js"
import { ShowMessages } from "../friends/DirectMessage.js"
import { GiffyGram } from "../GiffyGram.js"
import { ShowMessageForm } from "../message/MessageForm.js"
const applicationElement = document.querySelector(".giffygram")

export const messageCounter = ()=> {
    fetchMessages().then(() => {
	const messages = getMessages()
	// const currentUser = parseInt(localStorage.getItem("gg_user"))	
	// const filteredMessages = messages.filter((message) => { return message.recipientId === currentUser})
	const unreadMessages = messages.filter((message) => { return message.read === false})
	const readMessages = messages.filter((message) => { return message.read === true})
	let totalReadMessages = parseInt(readMessages.length)
	let totalUnreadMessages = parseInt(unreadMessages.length)
    console.log(totalReadMessages, totalUnreadMessages, "This is the counters for how many read/unread messages there is")
    }
    )
}
messageCounter()

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
        applicationElement.innerHTML = ShowMessageForm()
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
        //logout
        localStorage.setItem("gg_user", null)
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
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
                        ${messageCounter()}
                    </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
    `
}
