// fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c726a3235bf54d99a46e6aed63826288')
//   .then(data => {
//     return data.json();
//   })
//   .then(completedata => {
//     let data1 = "";
//     completedata.results.map(value => {
//       data1 += `<div class="card">
//         <h1 class="title">${value.title}</h1>
//         <img src="${value.image}" alt="img">
//       </div>`;
//     });
//     document.getElementById("cards").innerHTML = data1;
//   })
//  .catch(error => console.error(error));
fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=c726a3235bf54d99a46e6aed63826288')
.then(response => response.json())
.then(data => console.log(data.results))
.catch(error => console.error(error));