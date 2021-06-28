
    const applicationElement = document.querySelector(".giffygram")

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    applicationElement.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "postGif" ) {
            if ()
            const Title = document.querySelector("textarea[name='titlePost']").value
            const Url = parseInt(document.querySelector("textarea[name='urlPost']").value)
            const Story = parseInt(document.querySelector("select[name='storyPost']").value)
    
            const dataToSendToLetterAPI = {
                title: Title,
                imageURL: Url ,
                description: Story, 
                timestamp: today
            }
            
            sendLetter(dataToSendToLetterAPI)
            
        }})


    export const gifForm = () => {
        let html = `
       
        <div class="postField">

        <div class="field">
            <label id="Container""class="label" for="post">Title</label>
            <textarea class="titleContainer" name="titlePost" rows="1" cols="30"></textarea>
        </div>

        <div class="field">
            <label id="Container""class="label" for="post">Url</label>
            <textarea class="urlContainer" name="urlPost" rows="1" cols="30"></textarea>
        </div>

        <div class="field">
            <label id="Container""class="label" for="post">Whats the story behind your gif??</label>
            <textarea class="textContainer" name="storyPost" rows="4" cols="30"></textarea>
        </div>

        <div class="buttons">
        <button class="button" id="postGif">Post</button>
        </div>

        </div>

        `
        return html

    }