

const getSum = (subArray) => {
    const sum = subArray.reduce((acc, item)=> acc += item, 0);
    return sum;
}


const maxSumArr = (arr, num) => {

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i <= (arr.length - num); i++) {
        let subArray = arr.slice(i, (i + num));
        tempSum = getSum(subArray);
        if(maxSum < tempSum) maxSum = tempSum;
    }

    return maxSum;
}




const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;
console.log(maxSumArr(arr, num))