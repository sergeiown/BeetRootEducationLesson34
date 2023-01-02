"use strict";

import * as sort from "./list_sorting.js";
import * as output from "./list_output.js";

function showActionFormSortItems() {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
  const htmlContainer = document.querySelector(".action");

  htmlContainer.style.display = "flex";
  htmlContainer.innerHTML = `
        <div class="action-form">
          <div class="sort-item">
            <h2>Select sorting parameters:</h2>
              <form class="sorting-parameters">
                <label for="keys">Sort list by the next:</label>
                <input list="keys" class="keys" name="keys" maxlength="25" placeholder=" choose one" required>
                    <datalist id="keys">
                        <option value="product">
                        <option value="quantity">
                        <option value="price">
                        <option value="isBought">
                    </datalist>

                <label for="attribute">Sorting by descending:</label>
                <input type="checkbox" name="attribute" class="attribute" checked>
    
                <input type="submit" class="action-form-yes" id="yes">
              </form>
            <button class="action-form-no" id="no"></button>
          </div>
        </div>`;

  htmlContainer.addEventListener(
    "submit",
    hideActionFormAfterSorting
  ); /* wait for the form submit */

  function hideActionFormAfterSorting() {
    const key = String(document.querySelector(".keys").value);
    const attribute = document.querySelector(".attribute").checked;

    sortItems(key, attribute);

    htmlContainer.style.display = "none";
    htmlContainer.innerHTML = "";
    htmlContainer.removeEventListener(
      "submit",
      hideActionFormAfterSorting
    ); /* had to remove the event listener due to double function call!!! */
  }

  htmlContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("action-form-no")) {
      htmlContainer.style.display = "none";
      htmlContainer.innerHTML = "";
    } /* wait for "no" button to be clicked */
  });
}

function sortItems(key, attribute) {
  const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));

  STORAGE.list = sort.sortItemsByKey(
    sourceArray,
    key,
    attribute
  ); /* update the global array */

  const htmlContainer = document.querySelector(".list");
  const htmlData = output.createTableWithListItems(STORAGE.list);
  htmlContainer.innerHTML =
    htmlData; /* Add updated shoppling list to the page */
}

export { showActionFormSortItems };
