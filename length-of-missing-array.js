function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
        return 0;
    } else {
        let arr = [];
        for (let i = 0; i < arrayOfArrays.length; i++) {
            if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
                return 0;
            } else {
                arr.push(arrayOfArrays[i].length)
            }
        }
        arr.sort((a, b) => a-b)
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] + 1 !== arr[j + 1]) {
                return arr[j] + 1
            }
        }
    }
}
