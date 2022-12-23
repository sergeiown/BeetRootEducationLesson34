"use strict";

function tableWithListItems(shoppingList) {
  let source = JSON.parse(JSON.stringify(shoppingList));

  const rows = source.map(function (item) {
    return `
      <tr>
      <td>${source.indexOf(item) + 1}.</td>
        <td>${item.product}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.sum}</td>
        <td>${item.isBought}</td>
        <td>${item.isBought}</td>
      </tr>
    `;
  });

  return `
    <table>
      <thead>
        <tr>
        <td>#</td>
          <td>Product name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Amount</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>${rows.join("")}</tbody>
    </table>
  `;
}

export { tableWithListItems };
