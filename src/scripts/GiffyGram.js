import { gifForm } from "./feed/PostEntry.js"
import { listPost } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"
import { footer } from "./nav/Footer.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <nav class="navigation">
        ${NavBar()}
    </nav>
    <p>&nbsp;</p> 
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
