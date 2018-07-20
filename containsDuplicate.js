// Determine whether an array contains any duplicates;
// Sort first to order any duplicates consecutively;
// Time Complexity: O(n log n)

var containsDuplicate = (numbers) => {
    let doesContainDuplicate = false;
    numbers.sort();
    numbers.forEach((element, i) => {
        if (element === numbers[i + 1]) {
            doesContainDuplicate = true;
        }
    });

    return doesContainDuplicate;
};

console.log(containsDuplicate([1,5,1,3,3,4,3,2,4,1,2]))
