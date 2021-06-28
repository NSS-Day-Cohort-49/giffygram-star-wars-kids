import { getPost } from "../data/provider";


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
                <button class="post__delete" id="request--${post.id}">
                    Delete
                </button>
            </section>`
        ).join("")
    }
    `
    return html
}
