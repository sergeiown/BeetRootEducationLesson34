"use strict";

function filterItemsByKeyValue(sourceArray, key, value) {
  const source = JSON.parse(JSON.stringify(sourceArray));

  if (key === "isBought" && value === "true") {
    value = true;
  } else if (key === "isBought" && value === "false") {
    value = false;
  } else if (key === "quantity" || key === "price" || key === "sum") {
    value = Number(value);
  } /* data types checking */

  let filteredItemsByKeyValue = [];

  source.forEach(function (item) {
    if (item[key] === value) {
      filteredItemsByKeyValue.push(item);
    }
  });

  return filteredItemsByKeyValue;
}

function sortItemsByKey(sourceArray, key, attribute) {
  /* attribute can be false for decrease sorting and true for increase sorting
  key can be any key of Item in the sourceArray */
  const source = JSON.parse(JSON.stringify(sourceArray));

  if (attribute) {
    const byKey = (a, b) => (a[key] > b[key] ? -1 : 1);
    const sortedItemsBykey = source.sort(byKey);

    return sortedItemsBykey;
  } else {
    const byKey = (a, b) => (a[key] > b[key] ? 1 : -1);
    const sortedItemsByKey = source.sort(byKey);

    return sortedItemsByKey;
  }
}

export { filterItemsByKeyValue, sortItemsByKey };
