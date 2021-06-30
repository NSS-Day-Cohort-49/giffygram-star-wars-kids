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
    const messages = getMessages()
    const users = getUsers()
    let userPost = ""

    let html = `
    <ul>
        ${messages.map((message) => {
            for(const user of users){
                if(user.id === message.userId) {
                    userPost = user
                }
            } 
            
            return `
            <section>
                <h2 class="message__author">From ${userPost.name}</h2>
                <div class="message">${message.text}</div>

            `
        }).join("")
        }
    `
    return html
}
// export const renderMessages = () => {
//     fetchMessages().then(
//         () => {
//             applicationElement.innerHTML = ShowMessages()
//         }
//     )
// }
// applicationElement.addEventListener(
//     "stateChanged", () => {
//         renderMessages()
//     }
// )