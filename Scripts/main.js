const shareBox = document.getElementById('card-share-option');
const shareButton = document.getElementById("card-user-share");

shareButton.addEventListener('click', () => {
    console.log("click!");

    if(shareBox.style.display === "none")
    {
        shareBox.style.display = "flex";
    }
    else {
        shareBox.style.display = "none";
    }
});