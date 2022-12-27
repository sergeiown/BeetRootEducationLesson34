"use strict";

import * as change from "./list_changing.js";
import * as output from "./list_output.js";

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
          <button class="action-form-yes" id="yes"></button
          ><button class="action-form-no" id="no"></button>
        </div>
      </div>
    `;

  htmlContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
      buyItem(sourceArray, sourceArrayIndex);
    } else if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    }
  }); /* wait for the "yes" or "no" button to be clicked */
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

//-----Remove item section
function showActionFormRemoveItem(sourceArrayIndex) {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const htmlContainer = document.querySelector(".action");

  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
      <div class="action-form">
        <div class="remove-item">
          <h1>Do you really want to remove ${sourceArray[sourceArrayIndex].quantity} unit(s) of ${sourceArray[sourceArrayIndex].product} from list?</h1>
          <button class="action-form-yes" id="yes"></button
          ><button class="action-form-no" id="no"></button>
        </div>
      </div>`;

  htmlContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("action-form-yes")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
      removeItem(sourceArray, sourceArrayIndex);
    } else if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for the "yes" or "no" button to be clicked */
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

export { showActionFormBuyItem, showActionFormRemoveItem };
