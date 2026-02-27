let twoSumIndices = (numbersArr, target) => {
    let seen = new Map();
    for(let i = 0; i < numbersArr.length; i++){
        let b = target - numbersArr[i];
        if(seen.has(b)){
            return [seen.get(b), i];
        }
        seen.set(numbersArr[i], i);
    }
    return [];
}

console.log(twoSumIndices([2, 7, 12, 15, 9], 9));