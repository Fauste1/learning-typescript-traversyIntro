"use strict";
// Types
let id = 0;
let x = [1, 2, 3, 4, 5];
let y = [1, "1", true];
// Tuple - exactly defined array; must match the order
let person = [3, '3', false];
// Array of Tuples
let employees;
employees = [
    [1, 'Pete'],
    [2, 'Jill'],
    [3, 'John']
];
// Union
let pid;
pid = 1;
pid = '1';
// Enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
console.log(direction2.up);
let user = {
    id: 1,
    name: 'john'
};
