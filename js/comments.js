getComments().then((data)=>{


    // console.log(dat)
    
    let display = ""
    for (let i=0 ; i<data.length ; i++){
    
    display +=
    `<li class="comment-item ">
    <span>${data[i].comment}</span> 
    </li>`
    
    
    
    }


    document.getElementById("displayComments").innerHTML = display})