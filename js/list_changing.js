"use strict";

function addItemToList() {}

function deleteItemFromList(sourceArrey, sourceArreyIndex) {
  /*sourceArreyIndex - index of the Item in sourceArrey to be deleted*/
  let itemsAfterDelete = JSON.parse(JSON.stringify(sourceArrey));
  let deletedItem = itemsAfterDelete.splice(sourceArreyIndex, 1);
  return itemsAfterDelete;
}

export { addItemToList, deleteItemFromList };
