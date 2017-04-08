var base32 = require('./base32');

function encodedDate(dateMillis) {
    var date = new Date(dateMillis);

    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    var year = date.getUTCFullYear() - 2000;

    return base32.encode(day) + base32.encode(month) + base32.encode(year);
}

function decodedDate(dateCoded) {
    var date = new Date(base32.decode(dateCoded[2]) + 2000, base32.decode(dateCoded[1]), base32.decode(dateCoded[0])).getTime();
    return  date;
}

module.exports = {
    encodedDate: encodedDate,
    decodedDate: decodedDate

};