import { getPost, getUsers, deletePost } from "../data/provider.js";


export const listPost = () => {
    const posts = getPost()
    const users = getUsers()
    let userPost = ""
    
    
    let html =`
    <ul>
    ${
        posts.map((post) => { 
            for (const user of users) {
                if (user.id === post.userId) {
                userPost = user
                }
            }

            return `
            <section>
                <h2 class= "post__title">${post.title}</h2>
                <img class="post__image" src=${post.imageURL}>
                <div class="post__discription">${post.description}</div>
                <div class="post__user">Posted by ${userPost.name}</div>
                <button class="post__delete" id="post--${post.id}">
                    Delete
                </button>
                <div class="post__favorite">
                <input type="checkbox" value="${post.id}">Fevorite</div>
            </section>`
        }
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