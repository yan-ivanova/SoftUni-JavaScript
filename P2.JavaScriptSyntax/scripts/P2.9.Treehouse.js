function treeHouseCompare(arr) {
    var a = arr[0];
    var b = arr[1];
    var aresHouse = (a * a) + ((a * (2 / 3 * a)) / 2);
    var areaTree = (b * 1 / 3 * b) + (Math.PI * Math.pow((2 / 3 * b), 2));
    if (aresHouse >= areaTree) {
        console.log("house/" + aresHouse.toFixed(2));
    }
    else {
        console.log("tree/" + areaTree.toFixed(2));
    }
}
treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);
