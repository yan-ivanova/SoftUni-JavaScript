function convertKWtoHP(number) {
    var hp = number / 0.745699872;
    return hp.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));
