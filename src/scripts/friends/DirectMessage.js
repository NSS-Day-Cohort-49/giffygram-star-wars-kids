//This will show all the messages that the user has recieved
import { NavBar } from "../nav/NavBar.js"
import { fetchMessages, getMessages, getUsers } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")

export const ShowMessages = () => {
    return `
        <nav class="navigation">
            ${NavBar()}
        </nav>
        <div class="messages">
            <div class="messageList">${DirectMessages()}</div>
        </div>
    `
}
export const DirectMessages = () => {
    const loggedUser = parseInt(localStorage.getItem("gg_user"));
    const messages = getMessages()
    const users = getUsers()
    for (const message of messages) {
        if (loggedUser === message.recipientId) {
            for (const user of users) {
    let html = ""

     html += 
            
          `
                
            <section>
                <h2 class="message__author">From ${user.name}</h2>
                <div class="message">${message.text}</div>
            </section>
            
         `
    return html
    }}}
}
    
