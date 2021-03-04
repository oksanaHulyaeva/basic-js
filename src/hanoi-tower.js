const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let speed = turnsSpeed / 3600;
  let sec = Math.floor(turns / speed);

  return {
    turns: turns,
    seconds: sec,
  };
  // remove line with error and write your code here
};
