console.log("page uploaded");

var top_click = 0
function topCountClicks(){
    top_click++
    // console.log(topCountClicks);
    var top_likes = document.querySelector(".top_likes")
    top_likes.innerText = top_click + " like(s)";
}

var mid_click = 0
function midCountClicks(){
    mid_click++
    // console.log(midCountClicks);
    var mid_likes = document.querySelector(".mid_likes")
    mid_likes.innerText = mid_click + " like(s)"
}

var bottom_click = 0
function bottomCountClicks(){
    bottom_click++
    // console.log(bottomCountClicks);
    var bottom_likes = document.querySelector(".bottom_likes")
    bottom_likes.innerText = bottom_click + " like(s)"
}