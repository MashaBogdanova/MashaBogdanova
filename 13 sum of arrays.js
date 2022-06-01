function arrayPlusArray(arr1, arr2) {
 let newArr = arr1.concat(arr2);
     let sum = 0;
  for (a of newArr){
 sum += a;
  }
  
  return sum;
}
