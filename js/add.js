let add_bt = document.querySelector(".add_ingredient")
let ingredient_name_input = document.querySelector("#ingredient_name_input") 
let ingredient_quantity_input = document.querySelector("#ingredient_quan_input") 
let ingredients_data = document.querySelector(".ingredients_data")
let ingredient_quan_input = document.getElementById('ingredient_quan_input');
let recipe_name_input = document.querySelector(".take_input")
let select_course = document.querySelector(".select_course")
let add_recipe_bt = document.querySelector("#add_recipe_bt")
let ingredients_contaier = document.querySelector(".ingredients")
let savedImage = localStorage.getItem("profileImage");


function create_ingredient(){
    let ingredient_name = ingredient_name_input.value;
    let ingredient_quantity = ingredient_quantity_input.value;
    if (!ingredient_name || !ingredient_quantity) return;
    
    let ingrediet = document.createElement("div"); 
    ingrediet.innerHTML = `
        <div class="ingredient">
            <h1 class="ingredient_quan">x${ingredient_quantity}</h1>
            <h1 class="ingredient_name">${ingredient_name}</h1>
            <img src="./images/remove.svg" class="remove">
        </div>
        <hr class="line">  
    `;

    let remove_bt = ingrediet.querySelector(".remove");
    remove_bt.addEventListener("click", function(){remove_ingredient(remove_bt)});

    ingredients_data.append(ingrediet);
}


function remove_ingredient(remove_bt){
    let ingredient = remove_bt.closest(".ingredient").parentElement;
    ingredient.remove();
}

ingredient_quan_input.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

function add_recipe(){
    if(!recipe_name_input.value){
        let titleElement = recipe_name_input.previousElementSibling;
        titleElement.classList.add("empty_title")
        recipe_name_input.classList.add("empty_input");
    }
    else{
        let titleElement = recipe_name_input.previousElementSibling;
        titleElement.classList.remove("empty_title")
        recipe_name_input.classList.remove("empty_input");
    }

    if(!select_course.value){
        let titleElement = select_course.previousElementSibling;
        titleElement.classList.add("empty_title")
        select_course.classList.add("empty_input");
    }
    else{
        let titleElement = select_course.previousElementSibling;
        titleElement.classList.remove("empty_title")
        select_course.classList.remove("empty_input");
    }

    if(!ingredient_name_input.value){
        let titleElement = ingredient_name_input.previousElementSibling;
        titleElement.classList.add("empty_title")
        ingredient_name_input.classList.add("empty_input");
    }
    else{
        let titleElement = ingredient_name_input.previousElementSibling;
        titleElement.classList.remove("empty_title")
        ingredient_name_input.classList.remove("empty_input");
    }

    if(!ingredient_quan_input.value){
        let titleElement = ingredient_quan_input.previousElementSibling;
        titleElement.classList.add("empty_title")
        ingredient_quan_input.classList.add("empty_input");
    }
    else{ 
        let titleElement = ingredient_quan_input.previousElementSibling;
        titleElement.classList.remove("empty_title")
        ingredient_quan_input.classList.remove("empty_input");
    }

    if(!ingredient_name_input.value || !ingredient_quan_input.value ){
        let titleElement = ingredients_contaier.previousElementSibling;
        titleElement.classList.add("empty_title")
        ingredients_contaier.classList.add("empty_input");
    }
    else{
        let titleElement = ingredients_contaier.previousElementSibling;
        titleElement.classList.remove("empty_title")
        ingredients_contaier.classList.remove("empty_input");
    }
}

function load_page(){
    let profile_image = document.querySelector(".profile_image")
    if(savedImage){
        profile_image.style.backgroundImage = `url('${savedImage}')`;
    }
}

window.onload = load_page

add_bt.addEventListener("click" , create_ingredient)
add_recipe_bt.addEventListener("click",add_recipe)