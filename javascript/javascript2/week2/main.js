console.log("Script loaded");
const products = getAvailableProducts();
console.log(products)
const searchContainer = document.querySelector('#search-form')
const displayOutput = document.getElementById('output-search');
const searchNameInput = document.getElementById('search-input');
const searchPriceInput = document.getElementById('search-price')
const textNameValue = searchNameInput.value;
const textPriceValue = searchPriceInput.value;
const btnPriceMax = document.getElementById('btn-max')
const btnPriceMin = document.getElementById('btn-min')
const btnName = document.getElementById('btn-name')
const btnRating = document.getElementById('btn-rating')
searchNameInput.addEventListener('keyup', function (textNameValue) {
  textNameValue = searchNameInput.value;
  const rander = products.filter(list => list.name.toLowerCase().includes(textNameValue.toLowerCase()))
  if (!textNameValue) {
    displayOutput.style.backgroundColor = 'lightgray'
    displayOutput.innerHTML = '<h4>Find your product by Entering product name in Search Bar Menu</h4>'
  }
  else {
    displayOutput.innerHTML = rander.map(list => `<li style = "list-style: none;"><h3>Product Name: ${list.name}</h3></br>
    <span>Product Price: ${list.price}</span> </br>
    <span>Product Rating: ${list.rating}</span></li>`)
  }
})
searchPriceInput.addEventListener('keyup', function () {
  const textPriceValue = searchPriceInput.value
  const rander = products.filter(list => list.price < textPriceValue)
  if (!textPriceValue) {

    displayOutput.innerHTML = '<h2>Enter Product Price</h2>'
  }
  else {
    displayOutput.style.backgroundColor = 'white'
    displayOutput.innerHTML = rander.map(list => ` <li style = "list-style: none;"> <h3>Product Name: ${list.name}</h3></br>
      <span>Product Price: ${list.price}</span> </br>
      <span>Product Rating: ${list.rating}</span> </li>`)
  }
})
btnPriceMin.addEventListener('click', function () {
  const result = products.sort((a,b) => a.price-b.price)
  
  displayOutput.innerHTML = result.map(list => `<li style = "list-style: none;"> <h3>Product Name: ${list.name}</h3></br>
  <span>Product Price: ${list.price}</span> </br>
  <span>Product Rating: ${list.rating}</span> </li>`)
})
btnPriceMax.addEventListener('click', function () {
  const result = products.sort((a,b) => b.price-a.price)
  
  displayOutput.innerHTML = result.map(list => `<li style = "list-style: none;"> <h3>Product Name: ${list.name}</h3></br>
  <span>Product Price: ${list.price}</span> </br>
  <span>Product Rating: ${list.rating}</span> </li>`)
})
btnName.addEventListener('click', function () {
  const result = products.sort((a,b) => a.name.localeCompare(b.name))
  
  displayOutput.innerHTML = result.map(list => `<li style = "list-style: none;"> <h3>Product Name: ${list.name}</h3></br>
  <span>Product Price: ${list.price}</span> </br>
  <span>Product Rating: ${list.rating}</span> </li>`)
})
btnRating.addEventListener('click', function () {
  const result = products.sort((a, b) => b.rating - a.rating)
  console.log(result)
  displayOutput.innerHTML = result.map(list => `<li style = "list-style: none;"> <h3>Product Name: ${list.name}</h3></br>
  <span>Product Price: ${list.price}</span> </br>
  <span>Product Rating: ${list.rating}</span> </li>`)
})