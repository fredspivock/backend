var decodeMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    "j": "i",
    "k": "j",
    "m": "k",
    "n": "l",
    "p": "m",
    "q": "n",
    "r": "o",
    "s": "p",
    "t": "q",
    "v": "r",
    "w": "s",
    "x": "t",
    "y": "u",
    "z": "v"
};

var encodeMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    "i": "j",
    "j": "k",
    "k": "m",
    "l": "n",
    "m": "p",
    "n": "q",
    "o": "r",
    "p": "s",
    "q": "t",
    "r": "v",
    "s": "w",
    "t": "x",
    "u": "y",
    "v": "z"
};

function decode(code) {
    code = code.toLowerCase();
    var parseString = "";
    for (var i = 0; i <= code.length - 1; i++) {
        parseString += decodeMap[code[i]];
    }
    return  parseInt(String(parseString), 32);
}

function encode(num) {
    var encoded = num.toString(32);
    var parseString = "";
    for (var i = 0; i <= encoded.length - 1; i++) {
        parseString += encodeMap[encoded[i]];
    }
    return parseString;
}

function padWithZero(encodedString, length) {
    var encodedStringLength = encodedString.length;
    for(var i = encodedString; encodedStringLength < length; i++) {
        encodedString = "0" + encodedString;
    }
    return encodedString;
}

module.exports = {
    decode: decode,
    encode: encode,
    padWithZero: padWithZero
};