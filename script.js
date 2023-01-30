const hidden = document.querySelector('hidden')
const subContainer= document.querySelector('sub-container')

const menu = document.querySelectorAll('menu')
const submit = document.getElementById('submit')

const learn = function(){
    // alert('hello')
    subContainer.classList.add(hidden)
    hidden.classList.remove(hidden)
}
submit.addEventListener('click', learn)

// document.getElementById("submit").addEventListener("click", learn);
// console.log(submit)
// submit.addEventListener('click', function(){
//     hidden.classList.remove(hidden)
// })
// console.log(submit)



