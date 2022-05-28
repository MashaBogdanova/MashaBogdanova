function points(games) {
let totalPoints = 0;
  for (let matchScore of games) {
    if (matchScore[0] > matchScore[2]){
      totalPoints += 3;
    } else if (matchScore[0] == matchScore[2]){
      totalPoints += 1;
    } 
}
  return totalPoints;
}
