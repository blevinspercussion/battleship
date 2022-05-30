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

const gameBoard = (shipList) => {
  const placeShip = (x, y, shipLength) => {
    let newShip = ship(shipLength, [], false);
  };

  // takes coordinates, determines whether attack hit a ship,
  // sends 'hit' function to correct ship or records coords of missed shot
  const receiveAttack = (x, y) => {};

  return { shipList, placeShip, receiveAttack };
};

//////////////////////////////////////
// Mock functions for testing
//////////////////////////////////////
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
