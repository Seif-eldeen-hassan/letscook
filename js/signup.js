let signup_bt = document.querySelector(".signup_bt") 
let is_admin = document.querySelector("#agreeCheckbox")
let inputs = document.querySelectorAll(".input")

function singup(){
    localStorage.setItem("username" , inputs[0].value)
    localStorage.setItem("email" , inputs[1].value)
    localStorage.setItem("password" , inputs[2].value)
    if(is_admin.checked){
        localStorage.setItem("isadmin","Admin")
        window.location.href="index.html"
        
    }
    else{
        localStorage.setItem("isadmin","User")
        window.location.href="index.html"
    }
}

signup_bt.addEventListener("click", singup )