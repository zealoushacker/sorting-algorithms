var numbers = [2, 10, -1, 0, 200, -150, 1000, -2500, 35, 4];

// iterative
function bubble_sort_iterative(arr) {
  var array_length = arr.length,
    swapped,
    swap;
    
  do {
    swapped = false;
    for(var i=0 ; i < array_length; i++) {
      if (arr[i] > arr[i+1]) {
        swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
        swapped = true;
      }
    }
  } while (swapped === true);
  
  return arr;
}

console.log("iterative", bubble_sort_iterative(numbers));
