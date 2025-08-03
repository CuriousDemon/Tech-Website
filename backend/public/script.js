// Add Logic to implement slider function into Html page

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}




// For Cart pop-up

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".cart");
  const cartPopup = document.querySelector(".cart-popup");
  const addToCart_btn = document.querySelectorAll(".but1");
  

  cartIcon.addEventListener("click", function () {
    cartPopup.classList.toggle("show");
  });

 


 function createCartItem(itemName, itemPrice, initialQuantity, image_src) {
  // Create the main div with class 'cart-item'
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  // Create the image div with class 'item-image'
  const itemImage = document.createElement('div');
  itemImage.classList.add('item-image');

  //Create the image tag with src value
  const img = document.createElement('img')
  img.setAttribute('src',image_src)

  // Create the item details div with class 'item-details-without-pic'
  const itemDetails = document.createElement('div');
  itemDetails.classList.add('item-details-without-pic');

  // Create the item name div with class 'item-name'
  const itemNameDiv = document.createElement('div');
  itemNameDiv.classList.add('item-name');
  itemNameDiv.textContent = itemName;

  // Create the item price div with class 'item-price'
  const itemPriceDiv = document.createElement('div');
  itemPriceDiv.classList.add('item-price');
  itemPriceDiv.textContent = itemPrice;

  // Create the item quantity div with class 'item-quantity'
  const itemQuantityDiv = document.createElement('div');
  itemQuantityDiv.classList.add('item-quantity');

  // Create the minus button
  const minusButton = document.createElement('button');
  minusButton.classList.add('minus');
  minusButton.textContent = '-';

  // Create the quantity span
  const quantitySpan = document.createElement('span');
  quantitySpan.classList.add('item_quantity')
  quantitySpan.textContent = initialQuantity;

  // Create the plus button
  const plusButton = document.createElement('button');
  plusButton.classList.add('plus');
  plusButton.textContent = '+';

  // Append children to their parents
  itemImage.appendChild(img)

  itemQuantityDiv.appendChild(minusButton);
  itemQuantityDiv.appendChild(quantitySpan);
  itemQuantityDiv.appendChild(plusButton);

  itemDetails.appendChild(itemNameDiv);
  itemDetails.appendChild(itemPriceDiv);
  itemDetails.appendChild(itemQuantityDiv);

  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemDetails);

  // Return the complete cart item element
  return cartItem;
}


//Check item exist or not

function checkItemExists(itemName) {
  // Ensure itemName is a string to prevent errors.
  if (typeof itemName !== 'string') {
    console.error('Error: itemName must be a string.');
    return null;
  }


  // Select all the existing cart item elements.
  const cartItems = document.querySelectorAll('.cart-item');

  // Loop through items and look for a name match.
  for (const item of cartItems) {
    const nameEl = item.querySelector('.item-name');
    
    // Case-insensitive, trimmed comparison.
    if (
      nameEl &&
      nameEl.textContent.trim().toLowerCase() === itemName.trim().toLowerCase()
    ) {
      return item; // Return the matching element
    }
  }

  // No matching item found.
  return null;
}




// Append the created element to an existing element on the page (e.g., a cart container)
// document.getElementById('cart-container').appendChild(productItem);

  addToCart_btn.forEach(button => {
    button.addEventListener("click", () => {
      if(!cartPopup.classList.contains("show")){
        cartPopup.classList.add("show");
      }

      // Example of how to use the function:
      
      const cart_top = document.getElementById("cart-top");
      const product_price = button.previousElementSibling;
      const product_name = product_price.previousElementSibling;
      const product_image = product_name.previousElementSibling;
      const totalCost = document.getElementById("cost-value");


      const productItem = createCartItem(product_name.innerText, product_price.innerText, 1, product_image.src);

      if(!checkItemExists(product_name.innerText)){
        //If element does not exist
        cart_top.after(productItem);
        totalCost.innerText = Number(totalCost.innerText.replace(/[^0-9.]/g, '')) + Number(product_price.innerText.replace(/[^0-9.]/g, ''))
      }
      

      //This is for increase the quantity
      const addElement = document.querySelectorAll(".plus")
      const deleteElement = document.querySelectorAll(".minus")
      addElement.forEach(element => {
      element.addEventListener("click",() => {
        const quantity = element.previousElementSibling
        const price = element.parentElement.previousElementSibling
        quantity.innerText = Number(quantity.textContent.replace(/[^0-9.]/g, '')) + 1
        totalCost.textContent = Number(totalCost.textContent.replace(/[^0-9.]/g, '')) + Number(price.textContent.replace(/[^0-9.]/g, ''))
      })
  })

  //This is for reduce the element quantity
   deleteElement.forEach(element => {
      element.addEventListener("click",() => {
        const quantity = element.nextElementSibling
        const price = element.parentElement.previousElementSibling
        if(Number(quantity.textContent.replace(/[^0-9.]/g, '')) > 1){
        quantity.innerText = Number(quantity.textContent.replace(/[^0-9.]/g, '')) - 1;
        }else{
          console.log(element.parentElement.parentElement.parentElement)
          const removeElement = element.parentElement.parentElement.parentElement;
          removeElement.remove();
        }
        totalCost.textContent = Number(totalCost.textContent.replace(/[^0-9.]/g, '')) - Number(price.textContent.replace(/[^0-9.]/g, ''))
      })
  })





    });
  });

  // Corrected logic for hiding cart popup when clicking outside
  document.addEventListener("click", function (e) {
    // Check if the click is outside the popup, the cart icon, AND any of the add-to-cart buttons
    const isClickOnAddToCartButton = Array.from(addToCart_btn).some(button => button.contains(e.target));

    if (!cartPopup.contains(e.target) && !cartIcon.contains(e.target) && !isClickOnAddToCartButton) {
      cartPopup.classList.remove("show");
    }
  });
});


//For User details pop up

const guest_user = document.getElementById('guest_user');
const popUp = document.querySelector('.popup-background')

guest_user.addEventListener('click', () => {
  popUp.setAttribute("style","display : block;top : 7%; z-index:10;")
})



