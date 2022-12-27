"use strict";

window.STORAGE = {}; /* Yes, I know it's an anti-pattern */
STORAGE.list = []; /* Create the global array */

import * as creation from "./random_list_creation.js";
import * as sort from "./list_sorting.js";
import * as change from "./list_changing.js";
import * as output from "./list_output.js";

const tableSoppingList = document.querySelector(".list");
const buttonNewList = document.querySelector(".new-list");
const buttonSorting = document.querySelector(".sorting");
const buttonFiltering = document.querySelector(".filtering");
const buttonNewItem = document.querySelector(".new-item");

function createNewList() {
  const shoppingList = creation.returnCompleteShoppingList();
  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(shoppingList);

  setTimeout(
    () => (htmlContainer.innerHTML = htmlData),
    500
  ); /* Add a new shoppling list to the page with the delay */

  setTimeout(
    () =>
      (htmlContainer.style.background =
        "url(../img/drugstore.png) bottom right / 50% no-repeat"),
    500
  ); /* Change background with the delay */

  setTimeout(() => (document.querySelector(".sorting").disabled = false), 2500);
  setTimeout(
    () => (document.querySelector(".filtering").disabled = false),
    3000
  );
  setTimeout(
    () => (document.querySelector(".new-item").disabled = false),
    3500
  ); /* Make control-buttons visible at the first callback with the delay */

  STORAGE.list = shoppingList; /* update the global array */
}

//-----Buy item section
function showActionFormBuyItem(sourceArrayIndex) {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const htmlContainer = document.querySelector(".action");

  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
    <div class="action-form">
      <div class="buy-item">
        <h1>Do you really want to buy ${
          sourceArray[sourceArrayIndex].quantity
        } unit(s) of ${
    sourceArray[sourceArrayIndex].product
  } at the price of ${sourceArray[sourceArrayIndex].price.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )} ?</h1>
        <button class="action-form-yes"></button
        ><button class="action-form-no"></button>
      </div>
    </div>
  `;

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";

      buyItem(sourceArray, sourceArrayIndex);
    } /* wait for the "yes" button to be clicked */
  });

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for the "no" button to be clicked */
  });
}

function buyItem(sourceArray, sourceArrayIndex) {
  const updatedList = change.addItemToListAfterBuying(
    sourceArray,
    sourceArrayIndex
  );

  STORAGE.list = updatedList; /* update the global array */

  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}
//-----Buy item section

//-----Remove item section
function showActionFormRemoveItem(sourceArrayIndex) {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const htmlContainer = document.querySelector(".action");

  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
<div class="action-form">
  <div class="remove-item">
    <h1>Do you really want to remove ${sourceArray[sourceArrayIndex].quantity} unit(s) of ${sourceArray[sourceArrayIndex].product} from list?</h1>
    <button class="action-form-yes"></button
    ><button class="action-form-no"></button>
  </div>
</div>`;

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
      removeItem(sourceArray, sourceArrayIndex);
    } /* wait for the "yes" button to be clicked */
  });

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for the "no" button to be clicked */
  });
}

function removeItem(sourceArray, sourceArrayIndex) {
  const souceArrayAfterDeconste = change.deleteItemFromList(
    sourceArray,
    sourceArrayIndex
  ); /* remove one object in the array by index */

  STORAGE.list = souceArrayAfterDeconste; /* update the global array */

  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}
//-----Remove item section

//-----Add new item section
function showActionFormNewItem() {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const htmlContainer = document.querySelector(".action");

  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
<div class="action-form">
  <div class="add-item">
    <h1>Do you really want to</h1>
    <button class="action-form-yes"></button
    ><button class="action-form-no"></button>
  </div>
</div>`;

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
      addNewItem();
    } /* wait for the "yes" button to be clicked */
  });

  htmlContainer.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for the "no" button to be clicked */
  });
}

function addNewItem() {
  const sourceArray = STORAGE.list;
  const newProduct = "Amphetamine"; /* for testing purpose */
  const newIsBought = false;
  const newQuantity = 1;
  const newPrice = 10;
  const sourceArrayWithNewItem = change.addItemToList(
    sourceArray,
    newProduct,
    newIsBought,
    newQuantity,
    newPrice
  );

  STORAGE.list = sourceArrayWithNewItem; /* update the global array */

  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}
//-----Add new item section

// main ivent listeners-----
buttonNewList.addEventListener("click", createNewList);

buttonNewItem.addEventListener("click", addNewItem);

tableSoppingList.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("cart")) {
    showActionFormBuyItem(event.target.innerHTML);
  }
}); /* wait for the "buy" button to be clicked and read the index of the selected object in the array */

tableSoppingList.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("bin")) {
    showActionFormRemoveItem(event.target.innerHTML);
  }
}); /* wait for the "remove" button to be clicked and read the index of the selected object in the array */
