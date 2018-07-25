// Given an array numbersArray of n integers where n > 1,  return
// an array result such that result[i] is equal to the product 
// of all the elements of numbersArray except numbersArray[i].
var productOfArrayExceptSelf = (numbersArray) => {
    let result = [];
    const length = numbersArray.length;

    for(let i = 0; i < length; i++) {
        const map = numbersArray.map(x => {
            if(x !== i + 1) {
                return x;
            } else {
                return 1;
            }
        });
        result[i] = map.reduce(
            (accumulator, currentValue) => accumulator * currentValue
        );
    }

    return result;
}

// console.log(productOfArrayExceptSelf([1,2,3,4]))
console.log(productOfArrayExceptSelf([1,0]))