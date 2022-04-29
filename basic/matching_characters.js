function MatchingCharacters(str){
    let lenCount = str.length;
    let res = -1;
    for(let i = 0; i < lenCount; i++){
        for(let j = i + 1; j < lenCount; j++){
            if(str[i] === str[j]){
                res = Math.max(res, Math.abs(j - i - 1));
            }
        }
    }
    return res;
}


console.log(MatchingCharacters("mmmermec"));
console.log(MatchingCharacters("baaabcddc"));
console.log(MatchingCharacters("abba"));