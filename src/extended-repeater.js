const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addStr = options.addition !== undefined ? String(options.addition) : '';
  arr = [],
  arr2 = [];

if(options.additionRepeatTimes != 0 && options.additionRepeatTimes != undefined) {
  for(let i = 0; i < options.additionRepeatTimes; i++){
    arr.push(addStr);
  }
} else arr.push(addStr);

str = String(str) + arr.join(options.additionSeparator || '|');

if(options.repeatTimes != 0 && options.repeatTimes != undefined){
  for(let i = 0; i < options.repeatTimes; i++){
    arr2.push(str);
  }
} else arr2.push(str);

return arr2.join(options.separator || '+');
  // remove line with error and write your code here
};
  