
let submit = document.getElementById('submit');

//check to see that passwords match
submit.addEventListener("click", ()=>{
    let pwd = document.getElementById('pwd');
    let cpwd = document.getElementById('cpwd');
    if(cpwd.value !== pwd.value){
        alert('passwords need to match');
    }
});
