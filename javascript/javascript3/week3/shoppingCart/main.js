//Shopping cart using Classes
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
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
  
    searchProduct(productName) {
      const productFind = this.products.filter(element => element.name === productName);
      const productSearch = document.getElementById('product-search');
      for (let i = 0; i < productFind.length; i++) {
        const productP = document.createElement('p')
        productP.innerHTML = `Product Name:  ${productFind[i].name} Product Price: ${productFind[i].price}`;
        productSearch.appendChild(productP)
      }
    }
  
    getTotal() {
      const productPrice = this.products.map(element => element.price);
      const productSum = productPrice.reduce((productPrice, a) => productPrice + a, 0)
      const productTotal = document.getElementById('product-total');
      const productTotalP = document.createElement('p')
      productTotalP.innerHTML = `Product Total Price:  ${productSum}`;
      productTotal.appendChild(productTotalP)
    }
  
    renderProducts() {
      const divRender = document.getElementById('product-render');
      const productUl = document.createElement('ul');
      productUl.classList.add('product-ul');
      productUl.innerHTML = "Product Detail";
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
    getUser(user) {
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const laptop = new Product("laptop", 10000);
  const mobile = new Product("mobile", 3000);
  const ipad = new Product("ipad", 4000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(laptop);
  shoppingCart.addProduct(ipad);
  shoppingCart.addProduct(mobile);
  console.log(shoppingCart.products);
  shoppingCart.removeProduct(ipad);
  console.log(shoppingCart.products);
  shoppingCart.searchProduct('laptop');
  shoppingCart.getTotal();
  shoppingCart.renderProducts();
  shoppingCart.getUser('Bret');
    