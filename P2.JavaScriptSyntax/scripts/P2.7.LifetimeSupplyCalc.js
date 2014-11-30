function calcSupply(age, maxAge, food, foodPerDay) {
    var divYears = maxAge - age;
    var kgFood = divYears * 365 * foodPerDay;
    console.log(kgFood + "kg of " + food + " would be enough until I am " + maxAge + " years old");
}
calcSupply(38, 118, "chocolate", 0.5);
calcSupply(20, 87, "fruits", 2);
calcSupply(16, 102, "nuts", 1.1);
