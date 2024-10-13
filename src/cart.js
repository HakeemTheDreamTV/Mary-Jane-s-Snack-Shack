let label = document.getElementById("label");

let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        console.log(x);
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
        <img width="100" src="${search.img}" alt=""/>
        <div class="details">
            <div class="title-price-x">
              <h4>
                <p>${search.name}</p>
                <p>${search.price}</p>
              </h4>
              <i class="bi bi-x-lg"></i>
            </div>
            <div class="cart-buttons">
            
            </div>
            <h3></h3>
        </div>
        </div>
        `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
    </a>
    `;
  }
};
