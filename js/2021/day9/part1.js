"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf-8');
input = input.replace(/\r/g, "");
var heightmap = input.split(/\n/);
heightmap = heightmap.map(function (line) { return line.split(""); });
function getRelativeCell(x, y, xmod, ymod, array) {
    if (!array[y + ymod] || !array[y + ymod][x + xmod]) {
        console.log('Returning Infinity');
        return Infinity;
    }
    else {
        return array[y + ymod][x + xmod];
    }
}
// compare surrounding cells, and check if it is lower than all
var riskLevelSum = 0;
for (var i = 0; i < heightmap.length; i++) {
    var row = heightmap[i];
    for (var j = 0; j < row.length; j++) {
        var num = row[j];
        var numUp = getRelativeCell(j, i, 0, -1, heightmap);
        var numDown = getRelativeCell(j, i, 0, 1, heightmap);
        var numLeft = getRelativeCell(j, i, -1, 0, heightmap);
        var numRight = getRelativeCell(j, i, 1, 0, heightmap);
        _a = [num, numUp, numDown, numLeft, numRight].map(function (v) { return Number(v); }), num = _a[0], numUp = _a[1], numDown = _a[2], numLeft = _a[3], numRight = _a[4];
        if (num < numUp && num < numDown && num < numLeft && num < numRight) {
            riskLevelSum += ++num;
        }
    }
}
console.log(riskLevelSum);
debugger;
//# sourceMappingURL=part1.js.map