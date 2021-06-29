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
    return `<div class="navigation__icon navigation__icon">
                <img src="/images/pb.png" id="logo">
            </div>
            <div class="navigation__item navigation__name">
                GiffyGram
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg">
                    <div class="notification__count">
                        0
                    </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
    `
}