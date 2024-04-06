function binarySearch(list, number) {
    let minPointer = 0
    let maxPointer = list.length

    while (minPointer < maxPointer) {
        let midIndex = Math.floor(minPointer + (maxPointer - minPointer) / 2) 
        if (list[midIndex] === number) return midIndex;

        if (list[midIndex] < number) minPointer = midIndex + 1;
        else maxPointer = midIndex;
    }

    return -1
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)
console.log("Result_index", result)
