import { NavBar } from "../nav/NavBar.js"
import { fetchMessages, getMessages, getUsers } from "../data/provider.js"
import { gifForm } from "../feed/PostEntry.js"
import { listPost } from "../feed/PostList.js"
import { footer } from "../nav/Footer.js"
const applicationElement = document.querySelector(".giffygram")

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

    let html = `
        <div class="">
            <h3>Direct Message</h3>
            <div>Recipient: 
                <select name="directMessage__userSelect" class="message__input" id="recipientSelect">
                    <option value="0">Select recipient...</option>
                    ${recipient.map(recip => { return `<option value="${recip.id}">${recip.name} </option>`}).join("")}
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
    return html
}