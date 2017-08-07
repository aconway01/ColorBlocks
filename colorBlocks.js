// return random hexadecimal value
function randomHex() {
    var max = 15;
    var min = 0;
    var randnum = Math.floor(Math.random() * (max - min + 1)) + min;
    var HexVal = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    return HexVal[randnum];
}

// generate hexademical color, update block
function colorGen(block) {
    var hexColor = "#";
    for (i = 0; i < 6; i++) {
        var str1 = randomHex();
        hexColor = hexColor.concat(str1);
    }
    document.getElementById(block).value = hexColor;
    document.getElementById(block).style.backgroundColor = hexColor;
}
