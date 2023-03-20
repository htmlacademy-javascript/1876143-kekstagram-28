const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


function getNewNumberArray(min,max) {
  const newArray = [];
  for(let i = min; i <= max; i++){
    newArray.push(i);
  }
  return newArray;
}

function createIdGenerator (objectCount) {
  let lastGeneratedId = - objectCount;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}


function createRandomUnicPhotoNumber (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      //console.error('Перебраны все числа из диапазона от');
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}


export {getRandomArrayElement};
export {getNewNumberArray};
export {createIdGenerator};
export {createRandomUnicPhotoNumber};
