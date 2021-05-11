

module.exports = function regCheck(plateLoc, plateNo) {
    return (plateLoc.endsWith(plateNo));
}

// var isGP = regCheck('DV 23 NB GP', 'GP');

// //should print true
// console.log(isGP);

// var isMP = regCheck('DV 23 LP GP', 'MP');

// //should print false
// console.log(isMP);

// // should return false
// var isBellville = regCheck('CY 189-012', 'CY');

// //should return false
// var isDurban = regCheck('CY 189-012', 'ND');