import { getPost, getUsers, getLikes } from "../data/provider.js"
import { NavBar } from "./NavBar.js"
import { GiffyGram } from "../GiffyGram.js"


const applicationElement = document.querySelector(".giffygram")
const loggedUser = parseInt(localStorage.getItem("gg_user"))

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "favoritesCheckbox") {
        applicationElement.innerHTML = ShowFaves()
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "backButton") {
        applicationElement.innerHTML = GiffyGram()
    }
})
applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.value === "0") {
        applicationElement.innerHTML = GiffyGram()
    }
})
applicationElement.addEventListener("change", changeEvent => {
    const posts = getPost()
    const users = getUsers()
    if (changeEvent.target.id === "authorSelect") {
        const selectedAuthor = changeEvent.target.value
        for (const user of users) {
            if (selectedAuthor === user.id) {
                for (post of posts) {
                    if (user.id === post.userId) {
                        favPost = post


                        return `
                
                <section class="post__list">
                 <div class="picTitle"
                    <h2 class= "post__title">${favPost.title}</h2>
                    <img class="post__image" src=${favPost.imageURL}>
                </div>
               
                <div class="discription"
                    <div class="post__discription">${favPost.description}</div>
                    <div class="post__user">Posted by ${user.name}</div>
                    <button class="post__delete" id="post--${favPost.id}">
                        Delete
                    </button>
                    <div class="post__favorite">
                    <input type="checkbox" value="${favPost.id}">Favorite</div>
                </div> 
                <div class="backButton">   
                <button class="post__back" id="backButton">Back</button>
                </div>
                </section>
                
                `
                    }
                }
            }
        }
    }
})




export const ShowFaves = () => {
    return `
        <nav class="navigation">
            ${NavBar()}
        </nav>
        <div class="messages">
            <div class="messageList">${favPost()}</div>
        </div>
    `
}

const favByAuthor = () => {

}
export const favPost = () => {
    let favPost = ""
    let userPost = ""
    const posts = getPost()
    const likes = getLikes()
    const users = getUsers()
    for (const like of likes) {
        if (loggedUser === like.userId) {
            for (const post of posts) {
                if (like.postId === post.id) {
                    favPost = post
                    for (const user of users) {
                        if (user.id === post.userId) {
                            userPost = user
                        }
                    }
                    return `
                
                 <section class="post__list">
                  <div class="picTitle"
                     <h2 class= "post__title">${favPost.title}</h2>
                     <img class="post__image" src=${favPost.imageURL}>
                 </div>
                
                 <div class="discription"
                     <div class="post__discription">${favPost.description}</div>
                     <div class="post__user">Posted by ${userPost.name}</div>
                     <button class="post__delete" id="post--${favPost.id}">
                         Delete
                     </button>
                 </div> 
                 <div class="backButton">   
                 <button class="post__back" id="backButton">Back</button>
                 </div>
                 </section>
                 
                 `
                }
            }
        }
    }
}


export const footer = () => {
    const postAuthors = getUsers()

    let html = `
        <div class="footer">

            <div class="footer__item">
                <select class="dropdown" name="author" id="authorSelect">
                <option value="0">Select by user...</option>
                <option value="1">All</option>
                    ${postAuthors.map(author => { return `<option value="${author.id}">${author.name} </option>` }).join("")}
                </select>
                <label id="Container""class="label" for="favorites">Show only   your favorites</label>
                <input type="checkbox" id="favoritesCheckbox" name="favoritesCheckbox" value="favorite">
            </div>

        </div>
  `
    return html
}