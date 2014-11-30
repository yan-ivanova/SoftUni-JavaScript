function isPrime(number) {
    var prime = true;
    if (number <= 1) {
        console.log("Input number is not prime.");
    }
    else {
        if ((number == 2) || (number == 3)) {
            console.log("true - Input number is prime.");
        }
        else {
            for (var count = 2; count <= Math.sqrt(number) ; count++) {
                if ((number % count) == 0) {
                    prime = prime && false;
                }
                else {
                    prime = prime && true;
                }
            }
            if (prime) {
                console.log("true - Input number is prime.");
            }
            else {
                console.log("false - Input number is not prime.");
            }
        }
    }
}
isPrime(7);
isPrime(254);
isPrime(587);
