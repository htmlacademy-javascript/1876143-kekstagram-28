const description = [
  'прекрасный пляж',
  'дорога на пляж',
  'бирюзовые воды',
  'умопомрачительная девушка',
  'рисовые человечки',
  'машина мечты',
  'клубнично лаконично',
  'бодрящий фреш',
  'самолёт',
  'обувь в надежном месте',
  'песчаная дорога к пляжу',
  'ауди тоже неплохо',
  'только овощи!!(',
  'котосуши?',
  'роботапки',
  'мы не одни в небе',
  'отличный был концерт',
  'прикупил ретро авто',
  'светло и руки свободны))',
  'пальмы',
  'не знаю что это, но очень вкусно) и лайм в кассу',
  'божественный закат',
  'здесь полно крабов',
  'шоу',
  'опасный переезд',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Авдотья',
  'Егор',
  'Сергей',
  'Даня',
  'Ольга',
  'Билл',
];

//функция создающая массивы чисел
function getNewArray(min,max) {
  const newArray = [];
  for(let i = min; i <= max; i++){
    newArray.push(i);
  }
  return newArray;
}

const photosId = getNewArray(1,25);

const numberOfPhoto = getNewArray(1,25);

const likes = getNewArray(15,200);

const commentsId = getNewArray(1,50000);

const avatarNumber = getNewArray(1,6);

//функция для генерации случайного числа из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


function createObject(){
  const newObject = {
    id: getRandomArrayElement(photosId),
    url: `photos/${getRandomArrayElement(numberOfPhoto)}.jpg`,
    description: getRandomArrayElement(description),
    likes: getRandomArrayElement(likes),
    comments: [{id: getRandomArrayElement(commentsId)},
      {avatar: `img/avatar-${getRandomArrayElement(avatarNumber)}.svg`},
      { message: getRandomArrayElement(message)},
      {name: getRandomArrayElement(names)},
    ]
  };

  return newObject;
}
// eslint-disable-next-line no-unused-vars
const allObjects = Array.from({length: 25}, createObject);
