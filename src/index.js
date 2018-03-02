module.exports = function check(str, bracketsConfig) {
  let stackOfBrackets = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1] && stackOfBrackets[stackOfBrackets.length - 1] == bracketsConfig[j][0]) {
        stackOfBrackets.pop();
      } else if ((str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1])
        || (str[i] == bracketsConfig[j][0] && str[i] != bracketsConfig[j][1])) {
        stackOfBrackets.push(str[i]);
      } else if (str[i] == bracketsConfig[j][1] && stackOfBrackets.length == 0) {
        return false;
      } else if (str[i] == bracketsConfig[j][1] && stackOfBrackets[stackOfBrackets.length - 1] != bracketsConfig[j][0]) {
        return false;
      } else if (str[i] == bracketsConfig[j][1] && stackOfBrackets[stackOfBrackets.length - 1] == bracketsConfig[j][0]) {
        stackOfBrackets.pop();
      }
    }
  }

  if (stackOfBrackets.length != 0){
    return false;
  }
 
  return true;
}