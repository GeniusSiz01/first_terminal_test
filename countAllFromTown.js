module.exports = function countAllPaarl(str) {

    var paarlCounter = 0;
    var str1 = str.split(",");
    for (var i = 0; i < str1.length; i++) {
        var str2 = str1[i];

        if (str2.includes("CJ")) {
            paarlCounter++;
        }

    }
    return paarlCounter;
}