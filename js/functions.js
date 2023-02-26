//1)Функция для проверки длины строки

function isValidStringLenght (stringToCheck, maxAmountSimbols){

  if(stringToCheck.length <= maxAmountSimbols){
    return true;
  }
  return false;

}
isValidStringLenght('kmhjguyyuj', 10);


//2)Функция для проверки является ли строка палиндромом

function palindromCheck(str){
  let reverseString = '';
  for(let i = str.length - 1; i >= 0; i--){ //получаю перевёрнутую строку и сразу извлекаю из нее пробелы, если они есть
    reverseString += str[i].replaceAll(' ', '');
  }
  const strNoTabs = str.replaceAll(' ', ''); //извлекаю пробелы из начальной строки

  const result = (reverseString.toLowerCase() === strNoTabs.toLowerCase()) ? true : false; //сравниваю 2 полученных строки предварительно привожу все символы к нижнему регистру

  return result; //
}
palindromCheck('Довод');


//3)Функция, извлекающая цифры из строки и возвращающая их в виде целого положительного числа

//решение при помощи регулярных выражений..
function getPositiveNumber2(str){
  const newString = str.replace(/\D/g, '');
  return newString;
}
getPositiveNumber2('498 57sg3');


//4)
function createString(string, minLength, pad){

  let result = string;
  while (result.length < minLength){
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0,minLength - newResultLength);
    result = actualPad + result;

  }
  return result;
}

createString('q',4, 'we');
