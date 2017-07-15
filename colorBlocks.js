function randomHex() {
    var max = 15;
    var min = 0;
    var randnum = Math.floor(Math.random() * (max - min + 1)) + min;
    var char = "";
    if (randnum == 0) {
        char = "0";
    }
    if (randnum == 1) {
        char = "1";
    }
    else if (randnum == 2) {
        char = "2";
    }
    else if (randnum == 3) {
        char = "3";
    }
    else if (randnum == 4) {
        char = "4";
    }
    else if (randnum == 5) {
        char = "5";
    }
    else if (randnum == 6) {
        char = "6";
    }
    else if (randnum == 7) {
        char = "7";
    }
    else if (randnum == 8) {
        char = "8";
    }
    else if (randnum == 9) {
        char = "9";
    }
    else if (randnum == 10) {
        char = "a";
    }
    else if (randnum == 11) {
        char = "b";
    }
    else if (randnum == 12) {
        char = "c";
    }
    else if (randnum == 13) {
        char = "d";
    }
    else if (randnum == 14) {
        char = "e";
    }
    else if (randnum == 15) {
        char = "f";
    }
    return char;
}
function colorGen(block) {
    var hexColor = "#";
    for (i = 0; i < 6; i++) {
        var str1 = randomHex();
        hexColor = hexColor.concat(str1);
    }
    document.getElementById(block).value = hexColor;
    document.getElementById(block).style.backgroundColor = hexColor;
}
