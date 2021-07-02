import { NavBar } from "../nav/NavBar.js"
import { getUsers, sendMessage } from "../data/provider.js"
import { gifForm } from "../feed/PostEntry.js"
import { listPost } from "../feed/PostList.js"
import { footer } from "../nav/Footer.js"
import { GiffyGram } from "../GiffyGram.js"
const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", evt => {
    if (evt.target.id === "directMessage__close" || evt.target.id === "directMessage__cancel") {
        applicationElement.innerHTML = GiffyGram()
    }
})
applicationElement.addEventListener("click", evt => {
    if (evt.target.id === "directMessage__submit") {
        const recipient = document.querySelector("#recipientSelect").value
        const message = document.querySelector("input[name='message']").value
        const dataToSendToMessageAPI = {
            userId: parseInt(localStorage.getItem("gg_user")),
            recipientId: parseInt(recipient),
            text: message,
            read: false
        }
        if (recipient !== "" && message !== "") {
            sendMessage(dataToSendToMessageAPI)
        } else {
            alert("Please fill in all fields")
        }
    }
})
export const ShowMessageForm = () => {
    return `
        <nav class="navigation">
            ${NavBar()}
        </nav>
        <div class="directMessage">
            ${MessageForm()}
        </div>
        <section class="newPost__input">
            ${gifForm()}
        </section>
        <section class="post__list">
            ${listPost()}
        </section>
        <section class="footer">
            ${footer()}
        <section>
    `
}
export const MessageForm = () => {
    const recipient = getUsers()

    return `
        <div>
            <h3>Direct Message</h3>
            <div>Recipient: 
                <select name="directMessage__userSelect" class="message__input" id="recipientSelect">
                    <option value="">Select recipient...</option>
                    ${recipient.map(recip => { return `<option class="recipientSelect" value="${recip.id}">${recip.name} </option>` }).join("")}
                </select>
            </div>
            <div>
            <label for="message">Message:</label>
            <input name="message" class="message__input" type="text" placeholder="Message to user">
            </div>
            <button id="directMessage__submit">Send</button>
            <button id="directMessage__cancel">Cancel</button>
            <button id="directMessage__close">x</button>
        </div>

    `
}