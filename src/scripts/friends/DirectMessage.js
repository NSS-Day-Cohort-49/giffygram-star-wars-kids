//This will show all the messages that the user has recieved
import { NavBar } from "../nav/NavBar.js"
import { fetchMessages, getMessages } from "../data/provider.js"
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

    let html = `
    <ul>
        ${messages.map(
            (message) => `
            <section>
                <h2 class="">From ${message.userId}</h2>
                <div class+"">${message.text}</div>

            `
        ).join("")
        }
    `
    return html
}
export const renderMessages = () => {
    fetchMessages().then(
        () => {
            applicationElement.innerHTML = ShowMessages()
        }
    )
}
applicationElement.addEventListener(
    "stateChanged", () => {
        renderMessages()
    }
)
//need to FETCH messages to display