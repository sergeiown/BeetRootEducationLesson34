"use strict";

function filterItemsByKeyValue(
  sourceArray = shoppingList,
  key = "quantity",
  value = 5
) {
  let source = JSON.parse(JSON.stringify(sourceArray));
  let filteredItemsByKeyValue = [];

  source.forEach(function (item) {
    if (item[key] === value) {
      filteredItemsByKeyValue.push(item);
    }
  });

  return filteredItemsByKeyValue;
}

function sortItemsByKey(
  sourceArray = shoppingList,
  key = "product",
  attribute = true
) {
  /* attribute can be false for decrease sorting and true for increase sorting
  key can be any key of Item in the sourceArray */
  let source = JSON.parse(JSON.stringify(sourceArray));

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

export { filterItemsByKeyValue, sortItemsByKey };
