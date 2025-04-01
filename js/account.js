let input_img  = document.querySelector(".input_img")
let profile_pic = document.querySelector(".profile_pic")
let data_boxes = document.querySelectorAll(".data_box")
let edits = document.querySelectorAll(".edit_icon")
let inputs = document.querySelectorAll(".input")
let save = document.querySelectorAll(".save_bt")
let logout_bt = document.querySelector(".logout_icon")
let profile_image = document.querySelector(".profile_image")
let is_admin = localStorage.getItem("isadmin")
let nav = document.querySelector(".nav")

input_img.addEventListener("change", function(event) {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            profile_pic.style.backgroundImage = `url('${imageUrl}')`;
            localStorage.setItem("profileImage" , imageUrl )

        };
        reader.readAsDataURL(file); 
    }
    
});



function loadProfile(){
    let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
    let acc_status = localStorage.getItem("isadmin")
    let savedImage = localStorage.getItem("profileImage");
    data_boxes[0].placeholder = username;
    data_boxes[1].placeholder = email;
    data_boxes[3].placeholder = acc_status;
    if(is_admin == "Admin"){
        nav.id ="admin"
        nav.innerHTML = ` 
        <div class="logo">
            <h1 class="lets"> LET’S </h1>
            <h1 class="cook"> COOK </h1>
        </div>
        <div class="tabs">
            <a class="tab " id="home" href="./index.html">Home</a>
            <a class="tab" id="recipes" href="">Recipes</a>
            <a class="tab" id="my_recipes" href="">MyRecipes</a>
            <a class="tab " id="recipes" href="./AddProduct.html">Add Recipe</a>
            <a class="tab choosed_tab" id="acc" href="./account.html">Account</a>
        </div>
        <div class="profile_image"> </div>
        `
    }
    else{
        nav.id =""
        nav.innerHTML = ` 
        <h1 class="logo" id="admin_logo"><span class="lets"> LET’S </span> <span class="cook"> COOK </span></h1>
        <div class="tabs">
            <a class="tab choosed_tab" id="home" href="./index.html">Home</a>
            <a class="tab" id="recipes" href="">Recipes</a>
            <a class="tab" id="fav_recipes" href="">Favourite Recipes</a>
            <a class="tab choosed_tab" id="acc" href="./account.html">Account</a>
            <div class="search_box">
                <img src="./images/search.png"  class="search_icon">
                <input type="text" class="search" placeholder="Search">
            </div>
        </div>
        <div class="profile_image"> </div>
        ` 
    }
    let profile_image = document.querySelector(".profile_image")
    if(savedImage){
        profile_pic.style.backgroundImage = `url('${savedImage}')`;
        profile_image.style.backgroundImage = `url('${savedImage}')`;
    }
    
    
}

window.onload = loadProfile;

for(let i = 0 ; i < 2 ; i++){
    edits[i].addEventListener("click",function(e){
        e.target.classList.add("none")
        data_boxes[i].disabled = false;
        save[i].classList.remove("none")
    })
}

for(let i = 0 ; i < 2 ; i++){
    save[i].addEventListener("click",function(e){
        edits[i].classList.remove("none")
        save[i].classList.add("none")
        data_boxes[i].disabled = true;
        if(i == 0){
            if(!data_boxes[0].value) return
            localStorage.setItem("username" , data_boxes[0].value)
            data_boxes[0].placeholder = data_boxes[0].value;
        }
        else{
            if(!data_boxes[1].value) return
            localStorage.setItem("email" , data_boxes[1].value)
            data_boxes[1].placeholder = data_boxes[1].value;
        }
        setTimeout(() => {
            location.reload();
        }, 100);

    })
}

function logout(){
    localStorage.clear();
    window.location.href = "index.html"
}


logout_bt.addEventListener("click" , logout);



 
