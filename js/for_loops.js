function showMultiplicationTable(num) {
    var userNum = num;
    var y = 1;
    var result = userNum * y;
    for (var i = 0; i < 10; i++) {
        console.log((userNum + " x " + y + " = " + result));
        y++;
    }
}

showMultiplicationTable(7);