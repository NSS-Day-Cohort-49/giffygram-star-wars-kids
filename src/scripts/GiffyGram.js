import {gifForm} from "./feed/PostEntry.js"



import { listPost } from "./feed/PostList.js"

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
