function calcCircleArea(rad) {
    var area = Math.PI * Math.pow(rad, 2);
    return area;
};
function printRadius(radius) {
    var firstP = document.createElement('p');
    firstP.textContent = "r = " + radius + "; area = " + calcCircleArea(radius);
    document.getElementById("firstDiv").appendChild(firstP);
};
