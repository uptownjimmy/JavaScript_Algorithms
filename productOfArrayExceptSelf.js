// Given an array of n integers where n > 1,  return
// an array result such that result[i] is equal to the product 
// of all the elements of array except array[i].

var productOfArrayExceptSelf = (numbersArray) => {
    let trashArray = [];
    let intermediateArray = [];
    let result = [];

    numbersArray.forEach((element, i) => {
        trashArray = numbersArray;
        console.log('trashArray = ', trashArray);
        intermediateArray = trashArray.splice(i, 1);
        console.log('intermediateArray = ', intermediateArray);
        result[i] = intermediateArray.reduce(
            (accumulator, currentValue) => accumulator * currentValue
        );
        console.log('result = ', result);

        console.log(i);
    });

    return result;
}

console.log(productOfArrayExceptSelf([1,2,3,4]))
// console.log(productOfArrayExceptSelf([1,0]))