const comments = document.getElementById("comments")
const commentsArray = []

async function getComments(){
    let apiCall = await fetch("https://jsonplaceholder.typicode.com/comments/?postId=1")
    let apiData = await apiCall.json()

    for(let i = 0; i<apiData.length; i++){
        let simpleObject = {}
        simpleObject.email = apiData[i].email
        simpleObject.body = apiData[i].body
        commentsArray.push(simpleObject)
    }

    if(apiCall.status == 200){
        for (let i = 0; i<commentsArray.length; i++){
            addNewComment(commentsArray[i])
        }
    } else{
        console.error("erro")
    }
}

function addNewComment(commentDetails){
      $("#comments").append( `
             <div class="comment">
                    <div class="commentUser">${commentDetails.email}</div>
                    <div class="commentText">${commentDetails.body}</div>
            </div>
        `)
}

async function postComment() {
        let apiCall = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                body : document.getElementById("commentBody").value,
                userId : 123,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        if(apiCall.status == 201){
            let apiData = await apiCall.json()
            alert(`${apiData.id}, Your comment has been sent`)
        } else{
            alert("error")
        }
}

function addComment() {
    if(document.getElementById("commentBody").value.length){
        postComment()
    } else {
        alert("Please, write a comment first")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getComments()
})