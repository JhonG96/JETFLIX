const modal = document.querySelector('.modal');
const LoginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

LoginBtn.addEventListener('click',openModal)
closeBtn.addEventListener('click',closeModal)
window.addEventListener('click',outsideclick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideclick (e) {
    if (e.target == modal){
        closeModal()
    }
}