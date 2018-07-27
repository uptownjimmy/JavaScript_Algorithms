var maxSubarray = (numbersArray) => {
    let maximumEndingHere = 0;
    let maximumSoFar = numbersArray[0];

    numbersArray.forEach(current => {
        maximumEndingHere = Math.max(current, maximumEndingHere + current)
        maximumSoFar = Math.max(maximumSoFar, maximumEndingHere)
    });

    return maximumSoFar;
}

// console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubarray([-2,1,4]));
// console.log(maxSubarray([1]));
// console.log(maxSubarray([-1]));