if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", function(){
      deleteItem()
      quantityChange()
      addToCart()
      purchase()
  });
} else {
    deleteItem()
    quantityChange()
    addToCart()
    purchase();

}


function deleteItem() {
  const delBtn = document.querySelectorAll(".delete-btn");
  delBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const buttonClicked = event.currentTarget;
      buttonClicked.parentElement.remove();
      updateCartTotal();
    });
  });
}

function quantityChange() {
  const quantityInputs = document.querySelectorAll(".quantity");
  quantityInputs.forEach((input) => {
    input.addEventListener("click", function () {
      updateCartTotal();
    });
  });
}

function addToCart() {
  const addBtn = document.querySelectorAll(".add-btn");
  addBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const button = event.currentTarget;
      const shopItem = button.parentElement.parentElement;
      const title = shopItem.querySelector(".item-title").textContent;
      const price = shopItem.querySelector(".price-item").textContent;
      const imageSrc = shopItem.querySelector(".item-img").src;
      addItemToCart(title, price, imageSrc);
      updateCartTotal();
    });
  });
}

function purchase() {
  document.querySelector(".check-out").addEventListener("click", function () {
    alert("Thank you for your purchase");
    const cartItems = document.querySelectorAll(".cart-bar");
    cartItems.forEach((item) => {
      while (item.hasChildNodes()) {
        item.removeChild(item.firstChild);
      }
      updateCartTotal();
    });
  });
}





window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 50);
});
// cart side bar

const cartBtn = document.querySelector(".cart");
const cartBar = document.querySelector(".cart-bar");

cartBtn.addEventListener("click", function () {
  cartBar.classList.toggle("slide");
});


function addItemToCart(title, price, imageSrc) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-item");
  const cartItems = document.querySelector(".cart-bar");
  const cartItemNames = cartItems.querySelectorAll(".cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  const cartRowContents = `
    <img src="${imageSrc}" alt="" />
    <h1 class="cart-item-title">${title}</h1>
    <input
      type="number"
      id="quantity"
      class="quantity"
      name="quantity"
      min="1"
      max="100"
      value="1"
    />
    <p class="item-price">${price}</p>
    <i class="fas fa-times delete-btn"></i>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);


  deleteItem()
  quantityChange()
}



// update total price function
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-bar")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-item");
  let total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("item-price")[0];
    const quantityElement = cartRow.getElementsByClassName("quantity")[0];
    const price = parseFloat(priceElement.innerText.replace("zł", ""));
    const quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = total + "zł";
}

