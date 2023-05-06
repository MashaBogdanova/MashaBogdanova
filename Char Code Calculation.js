function calc(str){
  return str
          .split('')
          .map(symbol => symbol.charCodeAt(0))
          .join('')
          .split('')
          .filter(symbol => +symbol === 7)
          .join('')
          .replaceAll('7', '6')
          .split('')
          .reduce((acc, curr) => acc + +curr, 0)
}
