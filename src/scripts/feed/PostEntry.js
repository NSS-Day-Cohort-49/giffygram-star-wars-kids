



    export const gifForm = () => {
        let html = `
       
        <div class="postField">

        <div class="field">
            <label id="Container""class="label" for="post">Title</label>
            <textarea class="titleContainer" name="body" rows="1" cols="30"></textarea>
        </div>

        <div class="field">
            <label id="Container""class="label" for="post">Url</label>
            <textarea class="urlContainer" name="body" rows="1" cols="30"></textarea>
        </div>

        <div class="field">
            <label id="Container""class="label" for="post">Whats the story behind your gif??</label>
            <textarea class="textContainer" name="body" rows="4" cols="30"></textarea>
        </div>

        <div class="buttons">
        <button class="button" id="postGif">Post</button>
        </div>

        </div>

        `
        return html

    }