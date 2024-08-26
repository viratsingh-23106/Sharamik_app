// after submission code 

const loginModal = document.getElementById('loginModal');
const thankYouModal = document.getElementById('thankYouModal');
const closeBtns = document.getElementsByClassName('close');
const userForm = document.getElementById('userForm');
const button = document.getElementById('button');

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}
button.onclick=  function() {
    loginModal.style.display = 'block';
}

for (let closeBtn of closeBtns) {
    closeBtn.onclick = function() {
        loginModal.style.display = 'none';
        thankYouModal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == thankYouModal) {
        thankYouModal.style.display = 'none';
    }
}

userForm.onsubmit = function(e) {
    e.preventDefault();
    loginModal.style.display = 'none';
    thankYouModal.style.display = 'block';
}

// profile code
let submenu = document.getElementById("sub-menu-wrap");
    function togglemenu(){
        submenu.classList.toggle("open-menu");
    };