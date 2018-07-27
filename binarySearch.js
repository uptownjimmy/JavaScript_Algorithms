// returns the index of the key

var binarySearch = (array, key) => {
    let low = 0;
    let high = array.length - 1;
    let middle = Math.floor((low + high) / 2);

    while (low < high && array[middle] !== key) {
        (key < array[middle]) ? high = middle - 1 : low = middle + 1;
      
        middle = Math.floor(low + (high - low) / 2)
    }

    return (array[middle] === key) ? middle : -1;
}
  
  var array = [84, 48, 68, 10, 18, 98, 12, 23, 54, 57, 48, 33, 16, 77, 11, 29];
  console.log(binarySearch(array.sort(), 23));
