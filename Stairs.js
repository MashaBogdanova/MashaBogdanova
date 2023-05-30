let n = prompt("Введи число ступеней")
function drawStairs(n) {
    let stairs = "I";
    for (let i = 2; i <= n; i++) {
        let spaces = "\n" + (" ".repeat(i-1));
        stairs = stairs + spaces + "I"
    }
    return stairs;
}
alert (drawStairs(n));
