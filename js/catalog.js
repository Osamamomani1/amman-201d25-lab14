/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
let cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  let selectElement = document.getElementById('items');

  for (let i in Product.allProducts) {
    let optionElement = document.createElement('option');
    selectElement.appendChild(optionElement);
    optionElement.textContent=Product.allProducts[i].name;
  }
  


}

  

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();   
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

 // TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
 // TODO: suss out the item picked from the select list
let item = document.getElementById('items').value;
  // TODO: get the quantity
let quantity=document.getElementById('quantity').value
  // TODO: using those, add one item to the Cart
cart.addItem(item,quantity);


}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter =1;
function updateCounter() {
  let countervalue =document.getElementById("itemCount");
countervalue.textContent =counter++;
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let item = document.getElementById('items').value;
let quantity=document.getElementById('quantity').value
  // TODO: Add a new element to the cartContents div with that information
  let cartContents = document.getElementById('cartContents');
  let listElement = document.createElement('li');
  cartContents.appendChild(listElement);
  listElement.textContent= `you chose ${item} with ${quantity} Quantity  `
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
let catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
