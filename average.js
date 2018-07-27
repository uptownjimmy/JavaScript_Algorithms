var average = (array) => {
  const length = array.length;
  sum = 0;

  array.forEach(element => {
    sum += element;
  });

  return sum/length;
}

var array = [84, 48, 68, 10, 18, 98, 12, 23, 54, 57, 48, 33, 16, 77, 11, 29];
console.log(average(array));
