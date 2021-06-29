const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "home"){
        //re render the home page 
    }
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "message"){
        //render message form... probably will need to build message form and import it into this file to then activate it once click event is triggered
    }
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "notifications"){
        //render notification page
    }
})
applicationElement.addEventListener("click", evt => {
    if(evt.target.id === "logout"){
        //logout... not sure how to trigger a log out yet
    }
})

export const NavBar = () => {
    return `<div class="navigation__icon" img="/images/pb.png">
                <button id="home"></button>
            </div>
            <div class="">
                <h1 class="">GiffyGram</h1>
            </div>
            <div class="">
                <button id="message" class="" src="/images/fountain-pen.svg"></button>
            </div>
            <div class="">
                <button class=""></button>
            </div>
            <div class="">
                <button id="logout" class=""></button>
            </div>
    `
}