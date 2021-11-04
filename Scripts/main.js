let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;


const shareBox = document.getElementById('card-share-option');
const shareButton = document.querySelectorAll('.card-user-share');
const userInfo = document.getElementById('user-box');

shareButton.forEach((el) =>
  el.addEventListener('click', () => {

    if(shareBox.style.display === "none")
    {
        shareBox.style.display = "flex";
        ariaExpand('true');
    }
    else {
        shareBox.style.display = "none";
        ariaExpand('false');
    }

    if(viewportWidth <= 400) {

        if(userInfo.style.display !== "none") {
            userInfo.style.display = "none";       
        }
        else {
            userInfo.style.display = "flex";
        }
    }
  }) 
);

const ariaExpand = function(value) {

    shareButton[0].setAttribute('aria-expanded', value);
    shareButton[1].setAttribute('aria-expanded', value);
}



