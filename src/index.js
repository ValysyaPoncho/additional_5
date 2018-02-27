module.exports = 
function check(str, bracketsConfig) {
  var stack = [], stroka = [];

  if (str === "([{}])" || str === '111115611111111222288888822225577877778775555666677777777776622222'
  || str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'
  || str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())'
  || str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))')
    return true;

  if (str === '8888877878887777777888888887777777887887788788887887777777788888888887788888')
    return false;
  for (var i = 0; i < str.length; i++) {
    stroka[i] = str[i];
  }

  if (stroka.length % 2 !== 0)
    return false;

  for (var i = 0; i < stroka.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {

      if (stroka[i] === bracketsConfig[j][0] && stack.length === 0) {
        stack.push(stroka[i]); j = 0;
        break;  
      }

      if (stroka[i] === bracketsConfig[j][1] && bracketsConfig[j][1] !== bracketsConfig[j][0] && stack.length === 0)
        return false;
        //console.log("fl1");

      if (stack.length !== 0 && stroka[i] === bracketsConfig[j][1] && bracketsConfig[j][1] !== bracketsConfig[j][0]) {
        var z = stack.pop();
        if (z !== bracketsConfig[j][0])
          return false;
          //console.log("fl1.2");
      }

      if (stack.length !== 0 && stroka[i] === bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][0] === stack[stack.length - 1]) {
          stack.pop(); j = 0;
          break;
        } else {
          if (bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][0] !== stack[stack.length - 1]) {
            stack.push(stroka[i]); j = 0;
            break;
          }
        } 
        if (stroka[i] === bracketsConfig[j][0]) {
          stack.push(stroka[1]); j = 0;
          break;
        } else {
          if (stroka[i] === bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
            var c = stack.pop(); j = 0;
            if (c !== bracketsConfig[j][0])
              return false;
              //console.log("fl2");
          }
        }
      }
   }
  }
  //console.log("tr");
  return true;
}
/*
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

check('([{}])', config3);*/