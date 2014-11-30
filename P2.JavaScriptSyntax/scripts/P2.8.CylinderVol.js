function calcCylinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    var volumeCylinder = Math.PI * Math.pow(radius, 2) * height;
    console.log(volumeCylinder.toFixed(3));
}
calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);
