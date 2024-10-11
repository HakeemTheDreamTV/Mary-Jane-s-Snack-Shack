let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "kjsadfoinj",
    name: "Blackened Chicken Wrap",
    price: "$9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Chicken Sandwich.jpg",
  },
  {
    id: "oanjdsfi",
    name: "Blackened Fish Sandwich",
    price: "$10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Fish Sandwich.jpg",
  },
  {
    id: "pwqiaege",
    name: "Ghost Burger",
    price: "$12",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Ghost Burger.jpg",
  },
  {
    id: "oaiwnrgpoinmwe",
    name: "Mary Jane's Loaded Burger",
    price: "$15",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Loaded Burger.jpg",
  },
  {
    id: "ajmgsffkmwsarg",
    name: "Veggie Burger",
    price: "$9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Veggie Burger.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `<div id=product-id-${id} class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                        ${search.Itemtem === undefined ? 0 : search.Item}
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
