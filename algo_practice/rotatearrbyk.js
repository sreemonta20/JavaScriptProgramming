function reverseArr(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let rotatebyK = (arr, k) =>{
    const n = arr.length;
    k = k % n;

    reverseArr(arr, 0, n-1);
    reverseArr(arr, 0, k-1);
    reverseArr(arr, k, n-1);
    return arr;
}

console.log(rotatebyK([1,2,3,4,5,6,7], 3));

