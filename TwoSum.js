// With an array and a target value as arguments, returns an array of arrays 
// containing value pairs that equal the target value;
// Time Complexity: O(n)

var twoSum = (numbersArray, target) => {
    let sums = [];
    let map = {};

    numbersArray.forEach(element => {
        let complement = target - element;

        if (map[complement] !== undefined) {
            sums.push([element, complement]);
        }

        map[element] = element;
    });

    return sums;
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 5, 2, -4, 8, 11], 7))
