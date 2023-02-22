//Функция для проверки длины строки

function checkStringLenght (stringToCheck, maxAmountSimbols){

  if(stringToCheck.length <= maxAmountSimbols){
    //console.log(stringToCheck.length);
    console.log('Строка проходит по длине');
    return true;
  }
  //console.log(stringToCheck.length);
  console.log('Строка не проходит по длине');
  return false;

}
checkStringLenght('yjvth ntktajyf', 20);


//Функция для проверки является ли строка палиндромом

function palindromCheck(str){
  let reverseString = '';
  for(let i = str.length - 1; i >= 0; i--){ //получаю перевёрнутую строку и сразу извлекаю из нее пробелы, если они есть
    reverseString += str[i].replaceAll(' ', '');
  }
  let strNoTabs = str.replaceAll(' ', ''); //извлекаю пробелы из начальной строки

  let result = (reverseString.toLowerCase() === strNoTabs.toLowerCase()) ? console.log('true Строка является палиндромом') : console.log('false Строка не является палиндромом'); //сравниваю 2 полученных строки предварительно привожу все символы к нижнему регистру

  return result; //
}
palindromCheck('Довод');

//Функция, извлекающая цифры из строки и возвращающая их в виде целого положительного числа

function getPositiveNumber(str){

  for(let i = 0; i <= str.length; i++){
    let result = '';
    //console.log(str[i]);
    if(str[i] >= '0' && str[i] <= '9'){
      result += str[i];
      console.log(result);
      //Не понимаю как вывести числа в строку в строку(( Как это можно сделать?
    }
  }
}

//Нашла решение при помощи регулярных выражений..
function getPositiveNumber2(str){
  let newString = str.replace(/\D/g, '');
  console.log(newString);
}
getPositiveNumber2('498 57sg3');


//4 задача
function createString(str, lengthNewStr, symb){
  let addSymb = '';
  let firstResult = '';
  let secondResult = '';
  let thirdResult = '';
  //console.log(str.length);

  if(str.length < lengthNewStr && symb.length == 1){

    for(let i = 0; i < lengthNewStr - str.length; i++){
      addSymb += String(symb);//получаю необходимое количество добавочных символов
      firstResult = addSymb + str;//добавляю их в переднюю часть исходной строки
      console.log(firstResult);

    }

  } else {
    secondResult = str; //Если исходная строка превышает заданную длину, она не должна обрезаться
    console.log(secondResult);


  }

  if (symb.length > (lengthNewStr - str.length)){
    //console.log('ok');
    let add = '';
    for(let i = 0; i < (lengthNewStr - str.length); i++){
      add += symb[i]; //получаю необходимое количество добавочных символов
      // console.log(add);
      thirdResult = add + str; //добавляю их в переднюю часть исходной строки
      console.log(thirdResult);

    }
  }
}
createString('qwerty', 4, '0');
