const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Tests inspired by countmooshroom
var graph = [
    [[1, 11]],
    [[1, 5], [2, 2]],
    [[0, 9]],
];
var expected = [
    [0, 11, 13],
    [11, 5, 2],
    [9, 20, 0]
]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));

var graph = [
    [[1, 3], [2, 1], [3, 4]],
    [[2, 2], [1, 1]],
    [[0, 5], [2, 8]],
    [[2, 4], [0, 0]]
];
var expected = [
    [0, 3, 1, 4],
    [7, 1, 2, 11],
    [5, 8, 6, 9],
    [0, 3, 1, 0]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));

var graph = [
    [[1, 5], [2, 2]],
    [[3, 3], [4, 7]],
    [[0, 2], [1, 9]],
    [[2, 3]],
    [[0, 8], [3, 5]]
];
var expected = [
    [ 0, 5, 2, 8, 12 ],
    [ 8, 0, 6, 3, 7 ],
    [ 2, 7, 0, 10, 14 ],
    [ 5, 10, 3, 0, 17 ],
    [ 8, 13, 8, 5, 0 ]
]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));

var graph = [
    [[1, 4], [2, 7], [3, 7], [1, 1]],
    [[2, 2], [1, 2]],
    [[0, 6], [2, 4], [3, 4]]
];
var expected = [
    [0, 1, 3, 7],
    [8, 2, 2],
    [6, 7, 4, 4]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));


