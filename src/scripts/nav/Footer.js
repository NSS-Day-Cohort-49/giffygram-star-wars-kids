import { getPost, getUsers, getLikes } from "../data/provider.js"

// import { getUsers } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")
const loggedUser = parseInt(localStorage.getItem("gg_user"))



applicationElement.addEventListener("click", clickEvent => {
    let favPost = ""
    const posts = getPost()
    const likes = getLikes()
    if (clickEvent.target.id === "favoritesCheckbox") {
    for (const like of likes) {
       if (loggedUser === like.userId) {
           for (const post of posts) {
                if (like.postId === post.id) {
                let favPost = post.id
                  return favPost  
                }
            }
        }
        console.log(favPost)
    }}  
})
  







 export const footer = () => {
    const postAuthors = getUsers()

    let html = `
        <div class="footer">

            <div class="footer__item">
                <select class="dropdown" name="author" id="authorSelect">
                    <option value="0">Select by user...</option>
                    ${postAuthors.map(author => { return `<option value="${author.id}">${author.name} </option>`}).join("") }
                </select>
                <label id="Container""class="label" for="favorites">Show only  your favorites</label>
                    <input type="checkbox" id="favoritesCheckbox" name="favoritesCheckbox" value="favorite">
            </div>

        </div>
  `  
    return html
}