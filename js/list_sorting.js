"use strict";

// function sortItemsByBoughtAttribute(
//   sourceArrey = shoppingList,
//   attribute = true
// ) {
//   /*attribute can be false for 'notbought' items first and true for 'bought' items first*/
//   let source = JSON.parse(JSON.stringify(sourceArrey));
//   let isBoughtFirst = [];
//   let isBoughtSecond = [];

//   source.forEach(function (Item) {
//     if (Item.isBought === attribute) {
//       isBoughtFirst.push(Item);
//     } else {
//       isBoughtSecond.push(Item);
//     }
//   });

//   const sortedItemsByBoughtAttribute = isBoughtFirst.concat(isBoughtSecond);
//   return sortedItemsByBoughtAttribute;
// }

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
  /*attribute can be false for decrease sorting and true for increase sorting
  key can be any key of Item in the sourceArrey*/
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

export { filterItemsByKeyValue, sortItemsByKey };
