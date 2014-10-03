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
    } while (swapped === true)
    
    return arr;
}


// recursive
function bubble_sort_recursive(arr) {
    var i = 0,
        array_length = arr.length, 
        sorted = false, 
        swap;
        
    for (; i < array_length; i++) {
        if (arr[i+1] < arr[i] && !sorted) {
            swap = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = swap;
            return bubble_sort_recursive(arr);
        } else if (i === array_length - 1) {
            sorted = true;
        }
    }
    if (sorted) {
        return arr;
    }
}

console.log("iterative", bubble_sort_iterative(numbers));

console.log("recursive", bubble_sort_recursive(numbers));
