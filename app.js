
//   let data1 = "";
//     completedata.results.map(value => {
//       data1 += `<div class="card">
//         <h1 class="title">${value.title}</h1>
//         <img src="${value.image}" alt="img">
//       </div>`;
//     });
//     document.getElementById("cards").innerHTML = data1;
let completedata = null;
const endpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5098cda1bbe94833b4dcfa9e3e1287b5';

// Get recipe data from Spoonacular API
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    completedata = data;
    console.log(completedata);

    // Generate recipe cards
    let data1 = "";
    completedata.results.map(value => {
      data1 += `<div class="card" onclick="showRecipeDetails(${value.id})">
        <h1 class="title">${value.title}</h1>
        <img src="${value.image}" alt="img">
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  });
  // search Recipie
let searchTerm = document.getElementById("searchItem")

searchTerm.addEventListener('keyup', searchRecipe);
function searchRecipe() {
  const searchBar = searchTerm.value.toLowerCase();

  const filteredProducts = completedata.results.filter((product) => {
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

// Function to show recipe details
// function showRecipeDetails(recipeId) {
//   const detailEndpoint = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=5098cda1bbe94833b4dcfa9e3e1287b5`;
//   fetch(detailEndpoint)
//     .then(response => response.json())
//     .then(data => {
//       // Set detail elements with recipe data
//       document.getElementById('detail-title').textContent = data.title;
//       document.getElementById('detail-image').src = data.image;
//       document.getElementById('detail-instructions').textContent = data.instructions;

//       // Hide recipe cards and show recipe details
//       document.getElementById('cards').style.display = 'none';
//       document.getElementById('details').style.display = 'block';
//     })
//     .catch(error => {
//       console.error('Error fetching recipe details:', error);
//     });
// }

// // Event listener for search input
// const searchInput = document.getElementById("search-input");
// searchInput.addEventListener("input", () => {
//   const searchQuery = searchInput.value.toLowerCase();

//   // Filter recipe data based on search query
//   const filteredRecipes = completedata.results.filter(recipe => recipe.title.toLowerCase().includes(searchQuery));

//   // Create HTML for filtered recipe data
//   let filteredData = "";
//   filteredRecipes.map(value => {
//     filteredData += `<div class="card" onclick="showRecipeDetails(${value.id})">
//       <h1 class="title">${value.title}</h1>
//       <img src="${value.image}" alt="img">
//     </div>`;
//   });

//   // Display filtered recipe data on webpage
//   document.getElementById("cards").innerHTML = filteredData;
// });