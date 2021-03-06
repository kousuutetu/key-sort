'use strict';

/**
 * Sort the associative array by its key
 * @param {Array.<Object>} objectArray - The associative array needs to be sorted
 * @param {boolean} [deep = true] - Whether or not to deep sort
 * @returns {Array.<Object>} Sorted array
 */
const kSort = function kSort(objectArray, deep) {
  // set default value of deep to true
  if(deep !== false) deep = true;

  objectArray.sort(function (objA, objB) {
    // it is assumed that each object has only one property
    // as it is an associative array
    let propertyA = Object.keys(objA)[0];
    let propertyB = Object.keys(objB)[0];

    if(deep === true) {
      if (Array.isArray(objA[propertyA])) {
        // recursive sorting
        kSort(objA[propertyA], deep);
      }

      if (Array.isArray(objB[propertyB])) {
        // recursive sorting
        kSort(objB[propertyB], deep);
      }
    }

    return propertyA.localeCompare(propertyB);
  });

  return objectArray;
}

module.exports = kSort;
