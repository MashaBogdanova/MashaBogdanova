var humanYearsCatYearsDogYears = function(humanYears) {
let dogYears = 0;
let catYears = 0;
if ( humanYears === 1 ){
  dogYears = 15;
  catYears = 15;
} else if ( humanYears === 2 ){
  dogYears = 15 + 9;
  catYears = 15 + 9;
} else {
  catYears = 15 + 9 + ((humanYears - 2)*4)
  dogYears = 15 + 9 + ((humanYears - 2)*5)
}
  
return [humanYears, catYears, dogYears];
}
