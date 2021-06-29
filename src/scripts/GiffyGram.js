import {gifForm} from "./feed/PostEntry.js"



import { listPost } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    <section class="newPost__input">
         ${gifForm()}
    </section>
        <section class="post__list">
            ${listPost()}
        </section>`
}
