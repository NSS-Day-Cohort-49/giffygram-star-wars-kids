import { getPost, deletePost } from "../data/provider.js";


export const listPost = () => {
    const posts = getPost()

    let html =`
    <ul>
    ${
        posts.map(
            (post) => `
            <section>
                <h2 class= "post__title">${post.title}</h2>
                <img class="post__image" src=${post.imageURL}>
                <div class="post__discription">${post.description}</div>
                <button class="post__delete" id="post--${post.id}">
                    Delete
                </button>
            </section>`
        ).join("")
    }
    `
    return html
}

const applicationElement = document.querySelector(".giffygram")
applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("post--")) {
        const [,postId] = click.target.id.split("--")
        deletePost(parseInt(postId))
    }
})