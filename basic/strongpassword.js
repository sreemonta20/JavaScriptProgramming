function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let minimumNumberCount = 0;
    let isNumberContains = false;
    let isLowerCaseCharContains = false;
    let isUpperCaseCharContains = false;
    let isSpecialCaseCharContains = false;

    
    
    for (let i = 0; i < numbers.length; i++) {
      if(password.includes(numbers.charAt(i))){
        isNumberContains = true;
        break;
     }
    }
    
    for (let i = 0; i < lower_case.length; i++) {
      if(password.includes(lower_case.charAt(i))){
        isLowerCaseCharContains = true;
        break;
     }
    }
    
    for (let i = 0; i < upper_case.length; i++) {
      if(password.includes(upper_case.charAt(i))){
        isUpperCaseCharContains = true;
        break;
     }
    }
    
    for (let i = 0; i < special_characters.length; i++) {
      if(password.includes(special_characters.charAt(i))){
        isSpecialCaseCharContains = true;
        break;
     }
    }

    // numbers.forEach(element =>{
    // if(password.includes(element)){
    //     isNumberContains = true;
    //     return;
    //  }
    // });

    // lower_case.forEach(element =>{
    // if(password.includes(element)){
    //     isLowerCaseCharContains = true;
    //     return;
    //  }
    // });
    
    // upper_case.forEach(element =>{
    // if(password.includes(element)){
    //     isUpperCaseCharContains = true;
    //     return;
    //  }
    // });

    // special_characters.forEach(element =>{
    // if(password.includes(element)){
    //     isSpecialCaseCharContains = true;
    //     return;
    //  }
    // });

    if(isNumberContains){
        minimumNumberCount +=1;
    }
    
    if(isLowerCaseCharContains){
        minimumNumberCount +=1;
    }
    
    if(isUpperCaseCharContains){
        minimumNumberCount +=1;
    }

    if(isSpecialCaseCharContains){
        minimumNumberCount +=1;
    }

    return minimumNumberCount;
}

console.log(minimumNumber(4,'2bbb'));