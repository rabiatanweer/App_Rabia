

let completedata = null;
const endpoint = 'https://api.spoonacular.com/recipes/random?apiKey=e4df68706b174577ae41be782fd11179&number=10';
 
// Get recipe data from Spoonacular API
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
   const mydata = localStorage.setItem("data_recipe", JSON.stringify(data.recipes))})
let myData=localStorage.getItem("data_recipe")


    completedata =JSON.parse(myData);
    console.log(completedata);

    // Generate recipe cards after fetching data from API
    
    let data1=completedata.map((value,index) => {
      return  `
      <div class="card" onclick="display(${index})">
        <h1 class="title">${value.title}</h1>
        <img src="${value.image}" alt="img">
        <h4 class="ingredient_title"> <u>Ingredients: </u></h4>
        <ul class="ingredients">${value.extendedIngredients.map (ingredient=> `<li>${ingredient.name}</li>`
  ).join(" ")}</ul>
     
        
       
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  
  // searching bar for  Recipe
let searchTerm = document.getElementById("searchItem")

searchTerm.addEventListener('keyup', searchRecipe);
function searchRecipe() {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredRecipeData = completedata.filter((recipe) => {
    const recipeName = recipe.title.toLowerCase();
    return recipeName.includes(searchBar) 
  });
  const recipeContainer = document.querySelector('#cards');
  const foodcardshtml = filteredRecipeData.map((value, index) => `
  <div class="card" onclick="display(${index})">
  <h1 class="title">${value.title}</h1>
  <img src="${value.image}" alt="img">
  <h4 class="ingredient_title"> <u>Ingredients: </u></h4>
  <ul class="ingredients">${value.extendedIngredients.map (ingredient=> `<li>${ingredient.name}</li>`
  ).join(" ")}</ul>
  `).join('');
  recipeContainer.innerHTML = foodcardshtml;

}
// showing recipe and quantity of ingredients
 function display(y) {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredRecipeData = completedata.filter((recipe) => {
    const recipeName = recipe.title.toLowerCase();
    return recipeName.includes(searchBar) 
  });
  

document.getElementsByClassName("popup")[0].classList.add("active");
Array.from(document.getElementsByClassName("card")).forEach((el) =>{
  el.classList.add("hide")
 })
if (searchBar==="") {
  
  const ingredientArray=completedata[y].extendedIngredients.map(IngredientQuantity=>{
   return ` 
   <p>${IngredientQuantity.original}</p>
   `
  }).join(" ")
  document.getElementById("recipeIngredients").innerHTML = ingredientArray
document.getElementById("myRecipe").innerHTML= completedata[y].instructions;
}
else{
  const ingredientArray=filteredRecipeData[y].extendedIngredients.map(IngredientQuantity=>{
    return ` 
    <p>${IngredientQuantity.original}</p>
    `
   }).join(" ")
   document.getElementById("recipeIngredients").innerHTML = ingredientArray
  document.getElementById("myRecipe").innerHTML= filteredRecipeData[y].instructions
}

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  Array.from(document.getElementsByClassName("card")).forEach((element) =>{
    element.classList.remove("hide")
  })

 });

 }
 
