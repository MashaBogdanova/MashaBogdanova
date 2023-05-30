var number=function(array){
let newArr = [];
  let i = 1;
  for (let str of array){
    newArr.push((i++) + ": " + str);    
}
  return newArr;
}
