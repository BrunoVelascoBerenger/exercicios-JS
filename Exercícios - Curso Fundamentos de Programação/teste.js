function maiorDivisorComum(num1, num2) {
    let mdc = 0;

    if(num1 < num2) {
        for(let i = 0; i <= num1; i++) {
            if(num1 % i === 0 && num2 % i === 0) {
                mdc = i;
            }
        }
    } else if(num2 < num1) {
        for(let i = 0; i <= num2; i++) {
            if(num1 % i === 0 && num2 % i === 0) {
                mdc = i;
            }
        }
    } else {
        for(let i = 0; i <= num2; i++) {
            if(num1 % i === 0 && num2 % i === 0) {
                mdc = i;
            }
        }
    }
    return mdc
}

console.log(maiorDivisorComum(2,0));
