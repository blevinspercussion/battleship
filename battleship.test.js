const { setServers } = require("dns");
const { default: TestRunner } = require("jest-runner");
const hit = require("./script");
const isSunk = require("./script");

////////////////////////////
// Test ship.hit()
////////////////////////////

// test("tests whether ship has been hit", () => {
//   expect(hit(1, 5)).toStrictEqual([1]);
// });

// test("tests whether error in shop hit outside length", () => {
//   expect(hit(10, 5)).toBe("Error. Location outside of ship length");
// });

// test("tests less than zero value", () => {
//   expect(hit(-1, 5)).toBe("Error. Location outside of ship length");
// });

// test("tests zero value", () => {
//   expect(hit(0, 5)).toBe("Error. Location outside of ship length");
// });

////////////////////////////
// Test ship.isSunk
////////////////////////////

// test("tests that ship has been sunk", () => {
//   expect(isSunk(5, [1, 2, 3, 4, 5])).toBe(true);
// });

// test("tests that ship has NOT been sunk", () => {
//   expect(isSunk(4, [1, 2, 3])).toBe(false);
// });

// test("tests that ship has been sunk with numbers out of order", () => {
//   expect(isSunk(3, [2, 1, 3])).toBe(true);
// });
