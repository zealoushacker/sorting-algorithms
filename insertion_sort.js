var numbers = [2, 10, -1, 0, 200, -150, 1000, -2500, 35, 4];

// insertion
function insertion_sort(arr) {
  var length = arr.length,
    first_unsorted_number,
    marker;
    
  for (var i=0; i < arr.length; i++) {
    marker = i + 1;
    first_unsorted_number = arr[marker];
    for (var j=marker; j >= 0 && arr[j - 1] > first_unsorted_number; j--) {
      arr[j] = arr[j-1];
      arr[j-1] = first_unsorted_number;
    }
  }
  
  return arr;
}

console.log("insertion", insertion_sort(numbers));
