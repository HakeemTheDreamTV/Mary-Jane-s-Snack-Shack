let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: ";kjsadfo;inj",
    name: "Blackened Chicken Wrap",
    price: "$9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Chicken Sandwich.jpg",
  },
  {
    id: ";oanjdsf;oi",
    name: "Blackened Fish Sandwich",
    price: "$10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Fish Sandwich.jpg",
  },
  {
    id: "'pwqiaege'",
    name: "Ghost Burger",
    price: "$12",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Ghost Burger.jpg",
  },
  {
    id: "oa;iwnrgpoinmwe",
    name: "Mary Jane's Loaded Burger",
    price: "$15",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Loaded Burger.jpg",
  },
  {
    id: "[ajmgsff[kmwsarg]]",
    name: "Veggie Burger",
    price: "$9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../Shopping Cart/Food/Veggie Burger.jpg",
  },
];
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `<div id=product-id-${id} class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop();
