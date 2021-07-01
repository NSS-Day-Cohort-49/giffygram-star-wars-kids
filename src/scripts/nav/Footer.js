import { getPost, getUsers, getLikes } from "../data/provider.js";
import { NavBar } from "./NavBar.js";
import { GiffyGram } from "../GiffyGram.js";
import { renderApp } from "../main.js";

const applicationElement = document.querySelector(".giffygram");



applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "favoritesCheckbox") {
    applicationElement.innerHTML = ShowFaves();
  }
});

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "backButton") {
    applicationElement.innerHTML = GiffyGram();
  }
});
applicationElement.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.value === "0" && changeEvent.target.id === "authorSelect") {
    applicationElement.innerHTML = GiffyGram();
  }
});


applicationElement.addEventListener("change", (changeEvent) => {
  const posts = getPost();
  const users = getUsers();
  let html = ""
  if (changeEvent.target.id === "authorSelect") {
    const selectedAuthor = changeEvent.target.value;
    const author = users.find(user => user.id === selectedAuthor)
    const authorsPost = posts.filter(post => post.userId === author )
        for (const post of authorsPost) {
           
            html += `
            
            <section class="post__list">
            <div class="picTitle"
            <h2 class= "post__title">${post.title}</h2>
            <img class="post__image" src=${post.imageURL}>
            </div>
            
            <div class="description"
            <div class="post__description">${post.description}</div>
            <div class="post__user">Posted by ${author.name}</div>
            <button class="post__delete" id="post--${post.id}">
            Delete
            </button>
            <div class="post__favorite">
            <input type="checkbox" value="${post.id}">Favorite</div>
            </div> 
            <div class="backButton">   
            <button class="post__back" id="backButton">Back</button>
            </div>
            </section>
            
            `
            applicationElement.querySelector(".post__list").innerHTML = html
 }}
        renderApp()
});

export const ShowFaves = () => {
  return `
        <nav class="navigation">
            ${NavBar()}
        </nav>
        <div class="messages">
            <div class="messageList">${favPost()}</div>
        </div>
    `;
};

export const favPost = () => {
  const loggedUser = parseInt(localStorage.getItem("gg_user"));
  const posts = getPost();
  const likes = getLikes();
  const users = getUsers();
  let html = "";
  const filteredLikes = likes.filter((like) => loggedUser === like.userId);
  for (const like of filteredLikes) {
    for (const post of posts) {
      if (like.postId === post.id) {
        const author = users.find((user) => user.id === post.userId);

        html += `
               
                <section class="post__list">
                <div class="picTitle"
                    <h2 class= "post__title">${post.title}</h2>
                    <img class="post__image" src=${post.imageURL}>
                </div>
               
                <div class="description"
                <div class="post__description">${post.description}</div>
                    <div class="post__user">Posted by ${author.name}</div>
                    <button class="post__delete" id="post--${post.id}">
                        Delete
                    </button>
                </div> 
                <div class="backButton">   
                <button class="post__back" id="backButton">Back</button>
                </div>
                </section>
                
                `
             }}}
  return html;
};

export const footer = () => {
  const postAuthors = getUsers();

  let html = `
        <div class="footer">

            <div class="footer__item">
               
                <select class="dropdown" name="author" id="authorSelect">
                    <option value="0">Select by user...</option>
                    <option value="0">All</option>
                        ${postAuthors
                        .map((author) => {
                            return `<option value="${author.id}">${author.name} </option>`;
                        })
                        .join("")}
                </select>
              
                
                <label id="Container""class="favoritesLabel" for="favorites">Show only   your favorites</label>

                <input type="checkbox" id="favoritesCheckbox" name="favoritesCheckbox" value="favorite">
               
            </div>

        </div>
  `;
  return html;
};
