module.exports = function reverse (n) {

    if (n < 0) n *= -1;

    let arrayOfSingleDigits = n.toString(10).split("").map(function(element) {
        return parseInt(element, 10);
    });
    let stringNumber = [];

    for (let i = arrayOfSingleDigits.length - 1; i >= 0; i--) {
        stringNumber += arrayOfSingleDigits[i];
    }
  
    let result = Number(stringNumber);
    return result;
}

