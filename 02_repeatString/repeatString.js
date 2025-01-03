const repeatString = function (sentence, x) {
    if (x < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < x; i++) {
      string += sentence;
    }
    return string;
  };
// Do not edit below this line
module.exports = repeatString;
