function divisionBy3(number) {
    var sumDigits = 0;
    var numberN = number;
    if (numberN <= 9) {
        console.log("Input number shoud be > 9.");
    }
    else {
        while (numberN > 0) {
            sumDigits = sumDigits + (numberN % 10);
            numberN = parseInt(numberN / 10);
        }
    }
    if ((sumDigits % 3) == 0) {
        console.log("the number is divided by 3 without remainder");
    }
    else {
        console.log("the number is not divided by 3 without remainder");
    }
}
divisionBy3(12);
divisionBy3(188);
divisionBy3(591);
