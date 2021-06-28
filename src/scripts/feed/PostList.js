import { getPost } from "../data/provider";

const post = getPost()

const listPost = post.map(post => {


    return `
    <div class="tiredOfThis">
    <section class="postList">${matchingSender.fullName}${matchingSender.email}<section> 
    <section class="postList">${letter.body}</section>
    <section class="postList">${matchingReceiver.fullName}${matchingReceiver.email}<section> 
    <section class="postList">${letter.date}</section>
    <section class="selectedTopics">${selectedTopics.topicLabel}</section>
    </div>
  
    `
    html += listItems.join("")
    html += "</section>"
    
    return html
})

