const ship = (length, hitLocations, sunk) => {
  const hit = (num) => {
    if (num < 1 || num >= this.length) {
      return "Error. Location outside of ship length";
    } else {
      this.hitLocations.push(num);
      return hitLocations;
    }
  };

  const isSunk = (length, hitLocations) => {
    if (length === hitLocations.length) {
      return true;
    } else {
      return false;
    }
  };

  return { length, hitLocations, sunk, hit, isSunk };
};

const gameBoard = () => {};

// Mock functions for testing
const hit = (num, length) => {
  let hitLocations = [];
  this.length = length;
  if (num < 1 || num >= this.length) {
    return "Error. Location outside of ship length";
  } else {
    hitLocations.push(num);
    return hitLocations;
  }
};

const isSunk = (length, hitLocations) => {
  if (length === hitLocations.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = isSunk;
