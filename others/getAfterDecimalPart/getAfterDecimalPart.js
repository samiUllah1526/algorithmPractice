/*
Notice that numbers like 5.00 are considered integers because 5.00 
is the same as 5 and JavaScript automatically drops any insignificant 
trailing zeros from numbers.
*/
console.log(5.00 === 5); // 👉️ true


// ##################################################################################
// ##################################################################################
function getDecimalPart(num) {
    return num % 1;
}

console.log(getDecimalPart(3.137)); // 👉️ 0.137
console.log(getDecimalPart(1.37)); // 👉️ 0.37000000000001
console.log(getDecimalPart(5)); // 👉️ 0
// ##################################################################################
// ##################################################################################
function getDecimalPart(num) {
    if (Number.isInteger(num)) {
        return 0;
    }

    const decimalStr = num.toString().split('.')[1];
    return Number(decimalStr);
}

console.log(getDecimalPart(12.345)); // 👉️ 345
console.log(getDecimalPart(-1.23)); // 👉️ 23
console.log(getDecimalPart(1)); // 👉️ 0
// ##################################################################################
// ##################################################################################
