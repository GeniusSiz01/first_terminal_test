module.exports = function totalPhoneBill(callsMade) {
    var total = 0;
    var phoneBill = callsMade.split(",");
    for (var i = 0; i < phoneBill.length; i++) {
        var lists = phoneBill[i];

        if (lists.includes("l")) {
            total += 2.75;
        }
        if (lists.includes("m")) {
            total += 0.65;
        }
    }

    return "R" + total.toFixed(2)
}


