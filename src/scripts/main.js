import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers, fetchLikes, fetchMessages } from "./data/provider.js"
const applicationElement = document.querySelector(".giffygram")



export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchUsers()
        .then(fetchPosts)
        .then(fetchLikes)
        .then(fetchMessages)
        .then(() => {
            if (user) {

                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
}


applicationElement.addEventListener(
    "stateChanged",
    () => {
        renderApp()
    }
)
renderApp()