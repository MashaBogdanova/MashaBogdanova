function deepCount(arr) {
    let counter = 0;

    function myFunc(arr) {
        if (arr.length === 0) {
            return 0;
        } else {
            for (let i = 0; i < arr.length; i++) {
                counter++;
                if (Array.isArray(arr[i])) {
                    myFunc(arr[i])
                }
            }
        }
    }

    myFunc(arr);
    return counter;
}
