"use strict";

import { calcSumByisBoughtValue } from "./list_sorting.js";

function createTableWithListItems(shoppingList) {
  let source = JSON.parse(
    JSON.stringify(shoppingList)
  ); /* Make local copy of the shoppingList */

  const currentDateTime = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date()); /* Create readable date and time string for title */

  const rows = source.map(function (item) {
    /* Prepare rows for future table */ let listNumber =
      source.indexOf(item) + 1;

    let capitalizedProduct =
      item.product.charAt(0).toUpperCase() +
      item.product.slice(
        1
      ); /* Make the first letter in product name capitalized */

    let styledPrice = item.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }); /* Perform number format as currency */

    let styledSum = item.sum.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }); /* Perform number format as currency */

    let checkedCartIsBought = item.isBought
      ? `<button class="cart" type="button">${source.indexOf(item)}</button>`
      : `<button class="cart" type="button" title="Already bought" disabled></button>`; /* Check isBought key and make cart button disable */

    let checkedBinIsBought = item.isBought
      ? `<button class="bin" type="button">${source.indexOf(item)}</button>`
      : `<button class="bin" type="button" title="Cannot be deleted" disabled></button>`; /* Check isBought key and make bin button disable */

    return `
      <tr class="markable">
      <td style="text-align:center">${listNumber}.</td>
        <td>${capitalizedProduct}</td>
        <td style="text-align:center">${item.quantity}</td>
        <td>${styledPrice}</td>
        <td>${styledSum}</td>
        <td style="text-align:center">${checkedCartIsBought}</td>
        <td style="text-align:center">${checkedBinIsBought}</td>
      </tr>
    `; /* Return the array with completed rows */
  });

  let amount = calcSumByisBoughtValue(source).isBought;

  let totalAmount = calcSumByisBoughtValue(source).isBoughtAndNotBought;

  return `
    <h1>Drugstore shopping list</h1>
    <h2>${currentDateTime}</h2>
    <table>
      <thead>
        <tr style="text-align:center">
        <td><strong>#</strong></td>
          <td><strong>Product name</strong></td>
          <td><strong>Qti</strong></td>
          <td><strong>Price</strong></td>
          <td style="text-align:left"><strong>Amount</strong></td>
          <td><strong>Buy</strong></td>
          <td><strong>Remove</strong></td>
        </tr>
      </thead>

      <tbody>${rows.join("") /* Remove commas from the array */} 

      <tr>
      <td colspan="5" class = "fenced"></td>
      </tr>

      <tr>
      <td colspan="4" style="text-align:right"><strong>Amount to be payed :</strong></td>
      <td><strong>${amount}</strong></td>
      </tr>

      <tr>
      <td colspan="4" style="text-align:right"><strong>Total amount :</strong></td>
      <td><strong>${totalAmount}</strong></td>
      </tr>

      </tbody>
    </table>
  `; /* Return complet HTML with the title and the table */
}

export { createTableWithListItems };
