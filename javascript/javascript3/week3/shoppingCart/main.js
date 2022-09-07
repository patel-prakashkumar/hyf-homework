//Shopping cart using Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency.toLowerCase().includes("dollar")) {
      return (this.price / 6.27).toFixed(2);
    } else if (currency.toLowerCase().includes("euro")) {
      return (this.price / 7.44).toFixed(2);
    } else if (currency.toLowerCase().includes("pound")) {
      return (this.price / 8.67).toFixed(2);
    } else {
      return this.price;
    }
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product)
  }
  removeProduct(product) {
    const index = this.products.indexOf(product)
    this.products.splice(index, 1);
  }
  searchProduct() {
    const input = document.getElementById('product-search')
    const productSearch = document.getElementById('product-list');
    // @ts-ignore
    input.addEventListener('keyup', () => {
      // @ts-ignore
      const inputProduct = input.value
      if (input) {
        const productFind = this.products.filter(element => element.name.match(input));
        for (let i = 0; i < productFind.length; i++) {
          const productP = document.createElement('p')
          productP.innerHTML = `Product Name:  ${productFind[i].name} Product Price: ${productFind[i].price}`;
          // @ts-ignore
          productSearch.appendChild(productP)
        }
      } else {
        console.log("search product not found");
      }
    })
  }
  getTotal() {
    const productPrice = this.products.map(element => element.price);
    const productSum = productPrice.reduce((productPrice, a) => productPrice + a, 0)
   
    const productTotal = document.getElementById('product-total');
    const productTotalP = document.createElement('p')
    productTotalP.innerHTML = `Product Total Price:  ${productSum}`;
    // @ts-ignore
    productTotal.appendChild(productTotalP) 
    return productSum;
  }
  renderProducts() {
    const divRender = document.getElementById('product-render');
    const productUl = document.createElement('ul');
    productUl.classList.add('product-ul');
    productUl.innerHTML = "Product Detail";
    // @ts-ignore
    divRender.appendChild(productUl);
    const products = this.products.map(element => element);
    for (let i = 0; i < products.length; i++) {
      const productNameLI = document.createElement('li');
      productNameLI.innerHTML = "Prduct Name : " + products[i].name;
      productUl.appendChild(productNameLI);
      const productPriceLI = document.createElement('li');
      productPriceLI.innerHTML = "Product Price: " + products[i].price;
      productUl.appendChild(productPriceLI);
    }
  }
  getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const userDiv = document.createElement("div");
        document.body.appendChild(userDiv);
        const userName = document.createElement("h1");
        userDiv.appendChild(userName);
        userName.innerHTML = `User Name: ${data.username}`;
        const name = document.createElement("h2");
        userDiv.appendChild(name);
        name.innerHTML = `Full Name: ${data.name}`;
      })
      .then(() => {
        const totalPrice = document.createElement("h2");
        document.body.appendChild(totalPrice);
        totalPrice.innerHTML = `Total price =  ${this.getTotal()}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 10000);
const tablet = new Product("tablet", 18000);
const iWatch = new Product("Iwatch", 15000);
const mobile = new Product("mobile", 3000);
const ipad = new Product("ipad", 4000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(ipad);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(iWatch);
shoppingCart.addProduct(tablet);
console.log(shoppingCart.products);
shoppingCart.removeProduct(ipad);
console.log(shoppingCart.products);
shoppingCart.searchProduct();
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.getUser();
const plant = new Product("plant", 200);
console.log(plant.convertToCurrency("dollars"));
console.log(plant.convertToCurrency("euro"));
console.log(plant.convertToCurrency("pound"));