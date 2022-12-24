"use strict";

function calcSumByisBoughtValue(sourceArrey) {
  /* calculate the amount separately for already purchased and not yet purchased  */
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

function filterItemsByKeyValue(
  sourceArrey = shoppingList,
  key = "quantity",
  value = 5
) {
  let source = JSON.parse(JSON.stringify(sourceArrey));
  let filteredItemsByKeyValue = [];

  source.forEach(function (item) {
    if (item[key] === value) {
      filteredItemsByKeyValue.push(item);
    }
  });

  return filteredItemsByKeyValue;
}

function sortItemsByKey(
  sourceArrey = shoppingList,
  key = "product",
  attribute = true
) {
  /* attribute can be false for decrease sorting and true for increase sorting
  key can be any key of Item in the sourceArrey */
  let source = JSON.parse(JSON.stringify(sourceArrey));

  if (attribute) {
    let byKey = (a, b) => (a[key] > b[key] ? 1 : -1);
    const sortedItemsBykey = source.sort(byKey);

    return sortedItemsBykey;
  } else {
    let byKey = (a, b) => (a[key] > b[key] ? -1 : 1);
    const sortedItemsByKey = source.sort(byKey);

    return sortedItemsByKey;
  }
}

export { calcSumByisBoughtValue, filterItemsByKeyValue, sortItemsByKey };
