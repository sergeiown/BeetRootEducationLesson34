"use strict";

import * as change from "./list_changing.js";
import * as output from "./list_output.js";

function showActionFormNewItem() {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));

  if (sourceArray.length >= 11) {
    showAttention();
  } else {
    const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
    const htmlContainer = document.querySelector(".action");

    htmlContainer.style.display = "flex";
    htmlContainer.innerHTML = `
        <div class="action-form">
          <div class="add-item">
            <h2>Specify the details of the new product:</h2>
              <form class="new-product">
                <label for="name">name:</label>
                <input type="text" class="name" name="name" maxlength="25" placeholder=" up to 25 symbols" required>
    
                <label for="quantity">quantity:</label>
                <input type="number" class="quantity" name="quantity" min="1" max="100" placeholder=" up to 100 units" required>
    
                <label for="price">price:</label>
                <input type="number" class="price" name="price" step="0.01" min="0.01" max="100.00" placeholder=" up to 100.00 USD" required>
    
                <input type="submit" class="action-form-yes" id="yes">
              </form>
            <button class="action-form-no" id="no"></button>
          </div>
        </div>`;

    htmlContainer.addEventListener(
      "submit",
      hideActionFormAfterAdding
    ); /* wait for form submit */

    function hideActionFormAfterAdding() {
      const newProduct = String(
        document.querySelector(".name").value
      ).toLowerCase(); /* lowercase - to avoid multiple products with the same name */
      const newQuantity = Number(document.querySelector(".quantity").value);
      const newPrice = Number(document.querySelector(".price").value);

      addNewItem(newProduct, newQuantity, newPrice);

      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
      htmlContainer.removeEventListener(
        "submit",
        hideActionFormAfterAdding
      ); /* had to remove the event listener due to double function call!!! */
    }

    htmlContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("action-form-no")) {
        htmlContainer.style.display = "none";
        htmlContainer.innerHTML = "";
      } /* wait for "no" button to be clicked */
    });
  }
}

function showAttention() {
  const htmlContainer = document.querySelector(".action");
  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
          <div class="action-form">
            <div class="add-item-attention">
              <h1>Maximum size of the shopping list exceeded.</h1>
              <button class="action-form-yes" id="yes"></button
              ><button class="action-form-no" id="no"></button>
            </div>
          </div>`;

  htmlContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for the "yes" button to be clicked */
  });
}

function addNewItem(newProduct, newQuantity, newPrice) {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const newIsBought = false;

  STORAGE.list = change.addItemToList(
    sourceArray,
    newProduct,
    newIsBought,
    newQuantity,
    newPrice
  ); /* update the global array */

  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}

export { showActionFormNewItem };
