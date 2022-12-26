"use strict";

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

    let checkedCartIsBought = !item.isBought
      ? `<button class="cart" type="button" title="Buy">${source.indexOf(
          item
        )}</button>`
      : `<button class="cart" type="button" title="Already bought" disabled>${source.indexOf(
          item
        )}</button>`; /* Check isBought key and make cart button disable */

    let checkedBinIsBought = !item.isBought
      ? `<button class="bin" type="button" title="Remove">${source.indexOf(
          item
        )}</button>`
      : `<button class="bin" type="button" title="Cannot be removed" disabled>${source.indexOf(
          item
        )}</button>`; /* Check isBought key and make bin button disable */

    return `
      <tr class="markable">
      <td style="text-align:center">${listNumber}.</td>
        <td>${capitalizedProduct}</td>
        <td style="text-align:center">${item.quantity}</td>
        <td style="text-align:right">${styledPrice}</td>
        <td style="text-align:right">${styledSum}</td>
        <td class="table-buton" style="text-align:center">${checkedCartIsBought}</td>
        <td class="table-buton" style="text-align:center">${checkedBinIsBought}</td>
      </tr>
    `; /* Return the array with completed rows */
  });

  let amount = calcSumByIsBoughtValue(source).isBought;

  let totalAmount = calcSumByIsBoughtValue(source).isBoughtAndNotBought;

  return `
    <h1>Drugstore shopping list</h1>
    <h2>${currentDateTime}</h2>
    <table>
      <thead>
        <tr style="text-align:center">
          <th>#</th>
          <th>Product name</th>
          <th>Qti</th>
          <th style="text-align:right">Price</th>
          <th style="text-align:right">Amount</th>
        </tr>
      </thead>

      <tbody>${rows.join("") /* Remove commas from the array output */} 

      <tr>
      <td colspan="5" class = "fenced"></td>
      </tr>

      <tr>
      <td colspan="4" style="text-align:right"><strong>Total amount :</strong></td>
      <td style="text-align:right"><strong>${totalAmount}</strong></td>
      </tr>

      <tr>
      <td colspan="4" style="text-align:right"><strong>Amount to be paied :</strong></td>
      <td style="text-align:right"><strong>${amount}</strong></td>
      </tr>

      </tbody>
    </table>
  `; /* Return complet HTML with the title and the table */
}

function calcSumByIsBoughtValue(sourceArrey) {
  /* calculate the amount separately for already purchased and not yet purchased goods to make the amount to be paid and total amount of the shopping list available */
  let source = JSON.parse(JSON.stringify(sourceArrey));
  let isBought = 0;
  let isNotBought = 0;

  source.forEach(function (item) {
    if (item.isBought) {
      isBought += item["sum"];
    } else {
      isNotBought += item["sum"];
    }
  });

  let isBoughtAndNotBought = (isBought + isNotBought).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }); /* Perform number format as currency */

  isBought = isBought.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }); /* Perform number format as currency */

  return { isBought, isBoughtAndNotBought };
}

export { createTableWithListItems };
