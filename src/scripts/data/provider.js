const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")
import  { renderApp } from "../main.js";

export const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    likes: [],
    messages: []
};

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`) 
        .then(response => response.json())  
        .then((user) => {
            applicationState.users = user
        })
}
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`) 
        .then(response => response.json())  
        .then((post) => {
            applicationState.posts = post
        })
}
export const fetchLikes = () => {
    return fetch (`${apiURL}/likes`)
        .then (response => response.json())
        .then((like) => {
            applicationState.likes = like
    })
}
export const getUsers = () => {
    return [...applicationState.users] 
}
export const getPost = () => {
    return [...applicationState.posts]
}
export const getLikes = () => {
    return [...applicationState.likes]
}

export const postGif = (userSubmission) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSubmission)
    }
        
return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        renderApp()

    })
}

export const deletePost = (id) => {
    const applicationElement = document.querySelector(".giffygram");
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}