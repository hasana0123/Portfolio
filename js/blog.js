function displayPostTime() {
    const postTime = document.querySelectorAll('.post-time');
    const now = new Date();
    const formattedTime = now.toLocaleString(); 
    postTime.innerText = `Posted on: ${formattedTime}`;
}

let likeCount = 0;
function likePost() {
    likeCount++;
    document.querySelectorAll('#like-count').forEach(likeCountSpan =>{
        likeCountSpan.innerText = `${likeCount} Likes`;
    })
}
displayPostTime(); 