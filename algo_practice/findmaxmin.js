let findmaxmin = (arr) =>{
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return {min, max};
}

console.log(findmaxmin([3, 1, 7, 2, 9, 4]));
/// time complexity: O(n) -- Since single iteration through the array
/// Space complexity: O(1) -- Only a constant amount of space is used for min and max variables