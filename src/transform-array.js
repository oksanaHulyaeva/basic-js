const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) throw new Error;

  const transformed = [],
      addNext = '--double-next',
      addPrev = '--double-prev',
      delNext = '--discard-next',
      delPrev = '--discard-prev';

  if (!arr.includes(addNext) && !arr.includes(addPrev) && !arr.includes(delNext) && !arr.includes(delPrev)) return arr;

  arr.forEach((item, i, arr) => {
    switch (item) {
      case delNext:
        break;
      case delPrev:
        if (transformed.length && arr[i - 2] !== delNext) {
          transformed.pop();
        }
        break;
      case addNext:
        if (i !== arr.length - 1) {
          transformed.push(arr[i + 1]);
        }
        break;
      case addPrev:
        if (i !== 0 && arr[i - 2] !== delNext) {
          transformed.push(arr[i - 1]);
        }
        break;
      default:
        if (arr[i - 1] !== delNext) {
          transformed.push(item);
        }
        break;
    }
  });
return transformed;
};