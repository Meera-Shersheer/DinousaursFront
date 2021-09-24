// // work as post man
// // difine the link


// //const urlbf = "https://whereisthemarblebackend.herokuapp.com/api/comment"

const urlbf = "http://localhost:5500/api/comments"


async function getComments() {
    //Get request by default
    const data = await fetch(urlbf)
    const updated_data = await data.json()
    return updated_data
}


async function postComment(comment) {
    const data = await fetch(urlbf, {


        method: "POST",
        headers: {

            'Accept': 'application/json',

            'content-type': 'application/json '

        },
        body: JSON.stringify({ comment })

    })
    const updated_data = await data.json()
    return updated_data
}

