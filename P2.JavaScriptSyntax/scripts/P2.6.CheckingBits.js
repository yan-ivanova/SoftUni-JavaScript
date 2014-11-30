function bitChecker(number) {
    var pos = 3;
    var shiftNumber = number >> pos;
    var resultBit = shiftNumber & 1;
    if (resultBit ==1) {
        console.log("true - the bit is 1");
    }
    else {
        console.log("false - the bit is 0");
    }
}
bitChecker(333);
bitChecker(425);
bitChecker(2567564754);
