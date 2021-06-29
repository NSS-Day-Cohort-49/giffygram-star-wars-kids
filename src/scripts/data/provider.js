const apiURL = "http://localhost:8088"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
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
    return fetch(`${apiURL}}/post`) 
        .then(response => response.json())  
        .then(post => {
            applicationState.posts = post
        })
}
export const getUsers = () => {
    return [...applicationState.users] 
}
export const getPost = (id) => {
    applicationState.currentPost = id
}

export const postGif = (userSubmission) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSubmission)
    }
        
return fetch(`${apiURL}/post`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        render()

    })
}