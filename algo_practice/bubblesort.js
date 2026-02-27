function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped){
            console.log(swapped);
            break; // already sorted — optimization!
        } 
    }
    return arr;
}

console.log(bubbleSort([5,3,8,1,2]));  /// O(n2)