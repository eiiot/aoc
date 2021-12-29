"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf-8');
input = input.replace(/\r/g, "");
var notes = input.split(/\n/).map(function (n) { return n.split(' | ').map(function (n) { return n.split(' '); }); });
notes.forEach(function (note, index, array) {
    array[index].shift();
});
notes = notes.flat(Infinity);
console.log(notes);
var numOfOneFourSevenEight = 0;
notes.forEach(function (element) {
    if (element.length == 2 || element.length == 4 || element.length == 3 || element.length == 7) {
        numOfOneFourSevenEight++;
    }
});
console.log(numOfOneFourSevenEight);
debugger;
//# sourceMappingURL=part2.js.map