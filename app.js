
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
        <p class="ingredients">${value.extendedIngredients}</p>
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  
  // search Recipie
let searchTerm = document.getElementById("searchItem")

searchTerm.addEventListener('keyup', searchRecipe);
function searchRecipe() {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredProducts = completedata.filter((product) => {
    const productName = product.title.toLowerCase();
    return productName.includes(searchBar) 
  });
  const productContainer = document.querySelector('#cards');
  const productCardsHtml = filteredProducts.map(value => `
  <div class="card" onclick="showRecipeDetails(${value.id})">
  <h1 class="title">${value.title}</h1>
  <img src="${value.image}" alt="img">
</div>
  `).join('');
  productContainer.innerHTML = productCardsHtml;
}
 function display(y) {

document.getElementsByClassName("popup")[0].classList.add("active");
Array.from(document.getElementsByClassName("card")).forEach((el) =>{
  el.classList.add("hide")
 })
document.getElementById("myRecipe").innerHTML= completedata[y].instructions;

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  Array.from(document.getElementsByClassName("card")).forEach((el) =>{
    el.classList.remove("hide")
  })

 });

 }
 
