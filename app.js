
// main cards with pic and title
// let completedata = null;
// const endpoint = 'https://api.spoonacular.com/recipes/random?apiKey=e4df68706b174577ae41be782fd11179&number=10';
 
// // Get recipe data from Spoonacular API
// fetch(endpoint)
//   .then(response => response.json())
//   .then(data => {
//    const mydata = localStorage.setItem("data_recipe", JSON.stringify(data.recipes))})
let myData=localStorage.getItem("data_recipe")


    completedata =JSON.parse(myData);
    console.log(completedata);

    // Generate recipe cards
    
    let data1=completedata.map((value,index) => {
      return  `
      <div class="card" onclick="display(${index})">
        <h1 class="title">${value.title}</h1>
        <img src="${value.image}" alt="img">
        <h4 class="ingredient_title"> <u>Ingredients: </u></h4>
        <p class="ingredients">${value.extendedIngredients.map (X=> X.name
        )}</p>
     
        
       
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  
  // search Recipie
let searchTerm = document.getElementById("searchItem")

searchTerm.addEventListener('keyup', searchRecipe);
function searchRecipe() {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredProducts = completedata.filter((product) => {
    const recipeName = product.title.toLowerCase();
    return recipeName.includes(searchBar) 
  });
  const recipeContainer = document.querySelector('#cards');
  const foodcardshtml = filteredProducts.map((value, index) => `
  <div class="card" onclick="display(${index})">
  <h1 class="title">${value.title}</h1>
  <img src="${value.image}" alt="img">
  <h4 class="ingredient_title"> <u>Ingredients: </u></h4>
  <ul class="ingredients">${value.extendedIngredients.map (X=> `<li>${X.name}</li>`
  ).join(" ")}</ul>
  `).join('');
  recipeContainer.innerHTML = foodcardshtml;
//   If search box==="". // Is main search box ki value honi Chahiye
// Document.getElementById("product-list")= myRecipeData. // Is main map kiye hue products
}
 function display(y) {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredProducts = completedata.filter((product) => {
    const recipeName = product.title.toLowerCase();
    return recipeName.includes(searchBar) 
  });
  

document.getElementsByClassName("popup")[0].classList.add("active");
Array.from(document.getElementsByClassName("card")).forEach((el) =>{
  el.classList.add("hide")
 })
if (searchBar==="") {
  
  const rabia=completedata[y].extendedIngredients.map(x=>{
   return ` 
   <p>${x.original}</p>
   `
  }).join(" ")
  document.getElementById("recipeIngredients").innerHTML = rabia
document.getElementById("myRecipe").innerHTML= completedata[y].instructions;
}
else{
  const rabia=filteredProducts[y].extendedIngredients.map(x=>{
    return ` 
    <p>${x.original}</p>
    `
   }).join(" ")
   document.getElementById("recipeIngredients").innerHTML = rabia
  document.getElementById("myRecipe").innerHTML= filteredProducts[y].instructions
}

// document.getElementById("myRecipe").innerHTML= completedata[y].instructions;

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  Array.from(document.getElementsByClassName("card")).forEach((element) =>{
    element.classList.remove("hide")
  })

 });

 }
 
