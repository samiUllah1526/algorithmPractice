function maxSumArr(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
       tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i < arr.length; i++) {

       tempSum = tempSum - arr[i - num] + arr[i];
       console.log({
        tempSum,
        [`arr[${i} - ${num}]`]:arr[i - num],
        [`arr[${i}]`]: arr[i]

    })
       maxSum = Math.max(tempSum, maxSum);
       }      
       return maxSum;
}


const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;
console.log(maxSumArr(arr, num))