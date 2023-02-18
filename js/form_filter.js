'use strict';

import * as sort from './list_sorting.js';
import * as output from './list_output.js';

function showActionFormFilterItems() {
    const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));
    const htmlContainer = document.querySelector('.action');

    const keysList = Object.keys(...sourceArray); /* make array of keys */
    const sortedKeysList = keysList.sort();

    let dataListKeys = '';
    sortedKeysList.forEach(
        (elem) => (dataListKeys += `<option value="${elem}">${elem}</option>`)
    ); /* make <option value> tags from the array of keys */

    htmlContainer.style.display = 'flex';
    htmlContainer.innerHTML = `
        <div class="action-form">
          <div class="filter-item">
            <h1>Select filtering parameters:</h1>
              <form class="filtering-parameters">
                <label for="keys">Key:</label>
                <input list="keys" class="keys" name="keys" placeholder=" choose one" required>
                    <datalist id="keys">${dataListKeys}</datalist>

                <label for="values">Value:</label>
                <input list="values" class="values" name="values" placeholder=" choose one" disabled>
                    <datalist id="values"></datalist>
    
                <input type="submit" class="action-form-yes" id="yes">
              </form>
            <button class="action-form-no" id="no"></button>
          </div>
        </div>`;

    document.querySelector('.keys').addEventListener('change', makeValues); /* wait for the key input to be changed */

    htmlContainer.addEventListener('submit', hideActionFormAfterFiltering); /* wait for the form submit */

    htmlContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('action-form-no')) {
            htmlContainer.style.display = 'none';
            htmlContainer.innerHTML = '';
        } /* wait for "no" button to be clicked */
    });

    function makeValues() {
        const key = String(document.querySelector('.keys').value); /* get key from the input "keys" */
        const valuesList = sourceArray.map((item) => item[key]); /* make array of values by selected key */
        const uniqSortedValueList = Array.from(new Set(valuesList)).sort(); /* make array of sorted unique values */

        let dataListValues = '';
        uniqSortedValueList.forEach(
            (elem) => (dataListValues += `<option value="${elem}">${elem}</option>`)
        ); /* make <option value> tags from the array of sorted unique values */

        document.querySelector('#values').innerHTML = dataListValues;
        document.querySelector('.values').disabled = false;
        document.querySelector('.values').required = true; /* make input "values" enabled and required */
    }

    function hideActionFormAfterFiltering() {
        const key = document.querySelector('.keys').value;
        const value = document.querySelector('.values').value;

        filterItems(key, value);

        htmlContainer.style.display = 'none';
        htmlContainer.innerHTML = '';
        htmlContainer.removeEventListener(
            'submit',
            hideActionFormAfterFiltering
        ); /* had to remove the event listener due to double function call!!! */
    }
}

function filterItems(key, value) {
    const sourceArray = JSON.parse(JSON.stringify(STORAGE.list));

    STORAGE.list = sort.filterItemsByKeyValue(sourceArray, key, value); /* update the global array */

    const htmlContainer = document.querySelector('.list');
    const htmlData = output.createTableWithListItems(STORAGE.list);
    htmlContainer.innerHTML = htmlData; /* Add updated shoppling list to the page */
}

export { showActionFormFilterItems };
