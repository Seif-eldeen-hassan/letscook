let is_admin = localStorage.getItem("isadmin")
let nav = document.querySelector(".nav")
let getstart = document.querySelector("#getstart")
let empty_text = document.querySelectorAll(".empty")
let savedImage = localStorage.getItem("profileImage");

function HomeReload(){
    if(!is_admin) {
        empty_text[0].innerText = "There's nothing here yet, but sign up now to start adding your own recipes!"
        empty_text[1].innerText = "There's nothing here yet, but sign up now to start adding your own recipes!"
        getstart.classList.remove("none")
        return
    }
    if(is_admin == "Admin"){
        nav.id ="admin"
        nav.innerHTML = ` 
        <div class="logo">
            <h1 class="lets"> LET’S </h1>
            <h1 class="cook"> COOK </h1>
        </div>
        <div class="tabs">
            <a class="tab choosed_tab" id="home" href="./index.html">Home</a>
            <a class="tab" id="recipes" href="">Recipes</a>
            <a class="tab" id="my_recipes" href="">MyRecipes</a>
            <a class="tab " id="recipes" href="./AddProduct.html">Add Recipe</a>
            <a class="tab" id="acc" href="./account.html">Account</a>
        </div>
        <div class="profile_image"> </div>
        `
        empty_text[0].innerText = "Let’s get cooking! Add your first recipe and share your flavor with the world."
        empty_text[1].innerText = "Let’s get cooking! Add your first recipe and share your flavor with the world."
    }
    else{
        nav.id =""
        nav.innerHTML = ` 
        <h1 class="logo" id="admin_logo"><span class="lets"> LET’S </span> <span class="cook"> COOK </span></h1>
        <div class="tabs">
            <a class="tab choosed_tab" id="home" href="./index.html">Home</a>
            <a class="tab" id="recipes" href="">Recipes</a>
            <a class="tab" id="fav_recipes" href="">Favourite Recipes</a>
            <a class="tab" id="acc" href="./account.html">Account</a>
            <div class="search_box">
                <img src="./images/search.png"  class="search_icon">
                <input type="text" class="search" placeholder="Search">
            </div>
        </div>
        <div class="profile_image"> </div>
        ` 
        empty_text[0].innerText = "Thanks for stopping by again! We're still cooking things up—check back soon for our first delicious recipes!"
        empty_text[1].innerText = "Thanks for stopping by again! We're still cooking things up—check back soon for our first delicious recipes!"
    }
    getstart.classList.add("none")
    let profile_image = document.querySelector(".profile_image")
    if(savedImage){
        profile_image.style.backgroundImage = `url('${savedImage}')`;
    }
    
    
    
}

window.onload = HomeReload;